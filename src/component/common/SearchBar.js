import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { useNavBarStyles } from "./Styles/commonStyles";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { IconButton, InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { connect } from "react-redux";
import { suggestProducts } from "../../actions/product";
import PropTypes from "prop-types";
import { debounce } from "../../utils/debounce";
import { useHistory } from "react-router";

const SearchBar = ({
  suggestProducts,
  product: { product_suggestions, loading },
}) => {
  const classes = useNavBarStyles();
  const history = useHistory();
  const [suggestions, setSuggestion] = useState([]);

  useEffect(() => {
    setSuggestion(product_suggestions);
    console.log(suggestions);
    return () => {
      setSuggestion([]);
    };
  }, [product_suggestions]);

  const handleTextChange = (e) => {
    e.preventDefault();

    if (!e.target.value) {
      return;
    }
    const debounced = debounce(suggestProducts, 500);
    debounced(e.target.value);
  };

  const onItemSelect = (e, value) => {
    e.preventDefault();

    console.log("selected item", value);
    history.push(`/products/?q=${value}`);
  };

  return (
    <div className={classes.root}>
      <Autocomplete
        freeSolo
        disableClearable
        fullWidth={true}
        options={suggestions.map((option) => option.title)}
        onChange={onItemSelect}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            size="small"
            placeholder="Search your products"
            color="primary"
            onChange={handleTextChange}
            classes={{
              root: classes.searchbarRoot,
            }}
            InputProps={{
              ...params.InputProps,
              type: "search",
              endAdornment: (
                <InputAdornment>
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        )}
      />
    </div>
  );
};

SearchBar.propTypes = {
  suggestProducts: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  product: state.product,
});

export default connect(mapStateToProps, {
  suggestProducts,
})(SearchBar);
