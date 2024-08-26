import { Helmet } from "react-helmet-async";
import { CardTotalDepositosMonth } from "./card-total-deposito-month";
import { CardTotalRetiradasMonth } from "./card-total-retiradas-month";
import { CardTotalDepositosYear } from "./card-total-depositos-year";
import { CardTotalRetiradasYear } from "./card-total-retiradas-year";


export function Dashboard(){
    return (
        <>
            <Helmet title="Dashboard"/>
            <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

                <div className="grid grid-cols-4 gap-4">
                    <CardTotalDepositosMonth />
                    <CardTotalRetiradasMonth />
                    <CardTotalDepositosYear />
                    <CardTotalRetiradasYear />
                </div>

            </div>
        </>
    )
}