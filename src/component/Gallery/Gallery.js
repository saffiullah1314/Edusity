import React from 'react';
import './Gallery.css'
import galleryimg1 from '../../asset/gallery-1.png'
import galleryimg2 from '../../asset/gallery-2.png'
import galleryimg3 from '../../asset/gallery-3.png'
import galleryimg4 from '../../asset/program1.png'

const Gallery = () => {
  return (
    <div className="gallery">
    <div className='gallery-img'>
      <img src={galleryimg1} alt="" />
      <img src={galleryimg2} alt="" />
      <img src={galleryimg3} alt="" />
      <img src={galleryimg4} alt="" />
    </div>
    <button className='dark-btn'>See More<i class="fas fa-arrow-right "></i></button>
    </div>
  )
}

export default Gallery
