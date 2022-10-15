import React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";

export default (props) => (
  <Layout title="FAQ" location={props.location}>
    <article id="FAQ">
      <section>
        <h3 style={{ textAlign: "center" }}>
          Are children invited to the wedding?
        </h3>
        <p>
          Please feel free to bring babies and children to the wedding, but
          please confirm with your RSVP so we can cater appropriately.
        </p>
        <h3>How do I get to Sicily?</h3>
        <p>
          We have a whole page dedicated to travel{" "}
          <Link to="/travel">here</Link>.
        </p>
        <h3>Where should we stay?</h3>
        <p>
          What an excellent question! Check out our page on{" "}
          <Link to="/travel">Travel & Accomodation</Link> to see some
          suggestions.
        </p>
        <h3>How do I get to & from the wedding?</h3>
        <p>
          We will be organising a shuttle to & from the wedding from Ortigia and
          Borgo degli Ulivi.
        </p>
        <h3>Is anything going on the rest of the weekend?</h3>
        <p>
          Check out our <Link to="/schedule">schedule page</Link> to find out
          what other events we are hosting that weekend!
        </p>
        <h3>What's the weather going to be like?</h3>
        <p>Hopefully hot!</p>
        <h3>When we're not at the wedding, what should we do?</h3>
        <p>
          Check out our <Link to="/Sicily">Sicily</Link> page for some Sights &
          Activities!
        </p>
      </section>
    </article>
  </Layout>
);
