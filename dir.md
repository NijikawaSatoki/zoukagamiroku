# Which File Goes in Which Directory?

A simple question with a simple answer.
So here we go:

- `alttxt/`: Alt text for images.
All files have the `.alttxt` extension.
- `css/`: CSS stylesheets.
All files have the `.css` extension.
- `eng/`: English language wiki pages.
These pages are in English.
All files have the `.html` extension.
- `gallery/`: The art gallery.
Can either have `art.css` and `art.js` inside this directory, or have them inside of `css/` and `js/`, respectively.
Only file guaranteed to be in here is `art.html`.
- `img/`: Images.
For every image in here, there should be an accompanying `.alttxt` file found in `alttxt/`.
Image files can be `.png`, `.jpg`, `.gif`, `.webp`, or any other extension for image files.
- `jap/`: Japanese language wiki pages.
These pages are in Japanese.
All files habe the `.html` extension.
- `js/`: JavaScript files.
All files have the `.js` extension.
- `md/`: Markdown files.
These are used for the writing out of content for the wiki pages, which can then be transferred to their respective `.html` files.
These are subdivided by language.
All files have the `.md` extension.
