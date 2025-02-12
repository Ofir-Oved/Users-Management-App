import './css/New Todo-Post.css';

const NewPost = ({name}) => {

  return (
    <>
    <div className='new-post-card'>
        <div className="headline">
            <h2>New Post - {name}</h2>
        </div>
        <div className='new-post-body'>
          <div className='title'>
              <label>Title:</label>
              <input></input>
          </div>
          <div className='post-body'>
              <label>Body:</label>
              <input></input>
          </div>
          <div className='buttons'>
              <button>Cancel</button>
              <button>Add</button>
          </div>
        </div>
    </div></>
  )
}

export default NewPost