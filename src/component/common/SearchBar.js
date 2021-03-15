import React from "react";
import TextField from "@material-ui/core/TextField";
import { useNavBarStyles } from "./Styles/commonStyles";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { IconButton, InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { connect } from "react-redux";
import { suggestProducts, getProductByCategory } from "../../actions/product";
import PropTypes from "prop-types";
import { debounce } from "../../utils/debounce";

const SearchBar = ({
  suggestProducts,
  getProductByCategory,
  product: { product_suggestions, loading },
  history,
}) => {
  const classes = useNavBarStyles();

  const handleTextChange = (e) => {
    e.preventDefault();
    const debounced = debounce(suggestProducts, 500);
    debounced(e.target.value);
  };
  const onItemSelect = (e, value) => {
    e.preventDefault();
    console.log("selected item", value);
  };

  const searchProduct = () => {
    console.log("submitted");
  };

  return (
    <div className={classes.root}>
      <Autocomplete
        freeSolo
        disableClearable
        fullWidth={true}
        options={product_suggestions.map((option) => option.title)}
        onSelect={onItemSelect}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            size="small"
            placeholder="Search your products"
            color="primary"
            onChange={handleTextChange}
            onSubmit={searchProduct}
            classes={{
              root: classes.searchbarRoot,
              input: classes.inputInput,
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
  getProductByCategory: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  product: state.product,
});

export default connect(mapStateToProps, {
  suggestProducts,
  getProductByCategory,
})(SearchBar);
