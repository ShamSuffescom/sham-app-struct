import React from 'react';

const ResetPasswordForm = () => {
  return (
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Reset Password</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form>
          <div className="mb-3">
            <label htmlFor="resetPassword" className="form-label">New Password</label>
            <input type="password" className="form-control" id="resetPassword" />
          </div>
          <div className="mb-3">
            <label htmlFor="resetConfirmPassword" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" id="resetConfirmPassword" />
          </div>
          <button type="submit" className="btn btn-primary">Reset Password</button>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
