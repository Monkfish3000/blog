import { GraphQLClient } from 'graphql-request';
import { gql } from 'graphql-request';

import { QueryResponse } from '../types';

export const hygraph = new GraphQLClient(
  'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clmc3vguo145t01uigbt1hu3j/master'
);

export const QUERY = gql`
  {
    posts {
      id
      date
      title
      excerpt
      content {
        html
      }
      author {
        name
        picture {
          url
        }
      }
      coverImage {
        url
      }
    }
  }
`;

export async function getData() {
  const { posts }: QueryResponse = await hygraph.request(QUERY);
  return {
    props: {
      posts,
    },
  };
}
