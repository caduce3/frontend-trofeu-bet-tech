import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { Skeleton } from "./ui/skeleton";

interface CardTotalGeralProps {
  cardTitle: string;
  totalValue: number;
  Icon: LucideIcon;
  format?: boolean; // Option to format the value
  isLoading?: boolean; // Optional prop to handle loading state
}

export function CardTotalGeral({
  cardTitle,
  totalValue,
  Icon,
  format = false,
  isLoading = false
}: CardTotalGeralProps) {
  
  const formatToBRL = (value: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
  };
  const displayValue = format ? formatToBRL(totalValue) : totalValue.toString();

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          {isLoading ? <Skeleton className="h-4 w-40"/> : cardTitle}
        </CardTitle>
        <Icon className="h-5 w-5 text-muted-foreground"/>
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">{isLoading ? <Skeleton className="h-4 w-40"/> : displayValue}</span>
        {/* <p className="text-xs text-muted-foreground">
          <span className={`text-${percentageColor}`}>{percentageChange} </span>
          em relação ao mês anterior
        </p> */}
      </CardContent>
    </Card>
  );
}
