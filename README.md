# notion-block-selector

Javascript Helper to get Block ID's from the Notion UI

![](http://groovy.globi.ca/img/20191125-60cd252e3b327cdd50339f9ca450274e.png)

To make it easier to find the ID of a block, I've put together a little javascript helper and wrapped it in a bookmarklet:

    javascript:(function(){document.body.appendChild(document.createElement('script')).src='https://procfuwidgets.b-cdn.net/pfui/notion_block_selector.js';})();

Create a bookmarklet with the above code in your bookmarks bar.

Anytime you need to find the ID of a block, click on the bookmarklet, and then move your mouse around the screen. You'll see each block get a red border as you mouse over it, and when you click on one, an alert box will pop up with the ID of the clicked block.

Super simple, but super helpful.
