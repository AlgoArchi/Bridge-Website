"use client";

import React from "react";
import { TEInput } from "tw-elements-react";

const AddressForm = (): JSX.Element => {
  return (
    <TEInput
      type="text"
      id="address"
      label="Destination Address"
      className="w-full text-white"
    ></TEInput>
  );
}

export default AddressForm
