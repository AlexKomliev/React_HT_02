import React from 'react';

const Article = ({ title, date, text }) =>(
    <div className="article">
        <h3 className="article_title">
            {title}
        </h3>
        <em className="article_date">
            {date}
        </em>
        <div className="article_text">
            {text}
        </div>
    </div>
);

export default Article;