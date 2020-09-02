import * as React from "react";
import * as ReactDOM from "react-dom";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import { Layout } from "../components/Layout";
import styled from "styled-components";
import { Site_Metadata_QueryQuery } from "../../types/graphql-types";

import "./posts.css";

const IndexWrapper = styled.main``;

const PostWrapper = styled.div``;

const Image = styled(Img)`
  border-radius: 5px;
`;

type Props = {
  data: Site_Metadata_QueryQuery;
};

const App: React.FC<Props> = ({ data }) => {
  return (
    <Layout>
      <IndexWrapper className="posts">
        {/* <Dump data={data}></Dump> */}
        {data.allMdx.nodes.map(({ id, excerpt, frontmatter, fields }) => (
          <PostWrapper key={id}>
            <Link to={fields.slug}>
              {frontmatter.cover ? <Image sizes={frontmatter.cover.childImageSharp.sizes} /> : null}
              <h3 className="post-title">{frontmatter.title}</h3>
              <p className="post-written-by">{frontmatter.date}</p>
              <p className="post-description">{excerpt}</p>
            </Link>
          </PostWrapper>
        ))}
      </IndexWrapper>
    </Layout>
  );
};

export default App;

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }, filter: { frontmatter: { published: { eq: true } } }) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date(formatString: "YYYY MMMM Do")
        }
        fields {
          slug
        }
      }
    }
  }
`;
