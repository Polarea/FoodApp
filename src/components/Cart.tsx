import React from "react";
import Menu from "./Menu";
import TapasExtras from "./TapasExtras";

interface Menu {
  imageUrl: string;
  title: string;
  description: string;
  categories: string[];
}

interface Extras {
  name: string;
  quantity: number;
}

export default function Cart() {}
