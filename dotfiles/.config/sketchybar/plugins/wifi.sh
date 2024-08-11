#!/usr/bin/env sh

LABEL="$(networksetup -listallhardwareports | awk '/Wi-Fi/{getline; print $2}' | xargs networksetup -getairportnetwork | sed "s/Current Wi-Fi Network: //")"

sketchybar --set $NAME label=$LABEL
