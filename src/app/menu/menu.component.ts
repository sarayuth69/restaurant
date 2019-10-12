import { Component, OnInit } from '@angular/core';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';

import 'sweetalert2/src/sweetalert2.scss';
import * as firebase from 'firebase';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  food;
  table: any;
  foodleangth: any;
  foodID;
  foodname;
  foodprice;
  foodtype;
  item: any;
  constructor(
    public router: Router,
    public database: AngularFireDatabase,
    private route: ActivatedRoute,

  ) { }

  ngOnInit() {
    this.database.list('/tablemenu/').valueChanges().subscribe(data => {
      this.food = data;
      this.foodleangth = data.length + 1;
      console.log(this.foodleangth);
    });

    this.route.params.subscribe(
      (param: any) => {
        this.table = param;
        console.log(this.table);
      }
    );
  }
  insert() {
    this.router.navigate([ '/insert']);
  }
  showmenu() {
    this.router.navigate([ '/fooditems' , this. table ]);
  }
  editfood(foodID, foodname, foodtype, foodprice) {
    let item = {foodID, foodname, foodtype, foodprice};
    this.router.navigate([ '/edit' , item ]);
    console.log(item);

  }

  async onClick(item) {
    firebase.database().ref('cart/' + this.table.name + '/' + item.foodID).once('value').then(data => {
      const list = data.val();
      const d = new Date();
      let curr_date = d.getDate();
      let curr_month = d.getMonth() + 1; // Months are zero based
      let curr_year = d.getFullYear();
      let curr_hourse = d.getHours();
      let curr_minutes = d.getMinutes();
      let curr_secounds = d.getSeconds();
      if (list == null) {
        const cart = {
          foodID: item.foodID,
          foodname: item.foodname,
          foodprice: item.foodprice,
          foodtype: item.foodtype,
          amount: 1,
          day: curr_date + '-' + curr_month + '-' +  curr_year + ', ' + curr_hourse + ':' + curr_minutes + ':' + curr_secounds,
          status: "กรุณาส่งเข้าครัว",
          sum: item.foodprice,
          placeID: 1,
          foodinchef: true
        };
        const update = {};
        update['cart/' + this.table.name + '/' + item.foodID] = cart;
        firebase.database().ref().update(update);
        Swal.fire('สั่งอาหารสำเร็จแล้ว', 'กรุณาเช็ครายการของคุณ', 'success');
      } else {
        if (data.val().foodID && item.foodID) {
          const cart = {
            foodID: item.foodID,
            foodname: item.foodname,
            foodprice: item.foodprice,
            foodtype: item.foodtype,
            day: curr_date + '-' + curr_month + '-' +  curr_year + ', ' + curr_hourse + ':' + curr_minutes + ':' + curr_secounds,
            status: "กรุณาส่งเข้าครัว",
            placeID: 1,
            amount: list.amount + 1 ,
            sum: list.sum + list.foodprice,
            foodinchef: true
          };
          const update = {};
          update['cart/' + this.table.name + '/' + item.foodID] = cart;
          firebase.database().ref().update(update);
          Swal.fire('สั่งอาหารสำเร็จแล้ว', 'กรุณาเช็ครายการของคุณ', 'success');
        } else {
          const cart = {
            foodID: item.foodID,
            foodname: item.foodname,
            foodprice: item.foodprice,
            foodtype: item.foodtype,
            amount: 1,
            day: curr_date + '-' + curr_month + '-' +  curr_year + ', ' + curr_hourse + ':' + curr_minutes + ':' + curr_secounds,
            status: "กรุณาส่งเข้าครัว",
            sum: item.foodprice,
            placeID: 1,
            foodinchef: true
          };
          const update = {};
          update['cart/' + this.table.name + '/' + item.foodID] = cart;
          firebase.database().ref().update(update);
          Swal.fire('สั่งอาหารสำเร็จแล้ว', 'กรุณาเช็ครายการของคุณ', 'success');

        }
      }
    });


                }

                async delets(item) {
                  Swal.fire({
                    title: 'คุณจะลบเมนูหรือไม่...?',
                    text: '',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                  }).then((result) => {
                    if (result.value) {
                      Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      );
                      firebase.database().ref(`tablemenu/${item.foodID}`).remove();
                      console.log(item.foodID);
                }
              });
                }


}
