import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getProfile } from '../../../Redux/profile/thunk';
import { toast } from 'react-toastify';
import { handleApiRequest } from '../../../Services/handleApiRequest';
import { CgLayoutGrid } from 'react-icons/cg';




const UserProfile = () => {

  const dispatch = useDispatch();
  
  const [userProfile, setUserProfile] = useState({});

  const handleProfile = async () => {
    // try{
    //   const details = {};
    //   const response =await  dispatch(getProfile()).unwrap();
      
    //   if(response.status==="failure"){
    //     toast.error(response.message);
    //   }
    //   if(response.status === "success"){
    //     console.log("success");
    //   }
    //   // console.log("response", response);
    //   console.log(response.status); // Log only the status field
    // }
    // catch(error){
    //   console.log("error", error);
    //   toast.error(error.message);
    // }


    const response = await handleApiRequest(getProfile, );
    // console.log('response.staus', response.status);
    // if(response.staus==="success"){ 
    //   console.log("success")
    // }
    if (response.status === "success") {
      setUserProfile(response.data || {});
      // console.log('response.staus', response.status);
    }
  }

  useEffect (()=>{
    handleProfile()
  }, [])

  console.log("userProfile", userProfile);

  return (
    <div>
      {/* Page Header Start */}
      <div className="container-fluid page-header py-6 my-6 mt-0 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center">
          <h1 className="display-4 text-white animated slideInDown mb-4">User Profile</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
              <li className="breadcrumb-item"><a className="text-white" href="#">/</a></li>
              <li className="breadcrumb-item text-primary active" aria-current="page">Profile</li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Page Header End */}

      {/* 404 Start */}
      <div className="container-xxl py-6 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <i className="bi bi-exclamation-triangle display-1 text-primary"></i>
              <h1 className="display-1">Profile</h1>
              <h1 className="mb-4">User Name: { userProfile.name } </h1>
              <p className="mb-4">Email: { userProfile?.email }</p>
              <a className="btn btn-primary py-3 px-5" href="/">Go Back To Home</a>
            </div>
          </div>
        </div>
      </div>
      {/* 404 End */}
    </div>
  );
};

export default UserProfile;
