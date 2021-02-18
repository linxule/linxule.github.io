---
title: "Build Your Own (Academic) Website"
layout: single
excerpt: "How to set up your own website (for free): with GitHub page and Minimal Mistakes (Jekyll)"
collection: projects
---

**This page is still under development.**

Guides on constructing a **GitHub page** site based on [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/) and [jekyll](Jekyll Showcase! - Share your sites built with Jekyll)
  - [Main guide](https://github.com/mmistakes/mm-github-pages-starter)
  - Added codes below to the templates provided by [academic pages](https://github.com/academicpages/academicpages.github.io)

## Themes
- Load [remote_theme](https://github.com/mmistakes/minimal-mistakes/blob/master/docs/_config.yml)

## Plugins
- For remote theme version, they are in Gemfile ([check up-to-date](https://github.com/mmistakes/minimal-mistakes/blob/master/docs/_config.yml))
- For local version, they are listed in `plugin:` in `config.yml`


## Layout

- [Set preferred layout](https://mmistakes.github.io/minimal-mistakes/docs/layouts/)


## Navigation

- [canonical_url](https://mmistakes.github.io/minimal-mistakes/docs/layouts/)

```
Add to YAML Front Matter
---
layout: single
title: Title of Your Post
canonical_url: "https://yoursite.com/custom-canonical-url"
```
