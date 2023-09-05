import React from "react";

export interface IMenuText {
    id: number;
    name: string;
    path: string;
    icon: React.ReactNode;
    children?: Array<IMenuText>;
}