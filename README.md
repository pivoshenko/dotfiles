# pivoshenko's dotfiles

<p align="center">
  <a href="https://stand-with-ukraine.pp.ua/">
    <img alt="standwithukraine" src="https://img.shields.io/badge/Support-Ukraine-FFC93C?style=flat-square&labelColor=07689F">
  </a>
  <a href="https://stand-with-ukraine.pp.ua">
    <img alt="standwithukraine" src="https://img.shields.io/badge/made_in-Ukraine-FFC93C.svg?style=flat-square&labelColor=07689F">
  </a>
</p>

- [pivoshenko's dotfiles](#pivoshenkos-dotfiles)
  - [Contents](#contents)
  - [Main principles](#main-principles)
  - [Installation](#installation)
  - [Apps](#apps)
    - [Tiling Window Manager](#tiling-window-manager)

> [!CAUTION]
> Currently, my dotfiles are under heavy redesign so this README and configs are a bit outdated.
> One of the main goals is to move to Nix so stay tuned! ETA ~ a couple of weeks.

## Contents

What's in here?

- All my `brew` dependencies, including applications, fonts, LSPs, etc.
- All my `macOS` default configurations
- All my `shell` configurations
- All my `VSCode` and `Zed` configurations
- All my other `.configs/` and [`wallpapers/`](wallpapers)

## Main principles

- Minimalism in everything
- Consistency
- Simplicity
- One style
  - [JetBrainsMono](https://www.jetbrains.com/lp/mono) font
  - [Catppuccin Macchiato](https://github.com/catppuccin/catppuccin) color palette
- Reduced visual noise, only important things should be shown

## Installation

I am using [`dotdrop`](https://github.com/deadc0de6/dotdrop) to manage dotfiles. Steps:

1. Clone this repo with: `git clone https://github.com/pivoshenko/dotfiles dotfiles`
2. `cd dotfiles/`
3. Run the following commands to install the necessary tooling:

```shell
dotdrop install -c dotdrop.config.yaml -p macos --force
```

> [!NOTE]
> To change the theme in applications such as Zen Browser, Spotify, etc please follow the instructions in the official [Catppuccin repository](https://github.com/catppuccin/catppuccin) as those themes can't be exported/imported easily as config.
>
> My personal go choice is *Macchiato* with *Mauve* flavor

## Apps

I am using [`brew`](https://brew.sh) to install both GUI and CLI applications. Resulting [`Brewfile`](Brewfile) contains everything.

### Tiling Window Manager

I use [`aerospace`](https://github.com/nikitabobko/AeroSpace) as a tiling window manager for macOS, which essentially replicates i3 functionality.

My configuration can be found [here](dotfiles/.config/aerospace/). The core idea is to define the following workspaces and bind relevant applications to them:

- #1 Comms (Telegram, Discord, etc.)
- #2 Media
- #3 Notes (Obsidian)
- #4 Browsing (Zen, Chrome)
- #5 Terminal (iTerm2, Ghostty)
- #6 Coding (Zed, VSCode)
- #7 Databases (MongoDB Compass, DBeaver)
- #8 Misc (Insomnia, Postman)
- #9 Misc

Some applications, typically used in "quick pop-up" mode, follow a **floating layout** and are not bound to any workspace.

Additionally, workspaces are integrated with `sketchybar` for better visibility and interaction.
