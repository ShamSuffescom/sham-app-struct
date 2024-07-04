import React from 'react';

const ForgetPasswordForm = () => {
  return (
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Forget Password</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form>
          <div className="mb-3">
            <label htmlFor="forgetEmail" className="form-label">Email address</label>
            <input type="email" className="form-control" id="forgetEmail" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPasswordForm;
