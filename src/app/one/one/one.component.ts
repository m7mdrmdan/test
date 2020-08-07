import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {

  constructor(private router: Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
  }

  inner(){
    // this.router.navigateByUrl('/one/inner');
    this.router.navigate(['./inner'], {relativeTo: this.activatedRoute});
  }  
  innerTwo(){
    this.router.navigate(['one/innerTwo']);
  }

}
