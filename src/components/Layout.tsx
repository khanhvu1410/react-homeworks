import { Link, Outlet } from 'react-router-dom';
import { pathName } from '../routes';
import Footer from '../pages/Footer';

const Layout = () => {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#f0f0f0',
        }}
      >
        <div style={{ padding: '20px' }}>Header</div>
        <div>
          <Link to={pathName.home} style={{ padding: '20px' }}>
            Home
          </Link>
          <Link
            to={pathName.postDetails.replace(':postId', '123')}
            state={{ name: 'test' }}
            style={{ padding: '20px' }}
          >
            Post Details
          </Link>
          <Link to={pathName.posts} style={{ padding: '20px' }}>
            Post
          </Link>
          <Link to={pathName.homeworks} style={{ padding: '20px' }}>
            Homeworks
          </Link>
        </div>
      </div>

      <div style={{ padding: '20px' }}>
        <div style={{ padding: '20px' }}>
          <Outlet />
        </div>
      </div>
      <div style={{ padding: '20px' }}></div>

      <div style={{ padding: '20px' }}>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
