"use client";
import { useState } from "react";
import { Product } from "@/app/types/product.types";

type Props = {
    onClose: () => void;
    onSubmit: (data: Omit<Product, "id">) => void;
    loading: boolean;
};

export const AddProductModal = ({ onClose, onSubmit, loading }: Props) => {
    const [form, setForm] = useState<Omit<Product, "id">>({
        title: "",
        price: 0,
        description: "",
        category: "",
        image: "",
        rating: {
            rate: 0,
            count: 0,
        },
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({
            ...form,
            price: Number(form.price),
            rating: {
                rate: 0,
                count: 0,
            },
        });
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
            <div className="bg-[#273142] p-8 rounded-xl w-[500px] text-white">
                <h2 className="text-2xl font-semibold mb-6">Add New Product</h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        name="title"
                        placeholder="Title"
                        value={form.title}
                        onChange={handleChange}
                        className="p-2 rounded bg-[#1e2732]"
                        required
                    />

                    <input
                        name="price"
                        type="number"
                        placeholder="Price"
                        value={form.price}
                        onChange={handleChange}
                        className="p-2 rounded bg-[#1e2732]"
                        required
                    />

                    <input
                        name="category"
                        placeholder="Category"
                        value={form.category}
                        onChange={handleChange}
                        className="p-2 rounded bg-[#1e2732]"
                        required
                    />

                    <input
                        name="image"
                        placeholder="Image URL"
                        value={form.image}
                        onChange={handleChange}
                        className="p-2 rounded bg-[#1e2732]"
                        required
                    />

                    <textarea
                        name="description"
                        placeholder="Description"
                        value={form.description}
                        onChange={handleChange}
                        className="p-2 rounded bg-[#1e2732]"
                        required
                    />

                    <div className="flex justify-end gap-3 mt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-500 rounded"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            disabled={loading}
                            className="px-4 py-2 bg-[#4880FF] rounded hover:bg-[#3a6bc2]"
                        >
                            {loading ? "Adding..." : "Add Product"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};