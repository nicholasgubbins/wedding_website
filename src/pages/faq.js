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
          Please feel free to bring babies and children to the wedding, but please confirm with your RSVP so we can cater appropriately. 
        </p>
        <h3>How do I get to Sicily?</h3>
        <p>
          We have a whole page dedicated to travel{" "}
          <Link to="/travel">here</Link>.
        </p>
        <h3>Where should we stay?</h3>
        <p>
          What an excellent question! Check out our page on{" "}
          <Link to="/Sicily">Sicily</Link> to see some suggestions. We
          reccommend staying in the Plaza area as it is very close to our venue
          Fire House KC! But, there are also some awesome hotels downtown that
          are only about a 10 min drive if you are interested in staying there!
        </p>
        <h3>How do I get to the wedding?</h3>
        <p>
          The venue does offer a parking lot, with a guard, that you can park
          your car or rental at. You can also utlize Uber or Lyft to get to the
          venue! We reccommend carpooling as almost every guest has traveled to
          Sicily for the wedding. Luckily, both the ceremony and reception are
          both at the same venue so there is no need to travel in between!
        </p>
        <h3>Is anything going on the rest of the weekend?</h3>
        <p>
          Check out our <Link to="/schedule">schedule page</Link> to find out
          what other events we are hosting that weekend!
        </p>
        <h3>What's the weather going to be like?</h3>
        <p>
          Hopefully hot! 
        </p>
        <h3>When we're not at the wedding, what should we do?</h3>
        <p>
          Check out our <Link to="/Sicily">Sicily</Link> page for some Sights &
          Activities!
        </p>
      </section>
    </article>
  </Layout>
);
