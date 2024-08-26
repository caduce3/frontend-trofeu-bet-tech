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
  

export function Players() {
    const token = useAuthRedirect();

    if (!token) {
        return null;
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
                    {Array.from( { length: 10 }).map( (_, i) => {
                        return (
                            <PlayersTableRow  key={i} />
                        )
                    })}
                </TableBody>
            </Table>

            <Pagination pageIndex={0} perPage={10} totalCount={100} />

        </>
    )
}