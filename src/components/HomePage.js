import React from "react";
import "./HomePage.css";
import MotivationalSection from "./MotivationalSection";
import HelpMeNow from "./HelpMeNow";

function HomePage() {
  return (
    <div className="home-page">
      <div className="unlust-header">
        <img src="/icon.png" alt="Unlust Logo" className="unlust-logo-image" />
        <h1 className="unlust-logo">
          <span>UN</span>LUST
        </h1>
      </div>
      <div className="blocked-message">
        <h1>Access Denied: Choose Growth Over Instant Gratification</h1>
        <p>
          This site has been blocked to help you maintain focus, protect your
          well-being, and support your journey towards a healthier habit.
          Engaging with such content can derail your progress and lead to
          feelings of regret.
        </p>
        <p className="insist-message">
          **Your resolve is stronger than this urge. Do NOT proceed.**
        </p>
        <button
          className="return-button"
          onClick={() =>
            (window.location.href = "https://unlustapp.com/app")
          } /* TODO: Link to Unlust app if it exists */
        >
          Open Unlust app to resist urge
        </button>
      </div>
      <MotivationalSection />
      <HelpMeNow />
      {/* Further content will be added here */}
    </div>
  );
}

export default HomePage;
