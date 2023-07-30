import React from 'react';
import andyImage from '../images/andy2.jpeg'; // Import the image file
import css from '../images/css.png';
import java1 from '../images/java1.png';

const Home = () => {
  return (
    <section id="Home" className="section">
      <div className="container">
        <h2 className="texte transition-text">WELCOME TO MY PORTFOLIO</h2>
        <div className="d-flex align-items-center class">
          <img src={andyImage} alt="portfolio" className="mr-3 square-div smaller-image" />
          <div className="square-div padding">
            <h3 className="mb-5">Front End developer</h3>
            <p className="mb-4 text-white  transition-text">I'm a passionate front-end developer with expertise in HTML, CSS,
             and JavaScript. My mission is to craft exceptional web experiences that
              captivate users and deliver seamless interactions. Leveraging cutting-edge
               front-end frameworks like React and Bootstrap, I create visually stunning
                and dynamic websites that adapt to various devices. Continuous seeking growth,
                 I actively participate in online courses to stay at the forefront of web development trends.
                  With a strong foundation in design principles and effective collaboration skills, 
                  I bring innovative ideas to life. Together, let's shape extraordinary web experiences 
                  and achieve corporate objectives through the power of front-end development.</p>
          </div>
        </div>

        {/* Additional content */}
        <h2 className="transition-text">Personal Profile</h2>
        <div className="square-div">
          <p className="transition-text">
          As a front-end developer, I am dedicated to crafting exceptional web experiences that captivate users and deliver seamless interactions. With a strong foundation in HTML, CSS, and JavaScript, I specialize in designing and developing responsive, user-friendly interfaces that prioritize an exceptional user experience (UX).

Leveraging cutting-edge front-end frameworks like React and Bootstrap, I create visually stunning and dynamic websites that adapt seamlessly to various devices and screen sizes. My design approach incorporates modern UI/UX principles to ensure intuitive and engaging web interfaces.

Continuous learning is essential to me, and I actively participate in online courses and workshops to enhance my skills and stay at the forefront of web development trends.

Collaboration lies at the heart of my work ethic, and I excel in team environments, valuing effective communication and coordination to bring collective visions to life. Utilizing version control systems like Git, I ensure smooth and efficient teamwork for successful project deliveries.

My portfolio showcases personal projects that reflect my creativity, dedication, and passion for crafting captivating web solutions. Each project is a testament to my commitment to leaving a lasting impact on users and businesses alike.

Welcome to my portfolio, where I invite you to explore my work and journey in front-end development. On this platform, you will find sections for Home, About Me, My Projects, and a Contact form. Take a glimpse of my latest projects, each accompanied by images, descriptions, and links for a comprehensive understanding of my skills and accomplishments.

Feel free to reach out via the Contact Me section to discuss potential collaborations or to learn more about my work. Together, let's shape extraordinary web experiences and achieve corporate objectives through the power of front-end development.

Thank you for visiting, and I look forward to connecting with you!
          </p>
        </div>
        <h2 className="transition-text">Tools and Frameworks</h2>
        <div className="square-div">
          <p className="transition-text">
          In my projects as a front-end developer, I have leveraged a powerful combination of technologies to create visually stunning and highly functional web applications. Node.js,
         Bootstrap, HTML, and CSS have played crucial roles in delivering
          exceptional user experiences and seamless interactions.
          </p>
         
          <h1>Technology Overview</h1>
      
          <div class="tech-container">
              <img src="https://nodejs.org/static/images/logo.svg" className='smaller-image' alt="Node.js Logo"/>
              <div class="tech-info">
                  <h2>Node.js</h2>
                  <p class="tech-description">Node.js is a server-side JavaScript runtime built on Chrome's V8 engine. It enables
                      developers to build scalable and fast network applications. Node.js is commonly used for building APIs,
                      real-time applications, and server-side rendering in web projects.</p>
              </div>
          </div>
      
          <div class="tech-container">
              <img src=" https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png"  className='smaller-image' alt="HTML Logo"/>
              <div class="tech-info">
                  <h2>HTML</h2>
                  <p class="tech-description">HTML (HyperText Markup Language) is the standard markup language for creating web
                      pages and applications. It provides the structure and content of a webpage. HTML is the foundation of every
                      web project, defining the layout and the elements displayed on the page.</p>
              </div>
          </div>
      
          <div class="tech-container">
          imageSrc={css}
              <div class="tech-info">
                  <h2>CSS</h2>
                  <p class="tech-description">CSS (Cascading Style Sheets) is used to style HTML elements, providing layout and
                      visual presentation. CSS is essential for creating visually appealing and responsive designs in web
                      projects.</p>
              </div>
          </div>
      
          <div class="tech-container">
              <img src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo-shadow.png"  className='smaller-image' alt="Bootstrap Logo"/>
              <div class="tech-info">
                  <h2>Bootstrap</h2>
                  <p class="tech-description">Bootstrap is a popular CSS framework that provides pre-designed components and
                      styles, making it easier to create responsive and mobile-first websites. It is widely used for rapidly
                      prototyping and designing user interfaces in web projects.</p>
              </div>
          </div>
      
          <div class="tech-container">
          imageSrc={java1}
              <div class="tech-info">
                  <h2>JavaScript</h2>
                  <p class="tech-description">JavaScript is a versatile programming language used for both front-end and
                      back-end development. It enables interactive and dynamic functionalities on web pages. In front-end
                      projects, JavaScript is crucial for adding interactivity and enhancing user experience, while in back-end
                      projects, it is used with Node.js to handle server-side logic and data processing.</p>
              </div>
          </div>
      
          <div class="tech-container">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"  className='smaller-image' alt="React Logo"/>
              <div class="tech-info">
                  <h2>React</h2>
                  <p class="tech-description">React is a JavaScript library for building user interfaces. It allows developers to
                      create reusable UI components, making it easier to manage complex UIs. React is widely used in front-end
                      projects, particularly for single-page applications and large-scale web applications.</p>
              </div>
              </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
