import Post from "./post";
import './css/User Lists.css'

const Posts = ({name, posts}) => {

  return (
    <>
        <div className="posts-container">
            <div className="headline">
                <h2>Posts - {name}</h2>
                <button>Add</button>
            </div>
            <div className="posts-list">
                {posts.length > 0 ? (
                    posts.map(post => (
                        <Post key={post.id} post={post}/>
                    ))
                    ) : (
                    <p>No posts available</p>
                )}
            </div>
        </div>
    </>
  );
};

export default Posts;
