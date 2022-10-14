import React from "react";
import SicilyMap from "../components/kansasCityMap";
import Layout from "../components/layout";

import dining from "../images/restaurant.svg";
import binoculars from "../images/binoculars.svg";
import tent from "../images/tent.svg";
import ship from "../images/cruise.svg";

import house1 from "../images/001-mansion.svg";
import house2 from "../images/003-house-1.svg";
import house3 from "../images/004-house-2.svg";
import house4 from "../images/005-house-3.svg";

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
              While we are still realatively new to the area, we have done a bunch of exploring.
              Below are some places to stay and good eats.
            </p>
            <h2>Where To Stay</h2>
            <div className="two-grid">
              <div>
                <div className="reservations">
                  <img alt="" src={house1} />
                  <h3>Treat Yourself</h3>
                  <ul>
                    <li>
                      <a href="https://www.marriott.com/hotels/travel/mcipl-kansas-city-marriott-country-club-plaza/">
                        Sicily Marriott Country Club Plaza
                      </a>
                    </li>
                    <li>
                      <a href="https://crossroadshotelkc.com/">
                        Crossroads Hotel
                      </a>
                    </li>
                    <li>
                      <a href="https://www.kansascityic.com/">
                       InterContinental Sicily at the Plaza
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="reservations">
                  <img alt="" src={house2} />
                  <h3>Make Yourself At Home</h3>
                  <ul>
                    <li>
                      <a href="https://www.airbnb.com/">Airbnb</a>
                    </li>
                    <li>
                      <a href="https://www.vrbo.com/vacation-rentals">VRBO</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="reservations">
                  <img alt="" src={house3} />
                  <h3>Charm To Spare</h3>
                  <ul>
                    <li>
                      <a href="https://oakstreetmansionkc.com/">
                        Oak Street Mansion
                      </a>
                    </li>
                    <li>
                      <a href="https://www.thetruitt.com/">
                        The Truitt
                      </a>
                    </li>
                    <li>
                      <a href="https://southmoreland.com/">
                        Southmoreland on the Plaza
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="reservations">
                  <img alt="" src={house4} />
                  <h3>Keep It Simple</h3>
                  <ul>
                    <li>
                      <a href="https://www.marriott.com/hotels/travel/mcimt-springhill-suites-kansas-city-plaza/">
                        SpringHill Suites by Marriott Sicily Plaza
                      </a>
                    </li>
                    <li>
                      <a href="https://www.hilton.com/en/hotels/mkchshx-hampton-suites-kansas-city-country-club-plaza/">
                         Hampton Inn and Suites Sicily-Country Club Plaza
                      </a>
                    </li>
                    <li>
                      <a href="https://www.marriott.com/hotels/travel/mcikc-residence-inn-kansas-city-country-club-plaza/">
                        Residence Inn by Marriott Sicily Country Club Plaza
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section>
            <h2>What To Do</h2>
            <div className="two-grid">
              <div
                style={{
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <div className="lineup">
                  <img alt="" src={dining} />
                  <h3>Dining, Dessert, and Drinks</h3>
                  <ul>
                    <li>
                      <a href="http://westportcafeandbar.com/">Westport Cafe</a>
                    </li>
                    <li>
                      <a href="https://www.cavakc.com/">CaVa</a>
                    </li>
                    <li>
                      <a href="https://kcpotpie.com/">Potpie</a>
                    </li>
                    <li>
                      <a href="https://illazzarone.org/">Il Lazzarone</a>
                    </li>
                    <li>
                      <a href="https://www.ibisbakery.com/crossroads">Messenger Coffee + Ibis Bakery (Crossroads)</a>
                    </li>
                    <li>
                      <a href="http://www.heirloomkc.com/">Heirloom Bakery</a>
                    </li>
                    <li>
                      <a href="https://www.mclainskc.com/">McLain's Bakery</a>
                    </li>
                    <li>
                      <a href="https://www.urbancafekc.com/">Urban Cafe</a>
                    </li>
                    <li>
                      <a href="http://www.towntopic.com/">Town Topic Hamburgers</a>
                    </li>
                    <li>
                      <a href="https://www.lulusnoodles.com/">Lulu's Thai Noodle Shop</a>
                    </li>
                    <li>
                      <a href="https://www.waldothaiplace.com/">Waldo Thai</a>
                    </li>
                    <li>
                      <a href="https://chickennpickle.com/">Chicken N Pickle</a>
                    </li>
                    <li>
                      <a href="https://www.tassosgreekrestaurant.com/">Tasso's Greek Restaurant</a>
                    </li>
                    <li>
                      <a href="https://jerusalemkc.com/">Jerusalem Cafe</a>
                    </li>
                    <li>
                      <a href="https://gochickengo.com/">Go Chicken Go</a>
                    </li>
                    <li>
                      <a href="https://www.eatandys.com/">Andy's Custard</a>
                    </li>
                    <li>
                      <a href="https://www.fairwaycreamery.com/">Fairway Creamery</a>
                    </li>
                    <li>
                      <a href="http://bettyraes.com/">Betty Rae's Ice Cream</a>
                    </li>
                    <li>
                      <a href="https://andreschocolates.com/">Andre's Chocolates</a>
                    </li>
                    <li>
                      <a href="https://q39kc.com/">Q39 BBQ</a>
                    </li>
                    <li>
                      <a href="https://www.joeskc.com/">Joe's KC</a>
                    </li>
                    <li>
                      <a href="https://www.arthurbryantsbbq.com/">Arthur Bryant's BBQ</a>
                    </li>
                    <li>
                      <a href="https://www.lcsbarbq.com/">LC's BAR-B-Q</a>
                    </li>
                    <li>
                      <a href="https://gatesbbq.com/">Gate's BAR-B-Q</a>
                    </li>
                    <li>
                      <a href="https://charbarkc.com/">Char Bar</a>
                    </li>
                    <li>
                      <a href="https://www.boulevard.com/">Boulevard Brewing Company</a>
                    </li>
                    <li>
                      <a href="https://kcbier.com/">KC Bier Co</a>
                    </li>
                    <li>
                      <a href="https://www.toasttab.com/torn-label-brewing-co/v3/?mode=fulfillment">Torn Label Brewing Company</a>
                    </li>
                    <li>
                      <a href="https://www.casualanimalbrewing.com/">Casual Animal Brewing Co</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="lineup">
                  <img alt="" src={binoculars} />
                  <h3>Sights and Activities</h3>
                  <ul>
                    <li>
                      <a href="https://www.theworldwar.org/">
                        National WWI Museum and Memorial
                      </a>
                    </li>
                    <li>
                      <a href="https://www.nelson-atkins.org/">
                        The Nelson-Atkins Museum of Art
                      </a>
                    </li>
                    <li>
                      <a href="https://kcrivermarket.com/">
                        The River Market
                      </a>
                    </li>
                    <li>
                      <a href="https://toyandminiaturemuseum.org/">
                        The National Museum of Toys and Miniatures
                      </a>
                    </li>
                    <li>
                      <a href="https://americanjazzmuseum.org/">
                        American Jazz Museum
                      </a>
                    </li>
                    <li>
                      <a href="https://unionstation.org/">
                        Union Station
                      </a>
                    </li>
                    <li>
                      <a href="https://www.nlbm.com/">
                        Negro Leagues Baseball Museum
                      </a>
                    </li>
                    <li>
                    <a href="https://www.trumanlibrary.gov/">
                        Harry S. Truman Library and Museum
                      </a>
                    </li>
                    <li>
                      <a href="https://www.legolanddiscoverycenter.com/kansas-city/">
                        Legoland Discovery Center
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
