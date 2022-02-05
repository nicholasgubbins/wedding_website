import React from "react";
import Layout from "../components/layout";

import rings from "../images/wedding-rings.svg";
import donut from "../images/donut.svg";
import party from "../images/party.png";

export default props => (
  <Layout title="Schedule" location={props.location}>
    <div className="one-column">
      <div>
        <img alt="party" src={party} />
        <h2>Welcome Party</h2>
        <h4>Saturday October 22, 2022</h4>
        <h4>6:30pm-10:00pm</h4>
        <h3>Our House</h3>
        <h4>7601 Holmes Rd, Kansas City, MO 64131</h4>
        <h5>Casual</h5>
        <p>
          If you are looking for something to do the night before the big day,
          we will be hosting a Welcome Party in our backyard. We will provide the food
          so just stop by and say hello! We are so excited to see you!
        </p>
      </div>
      <hr /> 
      <div>
        <img alt="Wedding Rings" src={rings} />
        <h2>The Big Day</h2>
        <h4>Sunday October 23, 2022</h4>
        <h4>5:30pm-10:30pm</h4>
        <h3>Fire House KC</h3>
        <h4>4518 Troost Ave, Kansas City, MO 64110</h4>
        <h5>Formal/Cocktail Attire</h5>
        <p>
          4:30 pm seating for a 5 pm courtyard ceremony followed by great drinks, tacos, 
          and more fun!
        </p>
      </div>
      <hr />
      <div>
        <img alt="Donuts" src={donut} />
        <h2>Coffee &amp; Donuts</h2>
        <h4>Monday October 24, 2022</h4>
        <h4>9:30am-11:00am</h4>
        <h3>Loose Park</h3>
        <h4>5200 Wornall Rd, Kansas City, MO 64112</h4>
        <h5>Day-after Casual</h5>
        <p>
          We'd love to see you before you leave! Please stop
          by Loose Park to eat a donut (provided) with us!
        </p>
      </div>
    </div>
  </Layout>
);
