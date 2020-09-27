import React, { useRef } from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  background: grey;
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ShapeChanger = () => {
  const MyBox = useRef(null);

  const handleShapeChange = () => {
    MyBox.current.style.borderRadius = "50%";
  };

  return (
    <StyledWrapper>
      <div className="box" ref={MyBox}></div>
      <button onClick={handleShapeChange}>Change shape</button>
    </StyledWrapper>
  );
};

export default ShapeChanger;
