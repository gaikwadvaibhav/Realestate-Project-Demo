import { Component, OnInit } from '@angular/core';
import { RegisterUserService } from './register-user.service';
import { User } from './user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private registerUser :RegisterUserService) { }

  ngOnInit() {
  }
  register(myForm){
    console.log(myForm);
    var user : User = new User();
    user.name = myForm.value.name;
    user.email = myForm.value.email;
    user.mobile = myForm.value.mobile;
    user.password = myForm.value.password;
    user.comfirmpassword = myForm.value.comfirmpassword;
    user.optradio = myForm.value.optradio;
    this.registerUser.Register(user).subscribe(res => console.log(res));
  }
}
