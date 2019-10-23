import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import Swal from 'sweetalert2/dist/sweetalert2.js';

import 'sweetalert2/src/sweetalert2.scss';
@Component({
  selector: 'app-fooditems',
  templateUrl: './fooditems.component.html',
  styleUrls: ['./fooditems.component.scss']
})
export class FooditemsComponent implements OnInit {
  sum = 0;
  item: any;
  table: any;
  index = 0;
  put: boolean;
  de: boolean;

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    public database: AngularFireDatabase,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (param: any) => {
        this.table = param;
        console.log(this.table);
      }
    );
    this.database.list(`/cart/${this.table.name}`).valueChanges().subscribe(data => {
      this.item = data;
      console.log(data);
    });

    setTimeout(() => {
      this.item.forEach((element, index) => {
        this.sum += this.item[index].sum;
        console.log(this.sum);
      });
    }, 1000);

  }
  click(delet) {
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

        firebase.database().ref(`cart/${this.table.name}/${delet.foodID}`).remove();
        setTimeout(() => {
         window.location.reload();
        }, 1000);
      }
    });
  }

  total() {
    // this.item.forEach((element, index) => {
    //   this.sum += this.item[index].sum;
    //   console.log(this.sum);
    // });
    Swal.fire({
      title: 'พร้อมที่จะเช็คบินไหม??',
      text: this.sum,
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
        firebase.database().ref(`cart/${this.table.name}`).remove();
          setTimeout(() => {
            window.location.reload();
          }, 1000);
      }

    });
    

  }
  onclick(item) {

      firebase.database().ref(`/cart/${this.table.name}`).once('value').then(data => {
      const list = data.val();
      const cart = {
        foodID: item.foodID,
        foodname: item.foodname,
        foodprice: item.foodprice,
        foodtype: item.foodtype,
        amount: item.amount,
        day: item.day,
        status: 'ดำเนินการแล้ว',
        sum: item.sum,
        placeID: item.placeID,
        foodinchef: false
       };
      const update = {};
      update['cart/' + this.table.name + '/' + item.foodID] = cart;
      firebase.database().ref().update(update);
      Swal.fire('สั่งอาหารสำเร็จแล้ว', 'กรุณาเช็ครายการของคุณ', 'success');

      });
}


}
