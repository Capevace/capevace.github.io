---
title: ConvertGuru
subtitle: Convert videos to GIFs in your browser

visitLink: https://mateffy.me/convert-guru
githubLink: http://github.com/capevace/convert-guru

metadata:
  platform: Web
  tech: Nuxt.js, Canvas
  year: 2019

slides:
  - slide-1.png
  - slide-2.png
  - slide-3.png

changelog:
  - version: 0.1.0
    name: MVP released
---

This is an experiment in converting video files in the browser. It works by displaying a video frame by frame on a canvas and then append the canvas' contents to a GIF.

## Features

- Convert video files to `.gif` files directly in your browser
- Supports `.mov`, `.mp4`, `.webm` or **any other video format** that's supported by the HTML5 `<video>` tag
- Trim the GIF to desired length
- Since everything is done in the browser, nothing is ever sent to a server and your privacy is protected

### Planned

- Resizing

## How it works

When I started, I wanted to find out what the capabilities of [Web Assembly](https://webassembly.org) were. However, at that time, there wasn't much support for it out there. I tried to compile [FFMPEG](https://ffmpeg.org) with WASM in order to use it in the web, but while it worked, the performance just wasn't there yet.

So, I decided to build this using a canvas based method. The way it works is that a video element's frame is drawn onto a canvas. This gives us flexiblilty in what we render as a GIF and should enable us to resize, move, edit or rotate (all of which still has to be implemented tho).

That canvas is then taken frame-by-frame and rendered as a GIF by [GIF.js](https://jnordberg.github.io/gif.js/) which can then be exported.
