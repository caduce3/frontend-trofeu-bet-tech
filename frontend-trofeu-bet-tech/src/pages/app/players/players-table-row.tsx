import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { Search } from "lucide-react";

const PlayersTableRow = () => {
    return ( 
        <TableRow>
            <TableCell className="font-medium text-xs font-mono">21</TableCell>
            <TableCell className="font-medium">Carlos Eduardo Almeida Lucena de Sousa</TableCell>
            <TableCell>(84) 98736-1040</TableCell>
            <TableCell>cadu.ce3@gmail.com</TableCell>
            <TableCell>123.456.789-10</TableCell>
            <TableCell>
                <Button variant="outline" size="sm">
                    <Search className="h-4 w-4"/>
                    <span className="sr-only">Detalhes do jogador</span>
                </Button>
            </TableCell>
        </TableRow>
     );
}
 
export default PlayersTableRow;