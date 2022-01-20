import { useState } from "react";
import emailjs from "emailjs-com";
import Adresse from "./Adresse";
import Map from "./Map";
import { Col, Row } from "react-bootstrap";
import { useEffect } from "react";

const Contact = () => {
  const [msg, setMsg] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [mail, setMail] = useState("");

  const [style, setStyle] = useState({'color': 'white'});

  const light = localStorage.getItem('light')
  // const [style, setStyle] = useState({color: 'white'})

  useEffect(()=>{
    if (light === 'dark' ){
      setStyle({'color': 'white'})
    } else {
      setStyle({'color': 'black'})
    }
  },[light])
  
  async function sendEmail(e) {
    e.preventDefault();
    if (msg.length > 3 && username.length > 3 && name.length > 3 && phone.length > 3 && subject.length >3  ){
      await emailjs
        .sendForm(
          "service_ho76po7",
          "template_4n0o48h",
          e.target,
          "user_ENPDK6F0oL0rq9rJPU5op"
        )
        .then(
          (result) => {
            setUsername("");
            setMail("");
            setMsg("");
            setName("");
            setPhone("");
            setSubject("");
            if (result) alert("Message envoyé");
          },
          (error) => {
            console.log(error.text);
          }
        );

    } else {
      // console.log("complete information");
      alert('Veuillez compléter les champs')
    }
  }

  return (
    <div className="contact">
      <Adresse />
      <Map />
      <div className="title_contact ">
        <h2>Contactez-nous</h2>
      </div>
      <form className="contact-form" onSubmit={(e) => sendEmail(e)}>
        <Row className="formulaire" >
          <Col lg="4" md="6" sm="12">
            <input
              style={style}
              type="text"
              name="nom"
              id="nom"
              placeholder="Nom"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Col>
          <Col lg="4" md="6" sm="12">
            <input
              style={style}
              type="text"
              name="prenom"
              id="prenom"
              placeholder="Prénom"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Col>

          <Col lg="4" md="6" sm="12">
            <input
              style={style}
              type="text"
              name="phone"
              id="telephone"
              placeholder="Téléphone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Col>

          <Col lg="4" md="6" sm="12">
            <input
              style={style}
              type="text"
              name="user_email"
              id="email"
              placeholder="E-mail"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
            {/* <input type="text" name="societe" id="societe" placeholder="Socièté" onChange={(e) => (setSociete(e.target.value)> */}
          </Col>
          <Col lg="4" md="6" sm="12">
            <input
              style={style}
              type="text"
              name="sujet"
              id="sujet"
              placeholder="Sujet"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </Col>
          <Col lg="12">
            <textarea
              style={style}
              name="message"
              id=""
              cols="100"
              rows="4"
              value={msg}
              placeholder="Tapez votre messages ici ..."
              onChange={(e) => setMsg(e.target.value)}
            ></textarea>
          </Col>
        </Row>
        <button type="submit" className="btn_btn dark-border">
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default Contact;
