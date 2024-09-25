'use client'; // This ensures the component is rendered only on the client

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask, editTask } from '@/slices/task';
import _ from 'lodash';

export const Tasklist = () => {
  const [text, setText] = useState('');

  // Use the memoized selector to get tasks from the store
  const tasks = useSelector((state: any) => state.taskReducer.tasks);
  const dispatch = useDispatch();
console.log(tasks);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          if (text.trim() !== '') {
            dispatch(addTask({
              id: _.uniqueId(),
              text: text,
              completed: false
            }));
            setText('');
          }
        }}
      >
        Add
      </button>

      {tasks && tasks.length > 0 ? (
        tasks.map((task: any) => (
          <div key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => dispatch(editTask({
                ...task,
                completed: !task.completed
              }))}
            />
            <span>{task.text}</span>
            <button onClick={() => dispatch(deleteTask(task))}>Delete</button>
          </div>
        ))
      ) : (
        <p>No tasks available</p>
      )}
    </div>
  );
};