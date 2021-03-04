import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles, TextField, fade, Avatar } from "@material-ui/core";
import searchPng from "../../assets/search.png";

const useStyles = makeStyles((theme) => ({
  search: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),

    pointerEvents: "none",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    borderRadius: 20,
  },
}));

const SearchBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <Avatar src={searchPng} />
      </div>
      <TextField
        variant="outlined"
        size="small"
        fullWidth={true}
        placeholder="Search your products"
        color="primary"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
      />
    </div>
  );
};

export default SearchBar;
