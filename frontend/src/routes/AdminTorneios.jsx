import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminTorneios = ({ usuario }) => {
    const navigate = useNavigate();
    const [torneios, setTorneios] = useState([]);

    const urlGET = "http://localhost:3001/torneios"
    const urlFinalizarTorneio = "http://localhost:3001/finalizarTorneio/"

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

        pegaTorneios();
    }, [usuario, navigate]);

    async function pegaTorneios() {
        try {
            const response = await axios.get(urlGET);
            const result = response.data;
            setTorneios(result);
        } catch (error) {
            console.log(error);
        }
    }

    async function finalizarTorneio (id) {
        try {
            await axios.put(urlFinalizarTorneio + id, {emAndamento: false})
            pegaTorneios()
        } catch (error) {
            if (error.response.status === 404) {
                alert("Torneio não encontrado")
            } else {
                console.log(error);
                
            }
        }
    }
    return (
        <main className="bg-purple-50 py-10 flex flex-col items-center min-h-screen">
            <h1 className="text-4xl font-bold text-purple-700 mb-10">Torneios</h1>
            <div className="w-full hidden md:flex max-w-7xl bg-white shadow-md rounded-lg overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-purple-200">
                        <tr>
                            <th className="p-3 border-b">ID</th>
                            <th className="p-3 border-b">Nome</th>
                            <th className="p-3 border-b">Times</th>
                            <th className="p-3 border-b">Jogadoras</th>
                            <th className="p-3 border-b">Data inscrições</th>
                            <th className="p-3 border-b">Data do torneio</th>
                            <th className="p-3 border-b">Inscritos</th>
                            <th className="p-3 border-b">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {torneios.length > 0 ? (
                            torneios.map((t) => (
                                <tr key={t.id} className="hover:bg-purple-100">
                                    <td className="p-3 border-b">{t.id}</td>
                                    <td className="p-3 border-b">{t.nomeTorneio}</td>
                                    <td className="p-3 border-b">{t.quantidadeTimes}</td>
                                    <td className="p-3 border-b">{t.quantidadeJogadorasPorTime}</td>
                                    <td className="p-3 border-b">{t.inicioInscricao} - {t.fimInscricao}</td>
                                    <td className="p-3 border-b">{t.dataTorneio}</td>
                                    <td className="p-3 border-b">
                                        <details className="cursor-pointer">
                                            <summary>Inscritos</summary>
                                            <div className="flex flex-col mt-2">
                                                {(t.usuariosInscritos).map((inscrito) => (
                                                    <span key={inscrito.id}>{inscrito.email}</span>
                                                ))}
                                            </div>
                                        </details>
                                    </td>
                                    <td className="p-3 border-b">
                                        {t.emAndamento ? 
                                            (
                                                <button 
                                                onClick={() => finalizarTorneio(t.id)}
                                                className="px-4 py-2 bg-red-500 rounded-xl text-white text-xl cursor-pointer"
                                                >
                                                    Finalizar
                                                </button>
                                            )    
                                        : (<span>Finalizado</span>)}
                                    </td>
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
        </main>
    )
}

export default AdminTorneios