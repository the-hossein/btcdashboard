import React from "react";

export interface IMenuText {
    id: number;
    name: string;
    unid: number;
    path: string;
    icon: React.ReactNode;
    children?: IMenuText[];
}

export interface IContentTypes {
    intId: number;
    title: string;
}