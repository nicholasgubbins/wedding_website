import React from "react";
import Layout from "../components/layout";

import plane from "../images/airplane.jpg";
import car from "../images/car.png";
import house1 from "../images/001-mansion.svg";
import house2 from "../images/003-house-1.svg";
import house3 from "../images/004-house-2.svg";
import house4 from "../images/005-house-3.svg";

export default (props) => (
  <Layout title="Travel & Accomodation" location={props.location}>
    <article id="travel">
      <div className="two-grid">
        <div>
        <i class="fa-solid fa-plane-departure fa-2xl inline-icons" />

          <h3>Flying.</h3>
          <p>
            The closest and main airport in Sicily is Catania (CTA), which is a
            30 minute drive away. There are good regular direct flights from
            London to Catania with BA, Easyjet & Ryanair.
          </p>
          <p>
            For those travelling from further afield, you can fly to other
            airports in Italy and connect, either via domestic flight or train.
          </p>
          <p>
            Note, for those tempted to fly to Palermo (PMO), it is on the other
            side of the island, and Sicily isn't small! Only fly here if you're
            renting a car and exploring Sicily for a longer time.
          </p>
        </div>
        <div>
        <i class="fa-solid fa-car-side fa-2xl inline-icons" />
          <h3>Getting around.</h3>
          <p>
            You will probably want to rent car to more easily explore the area.
            There is also a train system that connects Catania to Syracuse, but
            in true Southern European style, it is hardly reliable. and busses.
            We will be providing some transport for the events. There is patchy
            Uber and Bolt around Sicily, but mostly focused in the city centres.
          </p>
        </div>
      </div>
      <hr></hr>

      <h2>Where to stay.</h2>
      <div className="two-grid">
        <div>
          <div className="reservations">
          <i class="fa-solid fa-hotel fa-2xl inline-icons" />
            <h3>Near Borgo Del Carato</h3>
            <ul>
              <li>
                <a href="https://www.marriott.com/hotels/travel/mcipl-kansas-city-marriott-country-club-plaza/">
                  Sicily Marriott Country Club Plaza
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="reservations">
          <i class="fa-solid fa-hotel fa-2xl inline-icons" />
            <h3>Syracuse & Ortigia</h3>
            <ul>
              <li>
                <a href="https://www.borgodegliulivi.com/en/">Recommended: Borgo Degli Ulivi</a>
              </li>
              <li>
                <a href="https://www.thetruitt.com/">The Truitt</a>
              </li>
              <li>
                <a href="https://southmoreland.com/">
                  Southmoreland on the Plaza
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  </Layout>
);
