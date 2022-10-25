import React from "react";
import { Helmet } from "react-helmet";
import "./layout.css";
import Nav from "../components/nav";
import Header from "../components/header";

export default ({ children, location, title }) => (
  <div>
    <Helmet>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <script
        src="https://kit.fontawesome.com/22368b41d8.js"
        crossorigin="anonymous"
      ></script>

      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.3.3/dist/leaflet.css"
        integrity="sha512-Rksm5RenBEKSKFjgI3a41vrjkw4EVPlJ3+OiI65vTjIdo9brlAacEuKOiQ5OFh7cOI1bkDwLqdLw3Zg0cRJAAQ=="
        crossorigin=""
      />
      <title>Terouz &amp; Nick Get Married</title>
    </Helmet>
    <div id="container">
      <Header siteTitle={title} />
      <Nav path={location.pathname} />
      {children}
    </div>
    <footer>
      <p>
        Built with <i className="fas fa-heart" /> by Nick while Terouz was on
        night shifts. Forked on
        <a
          href="https://github.com/martingaston/wedding_website"
          target="_blank"
        >
          <i className="fab fa-github" />
        </a>
        from{" "}
        <a href="https://github.com/martingaston" target="_blank">
          @martingaston
        </a>
        . Lemons by{" "}
        <a href="https://www.terouzpasha.com/" target="_blank">
          TP
        </a>
        .
      </p>
    </footer>
  </div>
);
