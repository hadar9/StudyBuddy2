import React from 'react';
import ShowDrives from '../mydrives/driveoperations/ShowDrives';

export default function OtherDrives() {
  return (
    <div className='mydrives'>
      <h1 className='mydrives-title'>Other Drives</h1>
      <div className='showdrives '>
        <ShowDrives />
      </div>
    </div>
  );
}
