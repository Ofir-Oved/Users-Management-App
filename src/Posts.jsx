import { useState } from "react";
import NewPost from "./New Post";
import Post from "./post";
import './css/User Lists.css'

const Posts = ({name, posts}) => {
  // State to manage which component to show
  const [isAdding, setIsAdding] = useState(false);

  const handleAddClick = () => {
    setIsAdding(true);  // When the "Add" button is clicked, show the New Post component
  };

  const handleCancel = () => {
    setIsAdding(false);
  }

  return (
    <>
        {isAdding ? (
            <NewPost name={name} cancel={handleCancel}/>
        ) : (
        <div className="posts-container">
            <div className="headline">
                <h2>Posts - {name}</h2>
                <button onClick={handleAddClick}>Add</button>
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
        )}
    </>
  );
};

export default Posts;
