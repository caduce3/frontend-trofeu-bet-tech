import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { Search } from "lucide-react";


export interface PlayersTableRowProps {
    players: {
        id: string;
        id_platform: number;
        name: string;
        cpf: string | null;
        tell: string;
        email: string;
        date_created: Date;
        date_birth: Date | null;
        platform_regitration_date: Date | null;
    }
}

const PlayersTableRow = ({ players }: PlayersTableRowProps) => {
    return ( 
        <TableRow>
            <TableCell className="font-medium text-xs font-mono">{players.id_platform}</TableCell>
            <TableCell className="font-medium">{players.name}</TableCell>
            <TableCell>{players.tell}</TableCell>
            <TableCell>{players.email}</TableCell>
            <TableCell>{players.cpf}</TableCell>
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