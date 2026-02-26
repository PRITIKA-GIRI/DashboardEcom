"use client"
import { useProducts } from "@/app/hooks/useProducts";
import { CardImage } from "./_components/productCard"
import { Pagination } from "@/components/ui/pagination";
import { DynamicPagination } from "@/app/common/pagination";
import { useState } from "react";

const Products = () => {
  const { data: products, isLoading } = useProducts();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  if (isLoading) return <p className="text-white">Loading products...</p>;
  const totalPages = products ? Math.ceil(products.length / itemsPerPage) : 0;

  const displayedProducts = products?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <div className="flex flex-col gap-[28px]">

      <div className="bg-[#273142] flex justify-between p-8 rounded-2xl">
        <p className="text-[32px] font-semibold text-white">Products</p>
        <button className="bg-[#4880FF] text-white px-4 py-2 rounded-lg hover:bg-[#3a6bc2] transition-colors">
          Add Product
        </button>
      </div>

      <div className="bg-[#273142] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 rounded-2xl">
        {displayedProducts?.map((product) => (
          <CardImage key={product.id} product={product} />
        ))}
      </div>

      <div className="bg-[#273142] p-4 rounded-2xl" >
        <DynamicPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  )
}

export default Products