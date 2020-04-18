---
title: "Academic Writing in Markdown"
excerpt: "Formatting"
collection: project
---
## Format and Print with Marked 2 app

I write in Markdown, usually with [Ulysses](https://ulysses.app/) or [Bear](https://bear.app/). To share my writing with others, I convert the Markdown files into other formats, such as PDF or DOCX.

I use [Marked 2 app](https://marked2app.com/) (sorry, Mac only) to convert Markdown files and format the output files according to my needs. Long story short, Marked 2 converts a Markdown file into HTML document file, which in turn gets formatted according to a chosen CSS template.

[CSS](https://www.w3schools.com/css/default.asp) is a language that describes the style of an HTML document. CSS describes how HTML elements should be displayed.
{: .notice--info}

## Choose the Right Style

Marked 2 has a [Style Gallery](https://marked2app.com/styles/#). I have contributed a template ([Chicago Academic](https://marked2app.com/styles/preview#Chicago%20Academic)) based on the Chicago Manual of Style to this gallery.

Also, I have created additional templates for academic writing.

You can download these CSS templates here:
* [Chicago Academic](https://linxule.github.io/files/chicago-academic.css): based on [The Chicago Manual of Style](https://www.chicagomanualofstyle.org/home.html)
* [AMJ Academic](https://linxule.github.io/files/amj-academic.css): based on the [Academy of Management Journal Style Guide for Authors] (http://aom.org/publications/amj/styleguide/). The library at the University of Queensland also provides a useful [guide to AMJ referencing style](https://guides.library.uq.edu.au/amj-version-for-printing).
* [Academic CV](https://linxule.github.io/files/academic-cv.css)
* [Academic Peer Review](https://linxule.github.io/files/academic-review.css): based on [Academy of Management's Reviewer Guidelines](http://aom.org/annualmeeting/reviewerguidelines/), particularly the [Sample Review by Macro Editor](https://aom.org/uploadedFiles/Publications/AMJ/ReviewsbyMacroEditors.pdf). I also use this for reading summary/notes.

TL;DR: Different readers demand different styles for papers and manuscripts. Marked 2 allows you to change styles on the fly!
{: .notice--danger}


## Print and Share

As many academic researchers usually read papers in PDF format and write with Microsoft Word. To share my writing, I then convert my writing into PDF or DOCX format.

### Print to PDF

When you are ready, you can export your files in HTML format out of the Marked 2 app. Then you can print the HTML with your browser app.

### Print to DOCX

Similarly, you can open the HTML files with Microsoft Word or other word processors. Then, you can save the HTML file in the DOCX format.

However, **the page margins will likely be changed** to the default setting for new documents. For example, I set the default margins of 1 inch for all new documents created in Microsoft Word.

# Cite-while-you-write (CWYW)

Cite-while-you-write (CWYW) is the important step in academic writing. A good setup can make writing with Markdown and formatting with Marked 2 app much more rewarding.

The following posts have been essential for me to set up my CWYW workflow.  

1. [davepwsmith - Academic writing with Scrivener, Zotero, Pandoc and Marked 2](https://davepwsmith.github.io/academic-scrivener-howto/)
2. [davepwsmith - Academic writing: Scrivener, Zotero, Pandoc, Marked 2](https://www.literatureandlatte.com/forum/viewtopic.php?t=26078)
3. [Ralph Kabo - My workflow for transforming academic Markdown into beautiful Word documents](https://raphaelkabo.com/blog/posts/markdown-to-word/)

Ralph Kabo has developed [DocDown](https://raphaelkabo.com/blog/posts/introducing-docdown/), a native macOS app, to convert markdown files into Word documents. DocDown can use an existing Word document as the output template. It is a great solution for anyone looking to convert Markdown into Word documents on a regular basis.
{: .notice--info}

## Add citations as you write
More on this in the future.

### CWYW Solution 1: ZotHero via Alfred

1. [Discussion on Zotero Forum](https://forums.zotero.org/discussion/72773/new-alfred-workflow-zothero-makes-searching-and-pasting-from-zotero-easy-mac)
2. [ZotHero Alfred Forum page](https://www.alfredforum.com/topic/11658-zothero-%E2%80%94-generate-zotero-citations-in-alfred/)
3. [Workflow on github](https://github.com/deanishe/zothero)
4. [Zotero plugins page](https://www.zotero.org/support/plugins)



## Generate "References/Bibliography" with Marked 2 app

You need:
1. Zotero with BetterBibTex
2. Pandoc and pandoc-citeproc
3. [Citation Style Language (CSL)](https://citationstyles.org/) file for the reference style of your choice. Preview and download at the [Zotero Style Repository](https://www.zotero.org/styles).   

Marked 2 needs to be configured so that the "BibTex citekey" in the texts can be recognized. Also, this will create the corresponding references/bibliography section for your paper/manuscript.

To setup Marked 2 for processing the citations in your writing, you then navigate to the "Advanced" tab in "Preferences" and fill out the following:


1. Check "Enable Custom Processor"
2. Find the folder location of Pandoc on your machine (usually something like **/usr/local/bin/pandoc**) and make sure you have also installed **pandoc-citeproc**
3. Paste the folder location in "Path"
4. Find the path of Zotero library export (BibTex format)
5. Find the path of the referencing style file (CSL format)  
6. Put the following in the "Args": -f markdown+smart -t html5 --filter=/usr/local/bin/pandoc-citeproc --bibliography **[Zotero Library location from Step 4]** --csl **[CSL file location from step 5]**
7. On my machine, it looks like this "-f markdown+smart -t html5 --filter=/usr/local/bin/pandoc-citeproc --bibliography /Users/xulelin/Documents/Zotero/Library.bib --csl /Users/xulelin/Documents/Zotero/Pandoc/CSL/amj.csl"


TL;DR:
Marked 2 App -> Preferences -> Advanced
Path: /usr/local/bin/pandoc
Args: -f markdown+smart -t html5 --filter=/usr/local/bin/pandoc-citeproc --bibliography **~/Zotero/Library.bib** --csl **~/Documents/Zotero/Pandoc/CSL/amj.csl**
{: .notice--danger}

# Issues and Limitations
## Export to Word documents with Marked 2
Marked 2 app seems to have issues with exporting files into Word documents. The formats defined by CSL files can be lost.

Solution 1: Export to HTML files and then open HTML file with Word. Then you can save to Word documents.

Solution 2: Use [DocDown](https://raphaelkabo.com/blog/posts/introducing-docdown/) developed by Ralph Kabo. DocDown automates the conversion from Markdown to Word documents.
