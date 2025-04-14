import './css/Post.css'

const Post = ({post}) => {

  return (
    <>
    <div className='post-card'>
        <div className='title'>
            <label>Title:</label>{post.title}
        </div>
        <div className='body'>
            <label>Body:</label>{post.body}
        </div>
    </div></>
  )
}

export default Post