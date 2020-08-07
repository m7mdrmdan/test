import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'testapp';
  bhs: BehaviorSubject<any> = new BehaviorSubject<any>('mohamed');
  sub: Subject<any> = new Subject<any>();



  constructor(private http: HttpClient,private router: Router) {

  }
  txt:any;
  configUrl ="https://api.myjson.com/bins/18popz";


  getConfig() {
    return this.http.get(this.configUrl).subscribe(data=>  {
      console.log(data);
      this.txt=data["header"]["personaltab"];
      console.log(this.txt);
    });
  }

  ngOnInit(): void {
    this.bhs.subscribe(data=>console.log('behaviorSubject  ' + data));
    this.sub.subscribe(data=>console.log('subject   ' + data));
  }

  test(){
    this.bhs.next('test');
    this.sub.next('test');
  }

  isNumberKey(evt){
    var charCode = evt.keyCode
    if (charCode > 48 && charCode < 57)
       true;
    return false;
  }
  onpastefn(event) {
    if (event.clipboardData.getData('Text').match(/[^\d]/)) {
      event.preventDefault();
    }
  }

  one(){
    this.router.navigate(['one']);
  }
  two(){
   this.router.navigate(['two']);
  }
  portal(){
    this.router.navigate(['portal/one']);
   }

   otherRouting(){
    this.router.navigate(['/not-authenticated'], {skipLocationChange: true});
   }

}
