---
title: 'Fieldnotes'
description: 'A markdown-first note taking CLI with git-backed sync and a tiny web reader.'
featured: true
thumbnail: '../../assets/projects/fieldnotes.svg'
thumbnailAlt: 'A stylized notebook on a dark background with colored action buttons'
techStack: ['Go', 'Cobra', 'Astro', 'TypeScript']
githubUrl: 'https://github.com/hopdad/fieldnotes'
completedDate: 2024-06-04
category: 'tools'
---

## Problem

I wanted notes that I actually own — plain markdown files, version-controlled, searchable from the terminal, and readable anywhere without a vendor lock-in.

## Approach

Fieldnotes is a single Go binary that wraps a git repo of markdown files. It handles creation, tagging, search, and daily journaling with sensible defaults. A companion Astro site renders the same repo as a browsable web archive.

## Key features

- `fn new`, `fn today`, `fn search` — fast, scriptable commands
- Full-text search across the repo using a lightweight inverted index
- Git-backed sync with automatic commit messages
- Static site generator mode for publishing a subset of notes

## Challenges

Making the CLI feel instant on a repo with thousands of notes required an incremental index cache. Getting the Astro side to re-use the same frontmatter parser (via Go WASM) was fiddly but worth it.

## Outcome

Used daily for my own notes. Stable enough that I stopped touching it.
