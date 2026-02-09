package com.management.controller;

import com.management.dto.EmployeeLogin;
import com.management.entity.Employee;
import com.management.service.imp.EmployeeServiceImp;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class AuthController {

    private final EmployeeServiceImp employeeServiceImp;

    public AuthController(EmployeeServiceImp employeeService) {

        this.employeeServiceImp = employeeService;
    }


    @PostMapping("/signup")
    public Employee create( @RequestBody Employee employee){

        return employeeServiceImp.save(employee);
    }

    @PostMapping("/login/{eid}")
    public ResponseEntity<String> login( @RequestBody EmployeeLogin request){
        Employee employee = employeeServiceImp.login(request.getEid(), request.getEpassword());

        if(employee == null){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body("Invalid Password");
        }
        return ResponseEntity.ok("You Are Login Successful");
    }
}
