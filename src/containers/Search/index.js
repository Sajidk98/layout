import {
  Checkbox,
  FormControl,
  Grid,
  Hidden,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import type from "../../actions/constant";
import ActionCard from "../../components/ActionCard";
import SearchInput from "../../components/SearchInput";
import ListItem from "./listItem";
import styles from "./style";

const Search = () => {
  const dispatch = useDispatch();
  const { repos, manager } = useSelector((state) => state);
  const classes = styles();

  const handleChange = (e) => {
    const value = e.target.value;
    if (value || value !== null || value !== "") {
      dispatch({
        type: type.GET_REPOS_BY_REPO_REQUEST,
        payload: e.target.value,
      });
    }
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <SearchInput
            placeHolder="search repositories"
            onChange={handleChange}
            disabled={repos.isLoading}
          />
        </Grid>
        {/* <Grid item xs={12} md={6}>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={10}
              onChange={() => {
                console.log("something");
              }}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid> */}
        <Grid item xs={12} md={6}>
          <Checkbox
            defaultChecked
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
        </Grid>
      </Grid>
      {repos && repos.data.length > 0 && (
        <Hidden xsDown>
          <ActionCard>
            <Grid container spacing={3} alignContent="center">
              <Grid item md={6}>
                <Typography variant="h6" color="textSecondary">
                  Name
                </Typography>
              </Grid>
              <Grid item md={6}>
                <Typography variant="h6" color="textSecondary">
                  User
                </Typography>
              </Grid>
            </Grid>
          </ActionCard>
        </Hidden>
      )}

      {repos &&
        repos.data.map((item) => <ListItem key={item.id} data={item} />)}
    </>
  );
};

export default Search;
