"use client";

import { useProducts } from "@/app/hooks/useProducts";
import { useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function SalesLineChart() {
  const { data: products, isLoading } = useProducts();

  // Generate monthly sales data
  const monthlySales = useMemo(() => {
    if (!products) return [];

    const sales: { month: string; sales: number }[] = [];
    const now = new Date();

    for (let i = 11; i >= 0; i--) {
      const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const monthLabel = date.toLocaleString("default", { month: "short", year: "2-digit" }); // e.g., "Feb 26"
      const totalSales = products.reduce(
        (acc, _) => acc + Math.floor(Math.random() * 50 + 10),
        0
      );
      sales.push({ month: monthLabel, sales: totalSales });
    }

    return sales;
  }, [products]);

  if (isLoading) return <p className="text-white">Loading sales data...</p>;

  return (
    <div className="bg-[#273142] p-6 rounded-2xl">
      <h2 className="text-white text-xl font-bold mb-4">Monthly Sales</h2>
      <ResponsiveContainer width="100%" height={450}>
        <LineChart data={monthlySales}>
          <XAxis dataKey="month" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip
            contentStyle={{ backgroundColor: "#1F2937", border: "none", color: "#fff" }}
            itemStyle={{ color: "#fff" }}
          />
          <Line
            type="monotone"
            dataKey="sales"
            stroke="#4880FF"
            strokeWidth={3}
            dot={{ r: 4, fill: "#4880FF" }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}