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
    ".config/iterm".source = ./../dotfiles/.config/iterm;
    ".config/wallpapers".source = ./../wallpapers;
    ".config/zed/settings.json".source = ./../dotfiles/.config/zed/settings.json;
    ".config/starship.toml".source = ./../dotfiles/.config/starship.toml;
    ".config/neofetch".source = ./../dotfiles/.config/neofetch;

    ".shell".source = ./../dotfiles/.shell;
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

  # =================================================
  # Declarative Configurations
  # =================================================

  programs.home-manager.enable = true;
  programs = {
    zsh = {
      enable = true;
    };
  };
}
