import {useEffect, useState} from "react";
import {categoriesModelData, HomeRouteLoaderData, productsModelData} from "../providers/loaders/homeLoader.ts";
import {useLoaderData} from "react-router-dom";
import {buildProductsCard} from "../common/mockTools.ts";
import Products from "../components/products/Products.tsx";

function Home() {
  const data = useLoaderData() as HomeRouteLoaderData;
  const [categories, setCategories] = useState<categoriesModelData[]>([]);
  const [products, setProducts] = useState<productsModelData[]>([]);
  useEffect(() => {
    if (categories.length === 0 && data.categories.length > 0) {
      setCategories(data.categories);
    }
    if (products.length === 0 && data.categories.length > 0 && data.products.length > 0) {
      setProducts(buildProductsCard(data.categories, data.products));
    }
  }, [
    products,
    setProducts,
    categories,
    setCategories,
    data]);

  return (<>
      <Products items={products} categories={categories.map(c => c.name)}/>
    </>
  )
}

export default Home;