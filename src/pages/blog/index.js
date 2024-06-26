import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

const BlogPage = ({ data }) => {
  return (
    // <Layout pageTitle="My Blog Posts">
    //   {data.allMdx.nodes.map((node) => (
    //     <article key={node.id}>
    //       <h2>
    //         <Link to={`/blog/${node.frontmatter.slug}`}>
    //           {node.frontmatter.title}
    //         </Link>
    //       </h2>
    //       <p>Posted: {node.frontmatter.date}</p>
    //       <p>{node.excerpt}</p>
    //     </article>
    //   ))}
    // </Layout>
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Blog Post
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Blog description.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {data.allMdx.nodes.map((node) => (
            <article
              key={node.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time
                  dateTime={node.frontmatter.date}
                  className="text-gray-500"
                >
                  {node.frontmatter.date}
                </time>
                <a
                  href={`/blog/${node.frontmatter.slug}`}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {/* {node.frontmatter.title} */}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={`/blog/${node.frontmatter.slug}`}>
                    <span className="absolute inset-0" />
                    {node.frontmatter.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {node.excerpt}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  src=""
                  alt=""
                  className="h-10 w-10 rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={`/blog/${node.frontmatter.slug}`}>
                      <span className="absolute inset-0" />
                      author name
                    </a>
                  </p>
                  <p className="text-gray-600">author role</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`;

export const Head = () => <Seo title="My Blog Posts" />;

export default BlogPage;
