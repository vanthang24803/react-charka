type Size = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

type Profile = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar: string;
  role: string;
};

interface Product {
  id: string;
  name: string;
  thumbnail: string;
  rangePrice: string;
  publiced: boolean;
  createAt: string;
  updateAt: string;
  options: Option[];
  tag: Tag;
}

interface Tag {
  id: string;
  name: string;
  productId: string;
  createAt: string;
  updateAt: string;
}

interface Option {
  id: string;
  name: string;
  sale: number;
  price: number;
  size: string;
  createAt: string;
  updateAt: string;
}
