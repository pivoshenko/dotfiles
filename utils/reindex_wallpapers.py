"""Reindex image files in subdirectories of the 'wallpapers' directory.

This script renames all .png, .jpg, and .jpeg files in each subdirectory of the
'wallpapers' directory to a consistent format: '{subdir_name}_{index}{extension}'.

Steps:
1. Temporarily rename files to avoid conflicts.
2. Rename files to the final format.

Example:
    wallpapers/
        logo/
            asdaseygas.jpg -> logo_0.jpg
"""

from __future__ import annotations

from pathlib import Path


basepath = Path.cwd() / "wallpapers"


if __name__ == "__main__":
    for subdir in basepath.iterdir():
        for index, filepath in enumerate(subdir.glob("*.*")):
            if filepath.suffix in (".png", ".jpg", ".jpeg"):
                filepath.rename(filepath.with_name(f"tmp_{index}{filepath.suffix.lower()}"))

        for index, filepath in enumerate(subdir.glob("*.*")):
            if filepath.suffix in (".png", ".jpg", ".jpeg"):
                filepath.rename(filepath.with_name(f"{subdir.name}_{index}{filepath.suffix.lower()}"))
