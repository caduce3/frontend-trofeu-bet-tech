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
  

export function Players() {
    const token = useAuthRedirect();

    if (!token) {
        return null;
    }

    const [searchParams, setSearchParams] = useSearchParams();
    const page = searchParams.get('page') ?? 1;

    const { data } = useQuery({
        queryKey: ['players', page],
        queryFn: () => getPlayers({page: Number(page)}),
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

            {data && (
                <Pagination currentPage={data.currentPage} totalPages={data.totalPages} totalItens={data.totalItens} onPageChange={handlePaginate}/>
            )}

        </>
    )
}