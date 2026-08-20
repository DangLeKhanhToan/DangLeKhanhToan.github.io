---
layout: dashboard
title: "Blog"
permalink: /blog/
author_profile: false
---

<section class="page-hero page-hero--compact">
  <p class="eyebrow">Blog</p>
  <h1>Research notes, engineering logs, and field reflections.</h1>
  <p>A place for paper reading notes, deployment lessons, robotics experiments, and personal writing.</p>
</section>

<section class="blog-board">
  <article>
    <span>Research Notes</span>
    <h2>Socially-aware navigation and multimodal learning</h2>
    <p>Use this category for paper summaries, experiment notes, and open questions from ARENA Lab work.</p>
  </article>
  <article>
    <span>Engineering Logs</span>
    <h2>Edge AI deployment and optimization</h2>
    <p>Use this category for NPU deployment lessons, model compression, profiling, and debugging notes.</p>
  </article>
  <article>
    <span>Personal</span>
    <h2>Hiking, trekking, and reflection</h2>
    <p>Use this category for memory posts that deserve more text than a gallery card.</p>
  </article>
</section>

<section class="publication-list">
  {% assign posts_count = site.posts | size %}
  {% if posts_count > 0 %}
    {% for post in site.posts %}
      <article class="publication-card">
        <div>
          <p class="eyebrow">{{ post.date | date: "%b %-d, %Y" }}</p>
          <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
          <p>{{ post.excerpt | strip_html | truncate: 180 }}</p>
        </div>
        <div class="publication-card__actions">
          <a href="{{ post.url }}">Read</a>
        </div>
      </article>
    {% endfor %}
  {% else %}
    <article class="publication-card publication-card--muted">
      <div>
        <p class="eyebrow">Ready for posts</p>
        <h2>No blog posts yet.</h2>
        <p>Add Markdown files to `_posts/` using the format `YYYY-MM-DD-title.md`.</p>
      </div>
    </article>
  {% endif %}
</section>
