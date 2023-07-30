import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2>Contact Me</h2>
        <form name="contact" method="POST" netlify>
        <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Submit</button>
        </form>

      </div>
    </section>
  );
};

export default Contact;
