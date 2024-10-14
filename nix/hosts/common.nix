{ pkgs, ... }:

{
  nixpkgs.config.allowUnfree = true;
  nix.package = pkgs.nix;

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
