package com.management.service;

import com.management.entity.Employee;
import com.management.repository.EmployeeRepo;
import com.management.service.imp.EmployeeServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService implements EmployeeServiceImp {

    @Autowired
    private EmployeeRepo employeeRepo;

    @Override
    public Employee save(Employee employee) {

        return employeeRepo.save(employee);
    }

    @Override
    public Employee login(Long eid, String epassword) {

        Employee employee = employeeRepo.findById(eid)
                .orElseThrow(()->new RuntimeException("Not Found"));

        if(employee == null){
            return null;
        }

        if(!employee.getEpassword().equals(epassword)){
            return null;
        }

        return employee;
    }

    @Override
    public List<Employee> findAll() {

        return employeeRepo.findAll();
    }

    @Override
    public Employee findById(Long eid) {
        return employeeRepo.findById(eid)
                .orElseThrow(()-> new RuntimeException("Employee Not Found"));
    }

    @Override
    public Employee update(Long eid, Employee employee) {
        Employee employee1 = employeeRepo.findById(eid).get();

        employee1.setEname(employee.getEname());
        employee1.setEemail(employee.getEemail());
        employee1.setEpassword(employee.getEpassword());
        employee1.setRole(employee.getRole());

        employeeRepo.save(employee1);
        return employee1;
    }

    @Override
    public void deleteById(Long eid) {
        employeeRepo.deleteById(eid);
    }
}
