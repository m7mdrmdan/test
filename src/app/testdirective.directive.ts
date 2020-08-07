import{Directive,OnInit,HostListener,Input} from '@angular/core';
@Directive({
  selector: '[appTestdirective]'
})

export class TestdirectiveDirective implements OnInit {
  @Input('appTestdirective') url: string = 'blue';

  constructor() { }
  ngOnInit() {
  }
  @HostListener('click') mouseclick(eventData: Event) {
    window.location.href = this.url;
  }

}
