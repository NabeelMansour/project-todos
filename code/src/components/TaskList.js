import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import tasks from "reducers/Tasks";

 const TaskItem = styled.article`
  min-height: 370px;
  max-width: 300px;
/* //   border: 1px solid #dcdcdc;
//   border-radius: 5px;
//   padding: 10px;
//   margin-bottom: 5px;
//   position: relative; */
 `;
const DeleteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
`;

const TaskList = () => {
  const taskList = useSelector((store) => store.tasks.items);

  const dispatch = useDispatch();

  const onTaskToggle = (taskId) => {
    dispatch(tasks.actions.toggleItem(taskId));
  };

  const onTaskDelete = (index) => {
    dispatch(tasks.actions.deleteItem(index));
  };

  return (
    <TaskItem>
      {taskList.map((taskItem, taskIndex) => (
        <div key={taskItem.id} className={`list-group-item ${taskList.isDone && 'list-group-item-success'}`}>
          <h5>{taskItem.task}</h5>
          <label>
            <input
              type="checkbox"
              className='mr-3'
              checked={taskList.isDone}
              onChange={() => onTaskToggle(taskItem.id)}
            />
             &nbsp; Is done
          </label>
          <DeleteButton onClick={() => onTaskDelete(taskIndex)}>
            <span role="img" aria-label="delete" className='btn btn-danger'>
              Delete
            </span>
          </DeleteButton>
        </div>
      ))}
      </TaskItem>
  );
};

export default TaskList;
