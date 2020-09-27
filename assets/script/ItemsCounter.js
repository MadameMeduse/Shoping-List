import React, { useState } from "react";
import styled from "styled-components";
import FlexCenter from "theme/flexCenter";
import Button from "./atoms/Button";

const StyledWrapper = styled.div`
  background: yellow;
  ${FlexCenter()};
  width: 150px;
  height: 150px;
  margin: 0 auto;
  box-shadow: ${({ theme }) => theme.shadow};
`;

export const ItemsCounter = () => {
  const [counter, ChangeCounter] = useState(0);

  return (
    <StyledWrapper>
      <Button name="minus" onClick={() => ChangeCounter(counter - 1)}>
        {" "}
        -
      </Button>
      <Button>{counter}</Button>
      <Button onClick={() => ChangeCounter(counter + 1)}>+</Button>
    </StyledWrapper>
  );
};

export default ItemsCounter;

//smake this counter grow when adding items to list
