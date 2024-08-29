import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react"; // Certifique-se de importar o tipo correto

interface CardTotalGeralProps {
  cardTitle: string;
  totalValue: number;
  Icon: LucideIcon;
  format?: boolean; // Adiciona uma opção para formatar o valor
}

export function CardTotalGeral({ cardTitle, totalValue, Icon, format = false }: CardTotalGeralProps) {
  
  const formatToBRL = (value: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
  };
  const displayValue = format ? formatToBRL(totalValue) : totalValue.toString();

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          {cardTitle}
        </CardTitle>
        <Icon className="h-5 w-5 text-muted-foreground"/>
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">{displayValue}</span>
        {/* <p className="text-xs text-muted-foreground">
          <span className={`text-${percentageColor}`}>{percentageChange} </span>
          em relação ao mês anterior
        </p> */}
      </CardContent>
    </Card>
  );
}
