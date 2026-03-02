"use client"
import { useCreateProduct, useProducts, useProductsByCategory } from "@/app/hooks/useProducts";
import { CardImage } from "./_components/productCard"
import { DynamicPagination } from "@/app/common/pagination";
import { useState } from "react";
import { AddProductModal } from "./_components/addProductModal";
import { DropdownMenuCategory } from "@/app/common/dropdown";
import { FiFilter } from "react-icons/fi";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { data: allProducts, isLoading: loadingAll } = useProducts();
  const { data: categoryProducts, isLoading: loadingCategory } =
    useProductsByCategory(selectedCategory ?? "");

  const products = selectedCategory ? categoryProducts : allProducts;
  const isLoading = selectedCategory ? loadingCategory : loadingAll;
  const { mutate: createProduct, isPending } = useCreateProduct();

  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const itemsPerPage = 8;

  if (isLoading) return <p className="text-white">Loading products...</p>;
  const totalPages = products ? Math.ceil(products.length / itemsPerPage) : 0;

  const displayedProducts = products?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  
  return (
    <div className="flex flex-col gap-[28px]">

      <div className="bg-[#273142] flex justify-between p-4 lg:p-8 rounded-2xl gap-2">
        <p className="text-[24px] lg:text-[28px] font-semibold text-white">Products</p>
        <button
          onClick={() => setIsModalOpen(true)}
         className="bg-[#4880FF] text-white px-4 py-2 rounded-lg hover:bg-[#3a6bc2] transition-colors">
          Add Product
        </button>
      </div>
      <div className="flex flex-row-reverse items-center gap-3">
        <DropdownMenuCategory
          selectedCategory={selectedCategory}
          onSelectCategory={(cat) => {
            setSelectedCategory(cat);
            setCurrentPage(1); 
          }}
        />
        <FiFilter size={25} className="text-white mb-2" />
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
      {isModalOpen && (
        <AddProductModal
          onClose={() => setIsModalOpen(false)}
          onSubmit={(data) => {
            createProduct(data);
            setIsModalOpen(false);
          }}
          loading={isPending}
        />
      )}
    </div>
  )
}

export default Products