{
  # =================================================
  # Misc
  # =================================================

  home.username = builtins.getEnv "USER";
  home.homeDirectory = builtins.getEnv "HOME";

  home.stateVersion = "24.05";
  home.enableNixpkgsReleaseCheck = false;

  # =================================================
  # User Packages
  # =================================================

  home.packages = [ ];

  # =================================================
  # Dotfiles
  # =================================================

  home.file = {
    ".config/bat".source = ./../dotfiles/.config/bat;
    ".config/borders".source = ./../dotfiles/.config/borders;
    ".config/bottom".source = ./../dotfiles/.config/bottom;
    ".config/delta".source = ./../dotfiles/.config/delta;
    ".config/fsh".source = ./../dotfiles/.config/fsh;
    ".config/helix".source = ./../dotfiles/.config/helix;
    ".config/iterm2/profiles".source = ./../dotfiles/.config/iterm2/profiles;
    ".config/iterm2/themes".source = ./../dotfiles/.config/iterm2/themes;

    ".config/neofetch".source = ./../dotfiles/.config/neofetch;
    ".config/starship.toml".source = ./../dotfiles/.config/starship.toml;
    ".config/wallpapers".source = ./../wallpapers;
    ".config/zed/settings.json".source = ./../dotfiles/.config/zed/settings.json;

    ".shell".source = ./../dotfiles/.shell;

    ".gitconfig".source = ./../dotfiles/.gitconfig;
    ".zplugrc".source = ./../dotfiles/.zplugrc;
    ".zshenv".source = ./../dotfiles/.zshenv;
    ".zshrc".source = ./../dotfiles/.zshrc;
  };

  # =================================================
  # Environment Variables
  # =================================================

  home.sessionVariables = { };
  # extra directories to add to PATH
  home.sessionPath = [
    "/run/current-system/sw/bin"
    "$HOME/.nix-profile/bin"
  ];
}
