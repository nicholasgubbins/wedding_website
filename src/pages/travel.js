import React from "react";
import Layout from "../components/layout";

export default (props) => (
  <Layout title="Travel & Accomodation" location={props.location}>
    <article id="travel">
      <div className="two-grid">
        <div>
          <i class="fa-solid fa-plane-departure fa-2xl inline-icons" />

          <h3>Flying.</h3>
          <p>
            The closest and main airport in Sicily is Catania (CTA), which is a
            30 minute drive away from the wedding venue. There are regular
            direct flights from London to Catania with BA, Easyjet & Ryanair.
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
            There is also a train system and busses that connects Catania to
            Syracuse, but in true Southern European style, it is hardly
            reliable.
          </p>
          <p>
            We will be providing some transport for the events for those staying
            in Syracuse and Borgo degli Ulivi. There is patchy Uber and Bolt
            around Sicily, but mostly focused in the city centres.
          </p>
        </div>
      </div>
      <p></p>
      <hr />

      <h2>
        <ul>Where to stay.</ul>
      </h2>
      <div className="two-grid">
        <div>
          <div className="reservations">
            <i class="fa-solid fa-hotel fa-2xl inline-icons" />
            <h3>Near Borgo Del Carato</h3>
            <ul>
              <li>
                <a href="https://www.borgodegliulivi.com/en/">
                  Recommended: Borgo Degli Ulivi
                </a>
              </li>
              <li>
                <a href="https://www.imonasterigolfresort.com/">
                  {" "}
                  Borgo Di Luce I Monasteri{" "}
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
                <a href="http://guthotel.it/">Hotel Gutkowski</a>
              </li>
              <li>
                <a href="https://www.ilsalottodimariapia.it/">
                  Il Salotto Di Maria Pia
                </a>
              </li>
              <li>
                <a href="https://lume-ortigia.com/en/elementor-6573/">Lùme</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  </Layout>
);
