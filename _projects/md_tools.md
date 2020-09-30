---
title: "Tools for Writing in Markdown"
excerpt: "Editors, Add-ons for Capture and Reference"
collection: projects
---



# Compare Markdown Editors (offline)


| Features                                                     | [Obsidian.md](https://obsidian.md/)                          | [Zettlr](https://www.zettlr.com/)                            | [Bear Note](https://bear.app/)                               | [Typora](https://typora.io/)                                 |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Best Use Cases                                               | Personal knowledge base, reading notes                       | Long-form academic writing, create and edit tables           | Meeting notes, capture web information, quick notes          | Blog post, create and edit table                             |
| [\[Wikilinks\]\][(internal links)](https://tinyurl.com/c4j5kjy) | Yes                                                          | Yes                                                          | Yes                                                          | No                                                           |
| Auto [[Backlinks]]                                           | Yes                                                          | Possible with [note-link-janitor by andymatuschak](https://github.com/andymatuschak/note-link-janitor) | Possible with [note-link-janitor by andymatuschak](https://github.com/andymatuschak/note-link-janitor) | N/A                                                          |
| Zettelkasten(yyyyMMddHHmmss)                                 | Yes                                                          | Yes                                                          | No                                                           | No                                                           |
| Network Graphs                                               | Yes                                                          | No                                                           | No                                                           | No                                                           |
| CWYW(Zotero+Better BibTex)                                   | Possible with [zotpick.applescript](https://github.com/davepwsmith/zotpick-applescript) | Yes ( also **click to open PDFs**)                           | Possible with [zotpick.applescript](https://github.com/davepwsmith/zotpick-applescript) | Possible with [zotpick.applescript](https://github.com/davepwsmith/zotpick-applescript) |
| Platforms                                                    | macOS, Windows, Linux (AppImage, Snap)                       | macOS, Windows, Linux (Debian, Fedora, AppImage)             | macOS, iOS, iPadOS (**Desktop & Mobile**)                    | macOS, Windows, Linux                                        |
| Rendering (PDFs, docx, slides...)                            | Possible with [Marked 2 App (macOs)](https://marked2app.com/) | Yes                                                          | Yes                                                          | Yes                                                          |
| Other notable features                                       | Web-publishing in the pipeline, Custom CSS                   | Readability scores, Pomodoro timer                           | Fast syncing via iCloud                                      | Integration with GitHub Desktop                              |



# Add-ons and Extensions

## [Roam-Highligher - Chrome Extension](https://github.com/GitMurf/roam-highlighter#how-to-use-the-highlighter)

* great for taking notes on webpages and copy highlights in MD
* output formatted for Roam or Obsidian

## [Mdnotes - Zotero Add-on](https://github.com/argenos/zotero-mdnotes)  

* Export Zotero item [metadata file](https://github.com/argenos/zotero-mdnotes#Export-items-metadata-to-a-markdown-file) and [notes](https://github.com/argenos/zotero-mdnotes#Export-Zotero-notes-to-markdown) to **markdown**; create a file for own notes](https://github.com/argenos/zotero-mdnotes#Create-a-file-for-your-own-notes); batch export all of the above](https://github.com/argenos/zotero-mdnotes#Batch-exportcreate-all-of-the-above)

*  adds `# cite key-zotero` as the first header (same as file name)

* changes `Cite key: autio2018` to `Cite key/Notes: [[autio2018]]` to force the connection with available notes

* Sample output  

  ```markdown
  # autio2018-zotero

  # Digital affordances, spatial affordances, and the genesis of entrepreneurial ecosystems

  ## Metadata

  * Type: [[Article]]
  * Authors: [[Erkko Autio]], [[Satish Nambisan]], [[Llewellyn D. W. Thomas]], [[Mike Wright]]
  * Date: [[03/2018]]
  * Date added: [[2019-09-08]]
  * Publication: [[Strategic Entrepreneurship Journal]]
  * DOI: [10/gc6dk2](10/gc6dk2)
  * Cite key/Notes: [[autio2018]]
  * Topics: [[Ecosystem]], [[Innovation Ecosystem]], [[Entrepreneurial Ecosystem]]
  * Related:
  * Tags: #ZoteroImport, [[Ecosystem]], [[Watch]]
  * Zotero links: [Local library](zotero://select/items/1_CQYQBCEM)
  * PDF Attachments: [autio2018_Digital affordances, spatial affordances, and the genesis of entrepreneurial ecosystems.pdf](zotero://open-pdf/library/items/WKYH63Y6)
  ```



## [Zotero to Roam Export](https://github.com/melat0nin/zotero-roam-export)

>  Zotero exports single or multiple items, as well as collections to Roam's **JSON** format

* :+1: [My adaption](Zotero/Roam-QuickCopy2MD.js) to "QuickCopy" the metadata of an item to system clipboard (in markdown)

* Sample output

  ```markdown
  # Digital affordances, spatial affordances, and the genesis of entrepreneurial ecosystems
  ### Metadata
  Author(s):: [[Erkko Autio]], [[Satish Nambisan]], [[Llewellyn D. W. Thomas]], [[Mike Wright]]
  Date:: 2018-03
  Citekey:: autio2018
  Zotero PDF(s):: [PDF 1](zotero://open-pdf/library/items/WKYH63Y6)
  URL:: [http://doi.wiley.com/10.1002/sej.1266](http://doi.wiley.com/10.1002/sej.1266)
  Tags:: #[[ecosystem]][[watch]]
  ```
