import React from 'react'

const Contact = () =>{
  return (
    <section id="contact">

    <div className="titleSection main-container">
        <h2 className="contacth2">
            Get In Touch
            <span className="bold"> Say Hello!</span>
        </h2>

        <form id="contactForm">
            <div className="input-details"><input type="text" id="name" className="form-control" name="name"
                    placeholder="Your Name"/>
                <input type="email" id="email" className="form-control" name="email" placeholder="Your Email"/>
                <textarea className="form-control" id="message" rows="5" placeholder="Message"></textarea>
                <button className="btn" type="submit" id="submit" name="submit">Send message</button>
            </div>
        </form>
    </div>

</section>
  )
}
export default Contact;