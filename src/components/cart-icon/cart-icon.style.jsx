import styled from "styled-components";

import { ReactComponent as FlyIcon } from '../../assets/shopping-bag.svg';

export const CartIconContainer = styled.div` 
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 10px;
`

export const ShoppingIcon = styled(FlyIcon)`
  width: 24px;
  height: 24px;
`

export const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`

  