import React from "react";
import {
  Paper,
  InputBase,
  Divider,
  IconButton,
  CircularProgress,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";
import styles from "./style";

const SearchInput = (props) => {
  const classes = styles();
  const { onChange, disabled, placeHolder } = props;
  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder={placeHolder}
        inputProps={{ "aria-label": placeHolder }}
        onChange={onChange}
      />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
      >
        {disabled ? <CircularProgress size={20} /> : <SearchIcon />}
      </IconButton>
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton
        color="primary"
        className={classes.iconButton}
        aria-label="directions"
        disabled={disabled}
      >
        <DirectionsIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchInput;
