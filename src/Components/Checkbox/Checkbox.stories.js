import React from "react";
import CustomCheck from "./Checkbox";

export default {
    title: "form/Input/Custom Checkbox",
    component: CustomCheck,
};

export const Square = () => <CustomCheck variant="square"></CustomCheck>;
export const Circular = () => <CustomCheck variant="circular"></CustomCheck>;
