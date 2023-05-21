import Resto from '../view/pages/resto';
import Detail from '../view/pages/detail';
import Favorite from '../view/pages/favorite';

const routes = {
  '/': Resto, // default page
  '/restaurants': Resto,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
