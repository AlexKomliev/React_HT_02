import React from 'react';

import style from './style.css';

const Article = ({ title, date, text }) =>(

    <div className={style.article}>
        <h3 className={style.article_title}>
            {title}
        </h3>
        <p className={style.article_date}>
            {date}
        </p>
        <div className={style.article_text}>
            {text}
        </div>
    </div>
);

export default Article;