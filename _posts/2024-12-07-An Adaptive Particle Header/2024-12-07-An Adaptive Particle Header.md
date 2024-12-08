---
title: An Adaptive Particle Header
date: 2024-12-07
layout: single-custom
entries_layout: grid
#classes: wide
#header:
#  overlay_image: /assets/Portfolio/WarwickTunnelBoring/Warwick-Boring-Splash.jpg
#  image_description: "Tunnel Interior Splash Screen"
pagination: 
  enabled: true
tags:
  - "Jekyll"
  - "JavaScript"
  - "Coding"
  - "Web Design"
author_profile: true
header:
  particles: true
  overlay_color: "#000"
toc: true
toc_sticky: true
toc_label: "Contents"
toc_icon: "cog"
tagline: ""
---

# Creating Dynamic Particle Effects with JavaScript

<script src="{{ site.baseurl }}/assets/js/custom/app.js" defer></script>
<script src="{{ site.baseurl }}/assets/js/custom/auto-resize.js" defer></script>

In this article, we will explore how to create dynamic particle effects using the `particles.js` library combined with JavaScript. We will discuss how to calculate screen dimensions, implement responsive design, and ensure smooth interactions using debouncing techniques.

This header was made for the [Portfolio](/portfolio) page.

## Overview of the Code

The following code initialises and manages a particle system that responds to screen size changes. It adapts the repulsion distance and density of particles based on the viewport width, ensuring a visually appealing experience across different devices. Without this addition a fixed density and repulse distance will appear not dense enough and with too high of a repulsion on mobile devices.

Instead these can be adaptively changed based on screen size. Thanks to the callback function on screen resize this can happen while the page is loaded as well.

### Code Breakdown

Here’s the complete code we will analyse:

```javascript
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
    if (typeof fraction !== 'number' || fraction <= 0 || fraction >= 1) {
        console.error('Invalid fraction value. Please provide a number between 0 and 1.');
        return null; // Return null or handle the error as needed
    }

    const screenWidth = window.innerWidth;
    const calculatedValue = screenWidth * fraction;
    return Math.floor(calculatedValue); // Return an integer
}

// Initialize particlesJS with the current configuration
function initParticlesJS(repulseDistance, Density) {
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
    initParticlesJS(initialRepulseDistance, initialDensity); // Initialize particles on page load

    // Update the repulse distance on window resize with debounce
    window.addEventListener('resize', debounce(() => {
        const newRepulseDistance = getFractionOfScreenWidth(0.2);
        const newDensity = getFractionOfScreenWidth(0.6);
        initParticlesJS(newRepulseDistance, newDensity); // Reinitialize with new values
    }, 100)); // 100 ms delay
});
```

### Detailed Explanation

#### 1. **Debounce Function**
The `debounce` function ensures that a function (e.g., resizing) does not get called too frequently. It delays the execution until after a specified wait time has passed since the last time it was invoked.

```javascript
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
```

#### 2. **Get Fraction of Screen Width**
This function calculates a fraction of the current screen width. It validates the input and ensures that the return value is an integer.

```javascript
function getFractionOfScreenWidth(fraction) {
    if (typeof fraction !== 'number' || fraction <= 0 || fraction >= 1) {
        console.error('Invalid fraction value. Please provide a number between 0 and 1.');
        return null;
    }

    const screenWidth = window.innerWidth;
    return Math.floor(screenWidth * fraction); // Return the calculated integer
}
```

#### 3. **Initialising Particles**
The `initParticlesJS` function initialises the particle system using the `particles.js` library, configuring properties such as number, density, color, shape, opacity, sise, movement, and interactivity based on the parameters passed.

```javascript
function initParticlesJS(repulseDistance, Density) {
    particlesJS('particles-js', {
        // Configuration goes here...
    });
}
```

#### 4. **Event Listeners**
The code sets up an event listener for when the document is fully loaded. It calculates the initial values for repulse distance and density, then initialises the particles.

```javascript
document.addEventListener('DOMContentLoaded', () => {
    const initialRepulseDistance = getFractionOfScreenWidth(0.2);
    const initialDensity = getFractionOfScreenWidth(0.6);
    initParticlesJS(initialRepulseDistance, initialDensity); // Initialize particles on page load
```

It also adds a resize event listener that uses the debounce function to reinitialise the particles with new values whenever the window is resized.

```javascript
    window.addEventListener('resize', debounce(() => {
        const newRepulseDistance = getFractionOfScreenWidth(0.2);
        const newDensity = getFractionOfScreenWidth(0.6);
        initParticlesJS(newRepulseDistance, newDensity); // Reinitialize with new values
    }, 100)); // 100 ms delay
});
```