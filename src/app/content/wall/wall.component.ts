import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/shared/model/post';
import { environment } from 'src/environments/environment';

const query =`{
  allArticles {
    id
    title
    tags
    image {
      url
      alt
    }
    tags
    _firstPublishedAt
  }
  _allArticlesMeta {
    count
  }
}`

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.scss']
})


export class WallComponent implements OnInit {

  postsList: Array<Post> = []

  constructor() { }

  ngOnInit(): void {
    fetch('https://graphql.datocms.com/', {
      method: 'POST',
      headers: {'Authorization': `Bearer ${environment.DATO_READ_API}`},
      body: JSON.stringify({query})
    })
    .then(res => res.json())
    .then(({ data: { allArticles } }) => this.postsList.push(...allArticles) )
    .catch(error => console.log(error))

    console.log(this.postsList)
  }

}
