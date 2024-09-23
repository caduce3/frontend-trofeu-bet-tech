import { TableCell, TableRow } from "@/components/ui/table";

export interface RelatorioFtdTrafegoTableRowProps {
    relatorioFTDs: {
        id_registro: number;
        ftds: number;
        registros: number;
        valor_ftd: number | null;
        utm_content: string;
        utm_campaign: string;
    }
}

const RelatorioTrafegoFtdsTableRow = ({ relatorioFTDs }: RelatorioFtdTrafegoTableRowProps) => {

    return ( 
        <TableRow className="bg-[#18181B] rounded-xl">
            <TableCell className="font-medium text-xs font-mono">{relatorioFTDs.id_registro === null ? "Não informado" : relatorioFTDs.id_registro}</TableCell>
            <TableCell className="w-[500px]">{relatorioFTDs.utm_campaign === "" ? "Não informado" : relatorioFTDs.utm_campaign}</TableCell>
            <TableCell className="">{relatorioFTDs.registros === null ? "Não informado" : relatorioFTDs.registros}</TableCell>
            <TableCell className="hidden lg:table-cell">{relatorioFTDs.ftds === null ? "Não informado" : relatorioFTDs.ftds}</TableCell>
            <TableCell className="hidden md:table-cell">{relatorioFTDs.valor_ftd === null ? "Não informado" : relatorioFTDs.valor_ftd}</TableCell>
            <TableCell className="hidden sm:table-cell" >{relatorioFTDs.utm_content === "" ? "Não informado" : relatorioFTDs.utm_content}</TableCell>
        </TableRow>
    );
}
 
export default RelatorioTrafegoFtdsTableRow;
