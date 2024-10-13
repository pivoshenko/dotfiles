{ config, pkgs, ... }:

{
  environment.systemPackages = [
    # functional metaprogramming-aware language built on the Erlang VM
    pkgs.elixir
    # programming language for highly scalable real-time systems
    pkgs.erlang
    # GNU compiler collection
    pkgs.gcc
    # statically typed language for the Erlang VM
    pkgs.gleam
    # powerful, lightweight programming language
    pkgs.lua
    # platform built on V8 to build network applications
    pkgs.nodejs
    # Python version management tool
    pkgs.pyenv
    # powerful, clean, object-oriented scripting language
    pkgs.ruby
    # toolchain installer for the Rust programming language
    pkgs.rustup

    # cat with syntax highlighting and Git integration
    pkgs.bat
    # yet another cross-platform graphical process/system monitor
    pkgs.bottom
    # defines a standard way of committing rules
    pkgs.commitizen
    # query HTTP, HTTPS or FTP server
    pkgs.curl
    # pack, ship and run any application as a lightweight container
    pkgs.docker
    # embeddable SQL OLAP Database Management System
    pkgs.duckdb
    # modern replacement for 'ls'
    pkgs.eza
    # simple, fast and user-friendly alternative to find
    pkgs.fd
    # command-line fuzzy finder written in go
    pkgs.fzf
    # syntax-highlighting pager for git and diff output
    pkgs.delta
    # graph visualization software from at&t and bell labs
    pkgs.graphviz
    # GNU Privacy Guard
    pkgs.gnupg
    # post-modern modal text editor
    pkgs.helix
    # lightweight and flexible command-line json processor
    pkgs.jq
    # kubernetes cli to manage your clusters in style!
    pkgs.k9s
    # lazier way to manage everything docker
    pkgs.lazydocker
    # simple terminal ui for git commands
    pkgs.lazygit
    # fast, highly customisable system info script
    pkgs.neofetch
    # ambitious Vim-fork focused on extensibility and agility
    pkgs.neovim
    # search tool like grep and the silver searcher
    pkgs.ripgrep
    # Spotify customization
    pkgs.spicetify-cli
    # cross-shell prompt for astronauts
    pkgs.starship
    # display directories as trees (with optional color/html output)
    pkgs.tree
    # command-line unarchiving tools supporting multiple formats
    pkgs.unar
    # your cli home video recorder
    pkgs.vhs
    # internet file retriever
    pkgs.wget
    # blazing fast terminal file manager written in Rust, based on async I/O
    pkgs.yazi
    # pluggable terminal workspace with terminal multiplexer as the base feature
    pkgs.zellij
    # next-generation plugin manager for zsh
    pkgs.zplug
    # shell extension to navigate your filesystem faster
    pkgs.zoxide

    # language server for Markdown
    pkgs.marksman
    # language server for Nix
    pkgs.nil
    pkgs.nixfmt-rfc-style
    # TOML toolkit written in Rust
    pkgs.taplo
  ];
}
