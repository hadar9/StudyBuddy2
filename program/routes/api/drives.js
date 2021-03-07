const c = require('config');
const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Drive = require('../../models/Drive');

//@route    GET api/drives/getmydrives
//@desc     get drives
//@access   Private
router.get('/getmydrives', auth, async (req, res) => {
  try {
    const id = req.user.id;
    const userdrives = await Drive.find({ user: id });
    res.json(userdrives);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

//@route    POST api/drives/createdrive
//@desc     create new drive
//@access   Private
router.post('/createdrive', auth, async (req, res) => {
  try {
    drive = {};
    drive.user = req.user.id;
    drive.name = req.body.drivename;
    drive.drivepermission = 'private';
    drive.subadmins = [];
    drive.drivebuddies = [];
    drive.chatgroup = [];

    let newdrive = new Drive(drive);
    await newdrive.save();
    res.status(200).send('drive created');
  } catch (err) {
    res.status(500).send('Server Error');
  }
});
module.exports = router;
