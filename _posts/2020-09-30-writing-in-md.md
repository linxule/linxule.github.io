---
title: "Writing in Markdown"
excerpt: "Cite, Bibliography, Document Layouts"
date: 2020-09-30
permalink: /posts/2020/09/writing-in-md/
tags:
  - markdown
  - writing
  - Zotero
  - Marked 2
  - tools
---


# Cite-while-you-write (CWYW) with Zotero

Cite-while-you-write (CWYW) is the important step in academic writing. A good setup can make writing with Markdown and formatting with Marked 2 app much more rewarding.

Steps: 
- Write with [Zettlr](https://www.zettlr.com/)
- Write with other editors (macOS)
  - [Zotpick.applescript by davepwsmith](https://davepwsmith.github.io/academic-scrivener-howto/)

    - Add the [script file](https://github.com/davepwsmith/zotpick-applescript/blob/master/zotpick-pandoc.applescript) to ~/Library/Scripts folder, then find it via System Preferences/Keyboard/Services and create a hotkey combination

    - Or copy and paste the codes below into Alfred/Keyboard Maestro & run the script upon hotkey

    ```applescript
      tell application "System Events"
      	try
      		set appName to (the name of every process whose frontmost is true) as string
      	on error errMsg
      		display alert "Problem" message "Could not get the name of the frontmost application."
      		error number -128
      	end try
      end tell
      set zotRunning to do shell script "/usr/bin/curl 'http://localhost:23119/better-bibtex/cayw?probe=probe' 2>/dev/null; exit 0"
      if zotRunning is "" then
      	display alert "Zotero not running" message "This script will not work unless Zotero is running. Please launch Zotero and try again"
      	tell application appName
      		activate
      	end tell
      	error number -128
      else if zotRunning is "No endpoint found" then
      	display alert "Better BibTeX not installed" message "This script will not work unless Better BibTeX is installed. Please make sure that Better BibTeX is installed in the running instance of Zotero"
      	tell application appName
      		activate
      	end tell
      	error number -128
      else if zotRunning is "ready" then
      	set theReference to do shell script "/usr/bin/curl 'http://localhost:23119/better-bibtex/cayw?format=pandoc' 2>/dev/null; exit 0"
      	try
      		repeat until application appName is frontmost
      			tell application appName to activate
      		end repeat
      	on error errMsg
      		display alert errMsg
      	end try
      	tell application "System Events"
      		try
      			keystroke theReference
      		on error errMsg
      			display alert errMsg
      		end try
      	end tell
      end if
      ```
  - [ZotHero via Alfred](https://github.com/deanishe/zothero)

# Export with Marked 2 app

- To share my writing with others, I use [Marked 2 app](https://marked2app.com/) (macOS) to convert the Markdown files into other formats, such as PDF or DOCX.

TL;DR:

1. Configure Marked 2 to process citation in markdown files (.csl)

   Marked 2 App -> Preferences -> Advanced
   Set Path to:
   ```
   /usr/local/bin/pandoc
   ```
   Set Args to:
   ```
   -f markdown+smart -t html5 --filter=/usr/local/bin/pandoc-citeproc --bibliography ~/Zotero/Library.bib --csl ~/Documents/Zotero/Pandoc/CSL/amj.csl
   ```
2. Preview/drag&drop markdown files in Marked 2 app

3. Choose the styles for the document (.css)

4. Export to PDF, DOCX, or HTML(special attention to references)

## Configure Marked 2 App

You need:

- Zotero with BetterBibTex
- Pandoc and pandoc-citeproc
- [Citation Style Language (CSL)](https://citationstyles.org/) file for the reference style of your choice. Preview and download at the [Zotero Style Repository](https://www.zotero.org/styles).

Marked 2 needs to be configured so that the "BibTex citekey" in the texts can be recognized. Also, this will create the corresponding references/bibliography section for your paper/manuscript.

To setup Marked 2 for processing the citations in your writing, you then navigate to the "Advanced" tab in "Preferences" and fill out the following:


1. Check "Enable Custom Processor"
2. Find the folder location of Pandoc on your machine (usually something like **/usr/local/bin/pandoc**) and make sure you have also installed **pandoc-citeproc**
3. Paste the folder location in "Path"
4. Find the path of Zotero library export (BibTex format)
5. Find the path of the referencing style file (CSL format)  
6. Put the following in the "Args":

```
-f markdown+smart -t html5 --filter=/usr/local/bin/pandoc-citeproc --bibliography [Zotero Library location from Step 4] --csl [CSL file location from step 5]
```

7. On my machine, it looks like this:

```
-f markdown+smart -t html5 --filter=/usr/local/bin/pandoc-citeproc --bibliography /Users/xulelin/Documents/Zotero/Library.bib --csl /Users/xulelin/Documents/Zotero/Pandoc/CSL/amj.csl
```

## Select Document Style

- Marked 2 converts a Markdown file into HTML document file, which in turn gets formatted according to a chosen CSS template

- [CSS](https://www.w3schools.com/css/default.asp) is a language that describes the style of an HTML document. CSS describes how HTML elements should be displayed.


Choose the Right Style

- Marked 2 has a [Style Gallery](https://marked2app.com/styles/#). I have contributed a template ([Chicago Academic](https://marked2app.com/styles/preview#Chicago%20Academic)) based on the Chicago Manual of Style to this gallery.
- I created additional (CSS) templates for academic writing.
  - [Chicago Academic.css](https://linxule.github.io/files/css/chicago-academic.css): based on [The Chicago Manual of Style](https://www.chicagomanualofstyle.org/home.html)
  - [AMJ Academic.css](https://linxule.github.io/files/css/amj-academic.css): based on the [Academy of Management Journal Style Guide for Authors](http://aom.org/publications/amj/styleguide/) and the [guide to AMJ referencing style](https://guides.library.uq.edu.au/amj-version-for-printing) (Library at the University of Queensland)
  - [Academic CV.css](https://linxule.github.io/files/css/academic-cv.css): suitable for both academic and industry CVs
  - [Academic Review.css](https://linxule.github.io/files/css/academic-review.css): based on [Academy of Management's Reviewer Guidelines](http://aom.org/annualmeeting/reviewerguidelines/), particularly the [Sample Review by Macro Editor](https://aom.org/uploadedFiles/Publications/AMJ/ReviewsbyMacroEditors.pdf); also suitable for reading summary/notes

## Style the "References/Bibliography" Section

- Add `# References/Bibliography` at the end of your Markdown file

- In my case, I use hanging indent, which is also used by APA style. Check out the codes of [Chicago Academic.css](https://linxule.github.io/files/css/chicago-academic.css), which is based on [The Chicago Manual of Style](https://www.chicagomanualofstyle.org/home.html). There is a section for formatting output of pandoc-citeproc. Feel free to change the code to meet your styling needs.

## Print and Share

- As many academic researchers usually read papers in PDF format and write with Microsoft Word. To share my writing, I then convert my writing into PDF or DOCX format.

- **To PDF**: Marked 2 supports direct export to PDF format; alternatively, export to **HTML format** and print the HTML from your browser app.

- **To DOCX**: export to **HTML format** and open and save to DOCX format in **Microsoft Word or other word processors**.

  - Marked 2 app seems to have issues with exporting files into Word documents. The formats defined by CSL files can be lost.
  - The **page margins will likely be changed** to the default setting for new documents. For example, I set the default margins of 1 inch for all new documents created in Microsoft Word.

## Issues and Limitations with Marked 2

Marked 2 app seems to have issues with exporting files into Word documents. The formats defined by CSL files can be lost.

- Solution 1: Export to HTML files and then open HTML file with Word. Then you can save to Word documents.

- Solution 2: Use [DocDown](https://raphaelkabo.com/blog/posts/introducing-docdown/) developed by Ralph Kabo. DocDown automates the conversion from Markdown to Word documents.

# DocDown: Alternatives to Marked 2

- [Download via GitHub](https://github.com/lowercasename/docdown)
- "takes Markdown files, filters them through a Zotero bibliography file, a CSL file, and a reference .docx file, and exports a Word document with embedded citations and styles."
- [About DocDown](https://raphaelkabo.com/blog/introducing-docdown/)
- [Set your own workflow from markdown to docx](https://raphaelkabo.com/blog/markdown-to-word/)
