import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userArr:any=[];
  columndefs=[
    {
      field: 'name'
    },
    {
      field: 'email'
    },
    {
      field: 'gender'
    },
    {
      field: 'bdate'
    }
  ];

  constructor(
    private userService: UserServiceService
  ) { }

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData() {
    var data: any;
    this.userService.getUsers().subscribe((mydata) => {
      console.log(mydata);
      this.userArr = mydata;
    });
  }




}
