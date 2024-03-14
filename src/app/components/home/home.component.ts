import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NgOptimizedImage } from '@angular/common';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { NewsletterFormComponent } from '../newsletter-form/newsletter-form.component';
import { BlogSectionComponent } from '../blog-section/blog-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, NgOptimizedImage, PrimaryButtonComponent, NewsletterFormComponent, BlogSectionComponent],
  providers: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
