{
  description = "pivoshenko's system flake";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    mac-app-util.url = "github:hraban/mac-app-util";
    nix-darwin = {
      url = "github:LnL7/nix-darwin";
      inputs.nixpkgs.follows = "nixpkgs";
    };
    home-manager = {
      url = "github:nix-community/home-manager";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };

  outputs =
    inputs@{
      self,
      nix-darwin,
      nixpkgs,
      home-manager,
      mac-app-util,
    }:
    let
      username = builtins.getEnv "USER";
      homeDir = builtins.getEnv "HOME";

      configuration = {
        users.users.${username}.home = homeDir;

        home-manager.backupFileExtension = "bak";

        nix.settings.experimental-features = "nix-command flakes";
        nix.configureBuildUsers = true;
        nix.useDaemon = true;

        system.configurationRevision = self.rev or self.dirtyRev or null;
        system.stateVersion = 5;
      };
    in
    {
      darwinConfigurations = {
        "macbook-intel" = nix-darwin.lib.darwinSystem {
          system = "x86_64-darwin";
          modules = [
            configuration
            mac-app-util.darwinModules.default
            home-manager.darwinModules.home-manager
            {
              home-manager.useGlobalPkgs = true;
              home-manager.useUserPackages = true;
              home-manager.users.${username} = import ./home.nix;
              home-manager.sharedModules = [
                mac-app-util.homeManagerModules.default
              ];
            }
            ./hosts/common.nix
            ./hosts/darwin.nix
            ./pkgs/common.nix
            ./pkgs/darwin.nix
          ];
          specialArgs = {
            inherit inputs;
          };
        };
      };
    };
}
