import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
<h2 class="restaurant__name">${restaurant.name}</h2>
  <img loading="lazy" class="restaurant__poster" src="${CONFIG.API_BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="restaurant__info">
  <h3>Information</h3>
    <h4>Address</h4>
    <p>${restaurant.address} , Kota ${restaurant.city}</p>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
    <h4>Categories</h4>
    <p>${restaurant.categories.map((category) => category.name).join(' | ')}</p>
    <h4>Foods</h4>
    <p>${restaurant.menus.foods.map((food) => food.name).join(' | ')}</p>
    <h4>Drinks</h4>
    <p>${restaurant.menus.drinks.map((drink) => drink.name).join(' | ')}</p>
  </div>
  <div class="restaurant__description">
    <h3>Description</h3>
    <p>${restaurant.description}</p>
  </div>
  <div class="restaurant__description">
  <h3>Customer Reviews</h3>
  <p>${restaurant.customerReviews.map((customer) => customer.review).join(' | ')}</p>
</div>`;

const createRestaurantItemTemplate = (restaurant) => `
<aricle class="resto-item">
        <h2 tabindex="0" class="resto-city">${restaurant.city}</h2>
        <img tabindex="0" class="resto-img" src="${restaurant.pictureId}" alt="${restaurant.name}">
        <div class="resto-info">
            <p tabindex="0" class="resto-rate"> <span>$⭐️{restaurant.rating}</span></p>
            <h1 tabindex="0" class="resto-name">${restaurant.name}</h1>
            <p tabindex="0" class="resto-desc">${restaurant.description}</p>
        </div>
    </aricle>`;



export {createRestaurantDetailTemplate, createRestaurantItemTemplate};