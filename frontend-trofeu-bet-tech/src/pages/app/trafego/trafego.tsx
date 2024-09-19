import { Helmet } from "react-helmet-async";
import {
    Table,
    TableBody, 
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import { useAuthRedirect } from "@/middlewares/authRedirect";
import { useQuery } from "@tanstack/react-query";
import { getRelatorioFtds } from "@/api/trafego/get-relatorio-ftds";
import { useSearchParams } from "react-router-dom";
import RelatorioTrafegoFtdsTableRow from "./trafego-table-row";
import { Pagination } from "@/components/pagination";
import { TrafegoTableSkeleton } from "./trafego-table-skeleton";
  

export function RelatorioTrafego() {
    const token = useAuthRedirect();

    if (!token) {
        return null;
    }

    const [searchParams, setSearchParams] = useSearchParams();
    const page = searchParams.get('page') ?? 1;

    const { data, isLoading } = useQuery({
        queryKey: ['relatorio-ftds', page],
        queryFn: () => getRelatorioFtds({page: Number(page), dataInicial: '01-09-2024 10:54', dataFinal: '10-09-2024 10:58'}),
    });

    function handlePaginate(page: number) {
        setSearchParams(prev => {
            prev.set('page', (page).toString());

            return prev
        })
    }
 
    return (
        <>
            <Helmet title="Tráfego"/>
            <div className="flex flex-row gap-4 items-center">
                <h1 className="text-3xl font-bold tracking-tight">Relatório FTD</h1>
            </div>
            
            {
                isLoading ? <TrafegoTableSkeleton />
                :
                <Table className=" bg-[#18181B] rounded-xl ">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[600px]">Utm campaign</TableHead>
                            <TableHead className="hidden md:table-cell">Registros</TableHead>
                            <TableHead className="hidden sm:table-cell">FTDs</TableHead>
                            <TableHead className="hidden md:table-cell">Valor FTD</TableHead>
                            <TableHead className="hidden sm:table-cell">UTM Content</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data && data.relatorioFtds?.map(relatorio => {
                            return <RelatorioTrafegoFtdsTableRow key={relatorio.id} relatorioFTDs={relatorio} />
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