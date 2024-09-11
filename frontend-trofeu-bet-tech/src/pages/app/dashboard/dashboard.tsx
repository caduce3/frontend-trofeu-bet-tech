import { Helmet } from "react-helmet-async";
import {  GraficoLtv } from "./grafico-ltv-jogadores";
import { useAuthRedirect } from "@/middlewares/authRedirect";
import { GraficoLtvDepositos } from "./grafico-ltv-depositos";
// import { GraficoTicketMedio } from "./grafico-ticket-medio";


export function Dashboard(){

    const token = useAuthRedirect();

    if (!token) {
        return null;
    }

    return (
        <>
            <Helmet title="Dashboard"/>
            <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

                <div className="gap-4">
                    <GraficoLtv />
                </div>
                <div className="gap-4">
                    <GraficoLtvDepositos />
                </div>
                {/* <div className="gap-4">
                    <GraficoTicketMedio />
                </div> */}

            </div>
        </>
    )
}