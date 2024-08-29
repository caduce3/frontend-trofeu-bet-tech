import { Helmet } from "react-helmet-async";
import { useAuthRedirect } from "@/middlewares/authRedirect";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getUniquePlayer } from "@/api/get-unique-player";
import { toast } from "sonner";
  

export function PlayersDetails() {
    const token = useAuthRedirect();

    if (!token) {
        return null;
    }

    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    const { data } = useQuery({
        queryKey: ['player', id],
        queryFn: async () => {
            if (!id) {
                navigate(`/players`);
                toast.error(`Jogador não encontrado`);
                return Promise.reject("ID do jogador não encontrado");
            }
            return getUniquePlayer({ id });
        },
        enabled: !!id // Executa a consulta somente se id estiver definido
    });


    return (
        <>
            <Helmet title="Players Details"/>
            <p>Olá player {data?.player.name}</p>
        </>
    )
}