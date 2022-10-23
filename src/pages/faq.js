import React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";

export default (props) => (
  <Layout title="FAQ" location={props.location}>
    <article id="FAQ">
      <section>
        <h2>How do I get to Sicily?</h2>
        <p>
          We have a whole page dedicated to travel{" "}
          <Link to="/travel">here</Link>.
        </p>
        <h2>Where should we stay?</h2>
        <p>
          What an excellent question! Check out our page on{" "}
          <Link to="/travel">Travel & Accomodation</Link> to see some
          suggestions.
        </p>
        <h2>How do I get to & from the wedding?</h2>
        <p>
          We will be organising a shuttle to & from the wedding from Ortigia and
          Borgo degli Ulivi.
        </p>
        <h2 style={{ textAlign: "center" }}>
          What does Mediterranean Chic actually mean?
        </h2>
        <p>
          For chaps think linen suits (showing some ankle of course), chest hair brimming out of a crisp white shirt, shades, hell even a hat if you're really feeling yourself. For ladies, text TP. 
        </p>
        <h2>Is anything going on the rest of the weekend?</h2>
        <p>
          Check out our <Link to="/schedule">schedule page</Link> to find out
          what other events we are hosting that weekend!
        </p>
        <h2>What's the weather going to be like?</h2>
        <p>
          <a
            href="https://www.weather-atlas.com/en/italy/syracuse-weather-september"
            target="_blank"
          >
            Hopefully hot!
          </a>
        </p>
        <h2 style={{ textAlign: "center" }}>
          Are children invited to the wedding?
        </h2>
        <p>
          We're keeping it adult only. If this is preclusive to you
          coming, please let us know and we can work something out.
        </p>
        <h2>When we're not at the wedding, what should we do?</h2>
        <p>
          Check out our <Link to="/Sicily">Sicily</Link> page for some Sights &
          Activities!
        </p>
      </section>
    </article>
  </Layout>
);
