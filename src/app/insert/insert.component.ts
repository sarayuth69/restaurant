import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import * as firebase from 'firebase';
import {
  FormControl, FormGroup, Validators
} from '@angular/forms';
import { AngularFireStorage } from 'angularfire2/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.scss']
})
export class InsertComponent implements OnInit {
  ref;
  task;
  foodID = new FormControl('');
  foodname = new FormControl('');
  foodprice = new FormControl('');
  foodtype = new FormControl('');
  image = new FormControl('');

  item: any;
  isSumbmitted: boolean;


  imgSrc: string;
  selectedImage: any = null;
  isSubmitted: boolean;

  formTemplate = new FormGroup({
    caption: new FormControl('', Validators.required),
    category: new FormControl(''),
    imageUrl: new FormControl('', Validators.required)
  });

  
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;

  constructor(
    public router: Router,
    public database: AngularFireDatabase,
    private route: ActivatedRoute,
    private storage: AngularFireStorage,
  ) { }


  ngOnInit() {
  }

  // uploadFile(event) {
  //   console.log(event);

  //   const file = event.target.files[0];
  //   const filePath = `Imgfood/${event.target.files[0].name}_${new Date().getTime()}`; 
  //   const task = this.storage.upload(filePath, file);
  //   console.log(event.target.files[0]);

  // }
  uploadFile(event) {
    const file = event.target.files[0];
    this.image = new FormControl(file);
    console.log(file);
  }
insertfood() {
    const filePath = `Imgfood/${this.foodID.value}`;
    const ref = this.storage.ref(filePath);
    const task = ref.put(this.image.value, { customMetadata: { blah: 'blah' } });
    console.log(this.image.value);
    firebase.database().ref('tablemenu/' + this.foodID.value).once('value').then(data => {
      const list = data.val();
      if (list == null) {
        const cart = {
          foodID: this.foodID.value,
          foodname: this.foodname.value,
          foodprice: Number(this.foodprice.value),
          foodtype: this.foodtype.value,
          foodimg: this.foodID.value

        };
        const update = {};
        update['tablemenu/' + this.foodID.value] = cart;
        firebase.database().ref().update(update);
       
        
        Swal.fire('เพิ่มอาหารสำเร็จแล้ว', 'กรุณาเช็ครายการของคุณ', 'success');


      }
    });

  }


}
