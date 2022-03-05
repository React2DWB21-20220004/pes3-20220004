import * as React from "react";
import { Button, Paper, TextField } from "@mui/material";

const Form = (props) => {
  const marginBottom = {
    marginBottom: "30px",
  };
  return (
    <div
      style={{
        height: "100vh",
        width: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={3}
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "15px 25px",
          minHeight: "60vh",
          width: "250px",
          maxWidth: "270px",
          borderRadius: "15px",
          marginLeft: "60px",
        }}
      >
        <h2 style={marginBottom}>{"Bienvenido(a)"}</h2>
        <TextField
          style={marginBottom}
          required
          id="outlined-required"
          label="Correo"
        />
        <TextField
          required
          id="outlined-required"
          label="Contraseña"
          type="password"
        />
        <Button variant="contained" style={{ margin: " auto" }}>
          Ingresar
        </Button>
      </Paper>
    </div>
  );
};
export default Form;
