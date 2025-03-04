import { db } from "@/lib/prisma";
import { notFound } from "next/navigation";
import ProductsHeader from "./components/products-header";

interface ProductsPageProps {
  params: Promise<{ slug: string; productId: string }>;
}

const ProductPage = async ({ params }: ProductsPageProps) => {
  const { slug, productId } = await params;

  const product = await db.product.findUnique({ where: { id: productId } });
  if (!product) {
    return notFound();
  }

  return <ProductsHeader product={product} />;
};

export default ProductPage;
