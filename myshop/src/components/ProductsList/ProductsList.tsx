import { products } from "../../data/products";
import { ProductCard } from "../ProductCard/ProductCard";
import * as S from "./styles";

export const ProductsList: React.FC = () => {
  return (
    <S.Container>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </S.Container>
  );
};
