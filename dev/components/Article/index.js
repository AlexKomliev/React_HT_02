import React, { Component } from 'react';

class Article extends Component {
    render() {
        const { title, date, text } = this.props;

        return (
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
    }
}

export default Article;