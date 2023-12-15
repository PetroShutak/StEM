import toast from 'react-hot-toast';

export const toastError = message => {
  toast.error(message);
};

export const toastSuccess = message => {
  toast.success(message);
};

export const toastLoading = message => {
  toast.loading(message);
};

export const toastDismiss = () => {
  toast.dismiss();
};

export const notifyAddShopingList = () =>
  toast.success('Товар додано в кошик', toastSuccess);
export const notifyRemove = () =>
  toast.success('Товар видалено з кошика', toastSuccess);
export const notifyAddToFavorite = () =>
  toast.success('Товар додано в обране', toastSuccess);
export const notifyRemoveFromFavorite = () =>
  toast.success('Товар видалено з обраного', toastSuccess);

// quantity
export const notifyQuantityLessThanOne = () =>
  toast.error('Кількість товару не може бути менше 1', toastError);

// search
export const notifyNoSearchResults = () =>
  toast.error('Нічого не знайдено', toastError);

export const notifyLoadingDetails = () =>
  toast.promise(
    new Promise(resolve => setTimeout(resolve, 500)),
    {
      loading: 'Завантаження...',
      success: 'Завантажено',
      error: 'Помилка',
    },
    toastLoading
  );
