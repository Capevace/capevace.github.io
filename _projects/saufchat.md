---
title: SAUF.CHAT
subtitle: Peer-to-peer group video calls<br>and Spotify playback sync

githubLink: https://mateffy.me/saufchat-ui
visitLink: https://sauf.chat

project:
  platform: macOS
  tech: JavaScript, Vue
  year: 2020
  slides:
    - slide-1.png
    - slide-2.png

changelog:
  - version: Beta v0.1.423
    name: Spotify release
    changes:
      - Added Spotify sync
  - version: Beta v0.1.0
    name: First release
    changes:
      - Working video chat

featured: 1
layout: product
---

## Features

- **Peer-to-peer group video chat** using [PeerJS](https://peerjs.com/)
- Listen to your favourite music together by **synchronizing your Spotify playback**
- Room based authentication: **You only need a link to join!**

### Planned

- Mini games to play together

## How it works

### Video chat

The server has a list of all connected peers, that every peer has access to. When this list changes, the newly added peer will try to call all peers on the list using [PeerJS](https://peerjs.com/).

However, since this approach does not support things like end-to-end encryption, I'm thinking about switching the call architecture to one based on [JitsiMeet](https://github.com/jitsi/lib-jitsi-meet)

### Spotify Playback Sync

The server has a queue of songs created and edited by the users in the current room, that every client has access to. A user can also authenticate Spotify in the page, which gives the SPA API access to Spotify.

Once the list changes by adding, removing or moving a song, every client will then create or update a playlist called `SAUF.CHAT - Queue` in the user's Spotify account and add / remove the respective songs.

The server then keeps track of when the playback was started and how long each song in the list is. That way, we don't rely on play/pause events being passed to the respective clients for timing the playback correctly, but by having a deterministic playback structure.

By knowing the length of the songs and when the playlist was started, we can calculate where to skip to, should you join later. Actually playing the next song is done by Spotify tho, because we simply let it play the playlist.
