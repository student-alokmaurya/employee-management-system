package com.management.controller;

import com.management.entity.Employee;
import com.management.service.imp.EmployeeServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class EmployeeController {

    @Autowired
    private  final EmployeeServiceImp employeeServiceImp;

    public EmployeeController(EmployeeServiceImp employeeService) {

        this.employeeServiceImp = employeeService;
    }

    @GetMapping("/all")
    public List<Employee> getAllEmployee(){

        return employeeServiceImp.findAll();
    }

    @GetMapping("/get-by/{eid}")
    public Employee getByIdEmployee(@PathVariable Long eid){

        return employeeServiceImp.findById(eid);
    }

    @PutMapping("/update-by/{eid}")
    public String updateEmployee(@PathVariable Long eid, @RequestBody Employee employee){
         employeeServiceImp.update(eid, employee);
        return "update successful";
    }

    @DeleteMapping("/delete-by/{eid}")
    public String deleteEmployee(@PathVariable Long eid){
        employeeServiceImp.deleteById(eid);
        return "Employee deleted successfully";
    }
}
