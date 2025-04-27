const express = require('express')
const router = express.Router()
const { Employee } = require('../models/employee.model')
////////////////////////////////////////////////////////////////
router.get('/',async(req,res)=> {
    try {
        const allEmp = await Employee.find()
        res.json(allEmp)
    } catch (error) {
        res.json({message: "somthing is wrong"})
    }
})
/////////////////////Get on author //  get by id ////////////////////////////
router.get('/:id',async (req,res) => {

    try {
        const emp = await Employee.findById(req.params.id)
    if(emp)
    {
        res.json(emp)
    } else 
    {
        res.json({message : "This Employee not found"})
    }
    } catch (error) {
        res.json({message: "somthing is wrong"})
    }
    
})

///////////////////////Post /// Add new author ///////////////////////////
router.post('/',async (req,res)=> {
  
    try {

    const emp = new Employee({
        fullName: req.body.fullName,
        position: req.body.position,
        location: req.body.location,
        salary: req.body.salary
        
    }) 
    const result = await emp.save()   
    res.json(result)
    } catch (error) {
        res.json({message: "somthing is wrong**"})
    }
})
////////////////////// put ///////////// update author /////////////////
router.put('/:id',async (req,res) => {
    
    const emp = await Employee.findByIdAndUpdate(req.params.id,{
        $set:{
            fullName: req.body.fullName,
            position: req.body.position,
            location: req.body.location,
            salary: req.body.salary
        }
    },{new: true})
  
        res.json(emp)
})
////////////////////// delete ///////////// delete author /////////////////
router.delete('/:id',async(req,res) => {
    
    const emp = await Employee.findById(req.params.id)
 
    if(emp){
        await Employee.findByIdAndDelete(req.params.id)
        res.json({message : "This Employee is deleted"})
    }else {
        res.json({message : "This Employee not found"})
    }
})

module.exports = router