import * as React from "react";
import { Button, Paper, TextField } from "@mui/material";

const Form = (props) => {
  const marginBottom = {
    marginBottom: "30px",
  };
  const [correo, setCorreo] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleContraseña = (e) => {
    setPassword(e.target.value);
  };
  const handleCorreo = (e) => {
    setCorreo(e.target.value);
  };
  const handleIngresar = () => {
    if (correo.length > 0 && password.length > 0) {
      alert("Datos ingresados, revise la consola");
      console.log("Correo: " + correo + "\nContraseña: " + password);
    } else {
      alert("Complete todos los campos");
    }
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
          onChange={handleCorreo}
        />
        <TextField
          required
          id="outlined-required"
          label="Contraseña"
          type="password"
          onChange={handleContraseña}
        />
        <Button
          onClick={handleIngresar}
          variant="contained"
          style={{ margin: " auto" }}
        >
          Ingresar
        </Button>
      </Paper>
    </div>
  );
};
export default Form;
