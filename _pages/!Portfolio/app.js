/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)...
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});

/* Otherwise just put the config content (json): */

// Function to calculate a fraction of the screen width
// Debounce function to limit the rate of function execution
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
      const later = () => {
          clearTimeout(timeout);
          func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
  };
}

// Function to calculate a fraction of the screen width
function getFractionOfScreenWidth(fraction) {
  // Validate the input to ensure it's a number between 0 and 1
  if (typeof fraction !== 'number' || fraction <= 0 || fraction >= 1) {
      console.error('Invalid fraction value. Please provide a number between 0 and 1.');
      return null; // Return null or handle the error as needed
  }

  // Get the current screen width
  const screenWidth = window.innerWidth;

  // Calculate the fraction of the screen width
  const calculatedValue = screenWidth * fraction;

  // Ensure it's an integer
  return Math.floor(calculatedValue); // Use Math.ceil() or Math.round() if needed
}

// Initialize particlesJS with the current configuration
function initParticlesJS(repulseDistance,Density) {
  particlesJS('particles-js', {
      "particles": {
          "number": {
              "value": 120,
              "density": {
                  "enable": true,
                  "value_area": Math.floor(Density)
              }
          },
          "color": {
              "value": "#ffffff"
          },
          "shape": {
              "type": "circle",
              "stroke": {
                  "width": 0,
                  "color": "#000000"
              },
              "polygon": {
                  "nb_sides": 5
              },
              "image": {
                  "src": "img/github.svg",
                  "width": 100,
                  "height": 100
              }
          },
          "opacity": {
              "value": 0.5,
              "random": false,
              "anim": {
                  "enable": false,
                  "speed": 1,
                  "opacity_min": 0.1,
                  "sync": false
              }
          },
          "size": {
              "value": 5,
              "random": true,
              "anim": {
                  "enable": false,
                  "speed": 40,
                  "size_min": 0.1,
                  "sync": false
              }
          },
          "line_linked": {
              "enable": true,
              "distance": 150,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1
          },
          "move": {
              "enable": true,
              "speed": 6,
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "out",
              "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
              }
          }
      },
      "interactivity": {
          "detect_on": "window",
          "events": {
              "onhover": {
                  "enable": true,
                  "mode": "repulse"
              },
              "onclick": {
                  "enable": true,
                  "mode": "push"
              },
              "resize": true
          },
          "modes": {
              "grab": {
                  "distance": 400,
                  "line_linked": {
                      "opacity": 1
                  }
              },
              "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 8,
                  "speed": 3
              },
              "repulse": {
                  "distance": Math.floor(repulseDistance) // Use the dynamic variable
              },
              "push": {
                  "particles_nb": 4
              },
              "remove": {
                  "particles_nb": 2
              }
          }
      },
      "retina_detect": true,
      "config_demo": {
          "hide_card": false,
          "background_color": "#b61924",
          "background_image": "",
          "background_position": "50% 50%",
          "background_repeat": "no-repeat",
          "background_size": "cover"
      }
  });
}

// Call initParticlesJS when the document is ready
document.addEventListener('DOMContentLoaded', () => {
  const initialRepulseDistance = getFractionOfScreenWidth(0.2);
  const initialDensity = getFractionOfScreenWidth(0.6);
  initParticlesJS(initialRepulseDistance,initialDensity); // Initialize particles on page load

  // Update the repulse distance on window resize with debounce
  window.addEventListener('resize', debounce(() => {
      const newRepulseDistance = getFractionOfScreenWidth(0.2);
      const newDensity = getFractionOfScreenWidth(0.6);
      initParticlesJS(newRepulseDistance,newDensity); // Reinitialize with new values
  }, 100)); // 100 ms delay
});