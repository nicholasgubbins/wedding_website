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
              We recommend exploring the beauty of Eastern Sicily while you're
              here. Below are some of our suggestions of places to visit, and of
              course, eat & drink.
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
                      <a href="http://www.caffesicilia.it/">Caff Sicilia</a>
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
                      <a href="https://www.go-etna.com/">Mount Etna</a>
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
