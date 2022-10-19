import React from "react";
import Layout from "../components/layout";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";

export default (props) => (
  <Layout title="Nick &amp; Terouz" location={props.location}>
    <article id="story">
      <section>
        <hr />
        <p>Nick & Terouz cordially invite you to come on holiday</p>
      </section>
    </article>

    <StaticImage
      src="../images/tpng.jpg"
      alt="Terouz and Nick smiling"
      placeholder="blurred"
    />
  </Layout>
);
