{ config, pkgs, ... }:

{
  homebrew = {
    enable = true;
    onActivation.cleanup = "zap";
    onActivation.autoUpdate = true;
    onActivation.upgrade = true;
    brews = [
      # a lightweight window border system for macOS
      "borders"
      # Mac App Store command-line interface
      "mas"
      # pinentry for GPG on Mac
      "pinentry-mac"
      # a highly customizable macOS status bar replacement
      "sketchybar"
    ];
    casks = [
        # Discord tooling
        "betterdiscord-installer"
        # universal database tool and SQL client
        "dbeaver-community"
        # voice and text chat software
        "discord"
        # pack, ship and run any application as a lightweight container
        "docker"
        # cross-platform text expander written in Rust
        "espanso"
        # web browser built from Firefox source tree
        "firefox"
        # screen colour temperature controller
        "flux"
        # font library for icons
        "font-symbols-only-nerd-font"
        # web `browser
        "google-chrome"
        # HTTP and GraphQL Client
        "insomnia"
        # jetbrains tools manager
        "jetbrains-toolbox"
        # keyboard customiser
        "karabiner-elements"
        # i3-like tiling window manager for macOS
        "nikitabobko/tap/aerospace"
        # password manager
        "nordpass"
        # VPN client for secure internet access and private browsing
        "nordvpn"
        # knowledge base that works on top of a local folder of plain text Markdown files
        "obsidian"
        # control your tools with a few keystrokes
        "raycast"
        # tool that provides consistent, highly configurable symbols for apps
        "sf-symbols"
        # app that enables mouse-free UI interaction
        "shortcat"
        # music streaming service
        "spotify"
        # messaging app with a focus on speed and security
        "telegram"
        # open-source code editor
        "visual-studio-code"
        # AI code editor
        "zed"
    ];
    taps = [
        "homebrew/bundle"
        "homebrew/services"
        "FelixKratz/formulae"
    ];
    masApps = { };
  };
}
