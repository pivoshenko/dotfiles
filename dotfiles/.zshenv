# =================================================
# Functions
# =================================================

# preview function for `fzf` completion
# - reads input and displays with `bat`, `tree`, or `hexyl` based on the type
# - supports directories, text files, images, and binary files
_fzf_complete_realpath() {
  local realpath="${1:--}"

  if [ "$realpath" = '-' ]; then
    local stdin="$(< /dev/stdin)"
    echo "$stdin" | bat \
      --language=sh \
      --wrap=character \
      --terminal-width="$FZF_PREVIEW_COLUMNS" \
      --line-range :100
    return
  fi

  if [ -d "$realpath" ]; then
    tree -a -I '.DS_Store|.localized' -C "$realpath" | head -100
  elif [ -f "$realpath" ]; then
    mime="$(file -Lbs --mime-type "$realpath")"
    category="${mime%%/*}"

    if [ "$category" = 'image' ]; then
      local default_width=$(( "$FZF_PREVIEW_COLUMNS" < 60 ? 60 : "$FZF_PREVIEW_COLUMNS" ))
      catimg -r2 -w "$default_width" "$realpath"
    elif [[ "$mime" =~ 'binary' ]]; then
      hexyl \
        --length 5KiB \
        --border none \
        --terminal-width "$FZF_PREVIEW_COLUMNS" \
        "$realpath"
    else
      bat \
        --line-range :100 \
        "$realpath"
    fi
  else
    echo "$realpath" | fold -w "$FZF_PREVIEW_COLUMNS"
  fi
}
