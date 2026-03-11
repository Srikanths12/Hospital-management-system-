
package com.example.hospital;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
public class PatientController {

 List<Map<String,String>> patients = new ArrayList<>();

 @PostMapping("/addPatient")
 public Map<String,String> addPatient(@RequestBody Map<String,String> patient){

  patients.add(patient);

  Map<String,String> res = new HashMap<>();
  res.put("message","Patient Added Successfully");

  return res;
 }

 @GetMapping("/patients")
 public List<Map<String,String>> getPatients(){
  return patients;
 }

}
