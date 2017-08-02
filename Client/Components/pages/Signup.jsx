import React from 'react';
import { Link } from 'react-router-dom';

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      artisan: false,
    };
    this.userSelect = this.userSelect.bind(this);
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
            <h1>Sign up</h1>
            <h4>Are you signing up as an Artisan?</h4>
            <label htmlFor="artisan"><b>Artisan</b></label>
            <input
              onChange={this.userSelect}
              value={this.state.artisan}
              name="artisan"
              type="checkbox"
            />
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
              <label htmlFor="name" >Confirm Password</label>
              <input
                type="text"
                name="name"
                className="form-control"
                required
              />
              {this.state.artisan &&
              (
                <div>
                  <label htmlFor="name" >Trade:</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    required
                  />
                  <label htmlFor="name" >Location:</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    required
                  />
                  <label htmlFor="name" >Telephone Number:</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    required
                  />
                  <label htmlFor="name" >Keywords</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    required
                  />
                  <label htmlFor="fileupload" >Photo</label>
                  <input
                    type="file"
                    name="fileupload"
                    value="fileupload"
                    id="fileupload"
                  />
                  <label htmlFor="name" >Bio</label>
                  <br />
                  <textarea
                    name="name"
                    placeholder="Tell us who you are and what you do"
                    className="bio"
                    required
                  />
                </div>
              )}
              <button
                value="submit"
                className="btn btn-inverse btn-lg btn-register"
                type="submit"
              >Submit</button>
              <h4>I am a member? <Link to="/login">Login</Link></h4>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
