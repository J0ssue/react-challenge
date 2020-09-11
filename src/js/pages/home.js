import React from "react";
import Phone from "../components/Phone";

export default function Home() {
  const messages = [
    "this is a message that is here for display only.",
    "this is a message that is here for display only.",
    "this is a message that is here for display only.",
    "this is a message that is here for display only.",
    "this is a message that is here for display only.",
    "this is a message that is here for display only.",
    "this is a message that is here for display only.",
    "this is a message that is here for display only.",
  ];

  return (
    <div className="app-container">
      <div className="app-container__shape"></div>
      <Phone messages={messages} />

      <header className="app-header">
        <h1 className="app-header__title">Simple booking</h1>
        <p className="app-header__description">
          Stay in touch with our dog walkers through the chat interface. This
          makes it easy to discuss arrangements and make bookings. Once the walk
          has been completed you can rate your walker and book again all thorugh
          the chat.
        </p>
      </header>
    </div>
  );
}