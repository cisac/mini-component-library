/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  large: {
    "--var-height": "24px",
    "--var-padding": "4px",
    "--var-radius": "8px",
  },
  medium: {
    "--var-height": "12px",
    "--var-radius": "4px",
  },
  small: {
    "--var-height": "8px",
    "--var-radius": "4px",
  },
};

const ProgressBar = ({ value, size }) => {
  const currentSize = SIZES[size];
  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={{ ...currentSize }}
    >
      <ProgressValue value={value} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  --var-height: 12px;
  --var-padding: 0;
  --var-radius: 4px;

  height: var(--var-height);
  padding: var(--var-padding);
  border-radius: var(--var-radius);

  background-color: ${COLORS.transparentGray15};

  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const ProgressValue = styled.div`
  width: ${({ value }) => `${value}%`};
  height: 100%;

  border-radius: ${({ value }) =>
    value < 99 ? "4px 0px 0px 4px" : "4px 4px 4px 4px"};

  background-color: ${COLORS.primary};
`;

export default ProgressBar;
