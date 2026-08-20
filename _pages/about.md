---
permalink: /
title: "Dang Le Khanh Toan"
layout: dashboard
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

{% assign profile = site.data.profile %}

<section class="hero-dashboard" aria-labelledby="hero-title">
  <div class="hero-dashboard__copy">
    <p class="eyebrow">Research dashboard</p>
    <h1 id="hero-title">{{ profile.name }} <span>({{ profile.preferred_name }})</span></h1>
    <p class="hero-dashboard__headline">{{ profile.headline }}</p>
    <p class="hero-dashboard__summary">{{ profile.summary }}</p>
    <div class="hero-dashboard__actions" aria-label="Primary links">
      <a class="btn btn--primary" href="/projects/">Explore Projects</a>
      <a class="btn btn--inverse" href="/cv/">Interactive CV</a>
      <a class="btn" href="mailto:{{ profile.email }}">Email Me</a>
    </div>
  </div>
  <aside class="status-panel" aria-label="Current roles">
    <div class="status-panel__topline">
      <span class="status-dot"></span>
      <span>Currently building</span>
    </div>
    {% for item in profile.current %}
      <article>
        <p>{{ item.period }}</p>
        <h2>{{ item.role }}</h2>
        <strong>{{ item.organization }}</strong>
        <span>{{ item.focus }}</span>
      </article>
    {% endfor %}
  </aside>
</section>

<section class="metric-strip" aria-label="Career highlights">
  {% for stat in profile.stats %}
    <article>
      <strong>{{ stat.value }}</strong>
      <span>{{ stat.label }}</span>
      <p>{{ stat.detail }}</p>
    </article>
  {% endfor %}
</section>

<section class="dashboard-section split-section" aria-labelledby="map-title">
  <div>
    <p class="eyebrow">Research map</p>
    <h2 id="map-title">Three lanes: research, engineering, and life.</h2>
    <p>The page is organized like a working lab notebook: technical depth for research visitors, deployable systems for engineering readers, and a human layer for achievements, leadership, and memories.</p>
  </div>
  <div class="lane-map">
    <a href="/publications/" class="lane-card lane-card--research">
      <span>01</span>
      <h3>Research</h3>
      <p>Social navigation, OCR, anomaly detection, trajectory prediction.</p>
    </a>
    <a href="/projects/" class="lane-card lane-card--engineering">
      <span>02</span>
      <h3>Engineering</h3>
      <p>Edge AI, NPU deployment, pose estimation, real-time vision systems.</p>
    </a>
    <a href="/memories/" class="lane-card lane-card--life">
      <span>03</span>
      <h3>Memories</h3>
      <p>Scholarships, volunteer leadership, hiking, trekking, campus milestones.</p>
    </a>
  </div>
</section>

<section class="dashboard-section" aria-labelledby="featured-projects-title">
  <div class="section-heading">
    <div>
      <p class="eyebrow">Featured work</p>
      <h2 id="featured-projects-title">Projects with demos, images, and research context.</h2>
    </div>
    <a href="/projects/">View all</a>
  </div>
  <div class="project-grid project-grid--featured">
    {% for project in site.data.projects limit:3 %}
      {% include project-card.html project=project %}
    {% endfor %}
  </div>
</section>

<section class="dashboard-section split-section" aria-labelledby="timeline-title">
  <div>
    <p class="eyebrow">Timeline</p>
    <h2 id="timeline-title">From HCMUT to deployable AI systems.</h2>
    <p>Hover or focus a milestone to bring it forward. The same timeline feeds the CV page, so new milestones only need one update.</p>
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

<section class="dashboard-section" aria-labelledby="interests-title">
  <p class="eyebrow">Research interests</p>
  <h2 id="interests-title">What I keep returning to.</h2>
  <div class="tag-cloud">
    {% for interest in profile.research_interests %}
      <span>{{ interest }}</span>
    {% endfor %}
  </div>
</section>
