import styled from "styled-components";

export const CheckoutItemContainer = styled.div` 
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

`
export const Name = styled.span` 
  width: 23%;
  padding: 20px;
`
export const Quantity = styled.span` 
  width: 23%;
  display: flex;
`
export const Price = styled.span` 
  width: 23%;
`
export const Value = styled.span` 
  margin: 0 10px;
  align-self: flex-end;
`

export const Arrow = styled.div` 
  cursor: pointer;
  align-self: flex-end;
`
export const ImageContainer = styled.span` 
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`
export const RemoveButtonContainer = styled.div`
  padding-left: 12px;
  cursor: pointer; 
`