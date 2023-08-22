import React from 'react';
import ReactDOM from 'react-dom';
import './app.css'; from './app.css';

const App = () => {
  return (
    <div>
      <header>
        <h1>Welcome to My Portfolio</h1>
      </header>
      <main>
        <section className="introduction">
          <h2>Greetings! My name is Tommy Ho</h2>
          <p>
            I am a passionate front-end developer with a strong affinity for crafting immersive digital experiences.
            With a keen eye for design and a deep understanding of HTML, CSS, and JavaScript,
            I thrive on bringing static ideas to life through interactive and responsive websites.
          </p>
          <p>
            Drawing inspiration from both aesthetics and functionality,
            I aspire to further expand my skill set by delving into modern frameworks such as React and Vue.js,
            in order to create seamless and dynamic user interfaces.
          </p>
          <p>
            Driven by an insatiable curiosity, I am committed to staying at the forefront of evolving web technologies,
            ensuring that my work remains innovative, impactful, and user-centered.
          </p>
        </section>
      </main>
      <footer>
        <p>Contact me at: example@email.com</p>
      </footer>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));


