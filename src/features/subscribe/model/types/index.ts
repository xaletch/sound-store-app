export type TariffData = {
  name: 'start' | 'ultra';
  credit: string;
  credit_text: string;
  price: number;
  price_text: string;
  discount: number;
  select: boolean;
  Id: number;
  duration: 1 | 12;
};