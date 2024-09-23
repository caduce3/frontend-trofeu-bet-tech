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
import { useNavigate, useSearchParams } from "react-router-dom";
import RelatorioTrafegoFtdsTableRow from "./trafego-table-row";
import { Pagination } from "@/components/pagination";
import { TrafegoTableSkeleton } from "./trafego-table-skeleton";
import { verifyAccessByJwt } from "@/services/verify-access-page-by-jwt";
import { useEffect } from "react";
import { toast } from "sonner";
import { format } from "date-fns";
import * as React from "react";
import TrafegoTableFilters from "./trafego-table-filters";

export function RelatorioTrafego() {
    const token = useAuthRedirect();
    const navigate = useNavigate();

    useEffect(() => {
        if (verifyAccessByJwt(token ?? '', ["GERENCIAL", "DESENVOLVIMENTO", "TRAFEGO"]) === false) {
            navigate("/");
            toast.error("Você não tem permissão para acessar essa página");
        }
    }, [token, navigate]); 

    const [dateRange, setDateRange] = React.useState<{ from: Date; to: Date }>({
        from: new Date(2024, 6, 1, 0, 0),
        to: new Date(2024, 6, 31, 23, 59)
    });
    
    const dataInicial = format(dateRange.from, "dd-MM-yyyy HH:mm");
    const dataFinal = format(dateRange.to, "dd-MM-yyyy HH:mm");

    const [utmCampaign, setUtmCampaign] = React.useState<string>('');

    const [searchParams, setSearchParams] = useSearchParams();
    const page = searchParams.get('page') ?? 1;

    const { data, isLoading } = useQuery({
        queryKey: ['relatorio-ftds', page, dataInicial, dataFinal, utmCampaign],
        queryFn: () => getRelatorioFtds({ page: Number(page), dataInicial, dataFinal, utm_campaign: utmCampaign }),
    });

    function handlePaginate(page: number) {
        setSearchParams(prev => {
            prev.set('page', (page).toString());
            return prev;
        });
    }

    return (
        <>
            <Helmet title="Tráfego" />
            <div className="flex flex-row gap-4 items-center">
                <h1 className="text-3xl font-bold tracking-tight">Relatório FTD</h1>
                <TrafegoTableFilters dateRange={dateRange} setDateRange={setDateRange} utmCampaign={utmCampaign} setUtmCampaign={setUtmCampaign} />
            </div>
            
            {isLoading ? <TrafegoTableSkeleton />
            :
            <Table className="bg-[#18181B] rounded-xl">
                <TableHeader>
                    <TableRow>
                        <TableHead>UTM Source</TableHead>
                        <TableHead>UTM Campaign</TableHead>
                        <TableHead className="hidden md:table-cell">Registros</TableHead>
                        <TableHead className="hidden sm:table-cell">FTDs</TableHead>
                        <TableHead className="hidden md:table-cell">Valor FTD</TableHead>
                        <TableHead className="hidden sm:table-cell">UTM Content</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data && data.relatorioFtds?.map(relatorio => {
                        return <RelatorioTrafegoFtdsTableRow key={relatorio.id_registro} relatorioFTDs={relatorio} />;
                    })}
                </TableBody>
            </Table>
            }
            {data && (
                <Pagination currentPage={data.currentPage} totalPages={data.totalPages} totalItens={data.totalItens} onPageChange={handlePaginate} />
            )}
        </>
    )
}
