import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'blogposts-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blogposts-section.component.html',
  styleUrl: './blogposts-section.component.scss'
})
export class BlogpostsSectionComponent implements OnInit {
  apiUrl = 'https://hml-blog-oceane.seodev.ambienteseo.com.br/wp-json/wp/v2/posts';
  blogposts: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>(this.apiUrl).subscribe(
      (data) => {
        this.blogposts = data.map(post => {
          return{
            title: post.title.rendered,
            content: this.getContentSnippet(post.content.rendered),
            image: this.getImageURL(post),
            date: post.date,
            url: post.link
          };
        }); 
      },
      (error) => {
        console.error('Ocorreu um erro:', error);
      }
    )
  }

  getImageURL(post: any): string | null {
    if (post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'].length > 0) {
      return post._embedded['wp:featuredmedia'][0].source_url;
    } else {
      return null;
    }
  }

  getContentSnippet(content: any): string {
    return content.substr(0, 160);
  }

}
