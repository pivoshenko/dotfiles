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
  - [Overview](#overview)
  - [Main principles](#main-principles)
  - [Installation](#installation)

> [!CAUTION]
> Currently, my dotfiles are under heavy redesign so this README and configs are a bit outdated.

## Overview

What's in here?

- My `brew` dependencies, including apps, fonts, LSPs, extensions, etc., see [`Brewfile`](Brewfile)
- My macOS default configurations, see [`macos`](macos/defaults.sh)
- My wallpapers set, see [`wallpapers`](wallpapers)

## Main principles

- Minimalism in everything
- Consistency
- Simplicity
- One style
  - [JetBrains Mono Font](https://www.jetbrains.com/lp/mono)
  - [Catppuccin Macchiato Mauve](https://github.com/catppuccin/catppuccin) color palette
- Reduced visual noise, only important things should be shown

## Installation

I am using [`dotdrop`](https://github.com/deadc0de6/dotdrop) to manage dotfiles. Steps:

1. Clone this repo with: `git clone https://github.com/pivoshenko/dotfiles dotfiles`
2. `cd dotfiles/`
3. Run the following commands to install the necessary tooling:

```shell
dotdrop install -c dotdrop.config.yaml -p macos --force
```
