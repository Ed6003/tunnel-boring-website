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
#excerpt: "Welcome to my Portfolio"
intro: 
  - excerpt: 'Nullam suscipit et nam, tellus velit pellentesque at malesuada, enim eaque. Quis nulla, netus tempor in diam gravida tincidunt, *proin faucibus* voluptate felis id sollicitudin. Centered with `type="center"`'
feature_row1:
  - image_path: _pages/Portfolio/WarwickBoringLogo.png
    alt: "Warwick Tunnel Boring Logo"
    title: "Warwick Tunnel Boring"
    excerpt: "This is some sample content that goes here with **Markdown** formatting."
    url: "/portfolio/warwick-tunnel-boring"
    btn_label: "Read More"
    btn_class: "btn--primary"
  - image_path: _pages/Portfolio/WarwickRacingLogo.png
    # image_caption: "Image courtesy of [Unsplash](https://unsplash.com/)"
    alt: "Warwick Racing Logo"
    title: "Warwick Racing"
    excerpt: "This is some sample content that goes here with **Markdown** formatting."
    url: "/portfolio/warwick-racing"
    btn_label: "Read More"
    btn_class: "btn--primary"
feature_row2:
  - image_path: _pages/Portfolio/TrainControl.png
    alt: "Train control circuit schematic top down view"
    title: "Train Control"
    excerpt: 'This is some sample content that goes here with **Markdown** formatting. Left aligned with `type="left"`'
    url: "#test-link" # TO EDIT
    btn_label: "Read More"
    btn_class: "btn--primary"
  - image_path: _pages/Portfolio/SelfBalancingRobot.jpeg
    alt: "Self balancing robot, blue robot with two wheels"
    title: "Self Balancing Robot - PID"
    excerpt: 'This is some sample content that goes here with **Markdown** formatting. Left aligned with `type="left"`'
    url: "#test-link" # TO EDIT
    btn_label: "Read More"
    btn_class: "btn--primary"
  - image_path: _pages/Portfolio/E-Vita.png
    alt: "E-Vita electric boat in the sea, top down view"
    title: "E-Vita Electric Boat"
    excerpt: 'This is some sample content that goes here with **Markdown** formatting. Left aligned with `type="left"`'
    url: "#test-link" # TO EDIT
    btn_label: "Read More"
    btn_class: "btn--primary"
feature_row3:
  - image_path: _pages/Portfolio/Robot-Arm Inverse Kinematics.png
    alt: "PLACEHOLDER"
    title: "Robot Arm - Inverse Kinematics"
    excerpt: 'This is some sample content that goes here with **Markdown** formatting. Left aligned with `type="left"`'
    url: "#test-link" # TO EDIT
    btn_label: "Read More"
    btn_class: "btn--primary"
  - image_path: _pages/Portfolio/RocketSimulationScript.png
    alt: "PLACEHOLDER"
    title: "Matlab Rocket Simulation Script"
    excerpt: 'This is some sample content that goes here with **Markdown** formatting. Left aligned with `type="left"`'
    url: "#test-link" # TO EDIT
    btn_label: "Read More"
    btn_class: "btn--primary"
  - image_path: _pages/Portfolio/SprintPoweredCarModelling.png
    alt: "PLACEHOLDER"
    title: "Physical System Modelling Spring Powered Car"
    excerpt: 'This is some sample content that goes here with **Markdown** formatting. Left aligned with `type="left"`'
    url: "#test-link" # TO EDIT
    btn_label: "Read More"
    btn_class: "btn--primary"
  - image_path: _pages/Portfolio/CADDesignShowcase.png
    alt: "PLACEHOLDER"
    title: "CAD Design Showcase"
    excerpt: 'This is some sample content that goes here with **Markdown** formatting. Left aligned with `type="left"`'
    url: "#test-link" # TO EDIT
    btn_label: "Read More"
    btn_class: "btn--primary"
  - image_path: _pages/Portfolio/JavaSEServerEnvironment.jpg
    alt: "PLACEHOLDER"
    title: "Managing Java SE-based Server Environment"
    excerpt: 'This is some sample content that goes here with **Markdown** formatting. Left aligned with `type="left"`'
    url: "#test-link" # TO EDIT
    btn_label: "Read More"
    btn_class: "btn--primary"
feature_row4:
  - image_path: /assets/images/unsplash-gallery-image-2-th.jpg
    alt: "placeholder image 2"
    title: "Placeholder Image Center Aligned"
    excerpt: 'This is some sample content that goes here with **Markdown** formatting. Centered with `type="center"`'
    url: "#test-link"
    btn_label: "Read More"
    btn_class: "btn--primary"
---

<script src="{{ site.baseurl }}/_pages/Portfolio/app.js" defer></script>
<script src="{{ site.baseurl }}/_pages/Portfolio/auto-resize.js" defer></script>
<!-- The types are type = center, left, right and there's another one where there's none -->

{% include feature_row id="intro" type="center" %}

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