import React from "react";
import { Grid, makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  horizentalRow: {
    backgroundColor: "red",
    border: "0.2px solid #c4bbf0",
  },
});

function AddTask({ handleAdd, children }) {
  const classes = useStyle();

  return (
    <>
      <form onSubmit={handleAdd}>
        <Grid container className={classes.taskInput}>
          {children}
        </Grid>
      </form>
      <hr className={classes.horizentalRow} />
    </>
  );
}

export default AddTask;
