import React, { useState } from 'react';
import './JobFeed.css';

const JobFeed = () => {
  // Sample job data (this can be replaced with dynamic data from an API or database)
  const jobs = [
    {
      id: 1,
      title: 'Software Engineer',
      company: 'TechCorp',
      location: 'New York',
      sublocation: 'Manhattan',
      datePosted: '2024-12-01',
      deadline: '2024-12-15',
      description: 'We are looking for a passionate software engineer...',
    },
    {
      id: 2,
      title: 'Product Manager',
      company: 'InnovateX',
      location: 'San Francisco',
      sublocation: 'Downtown',
      datePosted: '2024-12-02',
      deadline: '2024-12-20',
      description: 'Join our product team...',
    },
    {
      id: 3,
      title: 'Data Scientist',
      company: 'DataWorks',
      location: 'London',
      sublocation: 'Central London',
      datePosted: '2024-11-28',
      deadline: '2024-12-10',
      description: 'We are looking for a data scientist...',
    },
  ];

  const [searchTerm, setSearchTerm] = useState('');

  // Function to handle the search term change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter jobs based on the search term
  const filteredJobs = jobs.filter((job) => {
    return (
      job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.sublocation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.deadline.includes(searchTerm) ||
      job.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="job-feed">
      <h2>Job Feed</h2>

      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search by location, sublocation, deadline, or designation"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <div className="job-list">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div key={job.id} className="job-card">
              <h3 className="job-title">{job.title}</h3>
              <p className="job-company">{job.company}</p>
              <p className="job-location">{job.location} - {job.sublocation}</p>
              <p className="job-date">{job.datePosted}</p>
              <p className="job-deadline">Deadline: {job.deadline}</p>
              <p className="job-description">{job.description}</p>
              <button className="apply-button">Apply Now</button>
            </div>
          ))
        ) : (
          <p>No jobs found matching your search criteria.</p>
        )}
      </div>
    </div>
  );
};

export default JobFeed;
