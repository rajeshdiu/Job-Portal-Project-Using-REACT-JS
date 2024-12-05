import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="container">
      <h2 className="text-center my-4">Welcome to Skill Jobs - Leading Job Portal in Bangladesh</h2>
      
      {/* SkillJobs Introduction Section */}
      <section className="text-center mb-5">
        <p>
          Are you looking for a job? Find all recent job circulars available in Bangladesh and around the globe in one place with an easy job application feature. Post your resume or discover valuable career resources on Skill Jobs.
        </p>
        <p>
          <strong>UN jobs in Bangladesh</strong> | Location | Search
        </p>
      </section>

      {/* Featured Companies Section */}
      <section className="mb-5">
        <h3 className="text-center mb-4">Featured Companies</h3>
        <div className="row text-center">
          <div className="col-12 col-md-3 mb-3">
            <div className="card">
              <img src="company_logo_1.png" className="card-img-top" alt="Company 1" />
              <div className="card-body">
                <h5 className="card-title">Company 1</h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3 mb-3">
            <div className="card">
              <img src="company_logo_2.png" className="card-img-top" alt="Company 2" />
              <div className="card-body">
                <h5 className="card-title">Company 2</h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3 mb-3">
            <div className="card">
              <img src="company_logo_3.png" className="card-img-top" alt="Company 3" />
              <div className="card-body">
                <h5 className="card-title">Company 3</h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3 mb-3">
            <div className="card">
              <img src="company_logo_4.png" className="card-img-top" alt="Company 4" />
              <div className="card-body">
                <h5 className="card-title">Company 4</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Job Circular Section */}
      <section className="mb-5">
        <h3 className="text-center mb-4">Recent Job Circulars</h3>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card">
              <img src="job_logo_1.png" className="card-img-top" alt="Job 1" />
              <div className="card-body">
                <h5 className="card-title">Marketing & Sales Intern - Empire Global Distributions (EGD)</h5>
                <p className="card-text">৳ Negotiable</p>
                <p className="card-text">GA 40/5 & 40/5A, Japanese School Road, Shahjadpur, Gulshan, Dhaka-1212</p>
                <p className="card-text">13 days to go</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card">
              <img src="job_logo_2.png" className="card-img-top" alt="Job 2" />
              <div className="card-body">
                <h5 className="card-title">Star Coder Program 2025</h5>
                <p className="card-text">৳ 35000 - 40000</p>
                <p className="card-text">Dhaka, Bangladesh</p>
                <p className="card-text">14 days to go</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card">
              <img src="job_logo_3.png" className="card-img-top" alt="Job 3" />
              <div className="card-body">
                <h5 className="card-title">Instructor - Electrical Engineering</h5>
                <p className="card-text">৳ Negotiable</p>
                <p className="card-text">Chandpur</p>
                <p className="card-text">10 days to go</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card">
              <img src="job_logo_4.png" className="card-img-top" alt="Job 4" />
              <div className="card-body">
                <h5 className="card-title">Junior Instructor (Mechanical Engineering)</h5>
                <p className="card-text">৳ Negotiable</p>
                <p className="card-text">Chandpur</p>
                <p className="card-text">10 days to go</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Job Circulars by Location Section */}
      <section className="mb-5">
        <h3 className="text-center mb-4">Recent Job Circulars by Location</h3>
        <div className="row">
          <div className="col-12 col-md-3 mb-3">
            <div className="card">
              <div className="card-body text-center">
                <h5 className="card-title">Dhaka</h5>
                <p className="card-text">485 vacancies</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3 mb-3">
            <div className="card">
              <div className="card-body text-center">
                <h5 className="card-title">Chandpur</h5>
                <p className="card-text">452 vacancies</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3 mb-3">
            <div className="card">
              <div className="card-body text-center">
                <h5 className="card-title">Khulna</h5>
                <p className="card-text">439 vacancies</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3 mb-3">
            <div className="card">
              <div className="card-body text-center">
                <h5 className="card-title">Chittagong</h5>
                <p className="card-text">415 vacancies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership and Skills Section */}
      <section className="text-center mb-5">
        <h3 className="mb-4">Become a Paid Member</h3>
        <p>
          Skill Jobs is a popular job site and a comprehensive career solutions provider. Our paid membership offers a complete career guide with step-by-step directions on how to create an outstanding resume, ace the interview, and find the right job. Get access to all our premium resources such as Pro Resume Builder, Skills Tests, Career Toolkit, Remote Work and more.
        </p>
        <button className="btn btn-primary">Become a Paid Member</button>
      </section>
    </div>
  );
};

export default Home;
  