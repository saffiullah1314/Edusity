import React, { useRef } from 'react';
import './Testimonials.css';
import user1 from '../../asset/user-1.png';
import user2 from '../../asset/user-2.png';
import user3 from '../../asset/user-3.png';
import user4 from '../../asset/user-4.png';
import arrowleft from '../../asset/arrow-left.png';
import arrowright from '../../asset/arrow-right.png';

const Testimonials = () => {
  const slider = useRef(null);
  let tx = 0;

  const slideLeft = () => {
    if (tx < 0) { 
      tx += 25;
      slider.current.style.transform = `translateX(${tx}%)`;
    }
  };

  const slideRight = () => {
    if (tx > -50) { // Prevent sliding beyond the last slide (adjust this based on the number of slides)
      tx -= 25;
      slider.current.style.transform = `translateX(${tx}%)`;
    }
  };

  return (
    <div className="testimonials">
      <img src={arrowleft} alt="" className="arrow-left" onClick={slideLeft} />
      <img src={arrowright} alt="" className="arrow-right" onClick={slideRight} />
      <div className="slider">
        <ul ref={slider}> {/* Corrected use of ref */}
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user1} alt="" />
                <div className="span">
                  <h3>Emily Williams</h3>
                  <p>Edusity, USA</p>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user2} alt="" />
                <div className="span">
                  <h3>William Jackson</h3>
                  <p>Edusity, USA</p>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user3} alt="" />
                <div className="span">
                  <h3>Josia Aion</h3>
                  <p>Edusity, USA</p>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user4} alt="" />
                <div className="span">
                  <h3>John Serio</h3>
                  <p>Edusity, USA</p>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
