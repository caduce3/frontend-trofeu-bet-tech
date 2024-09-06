import { Helmet } from "react-helmet-async";
import {  GraficoLtv } from "./grafico-ltv";
import { useAuthRedirect } from "@/middlewares/authRedirect";


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

            </div>
        </>
    )
}