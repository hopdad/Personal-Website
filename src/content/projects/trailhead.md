---
title: 'Trailhead'
description: 'A lightweight trip planner for weekend backpackers — maps, checklists, and offline notes in one place.'
featured: true
thumbnail: '../../assets/projects/trailhead.svg'
thumbnailAlt: 'Stylized illustration of layered mountains at sunset'
techStack: ['Astro', 'TypeScript', 'Tailwind', 'Leaflet']
liveUrl: 'https://example.com/trailhead'
githubUrl: 'https://github.com/hopdad/trailhead'
completedDate: 2024-09-12
category: 'web'
---

## Problem

Planning a weekend backpacking trip means bouncing between five tabs: trail conditions, weather, maps, gear lists, and a notes app. Nothing talks to each other, and half of it stops working in the backcountry where there's no signal.

## Approach

I built Trailhead as a static-first PWA so the core experience works fully offline. Trip data lives in a local SQLite-over-IndexedDB layer and syncs opportunistically when a connection returns. Maps are vector tiles rendered via Leaflet with a small custom plugin for offline region caching.

## Key features

- Offline-first trip planning with auto-sync
- Interactive topo maps with cached regions
- Shared gear checklist templates
- Trip notes with photo attachments
- Weather + trail condition overlays

## Challenges

Keeping the offline bundle under 2MB while still serving usable map tiles meant writing a small tile compression pipeline. Sync conflict resolution was the other hard problem — I landed on a last-write-wins model with a visible conflict log rather than anything fancy.

## Outcome

Used on three real trips so far with no data loss. Lighthouse scores 100/100/100/100. Shared with a small circle of friends and actively collecting feedback.
