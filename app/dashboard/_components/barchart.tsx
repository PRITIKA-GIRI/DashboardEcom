"use client";

import { useProducts } from "@/app/hooks/useProducts";
import { useMemo } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from "recharts";

export default function CategoryHorizontalBarChart() {
    const { data: products, isLoading } = useProducts();

    // Prepare data for the horizontal bar chart
    const categoryData = useMemo(() => {
        if (!products) return [];

        const counts: Record<string, { count: number; revenue: number }> = {};

        products.forEach((p) => {
            if (!counts[p.category]) counts[p.category] = { count: 0, revenue: 0 };
            counts[p.category].count += 1;
            counts[p.category].revenue += p.price;
        });

        return Object.entries(counts).map(([category, { count, revenue }]) => ({
            category,
            count,
            revenue: parseFloat(revenue.toFixed(2)),
        }));
    }, [products]);

    if (isLoading) return <p>Loading...</p>;

    return (
        <div className="bg-[#273142] p-6 rounded-2xl">
            <h2 className="text-[white] text-xl font-bold mb-4">
                Products / Revenue per Category
            </h2>

            <ResponsiveContainer width="100%" height={350}>
                <BarChart
                    data={categoryData}
                    layout="vertical"
                    margin={{ top: 10, right: 30, left: 30, bottom: 5 }}
                >
                    <XAxis type="number" stroke="#fff" />
                    <YAxis type="category" dataKey="category" stroke="#fff" />
                    <Tooltip
                        contentStyle={{ backgroundColor: "#1F2937", border: "none", color: "#fff" }}
                    />
                    {/* Bar for number of products */}
                    <Bar dataKey="count" fill="#4880FF" name="Products" barSize={20} />
                    {/* Bar for revenue */}
                    <Bar dataKey="revenue" fill="#FF9F40" name="Revenue ($)" barSize={20} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}