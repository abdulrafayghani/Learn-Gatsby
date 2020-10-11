exports.createPages = async function ({ actions }) {
    actions.createPage({
        path: "my-dynamic-page",
        component: require.resolve(`./src/templates/dynamic-page.tsx`),
        context: {
            name: "A.Rafay"
        }
    })
}