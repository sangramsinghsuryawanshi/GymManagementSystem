import React from 'react';
import '../CSS/HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <section className="gym-info-section">
        <h1>Welcome to FitLife Gym</h1>
        <p>FitLife Gym is dedicated to helping you achieve your fitness goals with top-notch facilities, expert trainers, and a supportive community.</p>
      </section>

      <section className="gym-photos-section">
        <h2>Our Facilities</h2>
        <div className="photos-grid">
          <div className="photo-item">
            <img src="/images/dumbles.jpg" alt="Gym Facility 1" className="facility-photo" />
            <p className="photo-caption">Dumbbells Area</p>
          </div>
          <div className="photo-item">
            <img src="/images/treadmill.jpg" alt="Gym Facility 2" className="facility-photo" />
            <p className="photo-caption">Treadmill Section</p>
          </div>
          <div className="photo-item">
            <img src="/images/bench.jpg" alt="Gym Facility 3" className="facility-photo" />
            <p className="photo-caption">Bench Press Zone</p>
          </div>
        </div>
      </section>

      <section className="activity-photos-section">
        <h2>Activities & Classes</h2>
        <div className="photos-grid">
          <div className="photo-item">
            <img src="/images/yoga.jpg" alt="Yoga Class" className="activity-photo" />
            <p className="photo-caption">Yoga Class</p>
          </div>
          <div className="photo-item">
            <img src="/images/weight.jpg" alt="Weight Training" className="activity-photo" />
            <p className="photo-caption">Weight Training</p>
          </div>
          <div className="photo-item">
            <img src="/images/cardio.jpg" alt="Cardio Session" className="activity-photo" />
            <p className="photo-caption">Cardio Session</p>
          </div>
        </div>
      </section>

      <header className="hero-section">
        <div className="overlay">
          <h1>Start Your Fitness Journey Today!</h1>
          <p>Join FitLife Gym and become the best version of yourself.</p>
        </div>
      </header>
    </div>
  );
};

export default HomePage;
