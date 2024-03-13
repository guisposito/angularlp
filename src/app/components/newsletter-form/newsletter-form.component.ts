import { Component, signal } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NewslleterService } from '../../services/newslleter.service';

@Component({
  selector: 'newsletter-form',
  standalone: true,
  imports: [PrimaryButtonComponent, ReactiveFormsModule],
  templateUrl: './newsletter-form.component.html',
  styleUrl: './newsletter-form.component.scss'
})
export class NewsletterFormComponent {
  newsletterForm!: FormGroup;
  loading = signal(false);
  
  constructor(private service: NewslleterService) {
    this.newsletterForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  onSubmit (){
    this.loading.set(true);
    if(this.newsletterForm.valid){
      this.service.sendData(this.newsletterForm.value.name, this.newsletterForm.value.email).subscribe({
        next: () => {
          this.newsletterForm.reset();
          this.loading.set(false);
        } 
      })
    }
  }

}



