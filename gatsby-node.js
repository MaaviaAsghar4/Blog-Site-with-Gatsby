exports.createPages = async function ({ actions }) {
  actions.createPage({
    path: "blogPost",
    component: require.resolve(`./src/template/blogTemplate.tsx`),
    context: {
      // Data passed to context is available
      // in pageContext props of the template component
      name: "Zia",
    },
  });
  console.log("End of Gatsby Node File");
};
