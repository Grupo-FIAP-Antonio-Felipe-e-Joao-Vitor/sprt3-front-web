import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Admin = ({ usuario }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!usuario) {
      navigate("/login");
      return;
    }

    if (usuario.role === "User") {
      alert("Você não tem permissão de acessar esta área");
    //   navigate("/");
      return;
    }
  }, [usuario, navigate]);

  return (
    <div>
      <h1>Painel Admin</h1>
      {/* Aqui você pode colocar o conteúdo do admin */}
      <p>Bem-vindo, {usuario.email}</p>
    </div>
  );
};

export default Admin;
