import RestaurantDBSource from '../../data/restodb-source';
import UrlParser from '../../routes/url-parser';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <div id="resto" class="resto"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detail = await RestaurantDBSource.detailRestaurant(url.id);
    const restoContainer = document.querySelector('#resto');
    restoContainer.innerHTML = createRestaurantDetailTemplate(detail);
  },
};

export default Detail;
