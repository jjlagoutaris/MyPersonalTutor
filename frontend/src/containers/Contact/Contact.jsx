import React, { useEffect, useState } from "react";
import "./Contact.scss";
import { Container } from "react-bootstrap";
import { client, urlFor } from "../../client";
import BookButton from "../../components/BookButton/BookButton";

const Contact = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const query = '*[_type=="contact"] | order(information)';
    client.fetch(query).then((info) => setData(info));
  }, []);

  return (
    <Container className="app__contact-container app__flexColumn" fluid>
      <h2 className="contact-header app__header-font-variant">Contact Me 👋</h2>

      <div className="contact-section app__flexCenter">
        {data.map((contact, index) => (
          <div className="contact-section-card app__flexColumn" key={index}>
            <img src={urlFor(contact.image)} alt={contact.title} />
            <p className="app__contact-card-text" style={{ marginTop: 10 }}>
              {contact.information}
            </p>
          </div>
        ))}
      </div>

      <div className="calendly-section" style={{ marginTop: "1rem", marginBottom: "1rem" }}>
        {/* <h3>Book A Free 15-Minute Consultation 📅</h3> */}
        <BookButton />
      </div>

    </Container>
  );
};

export default Contact;
