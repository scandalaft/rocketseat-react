import colors from "tailwindcss/colors"

import { 
    Card, 
    CardContent, 
    CardHeader, 
    CardTitle 
} from "@/components/ui/card";

import { 
    ResponsiveContainer, 
    PieChart, 
    Pie,
    Cell
} from "recharts"
import { BarChart } from "lucide-react";

const data = [
    { productName: 'Pepperoni', amount: 40 },
    { productName: 'Mussarela', amount: 65 },
    { productName: 'Marguerita', amount: 90 },
    { productName: 'Moda da Casa', amount: 30 },
    { productName: 'Frango Catupiry', amount: 105 },
]

const COLORS =[
    colors.sky[500],
    colors.amber[500],
    colors.violet[500],
    colors.emerald[500],
    colors.rose[500],
]

export function PopularProductsChart() {
    return (
        <Card className="col-span-3">
            <CardHeader className="pb-8">
                <div className="flex items-center justify-between">
                    <CardTitle className="text-base font-medium ">Produtos populares</CardTitle>
                    <BarChart className="w-4 h-4 text-muted-foreground" />
                </div>
            </CardHeader>

            <CardContent>
                <ResponsiveContainer width="100%" height={240}>
                    <PieChart style={{ fontSize: 12 }}>

                        <Pie data={data}
                             nameKey="product"
                             dataKey="amount" 
                             cx="50%"
                             cy="50%"
                             outerRadius={86}
                             innerRadius={64}
                             strokeWidth={2}
                             labelLine={false}
                             label={({
                               cx,
                               cy,
                               midAngle,
                               innerRadius,
                               outerRadius,
                               value,
                               index,
                             }) => {
                               const RADIAN = Math.PI / 180
                               const radius = 12 + innerRadius + (outerRadius - innerRadius)
                               const x = cx + radius * Math.cos(-midAngle * RADIAN)
                               const y = cy + radius * Math.sin(-midAngle * RADIAN)
                             
                               return (
                                 <text
                                   x={x}
                                   y={y}
                                   className="fill-muted-foreground text-xs"
                                   textAnchor={x > cx ? 'start' : 'end'}
                                   dominantBaseline="central"
                                 >
                                   {data[index].productName.length > 12
                                     ? data[index].productName.substring(0, 12).concat('...')
                                     : data[index].productName}{' '}
                                   ({value})
                                 </text>
                                )
                             }}
                        >
                            {data.map((_, index) => {
                                return <Cell 
                                        key={`cell-${index}`} 
                                        fill={COLORS[index]} 
                                        className="stroke-background hover:opacity-80"          
                            />
                                
                            })}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}