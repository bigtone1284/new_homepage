import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { createContactMessage } from '../../../actions';
import classnames from 'classnames';

class ContactForm extends Component {

  constructor(props) {
    super(props)
  }

  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger': ''}`;
    const TagName = field.isTextArea ? 'textarea' : 'input';

    return (
      <div className={className}>
        <label>{field.label}</label>
        <TagName
          className="form-control"
          type={field.type || ''}
          placeholder={ field.label }
          { ...field.input }
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.createContactMessage(values, () => {
      browserHistory.push('/?alert=success');
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="form-container">
        <h3>Let's talk.</h3>
        <p>Have a project idea or just want to talk shop?</p>
        <p>Shoot me a message using the form below or email me at <a href="mailto:anthony.defreitas@gmail.com">anthony.defreitas@gmail.com</a>.</p>
        <form id="message-me-form" onSubmit={handleSubmit(this.onSubmit.bind(this))} method="POST" action="https://formspree.io/your@email.com">
          <Field
            label="name"
            name="name"
            component={this.renderField}
            type="text"
          />
          <Field
            label="email"
            name="email"
            component={this.renderField}
            type="text"
          />
          <Field
            label="message"
            name="message"
            component={this.renderField}
            isTextArea={true}
          />
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  // console.log(values) -> { title: 'asdf', categories: 'asdf', content: 'asdf' 
  const errors = {};

  // Validate the inputs from 'values'
  if (!values.name) {
    errors.name = 'Enter your name.';
  }
  if (!values.email) {
    errors.email = 'Enter your email.';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Enter a valid email address.'
  }
  if (!values.message) {
    errors.message = 'Enter a message.';
  }

  // If errors is empty, the form is fine to submit
  // If errors has *any* properties, redux form assumes form is invalid
  return errors;
}

export default reduxForm({
  validate,
  form: 'ContactForm',
  touchOnBlur: false
})(
  connect(null, { createContactMessage })(ContactForm)
);