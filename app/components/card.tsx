import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import { IconType } from 'react-icons'
import { FaArrowUp, FaArrowDown } from 'react-icons/fa6'
interface SimpleCardProps {
    title: string;
    description: string;
    icon: IconType;
    iconBg?: string;
    trendValue?: number;     // Positive = up, Negative = down
    trendText?: string;      // e.g., "from last week"
    className?: string;
}

export const SimpleCard = ({
    title,
    description,
    icon: Icon,
    iconBg = "#FACC15",
    trendValue,
    trendText,
    className = "",
}: SimpleCardProps) => {

    const isUp = trendValue !== undefined && trendValue >= 0;

    return (
        <Card className={`bg-[#273142] relative text-[16px] text-white  overflow-hidden ${className}`}>

            {/* Header */}
            <CardHeader>
                <div className="flex flex-col gap-4">
                    <CardDescription>{description}</CardDescription>
                    <CardTitle className="text-[20px]">{title}</CardTitle>
                </div>
            </CardHeader>

            {/* Icon */}
            <div
                className="absolute right-6 w-[60px] h-[60px] flex justify-center items-center rounded-4xl"
                style={{ backgroundColor: iconBg }}
            >
                <Icon size={32} className="text-white" />
            </div>

            {/* Footer / Trend */}
            {trendValue !== undefined && (
                <CardContent>
                    <div className="flex items-center gap-2 text-sm font-medium">
                        {/* Icon */}
                        {isUp ? (
                            <FaArrowUp className="text-green-500 w-5 h-5" />
                        ) : (
                            <FaArrowDown className="text-red-500 w-5 h-5" />
                        )}

                        {/* Value */}
                        <span className={`font-bold ${isUp ? "text-green-500" : "text-red-500"}`}>
                            {Math.abs(trendValue)}%
                        </span>

                        {/* Remaining text */}
                        <span className="text-gray-400">{trendText}</span>
                    </div>
                </CardContent>
            )}

        </Card>
    )
}