import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import {
  FormControl
} from '@angular/forms';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {



  foodID = new FormControl('');
  foodname = new FormControl('');
  foodprice = new FormControl('');
  foodtype = new FormControl('');
  item: any;
  exampleFormControlFile1: any;
  selectedFile;
  user;
  constructor(
    public router: Router,
    public database: AngularFireDatabase,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (param: any) => {
        this.item = param;
        console.log(this.item);
        this.foodID = new FormControl(this.item.foodID);
        this.foodname = new FormControl(this.item.foodname);
        this.foodprice = new FormControl(this.item.foodprice);
        this.foodtype = new FormControl(this.item.foodtype);

      }
    );
  }
  edit(foodID, foodname, foodprice, foodtype) {
    // this.foodID = new FormControl(foodID);
    // this.foodname = new FormControl(foodname);
    // this.foodprice = new FormControl(foodprice);
    // this.foodtype = new FormControl(foodtype);

    console.log(foodID);
    firebase.database().ref('tablemenu/' + this.foodID.value).once('value').then(data => {
    const list = data.val();

    const cart = {

          foodID: this.foodID.value,
          foodname: this.foodname.value,
          foodprice: this.foodprice.value,
          foodtype: this.foodtype.value,

        };
    console.log(cart);
    const update = {};
    update['tablemenu/' + this.foodID.value] = cart;
    firebase.database().ref().update(update);
    Swal.fire('เพิ่มอาหารสำเร็จแล้ว', 'กรุณาเช็ครายการของคุณ', 'success');

    });

  }



}
