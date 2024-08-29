import { Helmet } from "react-helmet-async";
import { useAuthRedirect } from "@/middlewares/authRedirect";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getUniquePlayer } from "@/api/get-unique-player";
import { toast } from "sonner";
import { CardTotalGeral } from "@/components/card-total";
import { DollarSign, Wallet } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { formatPhoneNumber } from "@/services/formated-tell"
import { capitalizeName } from "@/services/formated-captalize-name"
import { formatCPF } from "@/services/formated-cpf"

export function PlayersDetails() {
    const token = useAuthRedirect();

    if (!token) {
        return null;
    }

    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    const { data } = useQuery({
        queryKey: ['player', id],
        queryFn: async () => {
            if (!id) {
                navigate(`/players`);
                toast.error(`Jogador não encontrado`);
                return Promise.reject("ID do jogador não encontrado");
            }
            return getUniquePlayer({ id });
        },
        enabled: !!id // Executa a consulta somente se id estiver definido
    });
    
    return (
        <>
            <Helmet title="Players Details"/>

            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-8">
                <Card>
                    <CardHeader>
                        <CardTitle>Informações gerais do jogador</CardTitle>
                        <CardDescription>Informações pessoais</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="py-3">
                                    <Label className="text-lg text-muted-foreground">Nome</Label>
                                    <p className="text-base font-semibold">{capitalizeName(data?.player.name ?? "Não informado")}</p>
                                </div>
                                <div className="py-3">
                                    <Label className="text-lg text-muted-foreground">CPF</Label>
                                    <p className="text-base font-semibold">{formatCPF(data?.player.cpf ?? "Não informado")}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="py-3">
                                    <Label className="text-lg text-muted-foreground">Telefone</Label>
                                    <p className="text-base font-semibold">{formatPhoneNumber(data?.player.tell ?? "Não informado")}</p>
                                </div>
                                <div className="py-3">
                                    <Label className="text-lg text-muted-foreground">Email</Label>
                                    <p className="text-base font-semibold">{data?.player.email}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="py-3">
                                    <Label className="text-lg text-muted-foreground">ID</Label>
                                    <p className="text-base font-semibold">{data?.player.id_platform}</p>
                                </div>
                                <div className="py-3">
                                    <Label className="text-lg text-muted-foreground">Data de registro</Label>
                                    <p className="text-base font-semibold">
                                        {(() => {
                                            const registrationDate = data?.player.platform_regitration_date;
 
                                            if (!registrationDate) return "Não informado";

                                            const dateObj = typeof registrationDate === 'string' ? new Date(registrationDate) : registrationDate;

                                            if (!(dateObj instanceof Date) || isNaN(dateObj.getTime())) return "Data inválida";

                                            return new Intl.DateTimeFormat('pt-BR').format(dateObj);
                                        })()}
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="py-3">
                                    <Label className="text-lg text-muted-foreground">FTD value</Label>
                                    <p className="text-base font-semibold">{data?.player.Wallet?.ftd_value}</p>
                                </div>
                                <div className="py-3">
                                    <Label className="text-lg text-muted-foreground">FTD date</Label>
                                    <p className="text-base font-semibold">
                                        {(() => {
                                            const defaultDate = new Date("1000-01-01T23:59:59.000Z");
                                            let ftdDate = data?.player.Wallet?.ftd_date;
                                            if (!ftdDate) return "Não informado";
                                            if (typeof ftdDate === 'string') {
                                                ftdDate = new Date(ftdDate);
                                            }
                                            if (!(ftdDate instanceof Date) || isNaN(ftdDate.getTime())) {
                                                return "Não informado";
                                            }
                                            if (ftdDate.getTime() === defaultDate.getTime()) {
                                                return "Não informado";
                                            }
                                            const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };
                                            return new Intl.DateTimeFormat('pt-BR', options).format(ftdDate);
                                        })()}
                                    </p>
                                </div>

                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="py-3">
                                    <Label className="text-lg text-muted-foreground">Data de nascimento</Label>
                                    <p className="text-base font-semibold">
                                        {(() => {
                                            const dateBirth = data?.player.date_birth;
                                            if (!dateBirth) return "Não informado";
                                            const dateObj = typeof dateBirth === 'string' ? new Date(dateBirth) : dateBirth;
                                            if (!(dateObj instanceof Date) || isNaN(dateObj.getTime())) return "Não informado";
                                            return new Intl.DateTimeFormat('pt-BR').format(dateObj);
                                        })()}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                </div>
                <div className="col-span-4">
                    <div className="grid grid-cols-1 gap-4">
                    <CardTotalGeral 
                        Icon={DollarSign} 
                        cardTitle="Valor total de depósitos" 
                        totalValue={Number(data?.player.Wallet?.total_deposit_amount) ?? 0} 
                        format={true}
                    />
                    <CardTotalGeral 
                        Icon={Wallet} 
                        cardTitle="Quantidade total de depósitos" 
                        totalValue={Number(data?.player.Wallet?.qtd_deposits) ?? 0} 
                    />
                    <CardTotalGeral 
                        Icon={Wallet} 
                        cardTitle="Valor total de saques" 
                        totalValue={Number(data?.player.Wallet?.total_withdrawals) ?? 0} 
                        format={true}
                    />
                    <CardTotalGeral 
                        Icon={Wallet} 
                        cardTitle="Quantidade total de saques" 
                        totalValue={Number(data?.player.Wallet?.qtd_withdrawals) ?? 0} 
                    />
                    </div>
                </div>
            </div>


        </>
    )
}
