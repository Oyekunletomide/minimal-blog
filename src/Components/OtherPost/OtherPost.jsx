import React from 'react'
import '../OtherPost/OtherPost.css'
import { Link } from 'react-router-dom';


export const OtherPost = ({posts}) => {

  return (
    
    <div className='otherpostcontainer'>
      {
        posts.slice(1, 4).map((post) => (
          <div key={post.id} className='otherpost'>
            <img className='onlylap' src={post.image} alt="" />
            <div className='div'>
              <Link
                to={`/post/${post.id}`}
                className='otherpostheader'
              >
                {post.header}
              </Link>
              <div className='otherpostbodydiv'>
                <p className='otherpostbody'>{post.body.substring(0, 200) + "..."}</p>
              </div>
              <div className='datemore'>
                <p className='date'>{post.date}</p>
                <Link to={`/post/${post.id}`}><a href='/' className='more'>{post.more}</a></Link>
              </div>
            </div>
          </div>
        ))
          
      }
    </div>
  )
}
