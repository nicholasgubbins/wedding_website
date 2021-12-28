import React from "react";
import Layout from "../components/layout";

export default props => (
  <Layout title="Registry" location={props.location}>
    <article id="zola">
      <section>
        <p>
          We will update this page as we create our registry!
        </p>
      </section>
{/*       <div id="zola-iframe-container">
        <iframe
          id="zola-iframe"
          title="registry"
          src="https://widget.zola.com/v1/widget/registry/jessiandmartin/html?maxItems=12&amp;partnerId=squarespace"
          className="zola-registry-iframe"
          scrolling="no"
          style={{ height: "1200px", width: "100%", position: "relative" }}
          width="100%"
          frameBorder="0"
        />
      </div> */}
    </article>
  </Layout>
);
