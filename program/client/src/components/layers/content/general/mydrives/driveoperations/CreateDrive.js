import React, { useState } from 'react';
import { Button, Form, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createdrive, getdrives } from '../../../../../../actions/drives';

function CreateDrive({ createdrive, getdrives }) {
  const [drivename, setdrive] = useState('');

  const onchange = (e) => {
    setdrive(e.target.value);
  };

  const onsubmit = (e) => {
    e.preventDefault();
    createdrive(drivename);
  };

  return (
    <div className='mx-auto'>
      <Form onSubmit={(e) => onsubmit(e)}>
        <Form.Row>
          <Form.Group
            className='mx-auto'
            as={Col}
            md='5'
            controlId='formGridField'
          >
            <Form.Control
              type='text'
              placeholder='drive name'
              name='driveername'
              value={drivename}
              onChange={(e) => setdrive(e.target.value)}
              required={true}
            />
          </Form.Group>
          <Button variant='info' className='mb-3' size='m' type='submit'>
            Create drive
          </Button>
        </Form.Row>
      </Form>
    </div>
  );
}

CreateDrive.propTypes = {
  createdrive: PropTypes.func.isRequired,
  getdrives: PropTypes.func.isRequired,
};
export default connect(null, { createdrive, getdrives })(CreateDrive);
