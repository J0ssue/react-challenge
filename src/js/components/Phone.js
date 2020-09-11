import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import avatar from "../../assets/images/avatar.jpg";
import dog1 from "../../assets/images/dog1.jpg";
import dog2 from "../../assets/images/dog2.jpg";
import dog3 from "../../assets/images/dog3.jpg";
import Dots from "./Dots";

function MakeDogs(props) {
  let dogList = props.dogs.map((dog, i) => (
    <li className="phone__message-image" key={dog + i}>
      <img src={dog} alt="running dog" />
    </li>
  ));
  return <ul className="phone__message-container">{dogList}</ul>;
}

function ListItemsIn(props) {
  const listItems = props.content.map((text, i) => (
    <li className="phone__message-in" key={i + Math.random() * Math.floor(18)}>{text}</li>
  ));
  return <ul>{listItems}</ul>;
}

function ListItemsOut(props) {
  const listItems = props.content.map((text,i) => (
    <li className="phone__message-out" key={i * Math.random() * Math.floor(99)}>{text}</li>
  ));
  return <ul>{listItems}</ul>;
}

class Phone extends React.Component {
  constructor(props) {
    super(props);

    // bind methods before usage
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    alert("hellow world");
  }
  render() {
    const dogs = [dog1, dog2, dog3];
    return (
      <div className="phone">
        <div className="phone__inner">
          <header className="phone__header">
            <div className="phone__microphone"></div>
            <div className="phone__topbar">
              <FontAwesomeIcon icon={faAngleLeft} size="lg" />
              <div className="phone__avatar">
                <img src={avatar} alt="avatar" />
              </div>
              <div className="phone__name">
                <h3>Samuel Green</h3>
                <p>Available to walk</p>
              </div>
              <Dots />
            </div>
          </header>
          <main className="phone__feed">
            <ListItemsIn content={this.props.messages} />

            <MakeDogs dogs={dogs} />
            {/* <div className="phone__message-img">image</div> */}
            <ListItemsOut content={this.props.messages} />
            <div className="phone__spacer"></div>
          </main>

          <footer className="phone__footer">
            <input className="phone__input" placeholder="Type a message..." />
            <button className="phone__button" onClick={this.handleClick}>
              <FontAwesomeIcon icon={faAngleRight} size="lg" />
            </button>
          </footer>
        </div>
      </div>
    );
  }
}

export default Phone;
