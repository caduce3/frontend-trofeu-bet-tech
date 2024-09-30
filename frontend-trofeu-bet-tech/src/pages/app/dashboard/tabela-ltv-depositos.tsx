import { TabelaLtvDepositosBody } from "@/api/charts/dashboard/ltv-depositos-total";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export function TabelaLtvDepositos() {
    const startDate = "2024-01-02";
    const endDate = "2024-12-31";

    const months = [
        "Janeiro de 2024", "Fevereiro de 2024", "Março de 2024", "Abril de 2024", "Maio de 2024", "Junho de 2024",
        "Julho de 2024", "Agosto de 2024", "Setembro de 2024", "Outubro de 2024", "Novembro de 2024", "Dezembro de 2024"
    ] as const;

    const { data, isLoading } = useQuery({
        queryKey: ["tabela_ltv_depositos_saques", startDate, endDate],
        queryFn: async () => {
            return await TabelaLtvDepositosBody({ startDate, endDate });
        },
        enabled: !!startDate && !!endDate,
    });

    console.log("DATA", data);

    if (isLoading) {
        return <div>Carregando...</div>;
    }

    if (!data) {
        return <div>Nenhum dado encontrado.</div>;
    }

    // Acessar o objeto correspondente ao mês "Janeiro de 2024"
    const monthlyData = data["janeiro de 2024"];

    const depositData = monthlyData.depositAmountPerMonth;
    const withdrawalData = monthlyData.depositWithdrawalsPerMonth;

    const dadosJaneiro = months.map((month) => {
        // Extrair apenas o mês para comparação
        const monthKey = month.split(" ")[0]; // "Janeiro" de "Janeiro de 2024"

        // Acessando valores de depósitos
        const stats = depositData[monthKey] || { amount: 0, percentage: 0 };

        // Acessando valores de saques
        const stats2 = withdrawalData[monthKey] || { withdrawals: 0, percentage: 0 };

        return {
            month,
            depositAmount: parseFloat(stats.amount.toFixed(2)),
            depositPercentage: parseFloat(stats.percentage.toFixed(2)),
            depositWithdrawals: parseFloat(stats2.withdrawals.toFixed(2)),
            depositWithdrawalsPercentage: parseFloat(stats2.percentage.toFixed(2)),
        };
    });

    const dadosFevereiro = months.map((month) => {
        // Extrair apenas o mês para comparação
        const monthKey = month.split(" ")[1]; // "Fevereiro" de "Fevereiro de 2024"

        // Acessando valores de depósitos
        const stats = depositData[monthKey] || { amount: 0, percentage: 0 };

        // Acessando valores de saques
        const stats2 = withdrawalData[monthKey] || { withdrawals: 0, percentage: 0 };

        return {
            month,
            depositAmount: parseFloat(stats.amount.toFixed(2)),
            depositPercentage: parseFloat(stats.percentage.toFixed(2)),
            depositWithdrawals: parseFloat(stats2.withdrawals.toFixed(2)),
            depositWithdrawalsPercentage: parseFloat(stats2.percentage.toFixed(2)),
        };
    });

    const dadosMarco = months.map((month) => {
        // Extrair apenas o mês para comparação
        const monthKey = month.split(" ")[2]; // "Março" de "Março de 2024"

        // Acessando valores de depósitos
        const stats = depositData[monthKey] || { amount: 0, percentage: 0 };

        // Acessando valores de saques
        const stats2 = withdrawalData[monthKey] || { withdrawals: 0, percentage: 0 };

        return {
            month,
            depositAmount: parseFloat(stats.amount.toFixed(2)),
            depositPercentage: parseFloat(stats.percentage.toFixed(2)),
            depositWithdrawals: parseFloat(stats2.withdrawals.toFixed(2)),
            depositWithdrawalsPercentage: parseFloat(stats2.percentage.toFixed(2)),
        };
    });

    const dadosAbril = months.map((month) => {
        // Extrair apenas o mês para comparação
        const monthKey = month.split(" ")[3]; // "Abril" de "Abril de 2024"

        // Acessando valores de depósitos
        const stats = depositData[monthKey] || { amount: 0, percentage: 0 };

        // Acessando valores de saques
        const stats2 = withdrawalData[monthKey] || { withdrawals: 0, percentage: 0 };

        return {
            month,
            depositAmount: parseFloat(stats.amount.toFixed(2)),
            depositPercentage: parseFloat(stats.percentage.toFixed(2)),
            depositWithdrawals: parseFloat(stats2.withdrawals.toFixed(2)),
        }
    });

    const dadosMaio = months.map((month) => {
        // Extrair apenas o mês para comparação
        const monthKey = month.split(" ")[4]; // "Maio" de "Maio de 2024"

        // Acessando valores de depósitos
        const stats = depositData[monthKey] || { amount: 0, percentage: 0 };

        // Acessando valores de saques
        const stats2 = withdrawalData[monthKey] || { withdrawals: 0, percentage: 0 };

        return {
            month,
            depositAmount: parseFloat(stats.amount.toFixed(2)),
            depositPercentage: parseFloat(stats.percentage.toFixed(2)),
            depositWithdrawals: parseFloat(stats2.withdrawals.toFixed(2)),
        }
    });

    const dadosJunho = months.map((month) => {
        // Extrair apenas o mês para comparação
        const monthKey = month.split(" ")[5]; // "Maio" de "Maio de 2024"

        // Acessando valores de depósitos
        const stats = depositData[monthKey] || { amount: 0, percentage: 0 };

        // Acessando valores de saques
        const stats2 = withdrawalData[monthKey] || { withdrawals: 0, percentage: 0 };

        return {
            month,
            depositAmount: parseFloat(stats.amount.toFixed(2)),
            depositPercentage: parseFloat(stats.percentage.toFixed(2)),
            depositWithdrawals: parseFloat(stats2.withdrawals.toFixed(2)),
        }
    });

    const dadosJulho = months.map((month) => {
        // Extrair apenas o mês para comparação
        const monthKey = month.split(" ")[6]; // "Maio" de "Maio de 2024"

        // Acessando valores de depósitos
        const stats = depositData[monthKey] || { amount: 0, percentage: 0 };

        // Acessando valores de saques
        const stats2 = withdrawalData[monthKey] || { withdrawals: 0, percentage: 0 };

        return {
            month,
            depositAmount: parseFloat(stats.amount.toFixed(2)),
            depositPercentage: parseFloat(stats.percentage.toFixed(2)),
            depositWithdrawals: parseFloat(stats2.withdrawals.toFixed(2)),
        }
    });

    const dadosAgosto = months.map((month) => {
        // Extrair apenas o mês para comparação
        const monthKey = month.split(" ")[7]; // "Maio" de "Maio de 2024"

        // Acessando valores de depósitos
        const stats = depositData[monthKey] || { amount: 0, percentage: 0 };

        // Acessando valores de saques
        const stats2 = withdrawalData[monthKey] || { withdrawals: 0, percentage: 0 };

        return {
            month,
            depositAmount: parseFloat(stats.amount.toFixed(2)),
            depositPercentage: parseFloat(stats.percentage.toFixed(2)),
            depositWithdrawals: parseFloat(stats2.withdrawals.toFixed(2)),
        }
    });

    const dadosSetembro = months.map((month) => {
        // Extrair apenas o mês para comparação
        const monthKey = month.split(" ")[8]; // "Maio" de "Maio de 2024"

        // Acessando valores de depósitos
        const stats = depositData[monthKey] || { amount: 0, percentage: 0 };

        // Acessando valores de saques
        const stats2 = withdrawalData[monthKey] || { withdrawals: 0, percentage: 0 };

        return {
            month,
            depositAmount: parseFloat(stats.amount.toFixed(2)),
            depositPercentage: parseFloat(stats.percentage.toFixed(2)),
            depositWithdrawals: parseFloat(stats2.withdrawals.toFixed(2)),
        }
    });

    const dadosOutubro = months.map((month) => {
        // Extrair apenas o mês para comparação
        const monthKey = month.split(" ")[9]; // "Maio" de "Maio de 2024"

        // Acessando valores de depósitos
        const stats = depositData[monthKey] || { amount: 0, percentage: 0 };

        // Acessando valores de saques
        const stats2 = withdrawalData[monthKey] || { withdrawals: 0, percentage: 0 };

        return {
            month,
            depositAmount: parseFloat(stats.amount.toFixed(2)),
            depositPercentage: parseFloat(stats.percentage.toFixed(2)),
            depositWithdrawals: parseFloat(stats2.withdrawals.toFixed(2)),
        }
    });

    const dadosNovembro = months.map((month) => {
        // Extrair apenas o mês para comparação
        const monthKey = month.split(" ")[10]; // "Maio" de "Maio de 2024"

        // Acessando valores de depósitos
        const stats = depositData[monthKey] || { amount: 0, percentage: 0 };

        // Acessando valores de saques
        const stats2 = withdrawalData[monthKey] || { withdrawals: 0, percentage: 0 };

        return {
            month,
            depositAmount: parseFloat(stats.amount.toFixed(2)),
            depositPercentage: parseFloat(stats.percentage.toFixed(2)),
            depositWithdrawals: parseFloat(stats2.withdrawals.toFixed(2)),
        }
    });

    const dadosDezembro = months.map((month) => {
        // Extrair apenas o mês para comparação
        const monthKey = month.split(" ")[11]; // "Maio" de "Maio de 2024"

        // Acessando valores de depósitos
        const stats = depositData[monthKey] || { amount: 0, percentage: 0 };

        // Acessando valores de saques
        const stats2 = withdrawalData[monthKey] || { withdrawals: 0, percentage: 0 };

        return {
            month,
            depositAmount: parseFloat(stats.amount.toFixed(2)),
            depositPercentage: parseFloat(stats.percentage.toFixed(2)),
            depositWithdrawals: parseFloat(stats2.withdrawals.toFixed(2)),
        }
    });
          

    return (
        <Card className="rounded-xl">
            <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
                <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
                    <CardTitle>Tabela Ticket Médio</CardTitle>
                </div>
            </CardHeader>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className=""></TableHead>
                        {dadosJaneiro.map((mes, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <TableHead className="border text-center" colSpan={2}>{mes.month}</TableHead>
                                </React.Fragment>
                            );
                        })}
                    </TableRow>
                    <TableRow>
                        <TableHead className="border">Mês</TableHead>
                        <TableHead>Depósito</TableHead>
                        <TableHead className="border-r">Saque</TableHead>
                        <TableHead>Depósito</TableHead>
                        <TableHead className="border-r">Saque</TableHead>
                        <TableHead>Depósito</TableHead>
                        <TableHead className="border-r">Saque</TableHead>
                        <TableHead>Depósito</TableHead>
                        <TableHead className="border-r">Saque</TableHead>
                        <TableHead>Depósito</TableHead>
                        <TableHead className="border-r">Saque</TableHead>
                        <TableHead>Depósito</TableHead>
                        <TableHead className="border-r">Saque</TableHead>
                        <TableHead>Depósito</TableHead>
                        <TableHead className="border-r">Saque</TableHead>
                        <TableHead>Depósito</TableHead>
                        <TableHead className="border-r">Saque</TableHead>
                        <TableHead>Depósito</TableHead>
                        <TableHead className="border-r">Saque</TableHead>
                        <TableHead>Depósito</TableHead>
                        <TableHead className="border-r">Saque</TableHead>
                        <TableHead>Depósito</TableHead>
                        <TableHead className="border-r">Saque</TableHead>
                        <TableHead>Depósito</TableHead>
                        <TableHead className="border-r">Saque</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="border-r font-semibold">Janeiro</TableCell>
                        {dadosJaneiro.map((item, index) => (
                            <React.Fragment key={index}>
                                <TableCell className="">
                                    {item.depositAmount === 0 
                                        ? '' 
                                        : item.depositAmount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                </TableCell>
                                <TableCell className="border-r">
                                    {item.depositWithdrawals === 0 
                                        ? '' 
                                        : item.depositWithdrawals.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                </TableCell>
                            </React.Fragment>
                        ))}
                    </TableRow>
                    <TableRow>
                        <TableCell className="border-r">Fevereiro</TableCell>
                        {dadosFevereiro.map((item, index) => (
                            <React.Fragment key={index}>
                                <TableCell className="">
                                    {item.depositAmount === 0 
                                        ? '' 
                                        : item.depositAmount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                </TableCell>
                                <TableCell className="border-r">
                                    {item.depositWithdrawals === 0 
                                        ? '' 
                                        : item.depositWithdrawals.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                </TableCell>
                            </React.Fragment>
                        ))}
                    </TableRow>
                    <TableRow>
                        <TableCell className="border-r">Março</TableCell>
                        {dadosMarco.map((item, index) => (
                            <React.Fragment key={index}>
                                <TableCell className="">
                                    {item.depositAmount === 0 
                                        ? '' 
                                        : item.depositAmount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                </TableCell>
                                <TableCell className="border-r">
                                    {item.depositWithdrawals === 0 
                                        ? '' 
                                        : item.depositWithdrawals.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                </TableCell>
                            </React.Fragment>
                        ))}
                    </TableRow>
                    <TableRow>
                        <TableCell className="border-r">Abril</TableCell>
                        {dadosAbril.map((item, index) => (
                            <React.Fragment key={index}>
                                <TableCell className="">
                                    {item.depositAmount === 0 
                                        ? '' 
                                        : item.depositAmount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                </TableCell>
                                <TableCell className="border-r">
                                    {item.depositWithdrawals === 0 
                                        ? '' 
                                        : item.depositWithdrawals.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                </TableCell>
                            </React.Fragment>
                        ))}
                    </TableRow>
                    <TableRow>
                        <TableCell className="border-r">Maio</TableCell>
                        {dadosMaio.map((item, index) => (
                            <React.Fragment key={index}>
                                <TableCell className="">
                                    {item.depositAmount === 0 
                                        ? '' 
                                        : item.depositAmount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                </TableCell>
                                <TableCell className="border-r">
                                    {item.depositWithdrawals === 0 
                                        ? '' 
                                        : item.depositWithdrawals.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                </TableCell>
                            </React.Fragment>
                        ))}
                    </TableRow>
                    <TableRow>
                        <TableCell className="border-r">Junho</TableCell>
                        {dadosJunho.map((item, index) => (
                            <React.Fragment key={index}>
                                <TableCell className="">
                                    {item.depositAmount === 0 
                                        ? '' 
                                        : item.depositAmount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                </TableCell>
                                <TableCell className="border-r">
                                    {item.depositWithdrawals === 0 
                                        ? '' 
                                        : item.depositWithdrawals.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                </TableCell>
                            </React.Fragment>
                        ))}
                    </TableRow>
                    <TableRow>
                        <TableCell className="border-r">Julho</TableCell>
                        {dadosJulho.map((item, index) => (
                            <React.Fragment key={index}>
                                <TableCell className="">
                                    {item.depositAmount === 0 
                                        ? '' 
                                        : item.depositAmount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                </TableCell>
                                <TableCell className="border-r">
                                    {item.depositWithdrawals === 0 
                                        ? '' 
                                        : item.depositWithdrawals.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                </TableCell>
                            </React.Fragment>
                        ))}
                    </TableRow>
                    <TableRow>
                        <TableCell className="border-r">Agosto</TableCell>
                        {dadosAgosto.map((item, index) => (
                            <React.Fragment key={index}>
                                <TableCell className="">
                                    {item.depositAmount === 0 
                                        ? '' 
                                        : item.depositAmount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                </TableCell>
                                <TableCell className="border-r">
                                    {item.depositWithdrawals === 0 
                                        ? '' 
                                        : item.depositWithdrawals.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                </TableCell>
                            </React.Fragment>
                        ))}
                    </TableRow>
                    <TableRow>
                        <TableCell className="border-r">Setembro</TableCell>
                        {dadosSetembro.map((item, index) => (
                            <React.Fragment key={index}>
                                <TableCell className="">
                                    {item.depositAmount === 0 
                                        ? '' 
                                        : item.depositAmount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                </TableCell>
                                <TableCell className="border-r">
                                    {item.depositWithdrawals === 0 
                                        ? '' 
                                        : item.depositWithdrawals.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                </TableCell>
                            </React.Fragment>
                        ))}
                    </TableRow>
                    <TableRow>
                        <TableCell className="border-r">Outubro</TableCell>
                        {dadosOutubro.map((item, index) => (
                            <React.Fragment key={index}>
                                <TableCell className="">
                                    {item.depositAmount === 0 
                                        ? '' 
                                        : item.depositAmount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                </TableCell>
                                <TableCell className="border-r">
                                    {item.depositWithdrawals === 0 
                                        ? '' 
                                        : item.depositWithdrawals.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                </TableCell>
                            </React.Fragment>
                        ))}
                    </TableRow>
                    <TableRow>
                        <TableCell className="border-r">Novembro</TableCell>
                        {dadosNovembro.map((item, index) => (
                            <React.Fragment key={index}>
                                <TableCell className="">
                                    {item.depositAmount === 0 
                                        ? '' 
                                        : item.depositAmount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                </TableCell>
                                <TableCell className="border-r">
                                    {item.depositWithdrawals === 0 
                                        ? '' 
                                        : item.depositWithdrawals.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                </TableCell>
                            </React.Fragment>
                        ))}
                    </TableRow>
                    <TableRow>
                        <TableCell className="border-r">Dezembro</TableCell>
                        {dadosDezembro.map((item, index) => (
                            <React.Fragment key={index}>
                                <TableCell className="">
                                    {item.depositAmount === 0 
                                        ? '' 
                                        : item.depositAmount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                </TableCell>
                                <TableCell className="border-r">
                                    {item.depositWithdrawals === 0 
                                        ? '' 
                                        : item.depositWithdrawals.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                </TableCell>
                            </React.Fragment>
                        ))}
                    </TableRow>
                </TableBody>
            </Table>
        </Card>
    );
}
