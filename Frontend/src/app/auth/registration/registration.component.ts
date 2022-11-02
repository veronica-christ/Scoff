import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup = new FormGroup({
    fullname: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    acceptTerms: new FormControl(false),
  });
  submitted = false;
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        fullname: ['', Validators.required],
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
    
      confirmPassword: ['', Validators.required],
     
    },
    
  );
}
get f(): { [key: string]: AbstractControl } {
  return this.form.controls;
}
onSubmit(): void {
  this.submitted = true;
  if (this.form.invalid) {
    return;
  }
  console.log(JSON.stringify(this.form.value, null, 2));
}
onReset(): void {
  this.submitted = false;
  this.form.reset();
}
}

