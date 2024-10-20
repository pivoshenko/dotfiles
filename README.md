# pivoshenko's dotfiles

![hyperjs](https://raw.githubusercontent.com/pivoshenko/dotfiles/master/docs/assets/hyperjs.png)

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
  - [VSCode](#vscode)
  - [Hotkey Daemons](#hotkey-daemons)
  - [Tiling Windows Manager](#tiling-windows-manager)
  - [CLI](#cli)
    - [fzf](#fzf)
  - [Local configuration](#local-configuration)

> [!CAUTION]
> Currently, my dotfiles are under heavy redesign so this README and configs are a bit outdated.
> One of the main goals is to move to Nix so stay tuned! ETA ~ a couple of weeks.

## Contents

What's in here?

- All my `brew` dependencies including applications, fonts, LSPs etc. See [`Brewfile`](dependencies/Brewfile)
- All my `macOS` configuration. See [`macos`](macos/settings.sh)
- All my shell configurations. See [`.shell/`](dotfiles/.shell) and [`.zshrc`](dotfiles/.zshrc)
- All my `VSCode` configurations and extensions. See [`vscode/`](dotfiles/vscode) and [`extensions`](dependencies/Brewfile)
- All my rest [`.configs/`](dotfiles/.config), [`dotfiles/`](dotfiles) and [`wallpapers/`](wallpapers) :3

## Main principles

- Minimalism in everything
- Consistency
- Simplicity
- One style - [JetBrainsMono](https://www.jetbrains.com/lp/mono) font and [Catppuccin Macchiato](https://github.com/catppuccin/catppuccin) color palette
- Reduced visual noise, only important things should be shown
- "Please, do not touch my code" - minimal auto-formatting or code flow interruptions
- Security - do not share anything with anyone

## Installation

I am using [`dotdrop`](https://github.com/deadc0de6/dotdrop) to manage dotfiles. Steps:

1. Clone this repo with: `git clone https://github.com/pivoshenko/dotfiles dotfiles`
2. `cd dotfiles/`
3. Run the following commands to install the necessary tooling:

```shell
```

4. Run the following commands to install configs:

```shell
dotdrop -c "dotdrop.yaml" -p base install -f
```

> [!NOTE]
> To change the theme in apps such as Chrome, Spotify, etc please follow the instructions in the official [Catppuccin repository](https://github.com/catppuccin/catppuccin) as those themes can't be exported/imported easily as config.
>
> My personal go choice is *Macchiato* with *Mauve* flavor

## Apps

I am using [`brew`](https://brew.sh) to install all free apps for my Mac.
I also sync apps from the App Store with `brew` via [`mas`](https://formulae.brew.sh/formula/mas), so the resulting [`Brewfile`](dependencies/Brewfile) contains everything.

## VSCode

![vscode](https://raw.githubusercontent.com/pivoshenko/dotfiles/master/docs/assets/vscode.png)

Here's a list of [`extensions`](dependencies/Brewfile) I use daily, but I try to keep my `VSCode` setup as simple as possible.

I also quite heavily use [`helix`](https://github.com/helix-editor/helix) for in-terminal editing. You can find my `helix` and LSPs configuration [here](dotfiles/.config/helix).

## Hotkey Daemons

Because I am using a primarily external keyboard and in most of my apps I rely on either Vi/Kakoune motions I find it painful to use the mouse as it requires moving my right hand out of the keyboard and distracts my "zen" state :3 In most the dev apps you can enable such modes but in the default MacOS apps or windows manager such functionality is absent
To resolve this issue I am using two daemons:

- [Karabiner](https://karabiner-elements.pqrs.org) - to enable the Vi motions system-wise and rebind some of the keys for example `caps lock -> lctrl`

## Tiling Windows Manager

## CLI

I am using [`iTerm2`](https://github.com/gnachman/iTerm2) and [`zellij`](https://github.com/zellij-org/zellij) as my main terminal.
As the main shell I am using [`zsh`](https://www.zsh.org) with [`oh-my-zsh`](https://github.com/ohmyzsh/ohmyzsh) and [`starship`](https://github.com/starship/starship). To manage shell plugins I am using [`zplug`](https://github.com/zplug/zplug).
I also have some tools/scripts/aliases to make my working experience better.
But, I try to keep them minimal: only ones I truly use.

I mainly work with:

- `Python`

I also have several other languages installed. But I don't use them daily:

- `Elixir`
- `Rust`
- `Ruby`

### fzf

I use [`fzf`](https://github.com/junegunn/fzf) for several tasks:

- `tab` to autocomplete probably all the tools using [`fzf-tab`](https://github.com/Aloxaf/fzf-tab)

![fzf-tab](https://raw.githubusercontent.com/pivoshenko/dotfiles/master/docs/assets/fzf_tab.png)

- `ctrl+r` to fuzzy search command history

![fzf-ctrl+r](https://raw.githubusercontent.com/pivoshenko/dotfiles/master/docs/assets/fzf_ctrl_r.png)

- `ctrl+t` to fuzzy search files and dirs in the current tree to include paths in commands with instant previews for text files (content) and directories (inner tree)

![fzf-ctrl+t](https://raw.githubusercontent.com/pivoshenko/dotfiles/master/docs/assets/fzf_ctrl_t.png)

- `ctrl+k` to fuzzy search files by name and open/edit them

![fzf-ctrl+k](https://raw.githubusercontent.com/pivoshenko/dotfiles/master/docs/assets/fzf_ctrl_k.png)

- `ctrl+f` to fuzzy search files by content and open/edit them

![fzf-ctrl+f](https://raw.githubusercontent.com/pivoshenko/dotfiles/master/docs/assets/fzf_ctrl_f.png)

- `z <name> tab` to enable fuzzy finder for [`zoxide`](https://github.com/ajeetdsouza/zoxide)

![fzf-z+tab](https://raw.githubusercontent.com/pivoshenko/dotfiles/master/docs/assets/fzf_z_tab.png)

## Local configuration

Some of the used tools require local configuration, such as `git` with username and email.

Here's the full list:

- `~/.gitconfig.local` to store any user-specific data
- `~/.shell/.local` to store local shell config, like usernames, passwords, tokens, `gpg` keys etc
