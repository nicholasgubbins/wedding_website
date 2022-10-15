import React from "react";
import Layout from "../components/layout";
import {StaticImage, GatsbyImage,getImage} from "gatsby-plugin-image";


export default props => (
  <Layout title="Registry" location={props.location}>
    <article id="zola">
      <div>
        <p>
          We have registered for a few items on Zola as seen below. If you don't see an item you want to purchase we also have several items to which you can contribute cash/checks at the wedding.
        </p>
        <h2>Cash Funds:</h2>
        <h3>Honeymoon</h3>
        <StaticImage 
        src = "../images/italy.png" 
        alt = "italy" 
        placeholder="blurred"/>
        <h3>Watercolor Painting of our Wedding</h3>
        <StaticImage 
        src = "../images/watercolor.jpg" 
        layout="constrained"
        height={667}
        width={500}
        alt = "watercolor" 
        placeholder="blurred"/>
        
        <h3>Vaccum</h3>
        <StaticImage 
        src = "../images/Vaccum.jpg" 
        alt = "vaccum" 
        layout="constrained"
        height={800}
        placeholder="blurred"/>
        <h3>House Projects</h3>
        <StaticImage 
        src = "../images/house.jpg" 
        alt = "house" 
        
        placeholder="blurred"/>
        <hr style={{
    color: '#000000',
    backgroundColor: '#000000',
    height: .5,
    borderColor : '#000000'}}/>
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
