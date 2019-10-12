import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  email
  lastname
  name
  password
  phone
  username
  zip
  ID
  IDlength
  constructor(
    public router: Router,
    public database: AngularFireDatabase,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.database.list('/user/').valueChanges().subscribe(data => {
      this.ID = data;
      this.IDlength = data.length + 1;
      console.log(this.IDlength);
    });
  }
  regis(name,lastname,email,phone,zip,username,password,IDlength){
    if(name==""){
    
    }else if(lastname==""){
    
    }else if(email==""){
    
    }else if(phone==""){
    
    }else if(zip==""){
    
    }
    else if(username==""){
    
    }else if(password==""){
    
    }
  
 else{
  firebase.database().ref('user/').once('value').then(data => {
    const list = data.val();
      const cart = {
        email: email,
        lastname: lastname,
        name:  name,
        password: password,
        phone: phone,
        username: username,
        zip: zip,
        userID:this.IDlength
      };
      console.log(cart);
      const update = {};
      update['user/' + this.IDlength] = cart;
      firebase.database().ref().update(update);
      this.router.navigate(['/login' ]);
    
  });
 }
 
}

}
