import React, { useState, useEffect } from 'react';
import './Pages-css/Contact.css';
import Navbar from '../Components/Navbar';

const teamMembers = [
  { id: 1, name: 'Mayur', position: 'Creator' },
  { id: 2, name: 'Hritik', position: 'Finance Advisor' },
  { id: 3, name: 'Raiyan', position: 'Developer' },
  { id: 4, name: 'Himanshu', position: 'Market Analyst' },
];

const AboutUs = () => {
  const [memberImages, setMemberImages] = useState({});

  useEffect(() => {
    const loadImages = async () => {
      const images = {};
      for (const member of teamMembers) {
        try {
          const image = await import(`../assets/m-${member.id}.jpg`);
          images[member.id] = image.default;
        } catch (error) {
          console.error(`Failed to load image for member ${member.id}:`, error);
          images[member.id] = null;
        }
      }
      setMemberImages(images);
    };

    loadImages();
  }, []);

  return (
    <>
      <Navbar />
      <div className="about-us-container">
        <section className="ceo-section">
          <div className="ceo-content">
            <h2 className="section-title">Meet Our CEO</h2>
            <div className="ceo-info">
              <div className="ceo-image"></div>
              <div className="ceo-text">
                <h3 className="ceo-name">Aman</h3>
                <p className="ceo-description">
                  Aman is a visionary leader with over 20 years of experience in the industry. 
                  His innovative approach and dedication have been instrumental in our company's growth.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="team-section">
          <h2 className="section-title">Our Team</h2>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-member">
                <div className="member-image-container">
                  {memberImages[member.id] ? (
                    <img src={memberImages[member.id]} alt={`Team Member ${member.id}`} className="member-image" />
                  ) : (
                    <div className="image-placeholder">Image not available</div>
                  )}
                </div>
                <h3 className="member-name">{member.name}</h3>
                <p className="member-position">{member.position}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;