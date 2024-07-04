import React from 'react';

const SignupForm = () => {
  return (
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Sign Up</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form>
          <div className="mb-3">
            <label htmlFor="signupName" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="signupName" />
          </div>
          <div className="mb-3">
            <label htmlFor="signupEmail" className="form-label">Email address</label>
            <input type="email" className="form-control" id="signupEmail" />
          </div>
          <div className="mb-3">
            <label htmlFor="signupPassword" className="form-label">Password</label>
            <input type="password" className="form-control" id="signupPassword" />
          </div>
          <button type="submit" className="btn btn-primary">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
