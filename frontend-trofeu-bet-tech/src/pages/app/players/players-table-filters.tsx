import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Search, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { z } from "zod";

const playersFilterSchema = z.object({
    id_platform: z.string().optional(),
    name: z.string().optional(),
    tell: z.string().optional(),
    cpf: z.string().optional(),
    email: z.string().optional(),
});

type PlayersFilterSchema = z.infer<typeof playersFilterSchema>;

const PlayersTableFilters = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const id_platform = searchParams.get("id_platform");
    const name = searchParams.get("name");
    const tell = searchParams.get("tell");
    const email = searchParams.get("email");
    const cpf = searchParams.get("cpf");

    const { register, handleSubmit, reset } = useForm<PlayersFilterSchema>({
        resolver: zodResolver(playersFilterSchema),
        defaultValues: {
            id_platform: id_platform ?? "",
            name: name ?? "",
            tell: tell ?? "",
            email: email ?? "",
            cpf: cpf ?? "",
        },
    });

    function handleFilter(data: PlayersFilterSchema) {
        setSearchParams((state) => {
            Object.entries(data).forEach(([key, value]) => {
                if (value) {
                    state.set(key, value);
                } else {
                    state.delete(key);
                }
            });

            state.set("page", "1");
            return state;
        });
    }

    function handleClearFilters() {
        reset();
        setSearchParams({});
    }

    return (
        <form
            onSubmit={handleSubmit(handleFilter)}
            className="flex items-center gap-2"
        >
            <span className="text-sm font-semibold">Filtros:</span>
            <Input
                placeholder="ID da plataforma"
                className="h-8 w-auto"
                {...register("id_platform")}
            />
            <Input
                placeholder="Nome do jogador"
                className="h-8 w-auto"
                {...register("name")}
            />
            <Input
                placeholder="Telefone do jogador"
                className="h-8 w-auto"
                {...register("tell")}
            />
            <Input
                placeholder="E-mail do jogador"
                className="h-8 w-auto"
                {...register("email")}
            />
            <Input
                placeholder="CPF do jogador"
                className="h-8 w-auto"
                {...register("cpf")}
            />

            <Button type="submit" variant="secondary" size="sm">
                <Search className="mr-2 h-4 w-4" />
                Filtrar resultados
            </Button>

            <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={handleClearFilters}
            >
                <X className="mr-2 h-4 w-4" />
                Remover filtros
            </Button>
        </form>
    );
};

export default PlayersTableFilters;
