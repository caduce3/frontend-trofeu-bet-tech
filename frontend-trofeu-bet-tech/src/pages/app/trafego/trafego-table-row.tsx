import { TableCell, TableRow } from "@/components/ui/table";

export interface RelatorioFtdTrafegoTableRowProps {
    relatorioFTDs: {
        id: number;
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
            <TableCell className="font-medium text-xs font-mono">{relatorioFTDs.utm_campaign}</TableCell>
            <TableCell className="font-medium">{relatorioFTDs.registros}</TableCell>
            <TableCell className="hidden lg:table-cell">{relatorioFTDs.ftds}</TableCell>
            <TableCell className="hidden md:table-cell">{relatorioFTDs.valor_ftd}</TableCell>
            <TableCell className="hidden sm:table-cell">{relatorioFTDs.utm_content}</TableCell>
        </TableRow>
    );
}
 
export default RelatorioTrafegoFtdsTableRow;
