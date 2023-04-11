const ALERT_SHOW_TIME = 5000;
const alertContainer = document.querySelector('.show_alert');

export const showAlert = (message) => {

  alertContainer.classList.remove('hidden');
  alertContainer.textContent = message;

  setTimeout(() => {
    alertContainer.classList.add('hidden');
  }, ALERT_SHOW_TIME);
};

export const isEscapeKey = (evt) => evt.key === 'Escape';

export const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};
