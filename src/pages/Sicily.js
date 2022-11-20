import React from "react";
import SicilyMap from "../components/sicilyMap";
import Layout from "../components/layout";

export default class Sicily extends React.Component {
  render() {
    return (
      <Layout title="Sicily" location={this.props.location}>
        <article id="map">
          <figure>
            <SicilyMap />
          </figure>
          <section>
            <p>
              The Eastern side of Sicily is rich with baroque towns, amazing
              beaches, the best food and wine growing in the fertile foothills
              of Etna. There is a ton to do and see, eat and drink, and we can't
              wait for you to come see such a beautiful part of the world.
            </p>
            <p>
              We're more than happy to give some suggestions of other places to
              visit if you're going to travel further around Sicily. Below are
              just a few places to eat, things to do and towns to see.
            </p>
          </section>
          <section>
            <h2>What To Do</h2>
            <div className="two-grid">
              <div
                style={{
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="lineup">
                  <i class="fa-solid fa-utensils fa-2xl inline-icons" />

                  <h3>Dining, Dessert, and Drinks</h3>
                  <ul>
                    <li>
                      <a href="http://www.caffesicilia.it/">
                        Caffè Sicilia in Noto for granita
                      </a>
                    </li>
                    <li>
                      <a href="http://www.caseificioborderi.eu/">
                        Caseificio Borderi in Ortigia (best sandwiches)
                      </a>
                    </li>
                    <li>
                      <a href="http://www.caseificioborderi.eu/">
                        Retroscena in Syracuse
                      </a>
                    </li>
                    <li>Voglia Matta in Syracuse for gelato</li>
                    <li>
                      <a href="https://www.fratelliburgio.com/">
                        Fratelli Burgio in Syracuse for aperitivi
                      </a>
                    </li>
                    <li>
                      <a href="https://www.vinigambino.it/">Gambino Vineyard</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="lineup">
                  <i class="fa-solid fa-binoculars fa-2xl inline-icons" />
                  <h3>Sights and Activities</h3>
                  <ul>
                    <li>
                      {" "}
                      <a href="https://lifejourney4two.com/cavagrande-del-cassibile/">
                        Cavagrande del Cassibile - nature reserve{" "}
                      </a>
                    </li>
                    <li>
                      <a href="https://www.itinari.com/the-riviera-dei-ciclopi-1lsr">
                        Riviera dei Ciclopi - beaches
                      </a>
                    </li>
                    <li>
                      <a href="https://www.go-etna.com/">Mount Etna</a>
                    </li>
                    <li>
                      <a href="https://www.thethinkingtraveller.com/italy/sicily/towns-and-cities-in-sicily/noto">
                        Noto - beautiful baroque town
                      </a>
                    </li>
                    <li>
                      <a href="https://www.bbc.com/travel/article/20151207-sicilys-secret-chocolate-obsession">
                        Modica - the town of chocolate
                      </a>
                    </li>
                    <li>
                      <a href="https://www.cntraveller.com/article/travel-guide-taormina">
                        Taormina
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </article>
      </Layout>
    );
  }
}
