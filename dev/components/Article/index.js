import React from 'react';

import './style.css';

const Article = ({ title, date, text }) =>(
    <div className="article">
        <h3 className="article_title">
            {title}
        </h3>
        <p className="article_date">
            {date}
        </p>
        <div className="article_text">
            {text}
        </div>
    </div>
);

export default Article;