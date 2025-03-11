// import React from "react";

// const HomePage = () => {
//   return (
//     <div>
//       {/* Navigation Bar */}
//       <nav className="navbar">
//         <div className="logo">Citizen Feedback</div>
//         <ul>
//           <li><a href="#home">Home</a></li>
//           <li><a href="#report">Report Issue</a></li>
//           <li><a href="#track">Track Complaint</a></li>
//           <li><a href="#admin">Admin Login</a></li>
//         </ul>
//       </nav>

//       {/* Hero Section */}
//       <header className="hero">
//         <h1>Report Issues in Your City with AI Assistance</h1>
//         <p>Help improve your city by reporting and tracking issues in real time.</p>
//         <a href="#report" className="btn">Report an Issue</a>
//       </header>

//       {/* How It Works Section */}
//       <section className="how-it-works">
//         <h2>How It Works</h2>
//         <div className="steps">
//           <div className="step">📸 Capture Issue</div>
//           <div className="step">🧠 AI Analyzes It</div>
//           <div className="step">📩 Sent to Officials</div>
//         </div>
//       </section>

//       {/* Top Reported Issues */}
//       <section className="reported-issues">
//         <h2>Trending Issues</h2>
//         <ul>
//           <li>🗑️ Garbage Dump - 120 Upvotes</li>
//           <li>🚧 Pothole - 98 Upvotes</li>
//           <li>💡 Broken Streetlight - 75 Upvotes</li>
//         </ul>
//       </section>

//       {/* Footer */}
//       <footer>
//         <p>&copy; 2025 Citizen Feedback Platform | Contact: support@citizenfeedback.com</p>
//       </footer>
//     </div>
//   );
// };

// export default HomePage;
import React from "react";

const HomePage = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">Citizen Feedback</div>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#report">Report Issue</a></li>
          <li><a href="#track">Track Complaint</a></li>
          <li><a href="#admin">Admin Login</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <h1>AI-Powered Issue Reporting for a Better India</h1>
        <p>
          This platform allows citizens to report civic issues online using AI. 
          Our intelligent system helps analyze and categorize problems, ensuring 
          they reach the appropriate authorities quickly and efficiently.
        </p>
        <a href="#report" className="btn">Report an Issue</a>
      </header>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">📸 Capture Issue</div>
          <div className="step">🧠 AI Analyzes It</div>
          <div className="step">📩 Sent to Officials</div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 Citizen Feedback Platform | Contact: support@citizenfeedback.com</p>
      </footer>
    </div>
  );
};

export default HomePage;
