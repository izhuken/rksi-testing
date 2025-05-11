/**
 * Обработчик формы.
 *
 * @author AKizimenko
 * @param {Event} event - событие формы
 * @returns {string} ничего
 */
const onsubmit = (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);

  const payload = {};

  formData.forEach((value, key) => {
    payload[key] = value;
  });

  alert(`Спасибо, ${payload.fcs}! Скоро с вами свяжется менеджер`);
};

const form = document.querySelector("#form");
form.addEventListener("submit", onsubmit);
