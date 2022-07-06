import { gql } from "apollo-angular";

const allArticles = gql`{
    allArticles (first: 50) {
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

  export { allArticles };