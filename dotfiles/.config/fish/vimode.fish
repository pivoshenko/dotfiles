function fish_user_key_bindings
    # Execute this once per mode that `emacs` bindings should be used in
    fish_default_key_bindings -M insert

    # Then execute the `vi` bindings so they take precedence when there's a conflict
    # Without `--no-erase`, `fish_vi_key_bindings` will default to
    # Resetting all bindings
    # The argument specifies the initial mode (`insert`, `default` or `visual`)
    fish_vi_key_bindings --no-erase insert
end

# Emulates `vim`'s cursor shape behavior
set fish_cursor_default block
# Set the insert mode cursor to a line
set fish_cursor_insert line
# Set the replace mode cursors to an underscore
set fish_cursor_replace_one underscore
set fish_cursor_replace underscore
# Set the external cursor to a line. The external cursor appears when a command is started
# The cursor shape takes the value of `fish_cursor_default` when `fish_cursor_external` is not specified
set fish_cursor_external line
# The following variable can be used to configure cursor shape in
# Visual mode, but due to `fish_cursor_default`, is redundant here
set fish_cursor_visual block
