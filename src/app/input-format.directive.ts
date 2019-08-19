import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  constructor(private el:ElementRef) { }
  @Input('InputFormatDirective') f:string;
  @HostListener('blur') onBlur(){
    // <string>this.el.nativeElement.value=(<string>this.el.nativeElement.value).toUpperCase()
  }
}
