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

// Add your routes here - above the module.exports line

module.exports = router
