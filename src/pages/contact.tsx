import * as React from "react";
import * as ReactDOM from "react-dom";
import { Layout } from "../components/Layout";

const Contact = () => (
  <Layout>
    <div className="contact">
      <h2>Contact</h2>
      <ul>
        <li>
          GitHub：<a href="https://github.com/kaz-fw">https://github.com/kaz-fw</a>
        </li>
        <li>
          Twitter : <a href="https://twitter.com/kaz_fw">https://twitter.com/kaz_fw</a>
        </li>
      </ul>
    </div>
  </Layout>
);

export default Contact;
