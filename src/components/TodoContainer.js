import {
  Container,
  Paper,
  Input,
  Grid,
  Button,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";

import {
  del_hover,
  btn_color,
  btn_hover,
  done_hover,
  nav_color,
  paper_color,
  white,
} from "./colors";
import { TodayTime } from "./TimeConverter";
import AddTask from "./AddTask";
import InCompleteTask from "./InCompleteTask";
import Header from "./Header";
import Completed from "./Completed";

const useStyles = makeStyles({
  paper: {
    backgroundColor: paper_color,
    margin: "auto",
    padding: "1.4rem",
    maxWidth: "40rem",
    minHeight: "15vh",
    color: white,
  },
  grid: {
    width: 20,
    backgroundColor: "red",
    margin: "auto",
    padding: "auto",
  },
  taskInput: {
    margin: "1rem 0 1rem 0",
  },
  horizentalRow: {
    backgroundColor: "red",
    border: "0.2px solid #c4bbf0",
  },

  form: {
    color: white,
  },
  doneIcon: {
    cursor: "pointer",
    "&:hover": {
      color: done_hover,
    },
  },
  deleteIcon: {
    cursor: "pointer",
    marginRight: "0.5rem",
    "&:hover": {
      color: del_hover,
    },
  },

  link: {
    textDecoration: "none",
    color: white,
    opacity: 0.5,
    "&:hover": {
      opacity: 1,
    },
  },
  btn: {
    backgroundColor: btn_color,
    color: "white",
    maxWidth: "10rem  ",
    padding: "0.5rem",
    marginLeft: "2rem",
    fontWeight: "bolder",
    "&:hover": {
      backgroundColor: btn_hover,
    },
  },
  nav: {
    backgroundColor: nav_color,
    color: "white",
  },
  incomplete: {
    color: white,
  },
  completed: {
    color: white,
  },
});

function TodoContainer() {
  const classes = useStyles();

  // for current month and date
  const [time, setTime] = useState("");

  // incomplete tasks
  const [tasks, setTasks] = useState([
    { text: "Meeting @ 2:00", isCompleted: false },
    { text: "Intern Work", isCompleted: false },
  ]);

  // for finished task
  const [finishedTask, setFinishedTask] = useState([
    { text: "To-Do List", isCompleted: true },
  ]);

  // for input value
  const [value, setValue] = useState("");

  // to import date only once

  useEffect(() => {
    const result = TodayTime();
    setTime(result);
  }, []);

  // for adding todo tasks
  const handleAdd = (e) => {
    e.preventDefault();

    if (!value) return;

    if (
      tasks.some(
        (item) => item.text === value.trim() && item.isCompleted === false
      )
    ) {
      return alert("Already on the list");
    }
    const newValue = { text: value.trim(), isCompleted: false };
    setTasks((old) => [...old, newValue]);
    setValue("");
  };

  // to mark the task complete and move to completed container
  const handleComplete = (index) => {
    let completedTasks = [...tasks];
    let completed = { ...tasks[index], isCompleted: true };
    completedTasks[index] = completed;
    setTasks(completedTasks);
    setFinishedTask([...finishedTask, completed]);
  };

  // to delete the tasks from completed container
  const delCompleted = (item) => {
    const result = finishedTask.filter((allItem) => allItem !== item);
    setFinishedTask(result);
  };

  // to delete tasks from todo list
  const handleDelete = (item) => {
    const result = tasks.filter((allItem) => allItem !== item);
    setTasks(result);
  };

  // to show number of active tasks
  let count = 0;

  return (
    <Container>
      <Paper className={classes.paper}>
        {/* time and number of tasks */}
        <Header time={time} tasks={tasks} count={count}>
          {" "}
          <Typography>
            {tasks.map((item) => {
              if (item.isCompleted === false) {
                count++;
              }
              return null;
            })}
            {count === 0 ? (
              <Typography variant="body1">No tasks to do.</Typography>
            ) : (
              <Typography variant="body1">
                Currently&nbsp;
                <span style={{ color: "#4ecca3", fontWeight: "bold" }}>
                  {count}
                </span>
                &nbsp;tasks to do
              </Typography>
            )}
          </Typography>
        </Header>

        {/* input field to add tasks */}
        <AddTask handleAdd={handleAdd}>
          <Grid item xs={7} md={5}>
            <Input
              placeholder="Enter a Task"
              inputProps={{ "aria-label": "description" }}
              fullWidth
              className={classes.form}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              required
              color="secondary"
            />
          </Grid>
          <Grid item xs={5}>
            <Button className={classes.btn} type="submit" onClick={handleAdd}>
              <Typography variant="caption">ADD TASK</Typography>
            </Button>
          </Grid>{" "}
        </AddTask>

        {/* incomplete tasks */}
        {count === 0 ? (
          <Typography variant="body2" style={{ textAlign: "center" }}>
            You currently have {count} tasks. Add a task to get started!
          </Typography>
        ) : (
          <InCompleteTask
            handleDelete={handleDelete}
            count={count}
            tasks={tasks}
            handleComplete={handleComplete}
          />
        )}
      </Paper>

      {/* completed tasks */}
      <Completed finishedTask={finishedTask} delCompleted={delCompleted} />
    </Container>
  );
}

export default TodoContainer;
