import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";

const useStyle = makeStyles({
  date: {
    paddingBottom: "1rem",
  },
});

function Header({ time, children }) {
  const classes = useStyle();
  return (
    <Grid container>
      <Grid item xs={12} sm={8} className={classes.date}>
        <Typography variant="h6" style={{ fontWeight: "bold" }}>
          {time}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4}>
        {children}
      </Grid>
    </Grid>
  );
}

export default Header;
