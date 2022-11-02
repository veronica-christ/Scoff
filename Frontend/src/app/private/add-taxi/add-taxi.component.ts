import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { TaxiDetailsService } from 'src/app/private/service/taxiDetails.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-add-taxi',
  templateUrl: './add-taxi.component.html',
  styleUrls: ['./add-taxi.component.css'],
})
export class AddTaxiComponent implements OnInit {
  submitted = false;
  Form = new FormGroup({
    regNo: new FormControl('',[Validators.required]),
    driver: new FormControl('',[Validators.required]),
    modelYear: new FormControl('',[Validators.required]),
  });
 

  

  constructor(
    private formBuilder: FormBuilder,
    private TaxiDetailsService: TaxiDetailsService
  ) {}

  ngOnInit(): void {
   
    
  }

  save(){
    
    this.submitted=true;                
      
            let taxi ={
                          regNo: this.Form.value.regNo,
                            driver: this.Form.value.driver,
                               modelYear: this.Form.value.modelYear,
                       }
                console.log(taxi)
                
                
    this.TaxiDetailsService.addTaxi(taxi).subscribe((details)=>{
     
    
          console.log('succesfully added')
        })
        this.Form.controls['regNo'].reset();
        this.Form.controls['driver'].reset();
        this.Form.controls['modelYear'].reset();
      }
      
    
    
    
    
    
    
  }

