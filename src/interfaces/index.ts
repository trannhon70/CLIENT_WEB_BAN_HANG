export interface IRole {
  id: number;
  name: string;
}

export interface IUser {
  id: number;
  fullname: string;
  email: string;
  phoneNumber: string;
  password: string;
  avatar: string;
  address: string;
  status: number;

  created_at: string;
  updated_at: string;
  role: IRole;
}

export interface ICategory {
  id: number;
  name: string;
  slug: string;
  content: string;
  isShow: boolean;
  created_at: string;
  updated_at: string;
  parent: any;
  children: any[];
  product?: IProduct[];
  products?: IProduct[];
}

export interface IProduct {
  id: number;
  name: string;
  slug: string;
  description: string;
  status: number;
  fakePrice: number;
  created_at: string;
  updated_at: string;
  category: ICategory[];
  bestSeller: boolean;
  price: {
    id: number;
    price: number;
    fakePrice: number;
    unit: {
      id: number;
      name: string;
    };
  }[];
  file: any[];
  detail: {
    id: number;
    liked: number;
    view: number;
    rated: number;
    ordered: number;
    parameter: any[];
    productId: number;
    created_at: string;
    updated_at: string;
  };
  popularity: number;
}

export interface IAddCartItem {
  product: number;
  unit: number;
  quantity: number;
  note: string;
}

export interface ICartItem {
  id: number;
  created_at: string;
  note: string;
  product: IProduct;
  quantity: number;
  unit: number;
  updated_at: string;
  userId: number;
}

export interface IAddress {
  id: number;
  username: any;
  phoneNumber: any;
  city: any;
  district: any;
  ward: any;
  address: string;
  isDefault: boolean;
}

export interface IPromotion {
  id: number;
  name: string;
  amount: number;
  type: string;
  availableDate: string;
  minimumBill: number;
  createdAt: string;
  updatedAt: string;
}

export interface ITransport {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface IOrderItem {
  product: any;
  unit: number;
  quantity: number;
  price: number;
  note: string;
}

export interface ICreateDraftOrder {
  userRecieveDate: Date;
  product: IOrderItem[];
  userStatus: string;
  note: string;
  totalPrice: number;
}

export interface IOrder {
  id: number;
  user: number;
  note: string;
  code: string;
  status: string;
  transportPrice: number;
  userRecieveDate: string;
  userStatus: string;
  promotionId: string;
  created_at: string;
  updated_at: string;
  orderItems: IOrderItem[];
  orderItem?: IOrderItem[];
  totalPrice: number;
  address: string;
  discount: number;
  basePrice: number;
  paymentStatus: string;
  transportStatus: string;
}

export interface IPlaceOrder {
  promotionId: number[];
  transportationId: number;
  transportationPrice: number;
  address: string;
  discount: number;
}
