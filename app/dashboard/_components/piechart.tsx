"use client";
import { useProducts } from "@/app/hooks/useProducts";
import { useMemo } from "react";
import {
    PieChart,
    Pie,
    Cell,
    Label,
    ResponsiveContainer,
    Tooltip,
} from "recharts";

export default function CategoryPieChart() {
    const { data: products, isLoading } = useProducts();

    const categoryData = useMemo(() => {
        if (!products) return [];

        const counts: Record<string, number> = {};
        products.forEach((p) => {
            counts[p.category] = (counts[p.category] || 0) + 1;
        });

        return Object.entries(counts).map(([category, value]) => ({
            category,
            value,
        }));
    }, [products]);

    if (isLoading) return <p>Loading...</p>;

    const COLORS = ["#4880FF", "#FF9F40", "#4BC0C0", "#FF6384"];

    const total = categoryData.reduce((acc, item) => acc + item.value, 0);

    return (
        <div className="bg-[#273142] p-6 rounded-2xl">
            <h2 className="text-white text-xl font-bold mb-4">
                Products by Category
            </h2>

            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                        data={categoryData}
                        dataKey="value"
                        nameKey="category"
                        innerRadius="55%"
                        outerRadius="100%"
                        label={({ percent }) => `${(percent * 100).toFixed(1)}%`}
                        labelLine={false}
                    >
                        {categoryData.map((entry, index) => (
                            <Cell key={index} fill={COLORS[index % COLORS.length]} />
                        ))}
                        <Label
                            position="center"
                            content={() => (
                                <text
                                    x="50%"
                                    y="50%"
                                    textAnchor="middle"
                                    dominantBaseline="middle"
                                    fill="white"
                                    className="text-lg font-bold"
                                >
                                    Total: {total}
                                </text>
                            )}
                        />
                    </Pie>

                    {/* Tooltip for PieChart */}
                    <Tooltip
                        formatter={(value: number, name: string, props) => [
                            value,
                            name,
                        ]}
                        contentStyle={{
                            backgroundColor: "#1F2937",
                            border: "none",
                            borderRadius: "12px",
                        }}
                        labelStyle={{ color: "#ffffff" }}   
                        itemStyle={{ color: "#ffffff" }}
                    />
                </PieChart>
            </ResponsiveContainer>

            {/* Legend */}
            <div className="mt-4 grid grid-cols-2 gap-4">
                {categoryData.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-white">
                        <span
                            className="h-4 w-4 rounded"
                            style={{ backgroundColor: COLORS[index % COLORS.length] }}
                        />
                        {item.category}
                    </div>
                ))}
            </div>
        </div>
    );
}