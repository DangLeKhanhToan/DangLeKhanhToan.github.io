---
layout: dashboard
title: "Memories"
permalink: /memories/
author_profile: false
---

<section class="page-hero page-hero--compact">
  <p class="eyebrow">Memories</p>
  <h1>Achievements, leadership, hiking, trekking, and personal notes.</h1>
  <p>This section is for the parts of the story that do not fit into a publication list: community work, trips, milestones, and things worth remembering.</p>
</section>

<section class="memory-grid">
  {% for memory in site.data.memories %}
    <article class="memory-card">
      <div class="media-frame">
        <div class="media-placeholder">
          <span>{{ memory.category }}</span>
          <strong>{{ memory.title }}</strong>
        </div>
        <img src="{{ memory.image }}" alt="{{ memory.title }} preview" loading="lazy">
      </div>
      <div>
        <p class="eyebrow">{{ memory.category }}</p>
        <h2>{{ memory.title }}</h2>
        <p>{{ memory.summary }}</p>
        <code>{{ memory.image }}</code>
      </div>
    </article>
  {% endfor %}
</section>

<section class="dashboard-section">
  <p class="eyebrow">Achievements</p>
  <h2>Highlights to keep visible.</h2>
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
