---
title: "Make Your Own (Academic) Website"
layout: single
excerpt: "How to set up your own website (for free): with GitHub page and Minimal Mistakes (Jekyll)"
collection: project
toc: true
toc_sticky: true
---

- This page is still underdevelopment. It contains references to various guides on constructing a GitHub page site based on [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/) and [jekyll](Jekyll Showcase! - Share your sites built with Jekyll)
  - [Main guide](https://github.com/mmistakes/mm-github-pages-starter)
  - Added codes below to the templates provided by [academic pages](https://github.com/academicpages/academicpages.github.io)

## Themes
- Load [remote_theme](https://github.com/mmistakes/minimal-mistakes/blob/master/docs/_config.yml)

## Plugins
- For remote theme version, they are in Gemfile ([check up-to-date](https://github.com/mmistakes/minimal-mistakes/blob/master/docs/_config.yml))
- For local version, they are listed in `plugin:` in `config.yml`


## Layout

- [Set preferred layout](https://mmistakes.github.io/minimal-mistakes/docs/layouts/)

### Table of Content (TOC)

- Add [toc.html](https://github.com/mmistakes/minimal-mistakes/blob/master/_includes/toc.html) to /_includes


- Add TOC to layout [(code source)](https://github.com/mmistakes/minimal-mistakes/blob/master/_layouts/single.html)

```
<!--Add to show toc-->
<section class="page__content" itemprop="text">
{% if page.toc %}
  <aside class="sidebar__right {% if page.toc_sticky %}sticky{% endif %}">
    <nav class="toc">
      <header><h4 class="nav__title"><i class="fas fa-{{ page.toc_icon | default: 'file-alt' }}"></i> {{ page.toc_label | default: site.data.ui-text[site.locale].toc_label | default: "On this page" }}</h4></header>
      {% include toc.html sanitize=true html=content h_min=1 h_max=6 class="toc__menu" %}
    </nav>
  </aside>
{% endif %}
{{ content }}
{% if page.link %}<div><a href="{{ page.link }}" class="btn btn--primary">{{ site.data.ui-text[site.locale].ext_link_label | default: "Direct Link" }}</a></div>{% endif %}
</section>
<!--Add to show toc-->
```

- Show [TOC](https://mmistakes.github.io/minimal-mistakes/layout-table-of-contents-post/) and [Sticky TOC](https://mmistakes.github.io/minimal-mistakes/layout-table-of-contents-sticky/)

```
Add to YAML Front Matter
---
toc: true
toc_label: "Unique Title"
toc_icon: "heart"  # corresponding Font Awesome icon name (without fa prefix)
toc_sticky: true
---
```
- [Adjust TOC indent] (https://github.com/mmistakes/minimal-mistakes/issues/1782#issuecomment-412929275)

```
.toc__menu li ul li ul > li a {
  padding-left: 2.5rem;
}

.toc__menu li ul li ul li ul > li a {
  padding-left: 3rem;
}

.toc__menu li ul li ul li ul li ul > li a {
  padding-left: 3.5rem;
}
```


## Navigation

- [canonical_url](https://mmistakes.github.io/minimal-mistakes/docs/layouts/)

```
Add to YAML Front Matter
---
layout: single
title: Title of Your Post
canonical_url: "https://yoursite.com/custom-canonical-url"
```
