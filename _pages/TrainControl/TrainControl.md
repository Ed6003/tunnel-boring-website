---
title: Train Control
layout: single
permalink: /portfolio/train-control
collection: portfolio
entries_layout: grid
#classes: wide # Remove if adding sticky TOC
header:
  overlay_image: /_pages/TrainControl/Train-Control-Splash.png
  image_description: "Schematic of Train Control Circuitry"
pagination: 
  enabled: true
tags:
  - Arduino
  - Motor Control
  - RF Communication
  - Sensors Integration
author_profile: true
toc: true
toc_sticky: true
toc_label: "Contents"
toc_icon: "cog"
---

# Custom Train Control Using RF-Transmitted PWM

Developed **custom train control** using **RF-transmitted PWM values** for variable speed. Integrated **colour** and **distance sensors** boolean logic into motor functions, employing **H-bridge connections** for motor control.

## Key Contributions

- Created logic for motor control from **colour** and **ultrasonic sensors**.
- Effectively used **Arduino IDE** to write, debug, and deploy code.

## Responsibilities

- Wrote **code logic**, including **variable speed control**.
- Annotated the code with **comprehensive comments**.
- Presented a **full code overview**.

## Key Skills Developed

- **Optimised responsiveness** by employing a **bottom-level delay approach**.
- Fixed a **bug** where the code would stop updating components.
- Handled **exceptions** in Arduino.

## Annotated 3D Circuit

Each component or feature has its own `void` function to **optimise code readability**. The definitions for these functions are shown in the annotation below. The full train and controller code calls these functions.

<div class="sketchfab-embed-wrapper" style="width: 100%; height: 60vh; margin: 0; padding: 0; display: flex; justify-content: center; align-items: center;">
    <iframe title="Train Circuitry" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/3f947abe170e499484fe21ffa887a40a/embed?annotations_visible=1" style="width: 100%; height: 100%; border: none;"></iframe>
</div>

### Annotated Train Code (Arduino Mega 2560)

```cpp
void loop() {
  if (radio.available()) {
    radio.read(&xMap, sizeof(xMap));
    radio.read(&yMap, sizeof(yMap));
    radio.read(&button, sizeof(button));

    float x = xMap;
    float y = yMap;

    if (x < -50) { // Dead zone buffer of 50
      motorsbackward(x * -1); // Reverses speed if negative
    } else if (x > 50) {
      motorsforward(x); // x is the analog speed input
    } else {
      motorstop(); // Turns off motor if in buffer zone
    }

    switch (button) { // Button controls
      case 1: // Short click
        electro(); // Toggles electromagnet
        break;
      case 2: // Long click
        smoker(); // Toggles atomiser
        servo();  // Toggles servo
        break;
      default:
        break;
    } // Switch-case handles all edge conditions
  }

  delay(10); // Compromises reactiveness for power usage
}
```