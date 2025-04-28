/**
 * Создает HTML-код для карточки с информацией о товаре.
 *
 * @author AKizimenko
 * @param {Object} params - Параметры карточки.
 * @param {string} params.image - URL изображения товара.
 * @param {string} params.title - Название товара.
 * @param {string} params.place - Место, где можно купить товар.
 * @param {string} params.cost - Стоимость товара.
 * @returns {string} HTML-код карточки с информацией о товаре.
 */
export const CardView = ({ image, title, place, cost }) => `
    <div class="card">
        <div class="card-header">
            <img src="${image}" />
        </div>
        <div class="card-title">${title}</div>
        <div class="card-place"><div class="circle"></div>${place}</div>
        <div class="card-cost">$${cost}</div>
    </div>
`;
