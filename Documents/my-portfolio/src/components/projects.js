import React from 'react';
import Project from './project';
import Picture5 from '../images/Picture5.png';
import Picture1 from '../images/Picture1.png';
import Picture8 from '../images/Picture8.png';
import Picture4 from '../images/Picture4.png';
import Picture10 from '../images/Picture10.png';

const Projects = () => {
  return (
    <div className="animated-background">
      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <h2>My Projects</h2>
          {/* Render each project using the Project component */}
          <Project
            title="Project 1"
            imageSrc={Picture5}
            description="This is a Demo of a clothing website. This was done making use of the frontend developer tools which includes HTML for the structure of the webpage, CSS for styling and making the website look attractive, and Bootstrap which is a framework used to organize your website such that each element is wrapped in columns and rows."
            link="https://github.com/drew58/cloth-website"
          />
          <Project
            title="Project 2"
            imageSrc={Picture1}
            description="This is the exercise where I showed my skills leveraging the use of Node.js, Nodemon, and JSON. In this project, there are two slides: the first shows the folder where all the Nodemon and npm files are stored and other created files, and the second shows the database which was used to store all the books. This is a simple response and request methods done with Node.js to get books, create books, etc."
            link="https://github.com/drew58/Firstnodeapp"
          />
          <Project
            title="Project 3"
            imageSrc={Picture8}
            description="This was the area were i utilized react and there are series of project i did with react <br>
            one of the major ones is the form. This form is more like an ordering form which stores data in the local <br>
          storage of your system and you can fill your details and it gets stored.Using React introduced me to a whole new level <br> 
        and with the little i did, i can do more of this moving forward"
            link="https://github.com/drew58/Frontend"
          />
          <Project
            title="Project 4"
            imageSrc={Picture4}
            description="This made me utilize my Javascript skills by applying different javascript methods 
            arrays, objects, strings, booleans e.t.c i created this game basically using HTML,CSS 
          and JAVASCRIPT. and during the process i really enjoyed it cause i challenged myself in achieving 
        what i wanted to do and it came out well. This project boosted my javascript skills and made me confident 
      in using JAVASCRIPT. The black jack game is a normal card game which everyone can play and enjoy while playing it"
            link="https://github.com/drew58/blackjack-game"
          />
          <Project
            title="Project 5"
            imageSrc={Picture10}
            description="This project was really interesting while doing this project, 
            i was always bringing out various ideas to match what i was creating and it came out beautiful. 
           This is a Food Receipt website which was created using HTML, CSS, and JAVASCRIPT. the Food Receipt 
         menu shows different sections. it adds the list of foods inputed and gives the total Balance which shows 
       the same illustration an idea being cashiers in stores"
            link="https://github.com/drew58/FoodMenu"
          />
        </div>
      </section>
    </div>
  );
};

export default Projects;
