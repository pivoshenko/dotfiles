{ config, pkgs, ... }:

{
  security.pam.enableSudoTouchIdAuth = true;

  system.defaults = {
    dock.autohide = true;
    dock.magnification = true;
    dock.minimize-to-application = true;
    dock.launchanim = false;
    dock.mru-spaces = false;
    dock.show-recents = false;
    dock.largesize = 65;
    dock.tilesize = 45;
    dock.wvous-tr-corner = 1;
    dock.wvous-tl-corner = 1;
    dock.wvous-br-corner = 1;
    dock.wvous-bl-corner = 1;
    dock.orientation = "bottom";
    dock.persistent-apps = [
      "/System/Applications/Launchpad.app"
      "/System/Applications/System Settings.app"
      "/Applications/Google Chrome.app"
      "/Applications/Obsidian.app"
      "/Applications/Telegram.app"
      "/Applications/Discord.app"
      "/Applications/Visual Studio Code.app"
      "/Applications/Zed.app"
      "/Applications/DBeaver.app"
      "/Applications/Insomnia.app"
      "/Applications/Spotify.app"
    ];

    finder.AppleShowAllExtensions = true;
    finder.AppleShowAllFiles = true;
    finder.ShowPathbar = true;
    finder.ShowStatusBar = true;
    finder.QuitMenuItem = true;
    finder.FXEnableExtensionChangeWarning = false;
    finder.FXPreferredViewStyle = "clmv";

    screensaver.askForPasswordDelay = 0;

    menuExtraClock.Show24Hour = true;
    menuExtraClock.ShowDate = 1;

    NSGlobalDomain."com.apple.keyboard.fnState" = true;

    NSGlobalDomain."com.apple.mouse.tapBehavior" = 1;

    NSGlobalDomain."com.apple.trackpad.enableSecondaryClick" = true;
    NSGlobalDomain."com.apple.trackpad.forceClick" = true;
    NSGlobalDomain."com.apple.trackpad.trackpadCornerClickBehavior" = 1;

    NSGlobalDomain."com.apple.swipescrolldirection" = true;

    NSGlobalDomain._HIHideMenuBar = true;

    NSGlobalDomain.AppleICUForce24HourTime = true;

    NSGlobalDomain.AppleInterfaceStyle = "Dark";
    NSGlobalDomain.AppleInterfaceStyleSwitchesAutomatically = false;

    NSGlobalDomain.AppleMeasurementUnits = "Centimeters";

    NSGlobalDomain.AppleShowAllExtensions = true;
    NSGlobalDomain.AppleShowAllFiles = true;

    NSGlobalDomain.AppleScrollerPagingBehavior = true;
    NSGlobalDomain.AppleShowScrollBars = "WhenScrolling";

    NSGlobalDomain.AppleTemperatureUnit = "Celsius";

    screencapture.disable-shadow = false;
    screencapture.show-thumbnail = true;
    screencapture.location = "~/Pictures/screenshots";

    SoftwareUpdate.AutomaticallyInstallMacOSUpdates = false;

    spaces.spans-displays = false;

    WindowManager.StandardHideWidgets = true;
    WindowManager.AutoHide = true;
    WindowManager.EnableStandardClickToShowDesktop = false;
    WindowManager.HideDesktop = true;
    WindowManager.StageManagerHideWidgets = true;
    WindowManager.StandardHideDesktopIcons = true;

    CustomUserPreferences = {
      "com.apple.menuextra.battery" = {
        ShowPercent = true;
        ShowTime = false;
      };
      "com.apple.LaunchServices" = {
        LSQuarantine = false;
      };
      "com.apple.dock" = {
        expose-group-apps = true;
        show-process-indicators = true;
        size-immutable = true;
      };
      "com.apple.ActivityMonitor" = {
        OpenMainWindow = true;
        IconType = 2;
        ShowCategory = 0;
      };
      "com.apple.finder" = {
        ShowExternalHardDrivesOnDesktop = false;
        ShowRemovableMediaOnDesktop = false;
      };
    };
  };

  system.activationScripts.postActivation.text = ''
    defaults write /Library/Preferences/FeatureFlags/Domain/UIKit.plist redesigned_text_cursor -dict-add Enabled -bool NO

    osascript -e 'tell application "System Events" to set picture of every desktop to "~/.config/wallpapers/logo/logo_1.png"'

    killall Finder
    killall Dock
  '';
}
