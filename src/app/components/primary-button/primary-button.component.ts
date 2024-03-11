import { CommonModule } from '@angular/common';
import { Component,Input, Output, EventEmitter } from '@angular/core';


type BtnVariants = "primary" | "secondary"; 
@Component({
  selector: 'btn-primary',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './primary-button.component.html',
  styleUrl: './primary-button.component.scss'
})
export class PrimaryButtonComponent {
  @Input("btn-text") btnText: string = "";
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() variant: BtnVariants = "primary";
  @Output("submit") onSubmit = new EventEmitter();

  submit(){
    this.onSubmit.emit();
  } 
}

