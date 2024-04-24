// import { Navbar } from '@material-tailwind/react'
import React from 'react';
import style from './Contribute.module.css'
import Comments from '../comments/Comments';
import img1 from '../assets/t1.png';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import slide_image1 from '../assets/im1.jpg'
import slide_image2 from '../assets/im2.jpg'
import slide_image3 from '../assets/im3.jpg'
import slide_image4 from '../assets/im4.jpg'
import slide_image5 from '../assets/im5.jpg'
import slide_image6 from '../assets/im6.jpg'
import slide_image7 from '../assets/im7.jpg'
import slide_image8 from '../assets/im8.jpg'
import { IoSend } from "react-icons/io5";
import useFunction from './useFunction';
import { commentsData } from './commentsData';
import { useState } from 'react';
import Comment from './Comment';
import pp from './pp.png';
import AddContribution from '../popup components/add contribution/AddContribution'
import ViewContribution from '../popup components/view contribution/ViewContribution'
export default function Contribute() {
  const { addComment, deleteComment } = useFunction();
  const [comments, setComments] = useState(commentsData)
  const handleAddComments = (commentId, comment) => {
    const updatedTree = addComment(comments, commentId, comment);
    setComments(updatedTree)
  }

  const handleCommentDelete = (commentId) => {
    const updatedTree = deleteComment(comments, commentId)
    setComments(updatedTree)
  }
  const [openAddContribution, setOpenAddContribution] = useState(false)
  const [openViewContribution, setOpenViewContribution] = useState(false)
  return (
    <div className={style.wrapper}>
      <div className={style.imageAndDesc}>
        <div className={style.imageGallary}>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={'auto'}
            loop={true}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            className={style.swiper_container + " " + style.tt}
            style={{ backgroundColor: 'white' }}
          >
            <SwiperSlide><img className={style.slide_img} src={slide_image1} alt="" /></SwiperSlide>
            <SwiperSlide><img className={style.slide_img} src={slide_image2} alt="" /></SwiperSlide>
            <SwiperSlide><img className={style.slide_img} src={slide_image3} alt="" /></SwiperSlide>
            <SwiperSlide><img className={style.slide_img} src={slide_image4} alt="" /></SwiperSlide>
            <SwiperSlide><img className={style.slide_img} src={slide_image5} alt="" /></SwiperSlide>
            <SwiperSlide><img className={style.slide_img} src={slide_image6} alt="" /></SwiperSlide>
            <SwiperSlide><img className={style.slide_img} src={slide_image7} alt="" /></SwiperSlide>
            <SwiperSlide><img className={style.slide_img} src={slide_image8} alt="" /></SwiperSlide>
          </Swiper>
        </div>
        <div className={style.tt + " " + style.tt1}>
          <h1>Discussion</h1>
          <div className={style.commentParent}>
            <div className={style.commentContainer}>
              <Comment key={comments.id} comments={comments} handleAddComments={handleAddComments} handleCommentDelete={handleCommentDelete}></Comment>
            </div>
            <div className={style.discussionFooter}>
              <input type="text" placeholder='comment here..' />
              <div className={style.cicon}>
                <IoSend style={{ width: '100%', height: '100%' }}></IoSend>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.imageInfo}>
        <div className={style.info}>
          <h1>Plant information</h1>
          <hr />
          <div className={style.iDetails}>
            <div className={style.irow}>
              <p>Name</p>
              <p>info</p>
            </div>
            <div className={style.irow}>
              <p>Root</p>
              <p>info</p>
            </div>
            <div className={style.irow}>
              <p>Leaf</p>
              <p>info</p>
            </div>
            <div className={style.irow}>
              <p>Branch</p>
              <p>info</p>
            </div>
            <div className={style.irow}>
              <p>Color</p>
              <p>info</p>
            </div>
            <div className={style.irow}>
              <p>Shape</p>
              <p>info</p>
            </div>
            <div className={style.irow}>
              <p>Name</p>
              <p>info</p>
            </div>
          </div>
        </div>
        <div className={style.infoRight}>

          <h1>Suggest an identification</h1>
          <hr />
          <div className={style.profileSection}>
            <div className={style.pimg}>
              <img src={pp} alt="" />
              <div className={style.pif}>
                <p>graydarby</p>
                <p>23 observations </p>
              </div>
            </div>

          </div>
          <div className={style.status}>
            <p>Status : </p>
            <p>Not Verified</p>
          </div>
          <div className={style.btnSection}>
            <div className={style.add}>
              <p onClick={() => setOpenAddContribution(true)}>Add Contribution</p>
            </div>
            <div className={style.add}>
              <p onClick={() => setOpenViewContribution(true)}>View Contribution</p>
            </div>
          </div>
          {openAddContribution && <AddContribution closeAddContribution={setOpenAddContribution}></AddContribution>}
          {openViewContribution && <ViewContribution closeViewContribution={setOpenViewContribution}></ViewContribution>}
        </div>
      </div>

    </div >
  )
}
