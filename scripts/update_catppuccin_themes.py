"""Update Catppuccin themes to the latest version.

This script fetches directories from GitHub repositories and downloads the files with snake_case names to a local directory.
"""

from __future__ import annotations

import re
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

import loguru
import requests

BASEPATH = Path.cwd() / "dotfiles" / ".config"
GITHUB_API_URL = "https://api.github.com/repos/catppuccin/{name}/contents/{directory}"
TOOLS = [
    ("bat", "bat", "themes"),
    ("bottom", "bottom", "themes"),
    # ("delta", "catppuccin.gitconfig"),
    ("zsh-fsh", "fsh", "themes"),
]


def to_snake_case(name: str) -> str:
    return re.sub(r"[\s\-]+", "_", re.sub(r"(?<!^)(?=[A-Z])", "_", name)).lower().replace("__", "_")


def download_file(url: str, filepath: Path) -> None:
    filedata = requests.get(url)
    filedata.raise_for_status()
    filepath.parent.mkdir(parents=True, exist_ok=True)
    with open(filepath, "wb") as file:
        file.write(filedata.content)
    loguru.logger.info(f"Downloaded: {filepath}")


def download_recursive(repo_name, tool_name: str, contents: dict, tool_lpath: Path) -> None:
    with ThreadPoolExecutor() as executor:
        futures = []
        for item in contents:
            item_name = item.get("name")
            item_type = item.get("type")
            download_url = item.get("download_url")
            path = item.get("path")

            if not item_name or not item_type or not path:
                continue

            filename, *_ = item_name.split(".")
            item_lpath = (tool_lpath / item_name).with_stem(to_snake_case(filename))

            if item_type == "file" and download_url:
                futures.append(executor.submit(download_file, download_url, item_lpath))

            elif item_type == "dir":
                subdir_contents = requests.get(GITHUB_API_URL.format(name=repo_name, dir=path)).json()
                download_recursive(repo_name, tool_name, subdir_contents, tool_lpath / to_snake_case(Path(path).name))


if __name__ == "__main__":
    for tool in TOOLS:
        repo_name, tool_name, tool_directory = tool

        url = GITHUB_API_URL.format(name=repo_name, directory=tool_directory)

        response = requests.get(url)
        response.raise_for_status()
        contents = response.json()

        if "." in tool_directory:
            tool_lpath = BASEPATH / tool_name / tool_directory
            download_file(contents["download_url"], tool_lpath)

        else:
            tool_lpath = BASEPATH / tool_name / "themes"
            tool_lpath.mkdir(parents=True, exist_ok=True)
            download_recursive(repo_name, tool_name, contents, tool_lpath)
