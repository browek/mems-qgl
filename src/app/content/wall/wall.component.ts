import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/shared/model/post.model';
import { environment } from 'src/environments/environment';
import { Apollo } from 'apollo-angular';
import { allArticles } from 'src/app/shared/model/graphql.querry';

const query =`{
  allArticles {
    id
    title
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

  postsList:any
  loading = true;
  error: any;

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.apollo
      .watchQuery({query: allArticles})
      .valueChanges.subscribe((res:any) => {
        this.postsList = res?.data?.allArticles;
        console.log(res)
        this.loading = res.loading;
        this.error = res.error;
      })
  }

}
