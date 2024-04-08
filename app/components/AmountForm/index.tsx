"use client";

import React from "react";
import { TEInput } from "tw-elements-react";

const AmountForm = (): JSX.Element => {
  return (
    <TEInput
      type="number"
      id="amount"
      label="Amount"
      className="w-full text-white"
    ></TEInput>
  );
}

export default AmountForm
