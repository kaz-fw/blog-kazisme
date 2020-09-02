import * as React from "react";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Layout } from "../components/Layout";
import { Site_Metadata_QueryQuery } from "../../types/graphql-types";
import Dump from "../components/Dump";

import "./blogPostTemplate.css";

type Props = {
  data: Site_Metadata_QueryQuery;
  pageContent: any;
};

const blogPostTemplate: React.FC<Props> = ({ data, pageContext }) => {
  const { frontmatter, body } = data.mdx;
  const { previous, next } = pageContext;
  return (
    <Layout>
      <div className="blogPostTemplate">
        {/* <Dump previous={previous} />
      <Dump next={next} /> */}
        <h3 className="blogPostTemplate-title">{frontmatter.title}</h3>
        <p className="blogPostTemplate-posted-by">{frontmatter.date}</p>
        <MDXRenderer>{body}</MDXRenderer>
        {previous === false ? null : (
          <>
            {previous && (
              <Link to={previous.fields.slug}>
                <p>{previous.frontmatter.title}</p>
              </Link>
            )}
          </>
        )}
        <Link to="/">Back</Link>
        {next === false ? null : (
          <>
            {next && (
              <Link to={next.fields.slug}>
                <p>{next.frontmatter.title}</p>
              </Link>
            )}
          </>
        )}
      </div>
    </Layout>
  );
};

export default blogPostTemplate;

export const query = graphql`
  query PostsBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(formatString: "YYYY MMMM Do")
      }
    }
  }
`;
