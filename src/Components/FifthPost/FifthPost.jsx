import React from 'react'
import '../FifthPost/FifthPost.css'
import { Link } from 'react-router-dom';

export const FifthPost = ({posts}) => {
  return (
    <div>
      {
        posts.slice(4, 5).map((post) => (
          <div key={post.id} className='fifthpost'>
            <div>
            <Link
                to={`/post/${post.id}`}
                className='fifthpostheader'
              >
                {post.header}
              </Link>
              <div className='fifthpostbodydiv'>
                <p className='fifthpostbody'>{post.body.substring(0, 200) + "..."}</p>
              </div>
              <div className='datemore'>
                <p className='fifthdate'>{post.date.slice(0,6)}</p>
                <Link to={`/post/${post.id}`}><a href='/' className='fifthmore'>{post.more}</a></Link>
              </div>
            </div>
            <img className='fifthonlylap' src={post.image} alt="" />
          </div>
        ))
          
      }
      
      
    </div>
  )
}
