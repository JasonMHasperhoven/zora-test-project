// import { ColorId } from "unsplash-js/methods/search/types/request";

export declare type Photo = {
  id: string
  altDescription: string
  urls: {
    full: string
    small: string
    regular: string
  }
}

export const OrderTypes = {
  Relevant: 'relevant',
  Latest: 'latest',
} as const;

export type OrderType = (typeof OrderTypes)[keyof typeof OrderTypes];

export const Colors = {
  Red: 'red',
  Orange: 'orange',
  Yellow: 'yellow',
  Green: 'green',
  Blue: 'blue',
} as const;

export type Color = (typeof Colors)[keyof typeof Colors];