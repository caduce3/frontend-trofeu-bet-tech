import { Helmet } from "react-helmet-async";
import {
    Table,
    TableBody,
    TableCaption, TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import PlayersTableRow from "./players-table-row";
import PlayersTableFilters from "./players-table-filters";
import { Pagination } from "@/components/pagination";
import { useAuthRedirect } from "@/middlewares/authRedirect";
import { useQuery } from "@tanstack/react-query";
import { getPlayers } from "@/api/get-players";
import { useSearchParams } from "react-router-dom";
import { Loader2 } from "lucide-react";
  

export function Players() {
    const token = useAuthRedirect();

    if (!token) {
        return null;
    }

    const [searchParams, setSearchParams] = useSearchParams();
    const page = searchParams.get('page') ?? 1;

    const id_platform = searchParams.get('id_platform')
    const name = searchParams.get('name') ?? undefined;
    const tell = searchParams.get('tell') ?? undefined;
    const email = searchParams.get('email') ?? undefined;
    const cpf = searchParams.get('cpf') ?? undefined;


    const { data, isLoading } = useQuery({
        queryKey: ['players', page, id_platform, name, tell, email, cpf],
        queryFn: () => getPlayers({page: Number(page), id_platform: Number(id_platform), name, tell, email, cpf}),
    });

    function handlePaginate(page: number) {
        setSearchParams(prev => {
            prev.set('page', (page).toString());

            return prev
        })
    }

    return (
        <>
            <Helmet title="Players"/>
            <div className="flex flex-col gap-4">
                <h1 className="tet-3xl font-bold tracking-tight">Jogadores</h1>
            </div>
            <PlayersTableFilters />
            {
                isLoading ? 
                <div className="flex h-[240px] w-full items-center justify-center">
                    <Loader2 className="h-8 w-8 animate-spin text-muted-foreground"/>
                </div> :
                <Table className="border rounded-md ">
                    <TableCaption>Lista de Jogadores.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead >ID</TableHead>
                            <TableHead>Nome</TableHead>
                            <TableHead>Telefone</TableHead>
                            <TableHead>E-mail</TableHead>
                            <TableHead>CPF</TableHead>
                            <TableHead>Detalhes</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data && data.playersList.map(player => {
                            return <PlayersTableRow key={player.id} players={player}/>
                        })}
                    </TableBody>
                </Table>

            }
            {data && (
                <Pagination currentPage={data.currentPage} totalPages={data.totalPages} totalItens={data.totalItens} onPageChange={handlePaginate}/>
            )}

        </>
    )
}