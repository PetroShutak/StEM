import BrandCarousel from 'components/BrandCarousel/BrandCarousel';
import React from 'react';

const MainPage = () => {
    const [viewedProducts, setViewedProducts] = useState([]);

  useEffect(() => {
    // Отримання переглянутих товарів з локального сховища
    const storedViewedProducts = JSON.parse(localStorage.getItem('viewedProducts')) || [];
    setViewedProducts(storedViewedProducts);
  }, []);
  return (
    <>
      <div
        style={{
          paddingTop: '40px',
          paddingBottom: '40px',
        }}
      >
        <BrandCarousel />
      </div>
      <div>
        <h2>Нещодавно переглянуті</h2>
        <ul>
          {viewedProducts.map((product) => (
            <li key={product._id}>
              <img src={product.image} alt={product.name} style={{ maxWidth: '100px' }} />
              <span>{product.name}</span>
              <span>Price: {product.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MainPage;
