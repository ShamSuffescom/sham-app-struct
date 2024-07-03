import React from 'react';

import team_1 from '../../Assets/img/team-1.jpg';
import team_2 from '../../Assets/img/team-2.jpg';
import team_3 from '../../Assets/img/team-3.jpg';
import team_4 from '../../Assets/img/team-4.jpg';


const TeamSec = () => {
  const teamMembers = [
    { id: 1, name: 'Full Name', profession: 'Trainer', img:  team_1, delay: '0.1s' },
    { id: 2, name: 'Full Name', profession: 'Trainer', img: team_2, delay: '0.3s' },
    { id: 3, name: 'Full Name', profession: 'Trainer', img: team_3, delay: '0.5s' },
    { id: 4, name: 'Full Name', profession: 'Trainer', img: team_4, delay: '0.7s' },
  ];

  return (
    <div className="container-xxl py-6">
      <div className="container">
        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
          <h6 className="text-primary text-uppercase mb-2">Meet The Team</h6>
          <h1 className="display-6 mb-4">We Have Great Experience Of Driving</h1>
        </div>
        <div className="row g-0 team-items">
          {teamMembers.map(member => (
            <div className="col-lg-3 col-md-6 wow fadeInUp" key={member.id} data-wow-delay={member.delay}>
              <div className="team-item position-relative">
                <div className="position-relative">
                  <img className="img-fluid" src={member.img} alt={member.name} />
                  <div className="team-social text-center">
                    <a className="btn btn-square btn-outline-primary border-2 m-1" href="#"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-square btn-outline-primary border-2 m-1" href="#"><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-square btn-outline-primary border-2 m-1" href="#"><i className="fab fa-instagram"></i></a>
                  </div>
                </div>
                <div className="bg-light text-center p-4">
                  <h5 className="mt-2">{member.name}</h5>
                  <span>{member.profession}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSec;
