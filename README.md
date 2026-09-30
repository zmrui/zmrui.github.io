# zmrui.github.io

[zmrui.github.io](https://zmrui.github.io)

## Updating the website

Edit `content/_index.md` for homepage content, including publications. Put PDFs and
other downloadable files in `static/`, and edit layouts and styles in `themes/`
and `assets/` as needed.

Commit and push the source changes to `main`. The **Deploy Hugo site to Pages**
workflow installs dependencies, builds the site with Hugo, and deploys it to
GitHub Pages. There is no need to run Hugo locally or commit changes in `public/`.
The workflow builds into a fresh runner temporary directory and publishes only
that output, so checked-in `public/` files do not affect deployment.

In repository **Settings > Pages > Build and deployment**, the source should be
**GitHub Actions**, as described in the
[Hugo deployment guide](https://gohugo.io/host-and-deploy/host-on-github-pages/).
Check the [workflow runs](https://github.com/zmrui/zmrui.github.io/actions/workflows/hugo.yml)
after pushing; both the build and deploy jobs must succeed before the live site
updates. The workflow can also be started manually with **Run workflow**.

## Local preview (optional)

Install Hugo Extended 0.148.1 and Node.js 20, then run:

```sh
npm ci
hugo server
```
