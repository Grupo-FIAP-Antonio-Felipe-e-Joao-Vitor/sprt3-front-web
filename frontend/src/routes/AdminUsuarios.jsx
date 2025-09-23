import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminUsuarios = ({ usuario }) => {
    const navigate = useNavigate();
    const [usuarios, setUsuarios] = useState([]);

    const url = "http://localhost:3001/usuarios";

    async function pegarUsuarios() {
        try {
            const response = await axios.get(url);
            const result = response.data;
            setUsuarios(result);
        } catch (error) {
            console.log(error);
        }
    }

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

        pegarUsuarios(); // já carrega ao entrar na tela
    }, [usuario, navigate]);

    return (
        <main className="bg-purple-50 flex flex-col min-h-screen items-center py-10">
            <h1 className="text-4xl font-bold text-purple-700 mb-10">Usuários</h1>

            {/* Lista de usuários */}
            <div className="w-full hidden md:flex max-w-4xl bg-white shadow-md rounded-lg overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-purple-200">
                        <tr>
                            <th className="p-3 border-b">ID</th>
                            <th className="p-3 border-b">Nome</th>
                            <th className="p-3 border-b">Email</th>
                            <th className="p-3 border-b">Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.length > 0 ? (
                            usuarios.map((u) => (
                                <tr key={u.id} className="hover:bg-purple-100">
                                    <td className="p-3 border-b">{u.id}</td>
                                    <td className="p-3 border-b">{u.nome}</td>
                                    <td className="p-3 border-b">{u.email}</td>
                                    <td className="p-3 border-b">{u.role}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center p-4">
                                    Nenhum usuário encontrado
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <div className="grid gap-4 md:hidden w-full px-4">
                {usuarios.length > 0 ? (
                    usuarios.map((u) => (
                        <div
                            key={u.id}
                            className="bg-white shadow-md rounded-lg p-4 border border-purple-200"
                        >
                            <p><span className="font-bold">ID:</span> {u.id}</p>
                            <p><span className="font-bold">Nome:</span> {u.nome}</p>
                            <p><span className="font-bold">Email:</span> {u.email}</p>
                            <p><span className="font-bold">Role:</span> {u.role}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-center w-full">Nenhum usuário encontrado</p>
                )}
            </div>

        </main>
    );
};

export default AdminUsuarios;
