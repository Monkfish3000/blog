export const getPosts = async () => {
  const response = await fetch(
    'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clmc3vguo145t01uigbt1hu3j/master',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        query: `{
            posts(orderBy: date_DESC) {
              id
              date
              title
              excerpt
              slug
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
          }`,
      }),
      next: { tags: ['posts'] }
    }
  );

  const { data } = await response.json();

  return data;
};

export const getPost = async (params: string) => {
  const response = await fetch(
    'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clmc3vguo145t01uigbt1hu3j/master',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        query: `{
            posts(where: {slug: "${params}"}) {
              id
              date
              title
              excerpt
              slug
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
          }`,
        variables: {
          slug: params,
        },
      }),
    }
  );

  const { data } = await response.json();

  return data.posts;
};
