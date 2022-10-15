import React from "react";
import { Link } from "gatsby";

function List(props) {
  const activePath = props.path;
  const linkPath = props.link;
  if (activePath === linkPath) {
    return <ActiveLink link={linkPath} text={props.text} />;
  } else {
    return <Li link={linkPath} text={props.text} />;
  }
}

function ActiveLink(props) {
  return (
    <li className="active">
      <Link to={props.link}>{props.text}</Link>
    </li>
  );
}

function Li(props) {
  return (
    <li>
      <Link to={props.link}>{props.text}</Link>
    </li>
  );
}

export default class Nav extends React.Component {
  render() {
    return (
      <nav>
        <div id="details">
          <div>
            <a href="/NickandTerouzWedding.ics">
              <i className="far fa-calendar-alt" />
              September 15-17, 2023
            </a>
          </div>
          <div>
            <a href="https://goo.gl/maps/6Sb6qvNKRvXMppHg8">
              <i className="fas fa-earth-europe" />
              Sicily, Italy
            </a>
          </div>
        </div>
        <ul>
          <List path={this.props.path} link={"/"} text={"Home"} />
          <List path={this.props.path} link={"/schedule"} text={"Schedule"} />
          <List path={this.props.path} link={"/Sicily"} text={"Sicily"} />
          <List path={this.props.path} link={"/travel"} text={"Travel & Accomodation"} />
          <List path={this.props.path} link={"/registry"} text={"Registry"} />
          <List path={this.props.path} link={"/faq"} text={"FAQ"} />
          <List path={this.props.path} link={"/rsvp"} text={"RSVP"} />
        </ul>
      </nav>
    );
  }
}
