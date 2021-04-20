export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "607f0f9fa8cd0b00e9636113",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-ngxs9xag",
                  apiId: "df34505a-3bc4-45b1-aa6c-e9c7db175d78",
                },
                {
                  buildHookId: "607f0fa01efee600d1958b10",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-i4f8q9y3",
                  apiId: "80d8bf5a-4069-4b21-9d55-242a0bdb6130",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/logicpin/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-i4f8q9y3.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
