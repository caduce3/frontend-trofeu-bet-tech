import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import colors from "tailwindcss/colors"

import {
    ResponsiveContainer,
    LineChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Line,
    Tooltip
} from 'recharts'

const data = [
    {
        name: 'Jan',
        Depositos: 4000,
        Saques: 2400
    },
    {
        name: 'Fev',
        Depositos: 3000,
        Saques: 1398
    },
    {
        name: 'Mar',
        Depositos: 2000,
        Saques: 9800
    },
    {
        name: 'Abr',
        Depositos: 2780,
        Saques: 3908
    },
    {
        name: 'Mai',
        Depositos: 1890,
        Saques: 4800
    },
    {
        name: 'Jun',
        Depositos: 2390,
        Saques: 3800
    },
    {
        name: 'Jul',
        Depositos: 3490,
        Saques: 300
    },
    {
        name: 'Ago',
        Depositos: 3490,
        Saques: 4300
    },
    {
        name: 'Set',
        Depositos: 390,
        Saques: 4300
    },
    {
        name: 'Out',
        Depositos: 34900,
        Saques: 4300
    },
    {
        name: 'Nov',
        Depositos: 3490,
        Saques: 43090
    },
    {
        name: 'Dez',
        Depositos: 34490,
        Saques: 43040
    }
]

export function GraficoDepositosSaques() {
    return (
        <Card className="col-span-6">
            <CardHeader className="flex-row items-center justify-between pb-8">
                <div className="space-y-1">
                    <CardTitle className="text-base font-medium">
                        Gráfico de depósitos e saques
                    </CardTitle>
                    <CardDescription>
                        Gráfico de depósitos e saques realizados no mês
                    </CardDescription>
                </div>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={240}>
                    <LineChart data={data} style={{fontSize: 12}}>
                        <XAxis 
                            dataKey="name"
                            axisLine={false} 
                            tickLine={false}
                            dy={10}  
                        />
                        <YAxis 
                            stroke="#888" 
                            axisLine={false} 
                            tickLine={false} 
                            width={80} 
                            tickFormatter={(value: number) => value.toLocaleString('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            })}
                        />
                        <Tooltip />
                        <Line type="linear" dataKey="Depositos" stroke={colors.emerald['400']} />
                        <Line type="linear" dataKey="Saques" stroke={colors.rose['400']} />
                    </LineChart>
                </ResponsiveContainer>

            </CardContent>
        </Card>
    )
}