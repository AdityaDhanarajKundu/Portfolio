import { useState, useRef } from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  ContactForm,
  ContactTitle,
  ContactInput,
  ContactInputMessage,
  ContactButton,
} from "./ContactStyle";
import emailjs from "@emailjs/browser";
import { Snackbar } from "@mui/material";

function Contact() {
  const [open, setOpen] = useState(false);
  const formRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_v5zwksc",
        "template_7cwbz4i",
        formRef.current,
        'T_7ZsNDMR342UsYtL'
      )
      .then(
        (result) => {
          console.log(result.text);
          setOpen(true);
          formRef.current.reset();
        },
        (err) => {
          console.log(err.text);
        }
      );
  }

  return (
    <Container id="contact">
      <Wrapper>
        <Title>Contact</Title>
        <Desc>
          Feel free to get in touch with me, I am always open to discussing new
          projects, creative ideas or opportunities to be part of your visions.
        </Desc>
        <ContactForm ref={formRef} onSubmit={handleSubmit}>
          <ContactTitle>Email Me 📧</ContactTitle>
          <ContactInput placeholder="Your Email" name="from_email" />
          <ContactInput placeholder="Your Name" name="from_name" />
          <ContactInput placeholder="Subject" name="subject" />
          <ContactInputMessage placeholder="Message" rows="4" name="message" />
          <ContactButton type="submit" value="Send" />
        </ContactForm>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Email sent successfully! ✅"
          severity="success"
        />
      </Wrapper>
    </Container>
  );
}

export default Contact;
