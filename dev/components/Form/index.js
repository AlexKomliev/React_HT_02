import React, { useState } from 'react';

import style from  './style.css';

const Form = ({ item = {}, addFromProps }) => {
    const [title, setTitle] = useState(item.title || '');
    const [text, setText] = useState(item.text || '');

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'title') {
            setTitle(value);
        } else {
            setText(value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const date = new Date(Date.now()).toString();

        const data = {
            id: Date.now(),
            date: date,
            title: title,
            text,
        };

        addFromProps(data);
        setTitle('');
        setText('');
    };

    return (
        <form
            className={style.form}
            onSubmit={handleSubmit}
        >
            <label htmlFor="title">Title</label>
            <input
                className={style.input}
                type="text"
                id="title"
                name="title"
                value={title}
                onChange={handleChange}
            />

            <label htmlFor="text">News content</label>
            <textarea
                className={style.textarea}
                name="text"
                id="text"
                value={text}
                onChange={handleChange}
            />

            <button className={style.button}>post</button>
        </form>
    );
};

export default Form;