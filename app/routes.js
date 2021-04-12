const express = require('express')
const router = express.Router()

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
