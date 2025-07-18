import React from 'react'
import './Program.css'
import image1 from '../../asset/program1.png';
import image2 from '../../asset/program2.png';
import image3 from '../../asset/program3.png';
import img1logo from '../../asset/program1-logo.png'
import img2logo from '../../asset/program2-logo.png'
import img3logo from '../../asset/program3-logo.png'


const Program = () => {
  return (
   <div className="programs">
    <div className="program" style={{ backgroundImage: `url(${image1})` }}>
      <div className="caption">
        <img src={img1logo} alt="" />
       <p>Graduation Degree</p>
      </div>
    </div>
    <div className="program" style={{ backgroundImage: `url(${image2})` }}>
      <div className="caption">
        <img src={img2logo} alt="" />
       <p>Masters Degree</p>
      </div>
      
    </div>
    <div className="program" style={{ backgroundImage: `url(${image3})` }}>
      <div className="caption">
        <img src={img3logo} alt="" />
       <p>Post Graduation</p>
      </div>
      
    </div>
   </div>
  )
}

export default Program
