import ProductsPage from "./Products";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  // console.log(category);
  return <ProductsPage category={category} />;
}
