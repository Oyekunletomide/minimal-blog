import React from 'react'
import '../FirstPost/FirstPost.css'
import { Link } from 'react-router-dom';



export const FirstPost = ({posts}) => {

  return (
    <div>
      {
        posts.slice(0, 1).map((post) => (
            <div key={post.id} className='firstpost'>
            <div>
              <Link
                to={`/post/${post.id}`}
                className='firstpostheader'
              >
                {post.header}
              </Link>
              <div className='firstpostbodydiv'>
                <p className='firstpostbody'>{post.body.substring(0, 200) + "..."}</p>
              </div>
              <div className='datemore'>
                <p className='date'>{post.date}</p>
                <Link to={`/post/${post.id}`}><a href='/' className='more'>{post.more}</a></Link>
              </div>
            </div>
            <img className='manwithlap' src={post.image} alt="" />
          </div>
        ))
          
      }
    </div>
  )
}
