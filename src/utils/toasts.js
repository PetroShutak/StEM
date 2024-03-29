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

//
export const notifyDeleteProduct = () =>
  toast.success('Товар видалено з бази', toastSuccess);
//

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

// ordered sucsess
export const notifyOrdered = () =>
  toast.success('Замовлення успішно оформлено', toastSuccess);

// ordered error
export const notifyOrderedError = () =>
  toast.error('Помилка оформлення замовлення', toastError);
// login success
export const notifyLoginSuccess = () =>
  toast.success('Ви успішно увійшли', toastSuccess);
// logout success
export const notifyLogoutSuccess = () =>
  toast.success('Ви успішно вийшли', toastSuccess);
// register success
export const notifyRegistrationSuccess = () =>
  toast.success('Ви успішно зареєструвалися', toastSuccess);
// підтвердження реєстрації
export const notifyConfirmRegistration = () =>
  toast.success(
    'Перевірте вашу пошту для підтвердження реєстрації',
    toastSuccess
  );
  // get new password success
export const notifyGetNewPassword = () =>
  toast.success(
    'Новий пароль відправлено на вашу пошту',
    toastSuccess
  );
export const notifyGetNewPasswordError = () =>
  toast.error(
    'Користувача з таким email не знайдено',
    toastError
  );