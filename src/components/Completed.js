import React from "react";

import { Paper, Typography, makeStyles } from "@material-ui/core";

import { MdDeleteForever } from "react-icons/md";
import { del_hover, paper_color, white } from "./colors";

const useStyles = makeStyles({
  paper: {
    backgroundColor: paper_color,
    margin: "auto",
    padding: "1.4rem",
    maxWidth: "40rem",
    minHeight: "15vh",
    color: white,
  },
  deleteIcon: {
    cursor: "pointer",
    marginRight: "0.5rem",
    "&:hover": {
      color: del_hover,
    },
  },
  horizentalRow: {
    backgroundColor: "red",
    border: "0.2px solid #c4bbf0",
  },
  div: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  font: { marginLeft: "1rem", textDecoration: "line-through", opacity: "0.5" },
});
function Completed({ finishedTask, delCompleted }) {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.paper} style={{ marginTop: "4rem" }}>
        <Typography variant="body2" style={{ fontWeight: "bold" }}>
          Completed Tasks
        </Typography>
        <hr className={classes.horizentalRow} />
        {finishedTask.length === 0 ? (
          <Typography variant="body2" style={{ textAlign: "center" }}>
            No tasks Completed.
          </Typography>
        ) : (
          finishedTask.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <div className={classes.div}>
                  <Typography className={classes.font}>{item.text}</Typography>
                  <MdDeleteForever
                    size={20}
                    className={classes.deleteIcon}
                    onClick={() => delCompleted(item)}
                  />
                </div>
                <hr className={classes.horizentalRow} />
              </React.Fragment>
            );
          })
        )}
      </Paper>
    </>
  );
}

export default Completed;
