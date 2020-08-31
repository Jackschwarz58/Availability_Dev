import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container text-center">
        <span className="text-muted thinner-text">
          Feedback? Contact Me at:{" "}
          <a href="mailto:jackdevfeedback@gmail.com">
            JackDevFeedback@gmail.com
          </a>
          .
        </span>
      </div>
    </footer>
  );
};

export default Footer;
