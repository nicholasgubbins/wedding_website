import React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";

export const Failure = props => (
  <Layout title="Uh oh!" location={props.location}>
    <article id="failure">
      <section>
        <p>
          Oh no - something has gone a bit squiffy with the form. We're sorry to
          have to ask, but please can you try again later? It might be worth
          double checking your connection.
        </p>
        <p>
          If it happens again please let us know directly and we'll get it fixed
          up.
        </p>
      </section>
    </article>
  </Layout>
);

export const Success = props => (
  <Layout title="Yay!" location={props.location}>
    <article id="success">
      <section>
        <p>
          Thanks for submitting your RSVP preferences. We can't wait to see you!
        </p>
        <p>
        </p>
      </section>
    </article>
  </Layout>
);
