import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { Navbar } from '../../Components/Navbar/Navbar';
import { Footer } from '../../Components/Footer/Footer';
import '../PostDetails/PostDetails.css'

export const PostDetails = ({posts }) => {
  useEffect(() => {
    window.scrollTo({top:0, left:0, behavior:'instant'})
  },[])
  const { id } = useParams();
  const post = posts.find(post => post.id.toString() === id);

  if (!post) {
    return <div>Post not found</div>;
  }
  
  return (
    <div className='postdetailsdiv'>
      <Navbar />
      <div className='postdetails'>
        <img className='detailimage' src={post.image} alt="" />
        <p className='detailheader'>{post.header}</p>
        <div className='userdatediv'>
          <p className='detailuser'>Written by {post.user}</p>
          <p className='detaildate'>{post.date}</p>
        </div>
        <div className='detailbodydiv'>
          <p className='detailbody'>{post.body}</p>
        </div>
      </div>
      <div onClick={() => {window.scrollTo({top:0, left:0, behavior: 'smooth'})}} className='scrollup'>
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
          <g clip-path="url(#clip0_6_208)">
          <path d="M25 45.8334C36.5 45.8334 45.8333 36.5 45.8333 25C45.8333 13.5 36.5 4.1667 25 4.1667C13.5 4.1667 4.16663 13.5 4.16663 25C4.16663 36.5 13.5 45.8334 25 45.8334ZM27.0833 25V33.3334H22.9166V25H16.6666L25 16.6667L33.3333 25H27.0833Z" fill="#662BC5"/>
          </g>
          <defs>
            <clipPath id="clip0_6_208">
          <rect width="50" height="50" fill="white" transform="matrix(1 0 0 -1 0 50)"/>
          </clipPath>
          </defs>
        </svg>
      </div>
      <Footer />
    </div>
  )
}
