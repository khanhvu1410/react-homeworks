import { useLocation, useParams } from 'react-router-dom';

const PostDetail = () => {
  const { postId } = useParams();
  const location = useLocation();
  console.log(location);
  const name = location.state.name;
  return (
    <div>
      <p>Post Details</p>
      <p>
        This is the post of {postId} {name}
      </p>
    </div>
  );
};

export default PostDetail;
