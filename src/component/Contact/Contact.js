import React from 'react'
import './contact.css'
import msgicon from '../../asset/msg-icon.png'
import mailicon from '../../asset/contact-logo-1.png'
import callicon from '../../asset/contact-logo-2.png'
import locationicon from '../../asset/contact-logo-3.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "f8076ade-2795-4ff7-b001-fff146d7264a");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };




  return (
    <div className='contact'>
    <div className="col-left">
        <h2>Send us a message <img src={msgicon} alt="" /></h2>
        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
        <ul>
            <li> <img src={mailicon} alt="" /> Contact@eduisty.dev</li>
            <li><img src={callicon} alt="" />+1 123-456-7890</li>
            <li><img src={locationicon} alt="" />77 Massachusetts Ave, Cambridge
            MA 02139, United States</li>
        </ul>
    </div>


    <div className="col-right">
        <form onSubmit={onSubmit}>
            <label >Your Name</label>
            <input type="text" name='name' placeholder='Enter Your Name' required />
            <label >Phone Number</label>
            <input type='text' name='number' placeholder='Enter Your Phone Number' required />
            <label >Your Email</label>
            <input type='email' name='email' placeholder='Enter Your email' required />
            <label >Messege</label>
            <textarea name="Messege" rows='6' placeholder='Enter Your Messege Here' ></textarea>
            <button className='dark-btn'>Sumbit<i class="fas fa-arrow-right "></i></button>
        </form>
        <span>{result}</span>
      
    </div>
      
    </div>
  )
}

export default Contact
