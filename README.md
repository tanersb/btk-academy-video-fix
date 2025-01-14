# Prevent Video Pausing on BTK Academy

This Tampermonkey script prevents videos on BTK Academy from pausing when the tab loses focus or enters fullscreen mode.

## Features
- Disables visibility change events that pause videos.
- Overrides `document.hidden` and `document.visibilityState` properties to keep the page in "visible" mode.

## Installation
1. Install [Tampermonkey](https://www.tampermonkey.net/) on your browser.
2. Copy the link to the script from this repository.
3. Open Tampermonkey dashboard and click **"Create a new script"**.
4. Paste the script content and save.

Enjoy uninterrupted learning on BTK Academy!
