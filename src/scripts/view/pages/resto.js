import RestaurantDBSource from '../../data/restodb-source';
import {createRestaurantItemTemplate} from '../templates/template-creator';

const Resto = {
    async render() {
      return `
      <div class="headline-content">
      <h1 tabindex="0" class="title-content">Explore Restaurants</h1>
      <div id="resto" class="resto"></div>
    </div>
      `;
    },
   
    async afterRender() {
      const resto = await RestaurantDBSource.listRestaurants();
      const restoContainer = document.querySelector('#resto');
      resto.forEach((resto) => {
      restoContainer.innerHTML += createRestaurantItemTemplate(resto);
    });
      
    },
  };
   
  export default Resto;