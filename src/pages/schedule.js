import React from "react";
import Layout from "../components/layout";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";

export default (props) => (
  <Layout title="Schedule" location={props.location}>
    <div className="one-column">
      <div>
        <i class="fa-solid fa-pizza-slice fa-2xl inline-icons" />
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
        <i class="fa-solid fa-champagne-glasses fa-2xl inline-icons" />
        <h2>The Big Day</h2>
        <h4>Saturday 16 September, 2023</h4>
        <h4>3pm-late</h4>
        <h3>Borgo del Carato</h3>
        <h4>S.S. 124 Km 97, 96010 Palazzolo Acreide SR, Italy</h4>
        <h5>Mediterranean Chic</h5>
        <p>
          Don your best linen for fine fare, questionable speeches, and even
          more questionable dance moves.
        </p>
      </div>
      <hr />

      <div>
        <i class="fa-solid fa-umbrella-beach fa-2xl inline-icons" />
        <h2>Pool Party</h2>
        <h4>Sunday 17 September, 2023</h4>
        <h4>When you wake up</h4>
        <h3>Borgo del Carato</h3>
        <h4>S.S. 124 Km 97, 96010 Palazzolo Acreide SR, Italy</h4>
        <h5>B.Y.O.Swimsuits</h5>
        <p>
          Come join us when you're feeling delicate to hang by the pool, gossip,
          all to the backdrop of Nick & Terouz's award winning* Spotify playlist.
        </p>
      </div>
      <hr />
    </div>
    <div>
      <StaticImage
        src="../images/borgo.jpg"
        alt="Borgo del Carato"
        placeholder="blurred"
      />
    </div>
    <hr />
    *no awards have in fact been won
  </Layout>
);
