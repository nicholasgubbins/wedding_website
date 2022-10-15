import React from "react";
import Layout from "../components/layout";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";

export default (props) => (
  <Layout title="Registry" location={props.location}>
    <article id="zola">
      <div>
        <p>
          We appreciate we are asking you all to travel from many corners of the
          world. As such, there is{" "}
          <u>absolutely no obligation to get us a gift</u>, your presence alone
          is enough.
        </p>
        <p>
          Knowing our friends and family, however, we know fighting this is a
          wasted effort, so if you would like to send a gift, please use the
          below registry.
        </p>
        <a href="#" target="_blank" rel="noopener noreferrer"><u><h2>Registry</h2></u></a>
      </div>
    </article>
  </Layout>
);
