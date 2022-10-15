import React from "react";
import Layout from "../components/layout";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";

export default (props) => (
  <Layout title="Registry" location={props.location}>
    <article id="zola">
      <div>
        <p>
          We appreciate we are asking you all to travel from many corners of the
          world. As such, there is{" "}
          <u>ABSOLUTELY NO OBLIGATION TO GET US A GIFT</u>, your presence alone
          is enough. 
          </p>
          <p>Knowing our friends and family, however, we know fighting
          this is a wasted effort, so if you would like to send a gift, please
          use the below registry.
        </p>
        <h2>Cash Funds:</h2>
        <h3>Honeymoon</h3>
        <StaticImage
          src="../images/italy.png"
          alt="italy"
          placeholder="blurred"
        />
        <h3>Watercolor Painting of our Wedding</h3>
        <StaticImage
          src="../images/watercolor.jpg"
          layout="constrained"
          height={667}
          width={500}
          alt="watercolor"
          placeholder="blurred"
        />

        <h3>Vaccum</h3>
        <StaticImage
          src="../images/Vaccum.jpg"
          alt="vaccum"
          layout="constrained"
          height={800}
          placeholder="blurred"
        />
        <h3>House Projects</h3>
        <StaticImage
          src="../images/house.jpg"
          alt="house"
          placeholder="blurred"
        />
        <hr
          style={{
            color: "#000000",
            backgroundColor: "#000000",
            height: 0.5,
            borderColor: "#000000",
          }}
        />
        <h2>Registry:</h2>
      </div>
      <div id="zola-iframe-container">
        <iframe
          id="zola-iframe"
          title="registry"
          src="https://widget.zola.com/v1/widget/registry/TerouzandNick/html?maxItems=12&amp;partnerId=squarespace"
          className="zola-registry-iframe"
          scrolling="no"
          style={{ height: "1200px", width: "100%", position: "relative" }}
          width="100%"
          frameBorder="0"
        />
      </div>
    </article>
  </Layout>
);
