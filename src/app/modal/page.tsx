'use client'
import React, { useState } from 'react';

const Modal = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div>
                <button onClick={() => setOpen(true)}>Open modal</button>
            </div>
            <div style={{
                flex: 1,
                width: '100%',
                height: '100vh',
                backgroundColor: 'transparent',
                display: open ? 'flex' : 'none',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 100,
            }}
                onClick={() => {
                    setOpen(false)
                }}
            >
                <div
                className='container'
                    style={{
                        padding: 10,
                        width: 400,
                        height: 400,
                        backgroundColor: 'white',
                        borderRadius: 10,
                        top: '50%',
                        left: '50%',
                        flexDirection: 'column',
                        display: 'flex',
                        justifyContent: 'space-between',
                        boxShadow: '2px 2px 5px rgba(0,0, 0, 0.5)',
                    }}
                    onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                    }}
                >
                    <div className='header'
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: 5,
                            maxHeight: 40,
                        }}
                    >
                        <h3>Title</h3>
                        <button
                            style={{
                                backgroundColor: 'transparent',
                                fontSize: 20,
                                borderRadius: 25,
                                width: 30,
                                height: 30,
                                cursor: 'pointer',
                                display: 'flex',
                                border: '1px solid #ccc',
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: 'red',
                            }}
                            onClick={() => setOpen(false)}
                        >X</button>
                    </div>
                    <div
                        className='content'
                        style={{
                            display: 'flex',
                            flex: 3,
                        }}
                    >content</div>
                    <div
                        className='action'
                        style={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            gap: 10,
                            padding: 10,
                            maxHeight: 50,
                        }}>
                        <button
                            style={{
                                fontSize: 12,
                                borderRadius: 15,
                                backgroundColor: '#fefefe',
                                width: 100,
                                height: 30,
                                display: 'flex',
                                justifyContent: 'center',
                                border: '1px solid #FEFEFE',
                                alignItems: 'center',
                                boxShadow: '2px 2px 5px rgba(0,0, 0, 0.5)',
                            }}
                        >Save</button>
                        <button
                            style={{
                                fontSize: 12,
                                borderRadius: 15,
                                backgroundColor: '#fefefe',
                                width: 100,
                                height: 30,
                                display: 'flex',
                                justifyContent: 'center',
                                border: '1px solid #FEFEFE',
                                alignItems: 'center',
                                boxShadow: '2px 2px 5px rgba(0,0, 0, 0.5)',
                            }}
                            onClick={() => setOpen(false)}
                        >Close</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;