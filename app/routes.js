const express = require('express')
const router = express.Router()

router.post('/it3/mentor-time-answer', function (req, res) {
  const meetingDone = req.session.data['meeting-done']

  if (meetingDone === "yes") {
    res.redirect('/it3/abi-week-complete')
  } else if (meetingDone === "no") {
    res.redirect('/it3/abi-week-todo')
  }
})

router.post('/it3/goal-answer', function (req, res) {
  const goalAchieved = req.session.data['goal-achieved']

  if (goalAchieved === "inprogress") {
    res.redirect('/it3/abi-week-complete-inprogress')
  } else if (goalAchieved === "complete") {
    res.redirect('/it3/abi-week-complete-complete')
  }
})

router.post('/it3/guidance-question-answer', function (req, res) {
  const readGuidance = req.session.data['read-guidance']

  if (readGuidance === "yes") {
    res.redirect('/it3/guidance')
  } else {
    res.redirect('/it3/home')
  }
})

router.post('/it4/guidance-question-answer', function (req, res) {
  const readGuidance = req.session.data['read-guidance']

  if (readGuidance === "yes") {
    res.redirect('/it4/guidance')
  } else {
    res.redirect('/it4/home')
  }
})

router.post('/dev/ambition/guidance-question-answer', function (req, res) {
  const readGuidance = req.session.data['read-guidance']

  if (readGuidance === "yes") {
    res.redirect('/dev/ambition/guidance')
      } else if  (readGuidance === "no") {
      res.redirect('/dev/ambition/module-list')
    } else if  (!readGuidance) {
    res.redirect('/dev/ambition/guidance-question-error')
    }
})

router.post('/dev/cip', function(req, res) {
  const email = req.session.data['email']

  if (email === "error") {
    res.redirect('/dev/sign-in-error')
  } else if (!email) {
    res.redirect('/dev/sign-in-error-none')
  } else if (email === "format") {
    res.redirect('/dev/sign-in-error-format')
  } else {
    res.redirect('/dev/cip')
  }
})

router.post('/other-users/home', function(req, res) {
  const email = req.session.data['email']

  if (email === "not-recognised@error.com") {
    res.redirect('/other-users/sign-in-error')
  } else {
    res.redirect('/other-users/home')
  }
})

router.post('/other-users/email-sent', function(req, res) {
  const create = req.session.data['create']

  if (create === "recognised@error.com") {
    res.redirect('/other-users/create-account-error')
  } else {
    res.redirect('/other-users/email-sent')
  }
})

// Add your routes here - above the module.exports line

module.exports = router
