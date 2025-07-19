import { useState } from "react";
import * as S from "./styles";
import {
  ShoppingCartIcon,
  SignInIcon,
  SignOutIcon,
} from "@phosphor-icons/react";
import { Cart } from "../Cart/Cart";

export const Header: React.FC = () => {
  const [showCart, setShowCart] = useState(false);
  const isLogged = false;

  return (
    <S.StyledHeader>
      <S.Wrapper>
        <S.HeaderTitle>MyShop.</S.HeaderTitle>

        <S.ButtonsWrapper>
          <S.AuthButton isLogged={isLogged}>
            {isLogged ? "Logout" : "Login"}
            {isLogged ? <SignOutIcon /> : <SignInIcon />}
          </S.AuthButton>

          <S.CartButton onClick={() => setShowCart(!showCart)}>
            Carrinho
            <ShoppingCartIcon />
          </S.CartButton>
        </S.ButtonsWrapper>
      </S.Wrapper>

      <Cart showCart={showCart} />
    </S.StyledHeader>
  );
};
