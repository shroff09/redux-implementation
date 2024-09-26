'use client'; // This ensures the component is rendered only on the client

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask, editTask } from '@/slices/task';
import _ from 'lodash';

export const Tasklist = () => {
  const [text, setText] = useState('');
  const [edit, setEdit] = useState({
    id: '',
    edit: false,
  });

  // Use the memoized selector to get tasks from the store
  const tasks = useSelector((state: any) => state.taskReducer.tasks);
  const dispatch = useDispatch();
  console.log(tasks);

  return (
    <div
      style={{
        flex: 1,
        backgroundColor: 'white',
        color: 'white',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        maxWidth: '900px',
        margin: '0 auto',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1
        style={{
          color: 'black',
          fontSize: '24px',
          fontWeight: 'bold',
          marginBottom: '10px',
          textAlign: 'center',
        }}
      >Todo App</h1>
      <div
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '10px',
        }}
      >
        <input
          style={{
            flex: 1,
            padding: '5px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            marginRight: '10px',
            width: '100%',
            height: '30px',
          }}
          type="text"
          placeholder="Enter a task"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              if (text.trim() !== '') {
                dispatch(addTask({
                  id: _.uniqueId(),
                  text: text,
                  completed: false
                }));
                setText('');
              }
            }
          }}
        />
        <button
          style={{
            background: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            padding: '5px 10px',
            cursor: 'pointer',
            fontWeight: 'bold',
            height: '40px',
            width: '100px',
          }}
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
          ADD
        </button>
      </div>
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '20px',
        }}
      >
        {tasks && tasks.length > 0 ? (
          tasks.map((task: any) => (
            <div
              style={{
                width: '100%',
                backgroundColor: 'white',
                padding: '5px',
                margin: '10px',
                borderRadius: '5px',
                boxShadow: '0 2px 4px rgba(0, 0, 122, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              key={task.id}>
              <input
                style={{
                  marginRight: '10px',
                  width: '35px',
                  height: '25px',
                  cursor: 'pointer',
                  marginLeft: '10px',
                  marginBottom: '10px',
                  marginTop: '10px',
                }}
                type="checkbox"
                checked={task.completed}
                onChange={() => dispatch(editTask({
                  ...task,
                  completed: !task.completed
                }))}
              />

              {edit.edit && edit.id === task.id ?
                <input
                  style={{
                    flex: 1,
                    padding: '5px',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    marginRight: '10px',
                    width: '100%',
                    height: '30px',
                    marginLeft: '10px',
                    marginBottom: '10px',
                    marginTop: '10px',
                  }}
                  value={task.text}
                  onChange={(e) => {
                    dispatch(editTask({
                      ...task,
                      text: e.target.value
                    }));

                  }}
                /> : <text
                  style={{
                    flex: 1,
                    textDecoration: task.completed ? 'line-through' : 'none',
                    fontSize: '26px',
                    marginLeft: '10px',
                    color: task.completed ? 'grey' : '#333',
                    fontWeight: 'bold',

                  }}
                >{task.text}</text>}
              <button
                style={{
                  background: '#007bff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  padding: '5px 10px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  marginLeft: '10px',
                  marginBottom: '10px',
                  marginTop: '10px',
                  height: '40px',
                  width: '100px',
                }}
                onClick={() => {

                  edit.edit ?
                    setEdit({
                      id: '',
                      edit: false
                    }) :
                    setEdit({ id: task.id, edit: true })

                }
                }
              >{edit && edit.id === task.id ? 'Save' : 'Edit'}</button>
              <button
                style={{
                  background: '#D32F2F',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  padding: '5px 10px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  marginLeft: '10px',
                  marginBottom: '10px',
                  marginTop: '10px',
                  height: '40px',
                  width: '100px',
                }}
                onClick={() => dispatch(deleteTask(task))}>Delete</button>
            </div>
          ))
        ) : (
          <p
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: '16px',
              marginLeft: '10px',
              marginBottom: '10px',
              marginTop: '10px',
            }}>No tasks available</p>
        )}
      </div>
    </div>
  );
};