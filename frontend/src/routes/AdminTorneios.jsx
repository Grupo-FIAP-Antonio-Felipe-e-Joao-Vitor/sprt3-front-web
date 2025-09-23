import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminTorneios = ({ usuario }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!usuario) {
            navigate("/login");
            return;
        }

        if (usuario.role === "User") {
            alert("Você não tem permissão de acessar esta área");
            navigate("/");
            return;
        }
    }, [usuario, navigate]);
    return (
        <div>AdminTorneios</div>
    )
}

export default AdminTorneios