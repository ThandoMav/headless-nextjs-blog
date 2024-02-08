import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async() => {
    const query = gql `
    query MyQuery {
      postsConnection {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            metaContent
            postIsAds
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            createdAt
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

    const result = await request(graphqlAPI, query);

    return result.postsConnection.edges;
};

export const getCategories = async() => {
    const query = gql `
    query GetGategories {
      categories {
        name
        slug
      }
    }
  `;

    const result = await request(graphqlAPI, query);

    return result.categories;
};

export const getPostDetails = async(slug) => {
    const query = gql `
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
        affiliate1Desc1Link
        affiliate1Desc1P1
        affiliate1Desc1P2
        affiliate1Desc2Link
        affiliate1Desc2P1
        affiliate1Desc2P2
        affiliate1OfferLink
        affiliate1Title
        affiliate2Desc1Link
        affiliate2Desc1P1
        affiliate2Desc1P2
        affiliate2Desc2Link
        affiliate2Desc2P1
        affiliate1Image {
          url
        }
        affiliate2Desc2P2
        affiliate2Image {
          url
        }
        affiliate2OfferLink
        affiliate2Title
        affiliate6Desc1Link
        affiliate6Desc1P1
        affiliate6Desc1P2
        affiliate6Desc2Link
        affiliate6Desc2P1
        affiliate6Desc2P2
        affiliate6OfferLink
        affiliate6Title
        affiliateBestOfferLink
        affiliateBestOfferText
        author {
          bio
          name
          photo {
            url
          }
        }
        categories {
          slug
          name
        }
        conclusionImage {
          url
        }
        conclusionLink
        conclusionP1
        conclusionP1P1
        conclusionP1P2
        conclusionP2
        conclusionP2P1
        conclusionP2P2
        conclusionTitle
        content {
          raw
        }
        featuredPost
        excerpt
        featuredImage {
          url
        }
        createdAt
        introP1Link
        introP1P1
        introP1P2
        introP2Link
        introP2P1
        introP2P2
        metaContent
        nextPostLink
        nextPostSeo
        offer1Text
        offer2Text
        slug
        title
      }
    }
  `;

    const result = await request(graphqlAPI, query, { slug });

    return result.post;
};

export const getSimilarPosts = async(categories, slug) => {
    const query = gql `
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {
          slug_not: $slug
          AND: { categories_some: { slug_in: $categories } }
        }
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
    const result = await request(graphqlAPI, query, { slug, categories });

    return result.posts;
};

export const getAdjacentPosts = async(createdAt, slug) => {
    const query = gql `
    query GetAdjacentPosts($createdAt: DateTime!, $slug: String!) {
      next: posts(
        first: 1
        orderBy: createdAt_ASC
        where: { slug_not: $slug, AND: { createdAt_gte: $createdAt } }
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
      previous: posts(
        first: 1
        orderBy: createdAt_DESC
        where: { slug_not: $slug, AND: { createdAt_lte: $createdAt } }
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;

    const result = await request(graphqlAPI, query, { slug, createdAt });

    return { next: result.next[0], previous: result.previous[0] };
};

export const getCategoryPost = async(slug) => {
    const query = gql `
    query GetCategoryPost($slug: String!) {
      postsConnection(where: { categories_some: { slug: $slug } }) {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
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
  `;

    const result = await request(graphqlAPI, query, { slug });

    return result.postsConnection.edges;
};

export const getFeaturedPosts = async() => {
    const query = gql `
    query GetCategoryPost() {
      posts(where: {featuredPost: true}) {
        author {
          name
          photo {
            url
          }
        }
        featuredImage {
          url
        }
        title
        slug
        createdAt
      }
    }
  `;

    const result = await request(graphqlAPI, query);

    return result.posts;
};

//get student hacks posts
export const getHacksPosts = async() => {
    const query = gql `
    query GetCategoryPost() {
      posts(where: {isStudentHacksPost: true}) {
        author {
          name
          photo {
            url
          }
        }
        featuredImage {
          url
        }
        title
        slug
        createdAt
      }
    }
  `;

    const result = await request(graphqlAPI, query);

    return result.posts;
};

export const submitComment = async(obj) => {
    const result = await fetch('/api/comments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
    });

    return result.json();
};

export const getComments = async(slug) => {
    const query = gql `
    query GetComments($slug: String!) {
      comments(where: { post: { slug: $slug } }) {
        name
        createdAt
        comment
      }
    }
  `;

    const result = await request(graphqlAPI, query, { slug });

    return result.comments;
};

export const getRecentPosts = async() => {
    const query = gql `
    query GetPostDetails() {
      posts(
        orderBy: createdAt_ASC
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
    const result = await request(graphqlAPI, query);

    return result.posts;
};

{
    /* ABOUT, CONTACT, POLICY, TERMS*/
}

export const getAbout = async() => {
    const query = gql `
    query MyQuery {
      aboutsConnection {
        edges {
          cursor
          node {
            metaContent
            slug
            title
          }
        }
      }
    }
  `;

    const result = await request(graphqlAPI, query);

    return result.aboutsConnection.edges;
};

export const getTerms = async() => {
    const query = gql `
    query MyQuery {
      termsConnection {
        edges {
          cursor
          node {
            metaContent
            slug
            title
            content {
              raw
            }
          }
        }
      }
    }
  `;

    const result = await request(graphqlAPI, query);

    return result.termsConnection.edges;
};

export const getPolicy = async() => {
    const query = gql `
    query MyQuery {
      policiesConnection {
        edges {
          cursor
          node {
            metaContent
            title
            slug
            content {
              raw
            }
          }
        }
      }
    }
  `;

    const result = await request(graphqlAPI, query);

    return result.policiesConnection.edges;
};

export const getContact = async() => {
    const query = gql `
    query MyQuery {
      contactsConnection {
        edges {
          cursor
          node {
            metaContent
            title
            slug
            content {
              raw
            }
          }
        }
      }
    }
  `;

    const result = await request(graphqlAPI, query);

    return result.contactsConnection.edges;
};

export const submitContact = async(obj) => {
    const result = await fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
    });

    return result.json();
};
