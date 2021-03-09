import React from "react";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import searchPng from "../../assets/search.png";
import { useNavBarStyles } from "./Styles/commonStyles";

const SearchBar = () => {
  const classes = useNavBarStyles();
  return (
    <div className={classes.root}>
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
          root: classes.searchbarRoot,
          input: classes.inputInput,
        }}
      />
    </div>
  );
};

export default SearchBar;
