import React from 'react';
import '../CSS/AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>About FitLife Gym</h1>
      <p>
        At FitLife Gym, we are committed to helping you achieve your fitness goals with state-of-the-art equipment, expert trainers, and a supportive community. Our mission is to create a space where everyone feels welcome and motivated to lead a healthier lifestyle.
      </p>
      <h2>Our Journey</h2>
      <p>
        Founded in 2010, FitLife Gym has grown from a small neighborhood gym to a leading fitness center known for its innovative programs and holistic approach to health and wellness.
      </p>
      <h2>What We Offer</h2>
      <ul>
        <li>Personal Training Sessions</li>
        <li>Group Fitness Classes</li>
        <li>Modern Cardio and Strength Equipment</li>
        <li>Nutrition Counseling</li>
        <li>Wellness Workshops and Events</li>
      </ul>
      <h2>Join Us</h2>
      <p>
        Whether you're a beginner or a seasoned athlete, FitLife Gym is here to support your fitness journey. Come visit us and see how we can help you transform your life.
      </p>

      <h2>Our Memories</h2>
      <div className="memories-gallery">
        <div className="memory-item">
          <img src="/images/FitLife.jpg" alt="Gym Opening Day" className="memory-photo" />
          <p className="memory-caption">Gym Opening Day</p>
        </div>
        <div className="memory-item">
          <img src="/images/groupclasses.jpg" alt="Group Fitness Class" className="memory-photo" />
          <p className="memory-caption">Group Fitness Class</p>
        </div>
        <div className="memory-item">
          <img src="/images/competition.jpg" alt="Annual Fitness Competition" className="memory-photo" />
          <p className="memory-caption">Annual Fitness Competition</p>
        </div>
        <div className="memory-item">
          <img src="/images/Gym_trainer.jpg" alt="Trainer Team Event" className="memory-photo" />
          <p className="memory-caption">Trainer Team Event</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;