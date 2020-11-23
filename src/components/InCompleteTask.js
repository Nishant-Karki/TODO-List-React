import React from "react";
import { del_hover, done_hover } from "./colors";

import { MdDeleteForever, MdDoneAll } from "react-icons/md";

import { Grid, Typography, makeStyles } from "@material-ui/core";
const useStyle = makeStyles({
  deleteIcon: {
    cursor: "pointer",
    marginRight: "0.5rem",
    "&:hover": {
      color: del_hover,
    },
  },
  doneIcon: {
    cursor: "pointer",
    "&:hover": {
      color: done_hover,
    },
  },
  horizentalRow: {
    backgroundColor: "red",
    border: "0.2px solid #c4bbf0",
  },
});

function InCompleteTask({ handleDelete, count, tasks, handleComplete }) {
  const classes = useStyle();

  return (
    <div>
      {tasks.map((item, index) => {
        return (
          <React.Fragment key={index}>
            {!item.isCompleted && (
              <>
                <Grid container style={{ alignItems: "center" }}>
                  <Grid item xs={2} sm={1}>
                    <MdDoneAll
                      size={16}
                      className={classes.doneIcon}
                      onClick={() => handleComplete(index)}
                    />
                  </Grid>
                  <Grid item xs={9} sm={10}>
                    <Typography>{item.text}</Typography>
                  </Grid>
                  <Grid item xs={1}>
                    <MdDeleteForever
                      size={20}
                      className={classes.deleteIcon}
                      onClick={() => handleDelete(item)}
                    />
                  </Grid>
                </Grid>
                <hr className={classes.horizentalRow} />
              </>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default InCompleteTask;
