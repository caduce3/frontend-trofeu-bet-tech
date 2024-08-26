import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wallet } from "lucide-react";

export function CardTotalDepositosYear() {
    return (
        <Card>
            <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-base font-semibold">
                    Total de depositos no ano
                </CardTitle>
                <Wallet className="h-5 w-5 text-muted-foreground"/>
            </CardHeader>
            <CardContent className="space-y-1">
                <span className="text-2xl font-bold tracking-tight">R$ 15.000,96</span>
                <p className="text-xs text-muted-foreground">
                    <span className="text-emerald-500 dark:text-emerald-400">+2% </span>
                    em relação ao ano anterior
                </p>
            </CardContent>
        </Card>
    )
}