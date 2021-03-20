import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccountOption from "./AccountOption";
import WishlistOption from "./WishlistOption";
import LanguageOption from "./LanguageOption";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  list: {
    width: 220,
    display: "flex",
    flexDirection: "column",
  },
  fullList: {
    width: "auto",
  },
});

const DrawerItems = () => {
  const classes = useStyles();

  return (
    <List className={classes.list}>
      <ListItem button key={"account"}>
        <ListItemIcon>
          <AccountOption />
        </ListItemIcon>
      </ListItem>
      <Divider />
      <ListItem button key={"wishlist"}>
        <ListItemIcon>
          <WishlistOption />
        </ListItemIcon>
      </ListItem>
      <ListItem button key={"language"}>
        <ListItemIcon>
          <LanguageOption />
        </ListItemIcon>
      </ListItem>

      <ListItem
        button
        key={"logout"}
        style={{
          marginTop: 350,
          justifyContent: "center",
          alignSelf: "flex-end",
          // justifySelf: "flex-end",
        }}
      >
        {/* <Divider />
        <Button variant="contained" color="secondary">
          Logout
        </Button> */}
      </ListItem>
    </List>
  );
};

export default DrawerItems;
