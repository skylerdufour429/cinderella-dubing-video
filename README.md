# Cinderella — 1950 Dub Collection

A GitHub Pages-ready web app for organizing and providing access to legally hosted MP4 language dubs of Walt Disney Productions' *Cinderella* (1950).

## Movie Information

* **Movie:** Cinderella
* **Year:** 1950
* **Studio:** Walt Disney Productions
* **Category:** Animated Feature
* **Languages:** 45

## Features

* Responsive movie information page
* Language search
* Language filtering
* MP4 download buttons
* HTML5 video player
* Direct MP4 URLs
* GitHub Pages compatible
* GitHub Codespaces compatible
* No backend required

## Running in GitHub Codespaces

Open the repository in GitHub Codespaces and run a local HTTP server:

```bash
python3 -m http.server 8000
```

Then open port `8000`.

## GitHub Pages

1. Push this project to a GitHub repository.
2. Open **Settings → Pages**.
3. Select **Deploy from a branch**.
4. Select the `main` branch and `/ (root)`.
5. Save.
6. Your site will be available at:

```text
https://YOUR-USERNAME.github.io/cinderella-dub-collection/
```

## Media

The web application references MP4 files under:

```text
/media/
```

For files stored directly in this repository, use paths such as:

```text
media/cinderella-1950-french.mp4
```

For externally hosted files, update the URLs in `script.js`.

## Copyright

Make sure every video file is legally authorized for hosting and distribution before adding it to the repository or linking to it.

## License

The source code for this example can be licensed separately from the movie and media files.

The movie, soundtrack, dubbed audio, artwork, trademarks, and other media may be subject to separate copyright and trademark rights.
