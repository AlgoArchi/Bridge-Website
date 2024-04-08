"use client";

import React from "react";
import { TEInput } from "tw-elements-react";

const MemoForm = (): JSX.Element => {
  return (
    <TEInput
      type="text"
      id="memo"
      label="Memo (optional)"
      className="w-full text-white"
    ></TEInput>
  );
}

export default MemoForm
