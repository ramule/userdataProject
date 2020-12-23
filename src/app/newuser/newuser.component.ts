import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {UserServiceService} from '../user-service.service';
import { Router } from '@angular/router';
 import {
FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css'],
})
export class NewuserComponent implements OnInit {
  userprofile: FormGroup;
  Name: string = '';

  constructor(private frmbuilder: FormBuilder, private service: UserServiceService, private router: Router) {
    this.userprofile = frmbuilder.group({
      name: new FormControl('', Validators.compose([Validators.required])),
      email: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.email])
      ),
      gender: new FormControl(),
      bdate: new FormControl(),
    });
  }

  ngOnInit(): void {}

  postData(formdata) {
    this.service.addProfile(formdata).subscribe(
      (data) =>{
        this.router.navigateByUrl('/user');
      },
      (err) => {
        console.log("Error", err)
      });
  }
}
