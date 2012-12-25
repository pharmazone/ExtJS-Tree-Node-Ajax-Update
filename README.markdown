ExtJS Tree application
======================

I've met many people who have trouble with dynamic tree node update.
I created this simple ExtJS app to demonstrate how I solved this issue in
my project.

## Installation
Clone repository to your webserver directory. 

Make sure that php files is processed with PHP.

Open index.html in your favorite browser.


## How it works?
Simple. When You click at the "Edit" button application make request to the
server(files.php) and retrive new value of the clicked leaf.

Then in `app/view/Main.js` at line `39` handler replace old node with new one.

## Production Build

At the `build/production` folder You will find production build of this application.

