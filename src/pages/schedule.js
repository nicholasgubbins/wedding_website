import React from "react";
import Layout from "../components/layout";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";

import rings from "../images/wedding-rings.svg";
import pizza from "../images/pizza.png";

export default (props) => (
  <Layout title="Schedule" location={props.location}>
    <div className="one-column">
      <div>
        <img alt="pizza" src={pizza} />
        <h2>Pizza Party</h2>
        <h4>Friday 15 September, 2023</h4>
        <h4>6:30pm-10:00pm</h4>
        <h3>Ortigia</h3>
        <h4>Via Saverio Landolina, 6, 96100 Siracusa SR, Italy</h4>
        <h5>Casual</h5>
        <p>
          Nick really loves Pizza, so please join us for a welcome pizza party
          on the beautiful island of Ortigia.
        </p>
      </div>
      <hr />
      <div>
        <img alt="Wedding Rings" src={rings} />
        <h2>Wedding</h2>
        <h4>Saturday 16 September, 2023</h4>
        <h4>3pm-late</h4>
        <h3>Borgo del Carato</h3>
        <h4>S.S. 124 Km 97, 96010 Palazzolo Acreide SR, Italy</h4>
        <h5>Mediterranean Chic</h5>
        <p>
          3 pm seating for a 3:30 pm ceremony followed by great good food, good
          drinks, and good times!
        </p>
      </div>
      <StaticImage
        src="../images/borgo.jpg"
        alt="Borgo del Carato"
        placeholder="blurred"
      />
      <hr />
    </div>
  </Layout>
);
