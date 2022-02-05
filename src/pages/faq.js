import React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";

export default props => (
  <Layout title="FAQ" location={props.location}>
    <article id="FAQ">
      <section>
        <h3 style={{ textAlign: "center" }}>
          Are children invited to the wedding?
        </h3>
        <p>
          As long as your invitation/save the date was addressed to "The XYZ Family" then yes! 
          We are expecting you to bring your kids as they are a part of the family! 
          If you invitation/save the date was not addressed to "The XYZ Family", please just reach 
          out to one of us so we can make sure we have room in the head count for an extra guest!
        </p>
        <h3>How do I get to Kansas City?</h3>
        <p>
          You will need to decide whether you'd like to fly or drive. We have a whole
          page dedicated to travel {" "}<Link to="/travel">here</Link>.
        </p>
        <h3>Where should we stay?</h3>
        <p>
          What an excellent question! Check out our page on{" "}
          <Link to="/KansasCity">Kansas City</Link> to see some suggestions. We reccommend
          staying in the Plaza area as it is very close to our venue Fire House KC! But,
          there are also some awesome hotels downtown that are only about a 10 min drive
          if you are interested in staying there!
        </p>
        <h3>How do I get to the wedding?</h3>
        <p>
          The venue does offer a parking lot, with a guard, that you can park your car or rental at.
          You can also utlize Uber or Lyft to get to the venue! We reccommend carpooling as almost
          every guest has traveled to Kansas City for the wedding. Luckily, both the ceremony and 
          reception are both at the same venue so there is no need to travel in between!
        </p>
        <h3>Is anything going on the rest of the weekend?</h3>
        <p>
          Check out our {" "} <Link to="/schedule">schedule page</Link> to find out what other events we are
          hosting that weekend!
        </p>
        <h3>What's the weather going to be like?</h3>
        <p>
          You know we are wondering this same thing! It's late October in the Midwest, so anything
          can happen. In 2021, the high was 60 and the low was 49. However, early October was 90s and 80s.
          So honestly, your guess is as good as ours! Cross your fingers for high 60s and mid 70s (that's
          what Jaime is secretly hoping for.)
        </p>
        <h3>What should I eat?</h3>
        <p>
          We have made a lovely list of restaurants {" "}
          <Link to="/KansasCity">over here on our Kansas City page</Link>. 
        </p>
        <h3>When we're not at the wedding, what should we do?</h3>
        <p>
          Check out our{" "} <Link to="/KansasCity">Kansas City</Link> page for some Sights & Activities!
        </p>
      </section>
    </article>
  </Layout>
);
