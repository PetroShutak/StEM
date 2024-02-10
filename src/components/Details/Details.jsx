import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  DetailsFavoriteBtnWrapper,
  DetailsContainer,
  DetailsImageWrapper,
  DetailsImage,
  DescriptionWrapper,
  BuyButton,
  UpdateWrapper,
  UpdateButtonContainer,
  PseudoAdminButton,
} from './Details.styled';
import {
  notifyAddShopingList,
  notifyAddToFavorite,
  notifyDeleteProduct,
  notifyRemove,
  notifyRemoveFromFavorite,
} from 'utils/toasts';
import {
  getProductById,
  deleteProductById,
  updateProductById,
} from 'redux/products/operations';
import {
  selectAllProducts,
  selectFavorites,
  selectLoading,
  selectProductById,
  selectShoppingList,
} from 'redux/products/selectors';
import { addFavorite, deleteFavorite } from 'redux/products/favoriteSlice';
import Rating from 'utils/rating';
import QuantityModal from 'components/QuantityModal/QuantityModal';
import {
  addToList,
  deleteFromList,
  resetTotalPrice,
} from 'redux/products/shoppingListSlice';
import { setTotalPrice } from 'redux/products/shoppingListSlice';
import {
  FavoriteButton,
  FavoriteButtonActive,
} from 'components/ProductList/ProductItem/ProductItem.styled';
import DEFAULT_URL from 'images/no-image.jpg';
import Loader from 'components/Loader/Loader';
import {
  selectUser,
  selectIsLoggedIn,
  selectVerification,
} from 'redux/auth/selectors';

const Details = () => {
  const navigate = useNavigate();
  const products = useSelector(selectAllProducts);
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const shoppingList = useSelector(selectShoppingList);
  const isLoading = useSelector(selectLoading);
  const [editedFields, setEditedFields] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  // // pseudo admin
  // const [isAdmin, setIsAdmin] = useState(false);

  // const toglerAdmin = () => {
  //   if (isAdmin) {
  //     setIsAdmin(false);
  //   } else {
  //     alert('Введіть пароль');
  //     if (prompt('Введіть пароль') === 'admiN') {
  //       setIsAdmin(true);
  //     } else {
  //       alert('Невірний пароль');
  //       setIsAdmin(false);
  //     }
  //   }
  // };
  // // pseudo admin

  // admin check
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isVerified = useSelector(selectVerification);

  const toglerAdmin = () => {
    // console.log('user', user);
    // console.log('isLoggedIn', isLoggedIn);
    // console.log('isVerified', isVerified);
    if (
      isLoggedIn &&
      user.email === 'petro.shutak.ua@gmail.com' &&
      isVerified === null
    ) {
      setIsAdmin(true);
    } else {
      alert('Недостатні права або невірний статус верифікації.');
      setIsAdmin(false);
    }
  };

  const handleEditProduct = () => {
    if (isAdmin) {
      setIsEditing(true);
      const currentProduct = products.find(product => product._id === id);
      setEditedFields({
        name: currentProduct?.name || '',
        brand: currentProduct?.brand || '',
        model: currentProduct?.model || '',
        description: currentProduct?.description || '',
        price: currentProduct?.price || '',
        category: currentProduct?.category || '',
        subcategory: currentProduct?.subcategory || '',
        image: currentProduct?.image || '',
        raiting: currentProduct?.raiting || '',
        country: currentProduct?.country || '',
      });
    } else {
      alert('Недостатні права або невірний статус верифікації.');
    }
  };

  const handleSaveChanges = () => {
    if (isAdmin) {
      dispatch(
        updateProductById({
          _id: id,
          ...editedFields,
        })
      );
      setIsEditing(false);
    } else {
      alert('Недостатні права або невірний статус верифікації.');
    }
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setEditedFields(prevFields => ({ ...prevFields, [name]: value }));
  };

  const handleDeleteProduct = () => {
    const currentProductId = id;

    const currentIndex = products.findIndex(
      product => product._id === currentProductId
    );

    dispatch(deleteProductById(currentProductId))
      .then(() => {
        console.log('Product deleted successfully');

        const nextIndex = (currentIndex + 1) % products.length;
        const nextProduct = products[nextIndex];

        if (nextProduct) {
          notifyDeleteProduct();
          navigate(`/catalog/${nextProduct._id}`);
        } else {
          notifyDeleteProduct();
          navigate('/catalog');
        }
      })
      .catch(err => {
        console.error('Error deleting product:', err);
      });
  };

  const handleNavigate = direction => {
    const currentIndex = products.findIndex(product => product._id === id);
    const newIndex =
      direction === 'next'
        ? (currentIndex + 1) % products.length
        : (currentIndex - 1 + products.length) % products.length;
    const newProduct = products[newIndex];
    if (newProduct) {
      navigate(`/catalog/${newProduct._id}`);
    } else {
      navigate('/catalog');
    }
  };

  useEffect(() => {
    dispatch(getProductById(id));
  }, [dispatch, id]);

  const product = useSelector(state => selectProductById(state.products, id));

  const handleAddFavorites = favId => {
    dispatch(addFavorite(favId));
    notifyAddToFavorite();
  };

  const handleRemoveFavorites = favId => {
    dispatch(deleteFavorite(favId));
    notifyRemoveFromFavorite();
  };

  const handleAddToShoppingList = listId => {
    const payload = { id: listId };

    if (shoppingList.some(item => item.id === listId)) {
      dispatch(deleteFromList(payload));
      notifyRemove();
      if (shoppingList.length === 1) {
        dispatch(resetTotalPrice());
      }
    } else {
      setShowModal(true);
    }
  };

  const handleConfirmAddToShoppingList = (id, quantity, totalPrice) => {
    dispatch(addToList({ id, price: product.price, quantity }));
    dispatch(setTotalPrice(totalPrice));
    setShowModal(false);
    notifyAddShopingList();
  };

  const isImageLink = str => {
    return /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g.test(str);
  };

  return (
    <div className="container">
      {isLoading && <Loader />}
      <DetailsContainer>
        <DetailsImageWrapper>
          {isImageLink(product?.image) ? (
            <DetailsImage src={product?.image} alt={product?.name} />
          ) : (
            <DetailsImage src={DEFAULT_URL} alt={product?.name} />
          )}
        </DetailsImageWrapper>
        <DescriptionWrapper>
          <DetailsFavoriteBtnWrapper>
            {favorites.includes(id) ? (
              <FavoriteButtonActive onClick={() => handleRemoveFavorites(id)} />
            ) : (
              <FavoriteButton onClick={() => handleAddFavorites(id)} />
            )}
          </DetailsFavoriteBtnWrapper>
          <h2>
            {product?.name} - {product?.brand}
          </h2>
          <p>Виробник: {product?.brand}</p>
          <p>Модель: {product?.model}</p>
          <p>Опис: {product?.description}</p>
          <p>Ціна: {product ? product.price : 'Loading...'}</p>
          <p>Категорія: {product?.category}</p>
          <p>Підкатегорія: {product?.subcategory}</p>
          <Rating rating={product?.raiting} />
          <p>Країна-виробник: {product?.country}</p>
          <BuyButton onClick={() => handleAddToShoppingList(id)}>
            {shoppingList.some(item => item.id === id)
              ? 'Забрати з кошика'
              : 'Додати в кошик'}
          </BuyButton>
        </DescriptionWrapper>
      </DetailsContainer>
      {isEditing ? (
        <UpdateWrapper>
          <label>
            Назва:
            <input
              type="text"
              name="name"
              value={editedFields.name}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Бренд:
            <input
              type="text"
              name="brand"
              value={editedFields.brand}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Модель:
            <input
              type="text"
              name="model"
              value={editedFields.model}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Опис:
            <textarea
              type="text"
              name="description"
              value={editedFields.description}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Ціна:
            <input
              type="text"
              name="price"
              value={editedFields.price}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Категорія:
            <input
              type="text"
              name="category"
              value={editedFields.category}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Підкатегорія:
            <input
              type="text"
              name="subcategory"
              value={editedFields.subcategory}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Зображення:
            <input
              type="text"
              name="image"
              value={editedFields.image}
              onChange={handleInputChange}
              placeholder="http://example.com/image.jpg"
            />
          </label>
          <label>
            Рейтинг:
            <input
              type="text"
              name="raiting"
              value={editedFields.raiting}
              onChange={handleInputChange}
              placeholder="1-5"
            />
          </label>
          <label>
            Країна-виробник:
            <input
              type="text"
              name="country"
              value={editedFields.country}
              onChange={handleInputChange}
            />
          </label>
          <button type="button" onClick={handleSaveChanges}>
            Зберегти зміни
          </button>
        </UpdateWrapper>
      ) : (
        isAdmin && (
          <UpdateButtonContainer>
            <button onClick={() => handleNavigate('prev')}>Попередній</button>
            <button onClick={handleEditProduct}>Редагувати</button>
            <button onClick={handleDeleteProduct}>Видалити</button>
            <button onClick={() => handleNavigate('next')}>Наступний</button>
          </UpdateButtonContainer>
        )
      )}
      <PseudoAdminButton onClick={toglerAdmin} />
      {showModal && (
        <QuantityModal
          showModal={showModal}
          setShowModal={setShowModal}
          handleConfirmAddToShoppingList={handleConfirmAddToShoppingList}
          id={id}
          price={product?.price}
        />
      )}
    </div>
  );
};

export default Details;

// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   DetailsFavoriteBtnWrapper,
//   DetailsContainer,
//   DetailsImageWrapper,
//   DetailsImage,
//   DescriptionWrapper,
//   BuyButton,
// } from './Details.styled';
// import {
//   notifyAddShopingList,
//   notifyAddToFavorite,
//   notifyDeleteProduct,
//   notifyRemove,
//   notifyRemoveFromFavorite,
// } from 'utils/toasts';
// import {
//   getProductById,
//   deleteProductById,
//   updateProductById,
// } from 'redux/products/operations';
// import {
//   selectAllProducts,
//   selectFavorites,
//   selectLoading,
//   selectProductById,
//   selectShoppingList,
// } from 'redux/products/selectors';
// import { addFavorite, deleteFavorite } from 'redux/products/favoriteSlice';
// import Rating from 'utils/rating';
// import QuantityModal from 'components/QuantityModal/QuantityModal';
// import {
//   addToList,
//   deleteFromList,
//   resetTotalPrice,
// } from 'redux/products/shoppingListSlice';
// import { setTotalPrice } from 'redux/products/shoppingListSlice';
// import {
//   FavoriteButton,
//   FavoriteButtonActive,
// } from 'components/ProductList/ProductItem/ProductItem.styled';
// import DEFAULT_URL from 'images/no-image.jpg';
// import Loader from 'components/Loader/Loader';
// import { useNavigate } from 'react-router-dom';

// const Details = () => {
//   const navigate = useNavigate();
//   const products = useSelector(selectAllProducts);
//   const [showModal, setShowModal] = useState(false);
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const favorites = useSelector(selectFavorites);
//   const shoppingList = useSelector(selectShoppingList);
//   const isLoading = useSelector(selectLoading);
//   const handleAddFavorites = favId => {
//     dispatch(addFavorite(favId));
//     notifyAddToFavorite();
//   };

//   useEffect(() => {
//     dispatch(getProductById(id));
//   }, [dispatch, id]);
//   const handleRemoveFavorites = favId => {
//     dispatch(deleteFavorite(favId));
//     notifyRemoveFromFavorite();
//   };

//   const product = useSelector(state => selectProductById(state.products, id));

//   const handleAddToShoppingList = listId => {
//     const payload = { id: listId };

//     if (shoppingList.some(item => item.id === listId)) {
//       dispatch(deleteFromList(payload));
//       notifyRemove();
//       if (shoppingList.length === 1) {
//         dispatch(resetTotalPrice());
//       }
//     } else {
//       setShowModal(true);
//     }
//   };

//   const handleConfirmAddToShoppingList = (id, quantity, totalPrice) => {
//     dispatch(addToList({ id, price: product.price, quantity }));
//     dispatch(setTotalPrice(totalPrice));
//     setShowModal(false);
//     notifyAddShopingList();
//   };

//   const isImageLink = str => {
//     return /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g.test(str);
//   };

//   const handleEditProduct = () => {
//     dispatch(updateProductById(id));
//   };

//   const handleDeleteProduct = () => {
//     const currentProductId = id;

//     const currentIndex = products.findIndex(
//       product => product._id === currentProductId
//     );

//     dispatch(deleteProductById(currentProductId))
//       .then(() => {
//         console.log('Product deleted successfully');

//         const nextIndex = (currentIndex + 1) % products.length;
//         const nextProduct = products[nextIndex];

//         if (nextProduct) {
//           notifyDeleteProduct();
//           navigate(`/catalog/${nextProduct._id}`);
//         } else {
//           notifyDeleteProduct();
//           navigate('/catalog');
//         }
//       })
//       .catch(err => {
//         console.error('Error deleting product:', err);
//       });
//   };

//   const handleNavigate = direction => {
//     const currentIndex = products.findIndex(product => product._id === id);
//     const newIndex =
//       direction === 'next'
//         ? (currentIndex + 1) % products.length
//         : (currentIndex - 1 + products.length) % products.length;
//     const newProduct = products[newIndex];
//     if (newProduct) {
//       navigate(`/catalog/${newProduct._id}`);
//     } else {
//       navigate('/catalog');
//     }
//   };

//   return (
//     <div className="container">
//       {isLoading && <Loader />}
//       <DetailsContainer>
//         <DetailsImageWrapper>
//           {isImageLink(product?.image) ? (
//             <DetailsImage src={product?.image} alt={product?.name} />
//           ) : (
//             <DetailsImage src={DEFAULT_URL} alt={product?.name} />
//           )}
//         </DetailsImageWrapper>
//         <DescriptionWrapper>
//           <DetailsFavoriteBtnWrapper>
//             {favorites.includes(id) ? (
//               <FavoriteButtonActive onClick={() => handleRemoveFavorites(id)} />
//             ) : (
//               <FavoriteButton onClick={() => handleAddFavorites(id)} />
//             )}
//           </DetailsFavoriteBtnWrapper>
//           <h2>
//             {product?.name} - {product?.brand}
//           </h2>
//           <p>Виробник: {product?.brand}</p>
//           <p>Модель: {product?.model}</p>
//           <p>Опис: {product?.description}</p>
//           <p>Ціна: {product ? product.price : 'Loading...'}</p>
//           <p>Категорія: {product?.category}</p>
//           <p>Підкатегорія: {product?.subcategory}</p>
//           <Rating rating={product?.raiting} />
//           <p>Країна-виробник: {product?.country}</p>
//           <BuyButton onClick={() => handleAddToShoppingList(id)}>
//             {shoppingList.some(item => item.id === id)
//               ? 'Забрати з кошика'
//               : 'Додати в кошик'}
//           </BuyButton>
//           <button onClick={handleEditProduct}>Редагувати</button>
//           <button onClick={handleDeleteProduct}>Видалити</button>
//           <button onClick={() => handleNavigate('prev')}>Попередній</button>
//           <button onClick={() => handleNavigate('next')}>Наступний</button>
//         </DescriptionWrapper>
//       </DetailsContainer>
//       {showModal && (
//         <QuantityModal
//           showModal={showModal}
//           setShowModal={setShowModal}
//           handleConfirmAddToShoppingList={handleConfirmAddToShoppingList}
//           id={id}
//           price={product?.price}
//         />
//       )}
//     </div>
//   );
// };

// export default Details;
