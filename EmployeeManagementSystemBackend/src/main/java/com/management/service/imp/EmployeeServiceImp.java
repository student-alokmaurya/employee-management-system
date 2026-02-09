package com.management.service.imp;

import com.management.entity.Employee;

import java.util.List;

public interface EmployeeServiceImp {

    Employee save(Employee employee);

    Employee login(Long eid, String epassword);

    List<Employee> findAll();

    Employee findById(Long eid);

    Employee update(Long eid, Employee employee);

    void deleteById(Long eid);
}
