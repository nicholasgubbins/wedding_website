import React from "react";
import Layout from "../components/layout";
import {StaticImage, GatsbyImage,getImage} from "gatsby-plugin-image";
import { graphql } from "gatsby";


const props = () => (
  <Layout title="Reece &amp; Jaime" location={props.location}>
    <StaticImage 
    src = "../images/WILLOUGHBY_0035_CROP.jpg" 
    alt = "Jaime and Reece smiling" 
    placeholder="blurred"/>
    
    <article id="story">
      <section>
        <hr />
        <h2>We can't wait to celebrate with you!</h2>
        <hr />
        <p>
          Just a girl and a boy who met in San Antonio, TX, rescued a couple of dogs, 
          and have made Kansas City, MO their home.
        </p>

      </section>
    </article>
  </Layout>
);

export default props;

