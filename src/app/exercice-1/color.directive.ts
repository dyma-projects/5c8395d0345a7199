import { Directive, HostBinding, OnInit,  HostListener } from '@angular/core';


@Directive({
    selector: '[appColor]'
})

export class ColorDirective implements OnInit {
    @HostBinding('style.color') color;
    @HostBinding('style.fontSize') size;
    
constructor() {}

ngOnInit() {
    
}
@HostListener('window:keydown', ['$event']) windowClick(event: KeyboardEvent) {
   console.log(event.keyCode);
   switch (event.keyCode) {
    case 37:
    this.color = '#74284C';
    this.size = '45px';
    break;
    case 38:
    this.color = '#562874';
    this.size = '50px';
    break;
    case 39:
    this.color = '#282B74';
    this.size = '68px';
    break;
    case 40:
    this.color = '#A8EB12';
    this.size = '28px';
  }
    }
}