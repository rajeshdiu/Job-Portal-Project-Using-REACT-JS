import React from 'react';

const Contact = () => {
  return (
    <div>
      <section className="contact-us py-5">
        <div className="container">
          <h2 className="display-4 text-center mb-4">Contact Us</h2>
          <p className="lead text-center">
            We're here to help! If you have any questions or need assistance, feel free to reach out to us.
          </p>
          
          <div className="row">
            {/* Contact Form */}
            <div className="col-md-8 mx-auto">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Enter your full name" required />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" rows="4" placeholder="Write your message" required></textarea>
                </div>

                <button type="submit" className="btn btn-dark">Send Message</button>
              </form>
            </div>
          </div>

          <div className="row mt-5">
            {/* Contact Information */}
            <div className="col-md-6">
              <h4>Our Office</h4>
              <p>
                Skill Jobs HQ, <br />
                123 Talent Avenue, <br />
                Cityville, 56789 <br />
                Country
              </p>
            </div>
            <div className="col-md-6">
              <h4>Get in Touch</h4>
              <p><strong>Email:</strong> contact@skilljobs.com</p>
              <p><strong>Phone:</strong> +123 456 7890</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
