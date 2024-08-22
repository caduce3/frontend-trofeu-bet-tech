import { Input } from "@/components/ui/input";

const PlayersTableFilters = () => {
    return ( 
        <form className="flex items-center gap-2">
            <span className="text-sm font-semibold">Filtros:</span>
            <Input placeholder="ID do jogador" className="h-8 w-[320px]" />
            <Input placeholder="Nome do jogador" className="h-8 w-[320px]" />
        </form>
     );
}
 
export default PlayersTableFilters;