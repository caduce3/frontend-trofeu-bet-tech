import * as React from "react";
import { format } from "date-fns";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";

interface DatePickerWithRangeProps {
  className?: string;
  onDateRangeChange?: (range: { from: Date; to: Date }) => void;
}

export function DatePickerWithRange({
  className,
  onDateRangeChange,
}: DatePickerWithRangeProps) {
  const [dateRange, setDateRange] = React.useState<{ from: Date; to: Date }>({
    from: new Date(2024, 0, 1), // Default start date
    to: new Date(2024, 0, 31),   // Default end date
  });

  const handleDateChange = (range: DateRange | undefined) => {
    if (range && range.from && range.to) {
      const newRange = { from: range.from, to: range.to };
      setDateRange(newRange);
      if (onDateRangeChange) {
        onDateRangeChange(newRange);
      }
    } else {
      const defaultRange = {
        from: new Date(2024, 0, 1), // Default start date
        to: new Date(2024, 0, 31),   // Default end date
      };
      setDateRange(defaultRange);
      if (onDateRangeChange) {
        onDateRangeChange(defaultRange);
      }
    }
  };

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-full text-left font-normal",
              !dateRange && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {dateRange.from ? (
              dateRange.to ? (
                <>
                  {format(dateRange.from, "LLL dd, y")} -{" "}
                  {format(dateRange.to, "LLL dd, y")}
                </>
              ) : (
                format(dateRange.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={dateRange.from}
            selected={dateRange}
            onSelect={handleDateChange}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
