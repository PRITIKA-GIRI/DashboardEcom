"use client"

import { useDeleteProduct, useUpdateProduct } from "@/app/hooks/useProducts";
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
import { DeleteIcon } from "lucide-react";
import { FaTrash } from "react-icons/fa6";
import { FiDelete, FiEdit } from "react-icons/fi";

interface CardImageProps {
    product: Product;
}

export function CardImage({ product }: CardImageProps) {
    const { mutate: deleteProduct, isPending: isDeleting } =
        useDeleteProduct();

    const { mutate: updateProduct, isPending: isUpdating } =
        useUpdateProduct();

    const handleDelete = () => {
        deleteProduct(product.id);
    };

    const handleEdit = () => {
        updateProduct({
            id: product.id,
            data: {
                title: product.title + " (Updated)",
            },
        });
    };
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
                <div className="flex gap-5">
                    <Button
                        onClick={handleEdit}
                        disabled={isUpdating}><FiEdit className="mx-2 text-blue-300" />
                    </Button>

                    <Button
                        onClick={handleDelete}
                        disabled={isDeleting} >
                        <FaTrash className="mx-2 text-red-600" />
                    </Button>
                </div>

            </CardFooter>
        </Card>
    )
}
