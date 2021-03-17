import makeStyles from "@material-ui/core/styles/makeStyles";

const useNavBarStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  iconText: {
    fontSize: 15,
    marginLeft: theme.spacing(1),
  },
  iconStyle: {
    width: 32,
    height: 32,
    marginLeft: 10,
    marginRight: 8,
    marginBottom: 5,
  },
  desktopOnlyView: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  mobileOnlyView: {
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    width: 32,
    height: 32,
    pointerEvents: "none",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    borderRadius: 20,
  },
  searchbarRoot: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "black",
    },
  },
}));

export { useNavBarStyles };
