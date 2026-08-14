# AGENTS.md

MkDocs Material documentation site ("geogeeks") for MSc Geomatics students at TU Delft. Content is Markdown under `docs/`; there is no application code, test suite, or linter.

## Commands

- `uv sync` — install deps (Python 3.13, see `.python-version`; `uv.lock` is committed).
- `uv run mkdocs serve` — local dev server with live reload.
- `uv run mkdocs build --strict` — the verification step; treat warnings as errors.

## Navigation is manual (the #1 gotcha)

`mkdocs.yml` has a fully hardcoded `nav:`. The `awesome-pages` plugin is installed but does **not** drive the menu. Adding a new `.md` file under `docs/` will NOT appear in the site until you add it to `nav:` in `mkdocs.yml` (and `--strict` will warn about unnav'd pages).

- `docs/programming/_decision_tree/**` is intentionally absent from `nav:` — it's reached via buttons on `programming/chooselanguage.md`. Do not "fix" its missing-nav warnings.
- `overrides/partials/` holds custom `copyright.html` / `footer.html` theme overrides.

## Writing conventions

Follow `docs/styleguide.md` (now also in the nav). Non-obvious rules:

- OS-specific instructions use content tabs with fixed names only: `Windows`, `macOS`, `Linux`, `Unix (macOS & Linux)`, `Windows & Linux` (global linked tabs — wrong names break cross-page tab sync).
- Reuse the VS Code snippets in `.vscode/*.code-snippets` (`\ipython`, `\os_win_macos_linux`, `\pytab`, `\video-embed`, `\external-link`, `\beginner`, etc.) for consistent markup.
- Keyboard shortcuts use `++ctrl+alt+del++`; code annotations use `(1)!`; YouTube uses `!!! video`, external tutorials use `!!! external-link`.

## Deploy

`.github/workflows/deploy.yml` runs `mkdocs gh-deploy --force` automatically on push to `main`, then pings an external URL via `secrets.UPDATE_URL`. `gh-pages` is the generated site — never edit it. Default branch is `main`; `edit_uri` points there.

## Naming

Site/repo/package is `geogeeks` (plural). Canonical URL: `https://tudelft3d.github.io/geogeeks/`. Keep `README.md`, `mkdocs.yml` (`site_url`), and links consistent with that.
