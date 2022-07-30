import { ParsedUrlQuery } from "querystring";

export interface Product {
  _createdAt: string;
  _id: string;
  details: string;
  image: {
    object;
  }[];
  name: string;
  price: number;
  slug: {
    current: string;
  };
}

export interface Banner {
  _createdAt: string;
  _id: string;
  buttonText: string;
  desc: string;
  discount: string;
  image: { object }[];
  largeText1: string;
  largeText2: string;
  midText: string;
  product: string;
  saleTime: string;
  smallText: string;
}

export interface QParams extends ParsedUrlQuery {
  slug?: string;
  lang?: Locale;
}
