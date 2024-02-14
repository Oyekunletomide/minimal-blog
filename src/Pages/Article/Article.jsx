import React from 'react'
import '../Article/Article.css'
import { Link } from 'react-router-dom';
import { Navbar} from '../../Components/Navbar/Navbar';
import { Footer } from '../../Components/Footer/Footer';
import { useEffect } from 'react';
import { useState } from 'react';
import JSON from '../../Components/Assets/JSON'
import { Pagination } from '../../Components/Pagination/Pagination';

export const Article = ({posts}) => {
  useEffect(() => {
    window.scrollTo({top:0, left:0, behavior:'instant'})
  },[])

  const [blogPosts] = useState(JSON);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastPost = currentPage * postsPerPage;

  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);



  return (
    <>
    {<Navbar />}
    <div>
        {/* <Link to={`/articles`}>Articles wa
        </Link> */}
        {
        currentPosts.map((post) => (
            <div key={post.id} className='firstpost'>
            <div>
              <Link
                to={`/post/${post.id}`}
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

      <Pagination
        pages={totalPages}
        page={currentPage}
        onPageChange={handlePageClick}
      />
    </div>
    {<Footer />}
    </>
  )
}
