import colors from "tailwindcss/colors"

import { 
    Card, 
    CardContent, 
    CardDescription, 
    CardHeader, 
    CardTitle 
} from "@/components/ui/card";

import { 
    ResponsiveContainer, 
    LineChart, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Line
} from "recharts"

const data = [
    { date: '06/08', revenue: 940 },
    { date: '07/08', revenue: 1130 },
    { date: '08/08', revenue: 335 },
    { date: '09/08', revenue: 690 },
    { date: '10/08', revenue: 915 },
    { date: '11/08', revenue: 1070 },
    { date: '12/08', revenue: 1260 },
]

export function RevenueChart() {
    return (
        <Card className="col-span-6">
            <CardHeader className="flex-row items-center justify-between pb-8">
                <div className="space-y-1">
                    <CardTitle className="text-base font-medium ">Receita no período</CardTitle>
                    <CardDescription>Receita diária no período</CardDescription>
                </div>
            </CardHeader>

            <CardContent>
                <ResponsiveContainer width="100%" height={240}>
                    <LineChart data={data} style={{ fontSize: 12 }}>
                        <XAxis 
                            dataKey="date" 
                            axisLine={false} 
                            tickLine={false}
                            dy={16} />

                        <YAxis 
                            stroke="#888" 
                            axisLine={false} 
                            tickLine={false} 
                            width={80}
                            tickFormatter={(value: number) => 
                                value.toLocaleString('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL', 
                                })
                            } 
                        />

                        <CartesianGrid vertical={false} className="stroke-muted" />

                        <Line 
                            type="linear" 
                            strokeWidth={2} 
                            dataKey="revenue" 
                            stroke={colors['violet']['500']} 
                        />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}