# WORD COUNT - Document
[View Site](https://quangconglampart.github.io/word-count)
 | [Markdown Reference](https://guides.github.com/features/mastering-markdown/#examples)
# Idea
View word definition.<br>
On word definition, select any work and view.<br>
Repeat process for generate habbit: **use English dictionary** and **natural reflex with English**.
# How
Using Chrome extension [Google Dictionary (by Google)](https://chrome.google.com/webstore/detail/google-dictionary-by-goog/mgijmajocgfcbeboacabfgobmjgjcoja) for view word definitions easily and **fast**.<br>
Create a tool for:
1. work space for click, use html page.
2. counting English words for statistics.

# Github page extend
## Init project source code
1. Create repository and folder **/docs**.
2. Enable Page by go to **Settings** > **GitHub Pages** section
    1. Select Source = **master branch /docs folder**
    2. Copy /lib/markdown to docs/lib/markdown
    3. Put **markdown render scripts**(below) to new **sub page**.
## Sub page
Use Markdown for sub page.<br>
Javascript lib: https://github.com/showdownjs/showdown <br>
Steps:
1. create html page
2. Include code
```html
<!--===MARKDOWN render===-->
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
    <script src="lib/markdown/showdown.min.js"></script>
    <script src="lib/markdown/render.js"></script>
</head>
<!--===end MARKDOWN render===============================================================-->
<!-- put MD content below-->
# This is example heading
```
Or simple **duplicate** file **lib/markdown/sub-page-template-for-COPY.html** and **rename**.

