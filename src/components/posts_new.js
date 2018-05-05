import React from "react";
import { Link } from "react-router-dom"
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createPost } from "../ducks/actions";
class PostsNew extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.renderField = this.renderField.bind(this)
    }

    renderField(field) {
        return (
            <div>
                <label>{field.label}</label>
                <input
                    type="text"
                    {...field.input}
                />
                {field.meta.touched ? field.meta.error : ''}
            </div>
        )
    }

    onSubmit(values) {
        this.props.createPost(values, () => {
            this.props.history.push("/")
        })

    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <div>
                <h3>Posts New</h3>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field
                        label="Title"
                        name="title"
                        component={this.renderField}
                    />
                    <Field
                        label="Categories"
                        name="categories"
                        component={this.renderField}
                    />
                    <Field
                        label="Post Content"
                        name="content"
                        component={this.renderField}
                    />
                    <div>
                        <button type="submit">Submit</button>
                        <Link to="/"><button>Cancel</button></Link>
                    </div>
                </form>
            </div>
        )
    }
}

function validate(values) {
    const errors = {}

    //validate the inputs from "values"
    if (!values.title || values.title.length < 3) {
        errors.title = "Enter a title that is at least 3 characters!";
    }
    if (!values.categories) {
        errors.categories = "Enter some categories!"
    }
    if (!values.content) {
        errors.content = "Enter some content please!"
    }

    //if errors is empty, the form is fine to submit
    //if errors has any properties, redux form assumes form is invalid
    return errors;
}

export default reduxForm({
    validate,
    form: "PostsNewForm"
})(
    connect(null, { createPost })(PostsNew)
);