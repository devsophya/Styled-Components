import * as S from "./styles";
import { ShoppingCart, SignIn } from "@phosphor-icons/react";

export const Header: React.FC = () => {
  return (
    <S.StyledHeader>
      <S.Wrapper>
        <S.HeaderTitle>MyShop.</S.HeaderTitle>

        <S.ButtonsWrapper>
          <S.AuthButton>
            Login
            <SignIn />
          </S.AuthButton>
          <S.CartButton>
            Carrinho
            <ShoppingCart />
          </S.CartButton>
        </S.ButtonsWrapper>
      </S.Wrapper>
    </S.StyledHeader>
  );
};
