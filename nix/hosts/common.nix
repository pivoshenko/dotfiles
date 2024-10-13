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
