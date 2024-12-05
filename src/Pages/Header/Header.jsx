import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Slider from 'react-slick';

const Header = () => {
  const location = useLocation(); // Get the current route location

  // Define the routes where only the navbar should be displayed
  const isNavbarOnly = ['/about', '/contact', '/login', '/signup'].includes(location.pathname);

  // Slider settings for React Slick
  const sliderSettings = {
    dots: true,            // Show dots for navigation
    infinite: true,        // Infinite loop
    speed: 500,            // Speed of the slide transition
    slidesToShow: 1,       // Show 1 image at a time
    slidesToScroll: 1,     // Scroll 1 slide at a time
    autoplay: true,        // Enable autoplay
    autoplaySpeed: 3000,   // Time between slides in milliseconds
    arrows: true,          // Show navigation arrows
  };

  return (
    <header className="bg-dark text-light py-3">
      <div className="container">
        <div className="row align-items-center">
          {/* Logo Section */}
          <div className="col-md-4 mb-3 mb-md-0">
            <h1 className="text-light">
              <Link to="/" className="text-light text-decoration-none">Skill Jobs</Link>
            </h1>
            <p className="lead">Connecting Talent with Opportunity</p>
          </div>
          
          {/* Navigation Section */}
          <div className="col-md-8">
            <nav className="navbar navbar-expand-lg navbar-dark">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <Link to="/jobfeed" className="nav-link active">Find Job</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/home" className="nav-link active">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/about" className="nav-link">About Us</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/contact" className="nav-link">Contact</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/login" className="nav-link btn btn-light text-white">Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/signup" className="nav-link btn btn-light text-white">Sign Up</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Conditionally render the Hero Section and Offcanvas only for other pages */}
      {!isNavbarOnly && (
        <section className="hero bg-light py-5">
          <div className="container text-center">
            {/* Image Carousel (Slider) */}
            <Slider {...sliderSettings}>
              <div>
                <img src="\img\Job1.jpg" className="d-block w-100" style={{ height: '400px', objectFit: 'cover' }} alt="Job 1" />
              </div>
              <div>
                <img src="\img\Job2.jpg" className="d-block w-100" style={{ height: '400px', objectFit: 'cover' }} alt="Job 2" />
              </div>
              <div>
                <img src="\img\Job3.jpg" className="d-block w-100" style={{ height: '400px', objectFit: 'cover' }} alt="Job 3" />
              </div>
            </Slider>

            <h2 className="display-4 text-dark mt-4">Find Your Dream Job Today</h2>
            <p className="lead">Explore thousands of job opportunities and kickstart your career with Skill Jobs. From entry-level positions to senior roles, we’ve got something for everyone.</p>
            {/* Button to trigger offcanvas */}
            <button className="btn btn-dark" data-bs-toggle="offcanvas" data-bs-target="#searchOffcanvas" aria-controls="searchOffcanvas">Search Jobs</button>
          </div>
        </section>
      )}

      {/* Offcanvas for the Search Box */}
      <div className="offcanvas offcanvas-top" tabindex="-1" id="searchOffcanvas" aria-labelledby="searchOffcanvasLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="searchOffcanvasLabel">Search for Jobs</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <input type="text" className="form-control mb-2" placeholder="Search for jobs..." />
          <button className="btn btn-dark">Search</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
