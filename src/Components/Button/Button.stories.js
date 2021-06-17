import React from "react";
import Button from "./Button";
export default {
    title: "form/Button",
    component: Button,
};

export const Primary = () => <Button variant="primary">Primary </Button>;
export const Next = () => <Button variant="next">Next </Button>;
export const Previous = () => <Button variant="previous">Previous </Button>;
