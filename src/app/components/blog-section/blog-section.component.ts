import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'blog-section',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './blog-section.component.html',
  styleUrl: './blog-section.component.scss'
})
export class BlogSectionComponent {

}
