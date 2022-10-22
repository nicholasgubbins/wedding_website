import React from "react";
import Layout from "../components/layout";

export default props => (
  <Layout title="404" location={props.location}>
    <article id="404">
      <section>
        <p>You're not meant to be here... sad!</p>
      </section>
    </article>
  </Layout>
);
