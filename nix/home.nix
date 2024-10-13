# Nix module is used to configure user-specific settings and the environment

{ config, pkgs, ... }:

{
  home.username = builtins.getEnv "USER";
  home.homeDirectory = builtins.getEnv "HOME";
  home.stateVersion = "23.05";
  home.packages = [ ];
  home.file = {
    ".config/wallpapers".source = ./../wallpapers;
  };
  home.sessionVariables = { };
  home.sessionPath = [
    "/run/current-system/sw/bin"
    "$HOME/.nix-profile/bin"
  ];

  programs.home-manager.enable = true;
  programs = {
    zsh = {
      enable = true;
      initExtra = ''
        export PATH=/run/current-system/sw/bin:$HOME/.nix-profile/bin:$PATH
        if [ -e '/nix/var/nix/profiles/default/etc/profile.d/nix-daemon.sh' ]; then
            . '/nix/var/nix/profiles/default/etc/profile.d/nix-daemon.sh'
        fi
      '';
    };
  };
}
