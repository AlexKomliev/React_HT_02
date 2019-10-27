import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super();

        this.state = {
            title: props.item ? props.item.title : '',
            text: props.item ? props.item.text : '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.clearForm = this.clearForm.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;

        this.setState({
            [name]: value,
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        const { title, text } = this.state;
        const date = new Date(Date.now()).toString();

        const data = {
            id: Date.now(),
            date: date,
            title: title,
            text,
        };

        this.props.addFromProps(data);
        this.clearForm();
    }

    clearForm() {
        this.setState({
            title: '',
            text: '',
        });
    }

	render() {
        const { title, text } = this.state;
        const { type } = this.props;
        return (
			<form
              className={`form ${type ? type : ''}`}
              onSubmit={this.handleSubmit}
            >
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={title}
                  onChange={this.handleChange}
                />

                <label htmlFor="text">Comment</label>
                <textarea
                  name="text"
                  id="text"
                  value={text}
                  onChange={this.handleChange}
                />

                <button className="button">post</button>
            </form>
		);
	}
}

export default Form;