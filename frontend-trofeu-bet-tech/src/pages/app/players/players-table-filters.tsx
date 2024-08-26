import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";

const PlayersTableFilters = () => {
    return ( 
        <form className="flex items-center gap-2">
            <span className="text-sm font-semibold">Filtros:</span>
            <Input placeholder="ID do jogador" className="h-8 w-auto" />
            <Input placeholder="Nome do jogador" className="h-8 w- w-auto" />
            <Input placeholder="Telefone do jogador" className="h-8 w-auto" />
            <Input placeholder="E-mail do jogador" className="h-8 w- w-auto" />
            <Input placeholder="CPF do jogador" className="h-8 w-auto" />

            <Button type="submit" variant="secondary" size="sm">
                <Search className="mr-2 h-4 w-4"/>
                Filtrar resultados
            </Button>

            <Button type="button" variant="outline" size="sm">
                <X className="mr-2 h-4 w-4"/>
                Remover filtros
            </Button>
        </form>
     );
}
 
export default PlayersTableFilters;