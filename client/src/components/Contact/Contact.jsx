import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import ContactsIcon from "@mui/icons-material/Contacts";
import axios from "axios";


const Contact = () =>
{
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) =>
  {
    const { name, value } = event.target;
    setFormData((prevValue) =>
    {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };
  console.log(formData);

  const handleSubmit = async (event) =>
  {
    try {
      const response = await axios.post("http://localhost:3001/contact", {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      id="contact"
      sx={{
        bgcolor: "#50c787",
        width: "100%",
        display: "flex",
        overflow: "hidden",
        flexDirection: "column",
        alignItems: "center",

        // backgroundImage: `url(${ContactImage})`,
        // backgroundSize: 'cover',
        // backgroundRepeat: "no-repeat",

        // height: "100vh",
      }}
    >
      <Typography component="h1" variant="h1" sx={{ my: 20, fontFamily: "Wallpoet", color: "black" }}>
        Contact Us
      </Typography>
      <ContactsIcon />
      <Box
        component="form"
        onChange={handleChange}
        onSubmit={handleSubmit}
        sx={{ mt: 6, mb: 10 }}
      >
        <TextField
          required
          name="name"
          id="name"
          label="Name"
          value={formData.name}
          margin="normal"
          fullWidth
          autoComplete="name"
        />
        <TextField
          required
          name="email"
          value={formData.email}
          id="email"
          label="Email"
          margin="normal"
          type="email"
          fullWidth
          autoComplete="email"
        />
        <TextField
          required
          name="message"
          value={formData.message}
          id="message"
          label="Enter Your Message"
          margin="normal"
          fullWidth
          multiline
          rows={5}
        />
        <Button
          fullWidth
          type="submit"
          variant="contained"
          sx={{ mt: 5, mb: 5, p: 2, backgroundColor: "black", color: "white" }}
        >
          Send Message
        </Button>
      </Box>
    </Box>
  );
};

export default Contact;
