{
  # =================================================
  # Authentication
  # =================================================

  security.pam.enableSudoTouchIdAuth = true;

  system.defaults = {
    # =================================================
    # Dock
    # =================================================

    dock = {
      autohide = true;
      magnification = true;
      minimize-to-application = true;
      launchanim = false;
      mru-spaces = false;
      show-recents = false;
      largesize = 65;
      tilesize = 45;
      wvous-tr-corner = 1;
      wvous-tl-corner = 1;
      wvous-br-corner = 1;
      wvous-bl-corner = 1;
      orientation = "bottom";
      persistent-apps = [
        "/System/Applications/Launchpad.app"
        "/System/Applications/System Settings.app"
        "/Applications/Zen Browser.app"
        "/Applications/Obsidian.app"
        "/Applications/Telegram.app"
        "/Applications/Discord.app"
        "/Applications/Visual Studio Code.app"
        "/Applications/Zed.app"
        "/Applications/DBeaver.app"
        "/Applications/Insomnia.app"
        "/Applications/Spotify.app"
      ];
    };

    # =================================================
    # Finder
    # =================================================

    finder = {
      AppleShowAllExtensions = true;
      AppleShowAllFiles = true;
      ShowPathbar = true;
      ShowStatusBar = true;
      QuitMenuItem = true;
      FXEnableExtensionChangeWarning = false;
      FXPreferredViewStyle = "clmv";
    };

    # =================================================
    # Screensaver
    # =================================================

    screensaver = {
      askForPasswordDelay = 0;
    };

    # =================================================
    # Menubar
    # =================================================

    menuExtraClock = {
      Show24Hour = true;
      ShowDate = 1;
    };

    NSGlobalDomain = {

      # =================================================
      # Keyboard / Mouse / Trackpad
      # =================================================

      "com.apple.keyboard.fnState" = true;
      "com.apple.mouse.tapBehavior" = 1;
      "com.apple.trackpad.enableSecondaryClick" = true;
      "com.apple.trackpad.forceClick" = true;
      "com.apple.trackpad.trackpadCornerClickBehavior" = 1;
      "com.apple.swipescrolldirection" = true;

      # =================================================
      # Menubar
      # =================================================

      _HIHideMenuBar = true;

      AppleICUForce24HourTime = true;

      # =================================================
      # Theme
      # =================================================

      AppleInterfaceStyle = "Dark";
      AppleInterfaceStyleSwitchesAutomatically = false;

      AppleScrollerPagingBehavior = true;
      AppleShowScrollBars = "WhenScrolling";

      # =================================================
      # Finder
      # =================================================

      AppleShowAllExtensions = true;
      AppleShowAllFiles = true;
    };

    # =================================================
    # Screenshot Tool
    # =================================================

    screencapture = {
      disable-shadow = false;
      show-thumbnail = true;
      location = "~/Pictures/screenshots";
    };

    # =================================================
    # Misc
    # =================================================

    SoftwareUpdate = {
      AutomaticallyInstallMacOSUpdates = false;
    };

    # =================================================
    # Stage Manager
    # =================================================

    spaces = {
      spans-displays = false;
    };

    WindowManager = {
      StandardHideWidgets = true;
      AutoHide = true;
      EnableStandardClickToShowDesktop = false;
      HideDesktop = true;
      StageManagerHideWidgets = true;
      StandardHideDesktopIcons = true;
    };

    CustomUserPreferences = {
      # =================================================
      # Menubar
      # =================================================

      "com.apple.menuextra.battery" = {
        ShowPercent = true;
        ShowTime = false;
      };

      # =================================================
      # Misc
      # =================================================

      "com.apple.LaunchServices" = {
        LSQuarantine = false;
      };

      "com.apple.ActivityMonitor" = {
        OpenMainWindow = true;
        IconType = 2;
        ShowCategory = 0;
      };

      # =================================================
      # Dock
      # =================================================

      "com.apple.dock" = {
        expose-group-apps = true;
        show-process-indicators = true;
        size-immutable = true;
      };

      # =================================================
      # Finder
      # =================================================

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
