---
layout: dashboard
title: "Projects"
permalink: /projects/
author_profile: false
---

<section class="page-hero page-hero--compact">
  <p class="eyebrow">Projects</p>
  <h1>Research prototypes, edge deployments, and robotics systems.</h1>
  <p>Filter the work by category, then open each project block for media paths, demo links, and implementation context.</p>
</section>

<section class="filter-bar" aria-label="Project filters">
  <button class="is-active" type="button" data-filter="all">All</button>
  <button type="button" data-filter="research">Research</button>
  <button type="button" data-filter="engineering">Engineering</button>
</section>

<section class="project-grid project-grid--wide" id="project-grid">
  {% for project in site.data.projects %}
    {% include project-card.html project=project %}
  {% endfor %}
</section>

<section class="project-detail-list" aria-label="Project details">
  {% for project in site.data.projects %}
    <article class="project-detail" id="{{ project.id }}" data-category="{{ project.category | downcase }}">
      <div class="project-detail__media media-frame">
        <div class="media-placeholder">
          <span>{{ project.status }}</span>
          <strong>Add media at {{ project.image }}</strong>
        </div>
        {% if project.video %}
          <video controls preload="metadata" poster="{{ project.image }}">
            <source src="{{ project.video }}" type="video/mp4">
          </video>
        {% endif %}
        {% if project.image %}
          <img src="{{ project.image }}" alt="{{ project.title }} main visual" loading="lazy">
        {% endif %}
      </div>
      <div class="project-detail__content">
        <p class="eyebrow">{{ project.organization }} - {{ project.period }}</p>
        <h2>{{ project.title }}</h2>
        <p>{{ project.summary }}</p>
        <p><strong>Main result:</strong> {{ project.impact }}</p>
        <div class="project-card__tags">
          {% for tag in project.tags %}
            <span>{{ tag }}</span>
          {% endfor %}
        </div>
        {% if project.links %}
          <div class="inline-links">
            {% for link in project.links %}
              <a href="{{ link.url }}">{{ link.label }}</a>
            {% endfor %}
          </div>
        {% endif %}
        <div class="path-note">
          <code>images/projects/{{ project.id }}/main.jpg</code>
          <code>video/projects/{{ project.id }}/demo_1.mp4</code>
        </div>
      </div>
    </article>
  {% endfor %}
</section>
