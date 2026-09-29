# Dry Ice Kentucky — landing page

Static landing page for [dryiceky.com](https://dryiceky.com), served by GitHub Pages.

Dry ice for local pickup in Nicholasville, Lexington and Georgetown, Kentucky.
Orders are taken by phone or email; there is no online checkout on this page.

## Do not edit these files

This folder is **generated**. Edit the Flask project's templates and run
`build_static_site.py`, or the next build will overwrite your changes.

The exception is `CNAME`, which the build writes from the domain set at the
top of that script.

## What is here

```
index.html            the whole page
CNAME                 the custom domain for GitHub Pages
robots.txt            lets crawlers in, points at the sitemap
sitemap.xml           submitted to Google Search Console
.nojekyll             skip Jekyll processing
static/               styles, estimator script, logo and photos
```

No build step and no dependencies. To preview:

```bash
python -m http.server 8000
```

## Publishing

Pushing to `main` publishes the site. GitHub Pages serves the repository root.

```bash
python build_static_site.py          # in the Flask project
cd kydryice && git add -A && git commit -m "Update landing page" && git push
```

## The estimator

The "how much do I need" estimator used to call the server. GitHub Pages
serves files, not Python, so its arithmetic was moved into
`static/js/main.js` and checked against the server version across every
combination the dropdowns allow.
