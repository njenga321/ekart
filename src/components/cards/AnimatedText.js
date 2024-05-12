import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import './AnimatedText.css';

function AnimatedText() {
  useEffect(() => {
    const textAnimation = gsap.timeline({ repeat: -1 });

    // Statements to animate
    const statements = [
      'Upgrade. Simplify. Enjoy.',
      'Gear Up. Get Going Today',
      'Free Delivry!!',
    ];

    // Loop through each statement
    statements.forEach((statement, index) => {
      // Add a delay of 5 seconds before each statement
      textAnimation.add(() => animateText(statement), index * 5);
    });

    function animateText(text) {
      const linesContainer = document.querySelector('.lines-container');
      linesContainer.innerHTML = '';

      // Split the text into lines based on a maximum number of characters
      const maxCharactersPerLine = 30; // Adjust as needed
      const words = text.split(' ');
      let currentLine = '';
      words.forEach((word, index) => {
        if (currentLine.length + word.length <= maxCharactersPerLine) {
          // Add word to current line
          currentLine += (currentLine === '' ? '' : ' ') + word;
        } else {
          // Create div element for current line
          const lineElement = document.createElement('div');
          lineElement.classList.add('line');
          lineElement.textContent = currentLine;
          linesContainer.appendChild(lineElement);

          // Start a new line with current word
          currentLine = word;
        }

        // Add the last line
        if (index === words.length - 1) {
          const lineElement = document.createElement('div');
          lineElement.classList.add('line');
          lineElement.textContent = currentLine;
          linesContainer.appendChild(lineElement);
        }
      });

      // Animate each line
      gsap.from('.line', {
        opacity: 0,
        y: 100,
        duration: 0.5,
        stagger: 0.2,
      });
    }
  }, []);

  return (
    <div className="wrapper">
      <div className="lines-container"></div>
    </div>
  );
}

export default AnimatedText;
