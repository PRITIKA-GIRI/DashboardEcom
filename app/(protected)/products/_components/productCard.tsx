"use client"

import { Product } from "@/app/types/product.types";
import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

interface CardImageProps {
    product: Product;
}

export function CardImage({ product }: CardImageProps) {

    return (
        <Card className="relative mx-auto w-full max-w-sm p-2 bg-gray-600">


            {/* Product image */}
            <img
                src={product?.image}
                alt={product?.title}
                className="relative z-0 w-full h-40 object-contain bg-white rounded-lg"
            />

            <CardHeader >
                <CardTitle className="text-white text-md">{product?.title}</CardTitle>
            </CardHeader>

            <CardFooter className="flex flex-col gap-2">
                <span className="text-white font-bold text-md">${product?.price}</span>
                <span className="text-yellow-400 font-semibold">
                    {product?.rating.rate} ★ ({product?.rating.count})
                </span>
                <Button className="w-full">View Product</Button>
            </CardFooter>
        </Card>
    )
}
