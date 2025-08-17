import React, { useState } from "react";
import "./HelpMeNow.css";

function HelpMeNow() {
  const [showBreathing, setShowBreathing] = useState(false);
  const [showDistraction, setShowDistraction] = useState(false);

  const handleBreathingClick = () => {
    setShowBreathing(!showBreathing);
    setShowDistraction(false); // Hide other sections
  };

  const handleDistractionClick = () => {
    setShowDistraction(!showDistraction);
    setShowBreathing(false); // Hide other sections
  };

  return (
    <div className="help-me-now">
      <h2>Immediate Support to Redirect Your Focus</h2>
      <div className="buttons-container">
        <button onClick={handleBreathingClick}>Mindful Breathing</button>
        <button onClick={handleDistractionClick}>Engage Your Mind</button>
      </div>

      {showBreathing && (
        <div className="breathing-content">
          <h3>Focus on Your Breath:</h3>
          <p>Breathe in deeply through your nose for a count of 4.</p>
          <p>Hold your breath for a count of 4.</p>
          <p>Exhale slowly through your mouth for a count of 6.</p>
          <p>Repeat this cycle 5-10 times. Feel the calm.</p>
        </div>
      )}

      {showDistraction && (
        <div className="distraction-content">
          <h3>Shift Your Thoughts:</h3>
          <p>Can you list 7 different types of trees or flowers you know?</p>
          <p>
            Describe in detail your favorite memory. What did you see, hear, and
            feel?
          </p>
          <p>Count backwards from 100 by 7s. (100, 93, 86...)</p>
        </div>
      )}
    </div>
  );
}

export default HelpMeNow;
