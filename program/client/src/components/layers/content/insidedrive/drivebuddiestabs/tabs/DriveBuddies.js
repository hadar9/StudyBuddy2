import React, { Fragment } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import DeleteDriveBuddy from '../../../../navebar/search/searchdrives/operations/DeleteDriveBuddy';
import NameAvatar from '../../../general/buddies/tabs/NameAvatar';
import OtherProfile from '../../../general/buddies/tabs/OtherProfile';
import Show from '../../../general/buddies/tabs/opertaions/Show';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function DriveBuddies({
  drives: { drive, driveloading },
  buddiess: { userloading },
}) {
  const drivebuddie = drive.drivebuddies.map((buddy, index) => {
    if (buddy.status === 'drivebuddy') {
      return (
        <Fragment key={index}>
          <div className='tabcontent'>
            <Row>
              <DeleteDriveBuddy selecteduser={buddy.user._id} />
              <Show selecteduser={buddy.user._id} />
              <NameAvatar
                username={buddy.user.username}
                avatar={buddy.avatar}
              />
            </Row>
          </div>
        </Fragment>
      );
    }
  });

  if (userloading === true) {
    return (
      <div className='text-center'>
        <OtherProfile />
      </div>
    );
  } else if (driveloading === true) {
    return <div>{drivebuddie}</div>;
  } else {
    return (
      <div>
        <Spinner
          size='lg'
          className='tabbudspinner'
          animation='border'
          variant='info'
        />
      </div>
    );
  }
}
DriveBuddies.propTypes = {
  drives: PropTypes.object.isRequired,
  buddiess: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  drives: state.drives,
  buddiess: state.buddies,
});
export default connect(mapStateToProps, {})(DriveBuddies);
