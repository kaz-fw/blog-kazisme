import * as React from "react";
import styled from "styled-components";
import { useSiteMetadata } from "../hooks/useSiteMetadata";
import { Header } from "./Header";
import Nav from "./Nav";

import "./layout.css";

const AppStyles = styled.main`
  width: 800px;
  margin: 0 auto;
`;

type Props = {
  children?: React.ReactChild;
};

export const Layout: React.FC<Props> = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <AppStyles>
      <Header siteTitle={title} siteDescription={description} />
      <Nav />
      <main className="main">{children}</main>
    </AppStyles>
  );
};
