# Dry Ice Kentucky — landing page

Static landing page for [kydryice.com](https://kydryice.com), served by GitHub
Pages.

Dry ice for local pickup in Nicholasville, Lexington and Georgetown, Kentucky.
Orders are taken by phone or email; there is no online checkout on this page.

## What is here

```
index.html                 the whole page
CNAME                      tells GitHub Pages to serve kydryice.com
.nojekyll                  skip Jekyll processing
static/css/styles.css      site styles
static/css/app.css         later additions (logo, hero, How to Order section)
static/js/main.js          size estimator and FAQ accordion
static/images/             logo, hero photo, use-case photos, pickup photo
```

No build step and no dependencies. Open `index.html` in a browser, or serve
the folder:

```bash
python -m http.server 8000
```

## Where it comes from

This folder is generated from the Flask application that runs the full
ordering system, by `build_static_site.py` in that project. GitHub Pages
serves files rather than Python, so the page is rendered once and written out
with the assets it uses.

Edit the source templates and re-run the build rather than editing the files
here, or the next build will overwrite the changes.

The one part of the page that used to call the server was the "how much do I
need" estimator. Its arithmetic is reproduced in `static/js/main.js` and was
checked against the server version across every combination the dropdowns
allow.

## Updating content

Prices, opening hours, the phone number and the address all come from the
Flask project's configuration. Change them there, re-run the build, and commit
the result.

## Deployment

Pushing to `main` publishes the site. GitHub Pages is set to serve the
repository root of that branch.
