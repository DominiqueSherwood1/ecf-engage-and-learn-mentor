const express = require('express')
const router = express.Router()

router.post('/it4/mentor-time-answer', function (req, res) {
  const finishSession = req.session.data['mentor-time']

  if (finishSession === "yes") {
    res.redirect('/it3/abi-week-complete')
  } else if (mentorTime === "no") {
    res.redirect('/it3/abi-week-todo')
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

// Add your routes here - above the module.exports line

module.exports = router
