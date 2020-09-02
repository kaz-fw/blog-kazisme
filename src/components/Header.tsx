import * as React from "react";
import { Link } from "gatsby";

interface HeaderProps {
  siteTitle: string;
  siteDescription: string;
}

export const Header = ({ siteTitle, siteDescription }: HeaderProps) => (
  <Link to="/">
    <h1>{siteTitle}</h1>
    <p>{siteDescription}</p>
  </Link>
);
