import {request,gql} from 'graphql-request'
const grapqlAPI=process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
export const getPosts=async()=>{
    const query=gql`
    query MyQuery{
     
            postsConnection {
              edges {
                node {
                  author {
                    bio
                    name
                    photo {
                      url
                    }
                    id
                  }
                  slug
                  createdAt
                  title
                  excerpt
                  featuredImage {
                    url
                  }
                  categories {
                    name
                    slug
                  }
                }
              }
            }
          
          

    }
    `
    const result=await request(grapqlAPI,query)
    return result.postsConnection.edges;
}