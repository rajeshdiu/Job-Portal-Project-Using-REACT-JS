import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4 mb-4">
            <h5>About Skill Jobs</h5>
            <p>
              Skill Jobs connects talent with opportunities by bridging the gap between job seekers and employers.
              Explore thousands of job listings, post vacancies, and grow your career with us.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-4 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/about" className="text-light text-decoration-none">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-light text-decoration-none">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/jobfeed" className="text-light text-decoration-none">
                  Find Jobs
                </Link>
              </li>
              <li>
                <Link to="/signup" className="text-light text-decoration-none">
                  Sign Up
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-light text-decoration-none">
                  Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-md-4 mb-4">
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li>
                <i className="bi bi-geo-alt-fill"></i> 1234 Skill Jobs Street, Job City, JS 56789
              </li>
              <li>
                <i className="bi bi-telephone-fill"></i> +1 (123) 456-7890
              </li>
              <li>
                <i className="bi bi-envelope-fill"></i> support@skilljobs.com
              </li>
            </ul>
          </div>
        </div>

        <hr className="bg-light" />

        {/* Social Media and Copyright */}
        <div className="row">
          <div className="col-md-6 mb-3 mb-md-0">
            <p className="mb-0">© {new Date().getFullYear()} Skill Jobs. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-md-end">
            <a
              href="https://www.facebook.com"
              className="text-light me-3 text-decoration-none"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-facebook"></i>
            </a>
            <a
              href="https://www.twitter.com"
              className="text-light me-3 text-decoration-none"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-twitter"></i>
            </a>
            <a
              href="https://www.linkedin.com"
              className="text-light me-3 text-decoration-none"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href="https://www.instagram.com"
              className="text-light text-decoration-none"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
