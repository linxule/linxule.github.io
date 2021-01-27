---
title: 'Working with Obsidian'
date: 2021-01-27
permalink: /posts/2021/01/working-with-Obsidian/
tags:
  - research
  - markdown
  - github
---

## Sync via GitHub

### Step 1 - Set Up GitHub (With SSH)
- First, if you haven't already, [set up 2FA (two factor authentication)](https://docs.github.com/en/github/authenticating-to-github/configuring-two-factor-authentication) for your GitHub account
- Then, configure [connecting to GitHub using SSH](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh)
	- GitHub Repositories Folders were previously configured via the GitHub Desktop app (hence *remote URLs* is used), 
	- So the next step is [Switching remote URLs from HTTPS to SSH](https://docs.github.com/en/github/using-git/changing-a-remotes-url#switching-remote-urls-from-https-to-ssh) **via Shell**

```
$ git remote set-url origin git@github.com:USERNAME/REPOSITORY.git
```
- Add GitHub to the list of known hosts 

```
$ ssh -T git@github.com
```

### Step 2 - Install and Configure Obsidian Plugin
- Install [obsidian-git](https://github.com/denolehov/obsidian-git) plugin for Obsidian 
- Create `.gitignore` file in the repository folder and add the following lines:

```
.obsidian/  # to exclude Obsidian workspace settings (including plugin and hotkey configurations)
# OR
.obsidian/workspace  # to exlude workspace cache

# Add below lines to exclude OS settings and caches
.trash/
.DS_Store
```




