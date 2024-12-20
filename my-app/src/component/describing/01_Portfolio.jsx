import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import './01_Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="portfolio-content">
        <img
          className="profile-pic"
          src="https://via.placeholder.com/150" // Replace with your image URL
          alt="Your Name"
        />
        <div className="text-content">
          <h1>Rishta Kaushal Vishwakarma</h1>
          <ReactTypingEffect
            text={[
              "Hi, I'm a passionate developer with experience in web development and design.",
              "I specialize in creating responsive, user-friendly websites and web applications.",
              "Let's build something amazing together!"
            ]}
            speed={50}
            eraseSpeed={30}
            eraseDelay={2000}
            typingDelay={500}
            cursorRenderer={cursor => <h1>{cursor}</h1>}
            displayTextRenderer={(text, i) => {
              return (
                <p>
                  {text.split('').map((char, i) => {
                    const key = `${i}`;
                    return (
                      <span key={key} style={i % 2 === 0 ? { color: 'magenta'} : {}}>
                        {char}
                      </span>
                    );
                  })}
                </p>
              );
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
