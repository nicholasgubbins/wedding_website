import React from "react";
import Layout from "../components/layout";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";

export default (props) => (
  <Layout title="Nick &amp; Terouz" location={props.location}>
    <article id="story">
      <section>
        <hr />
        <h2>We're getting married!</h2>
        <hr />
        <p>
          We would love for you to join us for a weekend of good food and
          celebration with our favourite people, all under the Italian sun.
        </p>
      </section>
    </article>

    <StaticImage
      src="../images/tpng.jpg"
      alt="Terouz and Nick smiling"
      placeholder="blurred"
    />
  </Layout>
);
