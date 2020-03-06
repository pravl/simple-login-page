import React from "react";
import "./LoginForm.css"

class LoginForm extends React.Component {
  state = {
    data: {
      email: "",
      password: ""
    },
    errors: {}
  };

  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  onSubmit = (e) => {
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    e.preventDefault()
    if (Object.keys(errors).length === 0) {
      this.props
        .submit(this.state.data)
    }
  };

  validate = data => {
    const errors = {};
    if (!data.password) errors.password = "Can't be blank";
    return errors;
  };

  render() {
    const { data, errors } = this.state;

    return (
      <form onSubmit={this.onSubmit} >
        <div className="form-wrap">
            <div className="field-wrap">
                <div className="label">
                    <label htmlFor="email">Email</label>
                </div>
                <div className="input">
                    <input
                    className="input-element"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="example@example.com"
                    value={data.email}
                    onChange={this.onChange}
                    />
                </div>
            </div>
           {errors.email && <InlineError text={errors.email} />}
     
        <div className="field-wrap">
            <div className="label">
                <label htmlFor="password">Password</label>
            </div>
            <div className="input">
                <input
                className="input-element"
                type="password"
                id="password"
                name="password"
                placeholder="Make it secure"
                value={data.password}
                onChange={this.onChange}
            />
            </div>
          </div>
           {errors.password && <InlineError text={errors.password} />} 
            <button className="button">Login</button>
        </div>
      </form>
    );
  }
}

const InlineError = (props) => (<div className="error">{props.text}</div>)


export default LoginForm;