import React, { useEffect } from 'react';
import './App.css';
import ScrollReveal from 'scrollreveal';

const App = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const mail1 = "21r11a0597@gcet.edu.in"; // Replace with the desired email address
    window.location.href = `https://mail.google.com/mail/u/0/?view=cm&to=${mail1}`;
  };
  useEffect(() => {
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');

    const handleMenuIconClick = () => {
      menuIcon.classList.toggle('fa-xmark');
      navbar.classList.toggle('active');
    };

    menuIcon.addEventListener('click', handleMenuIconClick);

    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('header nav a');

      sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
          });
        }
      });

      const header = document.querySelector('header');
      header.classList.toggle('sticky', window.scrollY > 100);

      menuIcon.classList.remove('fa-xmark');
      navbar.classList.remove('active');
    };

    window.addEventListener('scroll', handleScroll);

    ScrollReveal({
      distance: '80px',
      duration: 2000,
      delay: 200,
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

    return () => {
      menuIcon.removeEventListener('click', handleMenuIconClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <header className="header">
        <a href="#" className="logo">portfolio</a>
        <i className="fa-solid fa-bars" id="menu-icon"></i>

        <div className="navbar">
          <a href="#home" className="active">Home</a>
          <a href="#about">About</a>
          <a href="#services">Intrests</a>
          <a href="#contact">Contact</a>
          <a href="#portfolio">Portfolio</a>
        </div>
      </header>

      <section className="home" id="home">
        <div className="home-content">
          <h3>Hi, Myself</h3>
          <h1>Shivanoor Vignesh</h1>
          <h3>And I'm a <span>Computer Science Engineering Student</span></h3>
          <p></p>
          <div className="social-media">
            <a href="#"><i className="fa-brands fa-linkedin"></i></a>
            <a href="#"><i className="fa-brands fa-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-github"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
          </div>
          <a href="https://drive.google.com/file/d/1wiFqvdebOiu1EtY0U2BnELQGHqzdegHT/view?usp=drive_link" className="btn">download my cv</a>
        </div>
        <div className="home-img">
          <img src="vignesh.png" alt="Profile" />
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-img">
          <img src="vignesh.png" alt="About" />
        </div>
        <div className="about-content">
          <h2 className="heading">About <span> Me</span></h2>
          <h3> Aspiring to be a Frontend Developer</h3>
          <p>I am Shivanoor Vignesh currently pursuing my bachelors degree at Geethanjali College of Engineering and Technology . I worked as an intern for web developement for BrainOvision technologies,Hyderabad and then worked as an intern trainee at Intrnforte , then completed training internship in ACCELQ and worked on concepts of cybersecurity.

Currently working on a self made project to resolve some issues related to transport for all colleges

Intellectually curious professional currently earning my bachelor's degree in computer science at Geethanjali College of Engineering And Technology.</p>
          <a href="#" className="btn">Read More</a>
        </div>
      </section>

      <section className="services" id="services">
        <h2 className="heading">My <span>Intrests</span></h2>
        <div className="services-container">
          <div className="services-box">
            <i className="fa-solid fa-code"></i>
            <h3>Web Development</h3>
            <p>

I have completed my Web Development course in 2022 and have worked on projects such as Bus Complaint System, GCET Bus Tracking, IEEE SB Website for GCET using React.js, and a portfolio website using React and Vite.</p>
            <a href="#" className="btn">Read More</a>
          </div>

          <div className="services-box">
          <i class="fa-brands fa-java"></i>
            <h3>Data Structures Algorthim</h3>
            <p>I have gained knowledge in data structures and algorithms through Smart Interviews training. I have problem-solving skills in languages like Java, Python, and C++, and concepts such as dynamic programming and hashing.</p>
            <a href="#" className="btn">Read More</a>
          </div>

          <div className="services-box">
          <i class="fa-solid fa-chart-simple"></i>
            <h3 style={{fontSize: '2.1rem'}}>Data Science And machine learning</h3>
            <p>Industrial project-based learning in the domain of data science and machine learning, focusing on topics such as data analytics, regression, classification, and utilizing Azure ML Studio and Google Cloud Services, including Cloud Vision.
</p>
            <a href="#" className="btn">Read More</a>
          </div>
        </div>
      </section>

      <section className="portfolio" id="portfolio">
        <h2 className="heading">Latest <span>Projects</span></h2>
        <div className="portfolio-container">
          <div className="portfolio-box">
            <img src="image.png" alt="Project" />
            <div className="portfolio-layer">
            <a href="https://github.com/Naveen052004/PBL2-1">  <h4>Gcet Transport Greviences</h4></a>
              <p>The main purpose of this application is to allow the students
to File a complaint against their respective buses at their
convenience instead of directly visiting the college transport
office.</p>
              <i className="fa-solid fa-up-right-from-square"></i>
            </div>
          </div>

          <div className="portfolio-box">
            <img src="congress.jpg" alt="Project" />
            <div className="portfolio-layer">
             <a href="https://cybercongress2023.netlify.app/</div>" style={{}}> <h4>  Cyber Congress Website</h4></a>
              <p>This website was totally developed by our team and it was a success after the website was launchedThis website was totally developed by our team and it was a success after the website was launched</p>
              <i className="fa-solid fa-up-right-from-square" ></i>
            </div>
          </div>

          <div className="portfolio-box">
            <img src="bustracking.jpg" alt="Project" />
            <div className="portfolio-layer">
            <a href="https://gctctransport.000webhostapp.com/main.php">
  <span>
    <h4>Gcet Bus Tracking</h4>
  </span>
</a>
              <p>This website serves as a hub for our college transport system, offering real-time bus tracking, current locations of buses, and a dedicated complaint feature.

              </p>
              <i className="fa-solid fa-up-right-from-square"></i>
            </div>
          </div>



          <div className="portfolio-box">
            <img src="ieee.jpg" alt="Project" />
            <div className="portfolio-layer">
             <a href="https://github.com/vigneshShivanoor/miniproject"> <h4>IEEE SB GCET</h4></a>
              <p>The IEEE student branch at Geetanjali College of Engineering and Technology aims to enhance its online presence and engagement with students through the development of a comprehensive website. 
</p>
              <i className="fa-solid fa-up-right-from-square"></i>
            </div>
          </div>

          <div className="portfolio-box">
            <img src="crime.jpg" alt="Project" />
            <div className="portfolio-layer">
            <a href="https://docs.google.com/document/d/1tbcHmpYnFOO4uTijfwdgrVm2Bc8PlJOo/">  <h4>Crime Analysis</h4></a>
              <p>To uncover insights into crime patterns, victim demographics, spatial-temporal trends, and factors influencing crime severity.
</p>
              <i className="fa-solid fa-up-right-from-square"></i>
            </div>
          </div>

          <div className="portfolio-box">
            <img src="cancer.jpg" alt="Project" />
            <div className="portfolio-layer">
              <h4>Leukemia Cancer Detection </h4>
              <p>The project involves preprocessing the image data through augmentation techniques, training and evaluating the performance of various CNN models, and identifying the most accurate classifier.
</p>
              <i className="fa-solid fa-up-right-from-square"></i>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <h2 className="heading"><span>Contact</span> Me</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="input-box">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
          </div>
          <div className="input-box">
            <input type="number" placeholder="Mobile Number" />
            <input type="text" placeholder="Email Subject" />
          </div>
          <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
          <input type="submit" value="Send Message" className="btn" />
        </form>
      </section>
      <footer class="footer">
    <div class="footer-text">
        <p>copyright &copy; 2024 by @vignesh</p>
    </div>
    <div class="footer-iconTop">
        <a href="#home">
            <i class="fa-solid fa-angle-up"></i>
        </a>
    </div>
</footer>

    </div>
  );
};

export default App;
