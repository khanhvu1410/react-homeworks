import Layout from '../components/Layout';
import HomePage from '../pages/Home';
import Homework from '../pages/Homework';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Post from '../pages/Post';
import PostDetail from '../pages/PostDetail';

export const pathName = {
  posts: '/posts',
  login: '/login',
  home: '',
  postDetails: '/posts/:postId',
  homeworks: '/homeworks',
};

export const AppRoutes = [
  { path: '*', element: <NotFound /> },
  { path: pathName.login, element: <Login /> },
  {
    element: <Layout />,
    children: [
      { path: pathName.posts, element: <Post /> },
      { path: pathName.postDetails, element: <PostDetail /> },
      { path: pathName.home, element: <HomePage /> },
      { path: pathName.homeworks, element: <Homework /> },
    ],
  },
];
