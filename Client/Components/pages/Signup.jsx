import React from 'react';

class Signup extends React.Component {
  constructor(){
    super();
  }
  render() {
    return (
      <div className="container signUp">
        <div className="row">
          <div className="col-sm-12">
            <h1>Sign up</h1>
          </div>
          <p>Please identify what kind of user you are.</p>
          {/* <input type="checkbox"> */}
          <div className="col-sm-12">
            <form className="form" name="form" ng-submit="vm.register(form)" noValidate>
              <label >Trade:</label>
              <p className="input-group" />
              <input
                type="text"
                name="name"
                className="form-control" ng-model="vm.profile.trade"
                required
              />
              <label>Location:</label>
              <p className="input-group" />
              <input
                type="text"
                name="name"
                className="form-control"
                ng-model="vm.profile.location"
                required
              />
              <label>Telephone Number:</label>
              <p className="input-group" />
              <input
                type="text"
                name="name"
                className="form-control"
                ng-model="vm.profile.telephone"
                required
              />
              <label>Keywords</label>
              <p className="input-group" />
              <input
                type="text"
                name="name"
                className="form-control"
                ng-model="vm.profile.keywords"
                required
              />
              <label>Photo</label>
              <p className="input-group" />
              <input
                type="file"
                name="fileupload"
                value="fileupload" id="fileupload" />
              <label>Bio</label>
              <p className="input-group" />
              <input
                type="text"
                name="name"
                className="form-control"
                ng-model="vm.profile.bio"
                required
              />
              <button
                value="submit"
                className="btn btn-inverse btn-lg btn-register"
                type="submit"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
