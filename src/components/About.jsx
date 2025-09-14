import React from "react";

const About = () => {
  return (
    <div className="about-page">
      <h1>About Skill Swap</h1>
      <p>
        <strong>Skill Swap</strong> is a platform built by passionate developer{" "}
        <strong>Ishan</strong> with a simple mission: connect people through the
        power of **skills**. Whether you're a coder, designer, musician, or
        magician 🪄 — this space helps you showcase your expertise and discover
        others you can learn from or collaborate with.
      </p>

      <h2>Why I Built This 👨‍💻</h2>
      <p>
        As someone deeply into programming, problem-solving, and exploring tech,
        I wanted to create a project that wasn’t just about CRUD operations —
        but also about building real-world connections around skills.
        <br />
        So, instead of just another portfolio app, I built a full-stack MERN
        project with user authentication, dynamic skill sharing, and future
        plans for one-to-one **skill swapping** logic 🚀
      </p>

      <h2>Tech Stack 🛠️</h2>
      <ul>
        <li>
          <strong>Frontend:</strong> React + React Router + Toastify
        </li>
        <li>
          <strong>Backend:</strong> Node.js + Express
        </li>
        <li>
          <strong>Database:</strong> MongoDB + Mongoose
        </li>
        <li>
          <strong>Auth:</strong> JWT-based authentication
        </li>
      </ul>

      <h2>What's Coming Next 🌱</h2>
      <ul>
        <li>
          🔄 Skill swap matching system (match people who need & offer
          complementary skills)
        </li>
        <li>🧭 User dashboards with analytics</li>
        <li>📧 Direct messaging between users</li>
        <li>🎨 Skill tags & categories for better discovery</li>
      </ul>

      <h2>Connect with Me 🤝</h2>
      <p>
        Have feedback, ideas, or just wanna geek out about tech or space stuff?
        Feel free to{" "}
        <a href="mailto:ishan23vyas@gmail.com">shoot me an email</a> or connect
        via the Contact page.
        <br />
        Let’s learn. Let’s grow. Let’s swap skills 🔁
      </p>
    </div>
  );
};

export default About;
