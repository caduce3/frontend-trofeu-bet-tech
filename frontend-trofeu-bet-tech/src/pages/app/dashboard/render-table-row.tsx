import { TableCell, TableRow } from "@/components/ui/table";
import React from "react";

// Ajuste da função renderTableRow
export const renderTableRow = (mes: string, dadosMes: Array<{ depositAmount: number; depositWithdrawals: number }>) => (
    <TableRow key={mes}>
        <TableCell className="border-r font-semibold">{mes}</TableCell>
        {dadosMes.map((item, index) => (
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
);
