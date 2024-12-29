---
title: "Portfolio"
layout: splash-custom
permalink: /portfolio/
header:
  particles: true
  overlay_color: "#000"
  # actions:
  #   - label: "Download"
  #     url: "https://github.com/mmistakes/minimal-mistakes/"
#excerpt: "Welcome to my !Portfolio"
intro: 
  - excerpt: 'Nullam suscipit et nam, tellus velit pellentesque at malesuada, enim eaque. Quis nulla, netus tempor in diam gravida tincidunt, *proin faucibus* voluptate felis id sollicitudin. Centered with `type="center"`'
feature_row1:
  - image_path: _pages/!Portfolio/WarwickBoringLogo.png
    alt: "Warwick Tunnel Boring Logo"
    title: "Warwick Tunnel Boring"
    excerpt: "**2.5+  Years** on CAD and Simulations at Warwick Tunnel Boring. The only UK student team with a TBM and participant at the Not-a-Boring-Competition."
    url: "/portfolio/warwick-tunnel-boring"
    btn_label: "Read More"
    btn_class: "btn--primary"
  - image_path: _pages/!Portfolio/WarwickRacingLogo.png
    # image_caption: "Image courtesy of [Unsplash](https://unsplash.com/)"
    alt: "Warwick Racing Logo"
    title: "Warwick Racing"
    excerpt: "**1+  Years** as Finite Element Lead at Warwick Racing."
    url: "/portfolio/warwick-racing"
    btn_label: "Read More"
    btn_class: "btn--primary"
feature_row2:
  - image_path: _pages/!Portfolio/TrainControl.png
    alt: "Train control circuit schematic top down view"
    title: "Train Control"
    excerpt: 'Developed custom train control using **RF-transmitted PWM values** for variable speed. Integrated color and
distance sensors’ boolean logic into motor functions, employing **H-bridge connections** for motor control'
    url: "/portfolio/train-control" # TO EDIT
    btn_label: "Read More"
    btn_class: "btn--primary"
  - image_path: _pages/!Portfolio/SelfBalancingRobot.jpeg
    alt: "Self balancing robot, blue robot with two wheels"
    title: "Self Balancing Robot - PID"
    excerpt: 'Tuned and **compiled** a PID from **Simulink** to **Arduino Mega** using optimised **C++** Simulink code generation.'
    url: "/portfolio/self-balancing-robot" # TO EDIT
    btn_label: "Read More"
    btn_class: "btn--primary"
  - image_path: _pages/!Portfolio/E-Vita.png
    alt: "E-Vita electric boat in the sea, top down view"
    title: "E-Vita Electric Boat"
    excerpt: 'Used **photogrammetry** to **reverse engineer** a retrieved boat to substitute an **electric powertrain.**'
    url: "/portfolio/EV-Ita-electric-boat" # TO EDIT
    btn_label: "Read More"
    btn_class: "btn--primary"
feature_row3:
  - image_path: _pages/!Portfolio/Robot-Arm Inverse Kinematics.png
    alt: "PLACEHOLDER"
    title: "Virtual Robot Arm - Inverse Kinematics"
    excerpt: 'Virtual robot arm with **inverse kinematics.** Visualised and created in Blender / Python. Constrained to 5 degrees of freedom.'
    url: "/portfolio/virtual-robot-arm" # TO EDIT
    btn_label: "Read More"
    btn_class: "btn--primary"
  - image_path: _pages/!Portfolio/RocketSimulationScript.png
    alt: "PLACEHOLDER"
    title: "Matlab Rocket Simulation Script"
    excerpt: 'Created a water rocket simulation script in MATLAB using **iterative equations,** automatically scaling arrays.
Models the entire rocket path, subdivided into: **thrust phase, deceleration phase** then **parachute phase.**'
    url: "/portfolio/matlab-rocket-simulation-script" # TO EDIT
    btn_label: "Read More"
    btn_class: "btn--primary"
  - image_path: _pages/!Portfolio/SprintPoweredCarModelling.png
    alt: "PLACEHOLDER"
    title: "Physical System Modelling Spring Powered Car"
    excerpt: 'Integrated **Simulink** and **Simscape** node based coding to **simulate all car subsystems:** drivetrain, axles,
wheels and gearbox. Accounting for tire friction and air resistance, linear inertia and wheel polar inertia.'
    url: "/portfolio/spring-powered-car-physical-system-modelling" # TO EDIT
    btn_label: "Read More"
    btn_class: "btn--primary"
  - image_path: _pages/!Portfolio/CADDesignShowcase.png
    alt: "PLACEHOLDER"
    title: "CAD Design Showcase"
    excerpt: 'Designed **technical drawings** with machining annotations for manufacturer including **tolerances.** Animated a
single cylinder motorbike engine, **modelled** the engine’s piston head and a racing simulator rig, made **3D renders.**
'
    url: "/portfolio/cad-design-showcase" # TO EDIT
    btn_label: "Read More"
    btn_class: "btn--primary"
  - image_path: _pages/!Portfolio/JavaSEServerEnvironment.jpg
    alt: "PLACEHOLDER"
    title: "Managing Java SE-based Server Environment"
    excerpt: 'Supervised self-hosted Java server with **SFTP** protocol, setup node based permissions and **API integrations.**'
    url: "/portfolio/managing-java-se-based-server-environment" # TO EDIT
    btn_label: "Read More"
    btn_class: "btn--primary"
feature_row4:
  - image_path: _pages/!Portfolio/Photogrammetry.png
    alt: "PLACEHOLDER"
    title: "Photogrammetry"
    excerpt: ''
    url: "/portfolio/photogrammetry" # TO EDIT
    btn_label: "Read More"
    btn_class: "btn--primary"
  - image_path: _pages/!Portfolio/UGC.png
    alt: "PLACEHOLDER"
    title: "User Generated Content"
    excerpt: ''
    url: "/portfolio/user-generated-content" # TO EDIT
    btn_label: "Read More"
    btn_class: "btn--primary"
  - image_path: _pages/!Portfolio/GameAssets.png
    alt: "PLACEHOLDER"
    title: "Game Assets"
    excerpt: ''
    url: "/portfolio/game-assets" # TO EDIT
    btn_label: "Read More"
    btn_class: "btn--primary"
feature_row5:
  - image_path: /assets/images/unsplash-gallery-image-2-th.jpg
    alt: "placeholder image 2"
    title: "Placeholder Image Center Aligned"
    excerpt: 'This is some sample content that goes here with **Markdown** formatting. Centered with `type="center"`'
    url: "#test-link"
    btn_label: "Read More"
    btn_class: "btn--primary"
---

<script src="{{ site.baseurl }}/_pages/!Portfolio/app.js" defer></script>
<script src="{{ site.baseurl }}/_pages/!Portfolio/auto-resize.js" defer></script>
<!-- The types are type = center, left, right and there's another one where there's none -->

<!-- {% include feature_row id="intro" type="center" %} -->

<div style="text-align: center;">
  <h1>Student Projects</h1>
</div>

{% include feature_row id="feature_row1" type="center" %}

<div style="text-align: center;">
  <h1>Team Projects</h1>
</div>

{% include feature_row id="feature_row2" %}

<div style="text-align: center;">
  <h1>Personal Projects</h1>
</div>

{% include feature_row id="feature_row3" %}

<div style="text-align: center;">
  <h1>3D Modelling</h1>
</div>

{% include feature_row id="feature_row4" %}