import React from "react";
import "./MotivationalSection.css";

function MotivationalSection() {
  return (
    <div className="motivational-section">
      <h2>Reclaim Your Focus and Time</h2>
      <blockquote>
        "The greatest glory in living lies not in never falling, but in rising
        every time we fall."
        <cite>- Nelson Mandela</cite>
      </blockquote>
      <p>
        Every moment you resist an urge, you strengthen your resolve and move
        closer to your goals. You are building a stronger, more disciplined
        version of yourself.
      </p>
      <h3>Pathways to a Healthier Mind:</h3>
      <ul>
        <li>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Understanding Compulsive Behaviors
          </a>
        </li>
        <li>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Strategies for Digital Detox
          </a>
        </li>
        <li>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Building Positive Habits
          </a>
        </li>
      </ul>
    </div>
  );
}

export default MotivationalSection;
