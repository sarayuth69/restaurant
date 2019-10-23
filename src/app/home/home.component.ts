import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  foods;
  names;
  table = [
    {name: 'TABLE_1'},
    {name: 'TABLE_2'},
    {name: 'TABLE_3'},
    {name: 'TABLE_4'},
    {name: 'TABLE_5'},
    {name: 'TABLE_6'},
    {name: 'TABLE_7'},
    {name: 'TABLE_8'},
    {name: 'TABLE_9'}
  ];
  constructor(
    public router: Router,
    public database: AngularFireDatabase,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    
    this.database.list('/tablemenu/'),  ref => ref.orderByChild('').limitToLast(3).valueChanges().subscribe( data => {
      this.foods = data.reverse();
  });
    this.route.params.subscribe(
    (param: any) => {
      this.names = param;
      console.log(this.names);
    }
  );
}

  onclick(table) {
   this.router.navigate([ '/cutomermenu' , table ]);

 }
 click ( u: string, p: string) {
  if (u === 'addmin' && p === 'addmin') {
    this.router.navigate(['/menu' ]);
    setTimeout(() => {
      window.location.reload();
    }, 800);
  }
  else if (u!='addmin' && p!='addmin'){
    alert("กรุณากรอกรหัสผ่านให้ถูกต้อง");
  }
}


}
