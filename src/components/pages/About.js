import Navbar from "../Navbar";

import '../../assets/About.css';


function About(){
    return (
        <>
        <Navbar />
         <div className="about-sky">
      <div className="about-card">
        <h2 className="title">About This Todo App</h2>

        <p className="desc">
          This Todo App is built using <strong>React JS</strong>. It helps you
          manage your daily tasks easily. The UI is designed with a soft
          sky-themed color style to give a clean and refreshing experience.
        </p>

        <h3 className="sub-title"> React Concepts Used</h3>

        <ul className="list">
          <li><strong>Components:</strong> Reusable UI pieces.</li>
          <li><strong>useState:</strong> Stores and updates tasks dynamically.</li>
          <li><strong>Events:</strong> Handles adding and deleting tasks.</li>
    
        </ul>
        <p className="desc">
          This project helps understand how React updates UI automatically when
          data changes and teaches the basics of state & event handling.
        </p>
      </div>
    </div>
        </>
    
  );
}

export default About;