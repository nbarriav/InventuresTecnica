import React from 'react';
import * as S from './styles';
import shopping_cart from '../../../assets/icons/shopping_cart.svg';
const Medicine = ({ name, concentration, imagesUrl }) => {
  return (
    <S.MedicineContainer>
      <S.ImageContainer>
        <S.Image src={imagesUrl} />
      </S.ImageContainer>
      <S.InfoContainer>
        <S.Name> {name} </S.Name>
        <S.Dose> {concentration} </S.Dose>
        <S.Stock>Quedan 5 comprimidos para 5 días</S.Stock>
      </S.InfoContainer>
      <S.CartDiv>
        <S.Cart src={shopping_cart} />
      </S.CartDiv>
    </S.MedicineContainer>
  );
};
export default Medicine;
