{
"translatorID":"975f6cae-bd74-4304-8da0-6ebd380170a1",
"translatorType":2,
"label":"attachmentLink",
"creator":"Xule Lin",
"target":"html",
"minVersion":"3.0",
"maxVersion":"",
"priority":200,
"inRepository":false,
"displayOptions":{"exportCharset":"UTF-8"},
"lastUpdated":"2020-06-24 22:30:00"
}

/*
  Zotero PDF(s):: [Author(s)_Year_Title](zotero://open-pdf/library/item/) 
  - open-pdf can be changed to select to locate the item in Zotero library 
  
  Description: Use keyboard to copy the fomartted links to the Zotero attachment.
  1. Add to ~/zotero/translator
  2. In Config Editor, choose the desired quickcopy and paste the following value:
  export=975f6cae-bd74-4304-8da0-6ebd380170a1

  MIT License
  Copyright (c) 2020 Xule Lin
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/
		
function doExport() {
	var item;
	while(item = Zotero.nextItem()) {
		
		var creatorsS = item.creators[0].lastName;
				if (item.creators.length>2)
					creatorsS += " et al.";
				else if (item.creators.length==2)
					creatorsS += " and " + item.creators[1].lastName;
		
		var date = Zotero.Utilities.strToDate(item.date);
		var dateS = (date.year) ? date.year : item.date;
		
		var titleS = (item.title) ? item.title.replace(/&/g,'&amp;').replace(/"/g,'&quot;') : "(no title)";
		
		Zotero.write("Zotero PDF(s):: [" + creatorsS + '_' + dateS + "_" + titleS + "]" + "(zotero://open-pdf/library/items/"+item.key+")");
	}
}