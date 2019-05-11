import { News } from './components/News';
import { NewsCategory } from './components/NewsCategory';
import { Home } from './components/Home';
import { Root } from './components/Root';

const routes = [
  {
    component: Root,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home
      },
      {
        path: '/news',
        exact: true,
        component: News
      },
      {
        path: '/news/:id',
        component: NewsCategory
      }
    ]
  }
];

export default routes;
