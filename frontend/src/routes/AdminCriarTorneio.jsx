import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminCriarTorneio = ({ usuario }) => {
    const navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm()

    const url = "http://localhost:3001/torneios"

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

    async function criarTorneio (data) {
        try {
            axios.post(url, data);
            alert("Torneio criado com sucesso!");
            reset();
        } catch (error) {
            if (error.response.status === 500) {
                alert("Erro interno");
                console.log(error);
                reset();
            }
        }

    }
    return (
        <section className="min-h-screen bg-purple-50 flex flex-col md:items-center items-start p-10">
            <h1 className="text-4xl text-center w-full font-bold text-purple-700 mb-10">Criar torneio</h1>
            <form 
                className="w-full md:w-1/2 flex flex-col"
                onSubmit={handleSubmit(criarTorneio)}    
            >

                <div className="flex flex-col gap-2 mb-4 w-full">
                    <label className="text-xl font-bold uppercase">Nome do torneio</label>
                    <input 
                    type="text" 
                    className="text-xl border rounded p-2 w-full" 
                    placeholder="Opcional"
                    {...register("nomeTorneio")}
                    />
                </div>

                <div className="flex flex-col gap-2 mb-4 w-full">
                    <label className="text-xl font-bold uppercase">Quantidade de times</label>
                    <input 
                    type="number" 
                    className="text-xl border rounded p-2 w-full"
                    placeholder="Obrigatório" 
                    required
                    {...register("quantidadeTimes")}
                    />
                </div>

                <div className="flex flex-col gap-2 mb-4 w-full">
                    <label className="text-xl font-bold uppercase">Quantidade de jogadoras por time</label>
                    <input 
                    type="number" 
                    className="text-xl border rounded p-2 w-full"
                    placeholder="Obrigatório" 
                    required
                    {...register("quantidadeJogadorasPorTime")}
                    />
                </div>

                <div className="flex flex-col gap-2 mb-4 w-full">
                    <label className="text-xl font-bold uppercase">Data de inicio das inscrições</label>
                    <input 
                    type="date" 
                    className="text-xl border rounded p-2 w-full"
                    placeholder="Obrigatório" 
                    required
                    {...register("inicioInscricao")}
                    />
                </div>

                <div className="flex flex-col gap-2 mb-4 w-full">
                    <label className="text-xl font-bold uppercase">Data de término das inscrições</label>
                    <input 
                    type="date" 
                    className="text-xl border rounded p-2 w-full"
                    placeholder="Obrigatório" 
                    required
                    {...register("fimInscricao")}
                    />
                </div>

                <div className="flex flex-col gap-2 mb-4 w-full">
                    <label className="text-xl font-bold uppercase">Data do torneio</label>
                    <input 
                    type="date" 
                    className="text-xl border rounded p-2 w-full"
                    placeholder="Obrigatório" 
                    required
                    {...register("dataTorneio")}
                    />
                </div>

                <button
                    type="submit"
                    className="text-2xl uppercase bg-purple-600 cursor-pointer text-white font-medium py-2 px-6 rounded-xl hover:bg-purple-700"
                >
                    Criar
                </button>

            </form>
        </section>
    )
}

export default AdminCriarTorneio