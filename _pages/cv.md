---
layout: dashboard
title: "CV"
permalink: /cv/
author_profile: false
redirect_from:
  - /resume
---

{% assign profile = site.data.profile %}

<section class="page-hero page-hero--compact">
  <p class="eyebrow">Interactive CV</p>
  <h1>{{ profile.name }}</h1>
  <p>{{ profile.summary }}</p>
  <div class="hero-dashboard__actions">
    <a class="btn btn--primary" href="mailto:{{ profile.email }}">Contact</a>
    <a class="btn" href="https://github.com/{{ profile.github }}">GitHub</a>
  </div>
</section>

<section class="cv-grid">
  <article class="cv-panel cv-panel--large">
    <p class="eyebrow">Experience</p>
    {% for item in profile.current %}
      <div class="cv-row">
        <span>{{ item.period }}</span>
        <div>
          <h2>{{ item.role }}</h2>
          <strong>{{ item.organization }}</strong>
          <p>{{ item.focus }}</p>
        </div>
      </div>
    {% endfor %}
    <div class="cv-row">
      <span>May 2024 - Aug 2024</span>
      <div>
        <h2>AI Engineer Intern</h2>
        <strong>Optima Robotics Joint Stock Company</strong>
        <p>Computer vision, object detection, face recognition, MQTT, and edge deployment for robotic applications.</p>
      </div>
    </div>
  </article>

  <article class="cv-panel">
    <p class="eyebrow">Education</p>
    <h2>Ho Chi Minh City University of Technology</h2>
    <p>Bachelor in Control Engineering and Automation, Honor Program.</p>
    <p><strong>Aug 2021 - May 2025 - GPA 3.5/4.0</strong></p>
  </article>
</section>

<section class="dashboard-section">
  <p class="eyebrow">Skills</p>
  <h2>Technical stack</h2>
  <div class="skill-grid">
    {% for group in site.data.skills %}
      <article>
        <h3>{{ group.group }}</h3>
        <div class="tag-cloud tag-cloud--small">
          {% for item in group.items %}
            <span>{{ item }}</span>
          {% endfor %}
        </div>
      </article>
    {% endfor %}
  </div>
</section>

<section class="dashboard-section split-section">
  <div>
    <p class="eyebrow">Milestones</p>
    <h2>Academic and engineering timeline.</h2>
  </div>
  <div class="timeline-rail">
    {% for item in site.data.timeline %}
      <article tabindex="0">
        <span>{{ item.year }}</span>
        <h3>{{ item.title }}</h3>
        <p>{{ item.detail }}</p>
      </article>
    {% endfor %}
  </div>
</section>

<section class="dashboard-section">
  <p class="eyebrow">Achievements</p>
  <h2>Scholarships, leadership, and certificates.</h2>
  <div class="achievement-grid">
    {% for item in site.data.achievements %}
      <article>
        <span>{{ item.group }}</span>
        <h3>{{ item.title }}</h3>
        <p>{{ item.detail }}</p>
      </article>
    {% endfor %}
  </div>
</section>
