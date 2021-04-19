import React from 'react';
import { Image, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function ProfileDisplay({ profiles: { profile } }) {
  return (
    <div className='displayprofile text-center'>
      <Col>
        <Image className='profilepic' src={profile.user.avatar} roundedCircle />
      </Col>
      <h1>{profile.user.username}</h1>
      <p>
        <strong>First Name: </strong>
        {profile.firstname}
      </p>
      <p>
        <strong>Last Name: </strong>
        {profile.lastname}
      </p>
      <p>
        <strong>Attending: </strong>
        {profile.studyat}
      </p>
      <p>
        <strong>Study Field: </strong>
        {profile.studyfield}
      </p>
    </div>
  );
}

ProfileDisplay.propTypes = {
  profiles: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profiles: state.profile,
});

export default connect(mapStateToProps)(ProfileDisplay);
