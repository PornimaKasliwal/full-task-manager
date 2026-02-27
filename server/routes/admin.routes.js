const { getAllEmployees, updateAllEmployees, toggleEmployees, deleteEmployees, createTask, readTask, deleteTask, updateTask, restoreEmployees, permanantDeleteEmployees } = require("../controllers/admin.controller")


const router = require("express").Router()

router 
.get("/employee", getAllEmployees)
.put("/update-employee/:eid", updateAllEmployees)
.put("/toggle-employee-status/:eid", toggleEmployees)
.delete("/delete-employee/:eid", deleteEmployees)
.put("/restore-employee/:eid", restoreEmployees)
.delete("/remove-employee/:eid", permanantDeleteEmployees)

.post("/todo-create", createTask)
.get("/todo", readTask)
.put("/todo/:tid", updateTask)
.delete("/todo/:tid", deleteTask)


module.exports = router