import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedin: true,
    };
  }
  userSelect() {
    this.setState({
      artisan: !this.state.artisan,
    });
  }
  render() {
    return (
      <div className="container signUp">
        <div className="row">
          <div className="col-sm-12 artisan select">
            <h1>Login</h1>
          </div>
          <br />
          <div className="col-sm-12">
            <form className="form" name="form" noValidate>
              <label htmlFor="name" >Email:</label>
              <input
                type="text"
                name="name"
                className="form-control"
                required
              />
              <label htmlFor="name" >Password</label>
              <input
                type="text"
                name="name"
                className="form-control"
                required
              />
              <button
                value="submit"
                className="btn btn-inverse btn-lg btn-register"
                type="submit"
              >Submit</button>
              <h4>Not a member? <Link to="/signup">Join Us!</Link></h4>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
