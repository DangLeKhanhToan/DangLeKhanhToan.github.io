# Website Update and Deployment Guide

This site is a GitHub Pages Jekyll site. Most updates should happen in `_data/*.yml`, `_pages/*.md`, and the media folders.

## 1. Update Your Profile

Edit:

```text
_data/profile.yml
```

Use it for your headline, email, current roles, research interests, and homepage statistics.

## 2. Add or Edit a Project

Edit:

```text
_data/projects.yml
```

Copy one existing project block and change these fields:

```yaml
- id: my-new-project
  title: My New Project
  category: Research
  status: Active
  period: Aug 2026 - Present
  organization: My Lab or Company
  image: /images/projects/my-new-project/main.jpg
  video: /video/projects/my-new-project/demo_1.mp4
  summary: One short paragraph about the project.
  impact: One sentence about the main result.
  tags:
    - PyTorch
    - ROS
    - Computer Vision
  links:
    - label: GitHub
      url: https://github.com/your/repo
```

Then create matching folders:

```text
images/projects/my-new-project/
video/projects/my-new-project/
```

Recommended media names:

```text
images/projects/my-new-project/main.jpg
images/projects/my-new-project/image_1.jpg
images/projects/my-new-project/image_2.png
video/projects/my-new-project/demo_1.mp4
video/projects/my-new-project/demo_1.webm
```

Keep the `id` lowercase with hyphens. The `id` becomes the project URL anchor, for example:

```text
/projects/#my-new-project
```

## 3. Add a Publication

Add a Markdown file under:

```text
_publications/
```

Example filename:

```text
_publications/2026-01-15-my-paper.md
```

Example content:

```markdown
---
title: "My Paper Title"
collection: publications
category: conferences
permalink: /publication/my-paper-title
excerpt: "Short summary of the paper."
date: 2026-01-15
venue: "Conference or Journal Name"
paperurl: "https://example.com/paper"
citation: "Your citation text."
---
```

Use `category: conferences`, `category: manuscripts`, or `category: books`.

## 4. Add a Blog Post

Create a file in:

```text
_posts/
```

Filename format:

```text
YYYY-MM-DD-title.md
```

Example:

```markdown
---
title: "Deploying Vision Models on Edge NPU Devices"
date: 2026-08-20
categories:
  - engineering
tags:
  - Edge AI
  - ONNX
  - NPU
---

Write the post here.
```

## 5. Add Memories

Edit:

```text
_data/memories.yml
```

Add images under:

```text
images/memories/hiking/main.jpg
images/memories/volunteer/main.jpg
images/memories/campus/main.jpg
```

You can add new memory folders the same way:

```text
images/memories/my-trip/main.jpg
video/memories/my-trip/demo_1.mp4
```

## 6. Preview Locally

If Ruby and Bundler are installed:

```bash
bundle install
bundle exec jekyll serve
```

Then open:

```text
http://localhost:4000
```

If you prefer Docker and Docker is installed:

```bash
docker compose up --build
```

Then open:

```text
http://localhost:4000
```

## 7. Publish With GitHub

Check your changes:

```bash
git status
```

Stage them:

```bash
git add .
```

Commit them:

```bash
git commit -m "Redesign academic website dashboard"
```

Push to GitHub:

```bash
git push origin main
```

If your branch is `master`, use:

```bash
git push origin master
```

## 8. Enable GitHub Pages

On GitHub:

1. Open your repository.
2. Go to `Settings`.
3. Open `Pages`.
4. Under `Build and deployment`, choose `Deploy from a branch`.
5. Select your main branch, usually `main` or `master`.
6. Select the root folder `/`.
7. Save.

Your site should appear at:

```text
https://danglekhanhtoan.github.io/
```

GitHub may take 1-5 minutes to rebuild after each push.

## 9. Common Problems

If an image does not show:

- Check that the path in `_data/projects.yml` matches the real file.
- Keep filenames lowercase and avoid spaces.
- Use `/images/...`, not `C:\...`.

If a project does not show:

- Check indentation in `_data/projects.yml`.
- Each list item must start with `- id:`.
- Use spaces, not tabs.

If GitHub Pages build fails:

- Open the failed Pages build in the repository `Actions` tab.
- Read the first red error.
- Most failures are YAML indentation, missing front matter, or unsupported plugins.
