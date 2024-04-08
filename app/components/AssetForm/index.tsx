"use client";

import React from "react";
import { TEInput } from "tw-elements-react";

const AssetForm = (): JSX.Element => {
  return (
    <TEInput
      type="text"
      id="asset"
      label="Asset"
      className="w-full text-white"
    ></TEInput>
  );
}

export default AssetForm
