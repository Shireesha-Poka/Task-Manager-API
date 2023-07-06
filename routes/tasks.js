const express = require('express')
const router = express.Router() 

const {getAllTasks,createtask,gettask,updatetask,deletetask,} = require('../controllers/tasks')

router.route('/').get(getAllTasks).post(createtask)
router.route('/:id').get(gettask).patch(updatetask).delete(deletetask)

module.exports = router