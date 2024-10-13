# Nix module for configuring essential system services and programs
#
# Features:
# - Allows the use of unfree packages
# - Enables the Nix daemon service
# - Enables the Zsh shell
# - Installs specified Nerd Fonts

{ config, pkgs, ... }:

{
  nixpkgs.config.allowUnfree = true;

  services.nix-daemon.enable = true;

  programs.zsh.enable = true;

  fonts.packages = [
    (pkgs.nerdfonts.override {
      fonts = [
        "JetBrainsMono"
        "SpaceMono"
        "IosevkaTerm"
      ];
    })
  ];
}
