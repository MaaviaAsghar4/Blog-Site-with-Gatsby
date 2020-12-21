const path = require("path");

exports.createPages = async function ({ actions, graphql }) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allContentfulGatsby {
        nodes {
          slug
          featuredImage {
            description
            file {
              url
            }
            fluid {
              src
            }
          }
          title
          blog {
            raw
          }
        }
      }
    }
  `);

  console.log(JSON.stringify(result));

  result.data.allContentfulGatsby.nodes.forEach((blogData) => {
    createPage({
      path: `/blog/${blogData.slug}`,
      component: path.resolve(`./src/template/blogTemplate.tsx`),
      context: {
        blogDetails: blogData,
      },
    });
  });
};
