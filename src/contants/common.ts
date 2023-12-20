const partnerList = [
  {
    url: "/images/king-food.png",
    width: "w-[304px]",
  },
  {
    url: "/images/emart.png",
    width: "w-[168px]",
  },
  {
    url: "/images/vinmart.png",
    width: "w-[183px]",
  },
  {
    url: "/images/tiki.png",
    width: "w-[83px]",
  },
  {
    url: "/images/grab.png",
    width: "w-[190px]",
  },
  {
    url: "/images/king-food.png",
    width: "w-[304px]",
  },
  {
    url: "/images/emart.png",
    width: "w-[168px]",
  },
  {
    url: "/images/vinmart.png",
    width: "w-[183px]",
  },
  {
    url: "/images/tiki.png",
    width: "w-[83px]",
  },
  {
    url: "/images/grab.png",
    width: "w-[190px]",
  },
];

const altLogo = "dao-hai-san";
const logoLoading = "/images/logo-loading.jpg";
const notFoundImage = "/images/not-image.png";

export const permissionSubject = {
  user: {
    key: "user",
    label: "Quản lí user",
  },
};

export const permissionAction = {
  CREATE: "create",
  READ: "read",
  UPDATE: "update",
  DELETE: "delete",
};

const initDrawerAddress = {
  id: "",
  open: false,
  username: "",
  phoneNumber: "",
  city: null,
  district: null,
  ward: null,
  address: "",
  isDefault: false,
};

export enum OrderStatus {
  SUCCESS = "success",
  DRAFT = "draft",
}

export enum UserStatus {
  DANGER = "danger", // Giao gấp
  WARNING = "waring", // Ko quá gấp
  NORMAL = "normal", // Lúc nào cũng được
}

export enum TransportStatus {
  PENDING = "pending",
  TRANSPORTING = "transporting",
  SUCCESS = "success",
  CANCELED = "canceled",
  RETURN = 'return',
}

export enum PaymentStatus {
  PAID = "paid",
  UNPAIND = "unpaid",
}

export enum PromotionType {
  CASH = "cash",
  PERCENTAGE = "percentage",
}

export enum Gender {
  NONE = '',
  MALE = 'male',
  FEMALE = 'female',
}

export { partnerList, altLogo, logoLoading, notFoundImage, initDrawerAddress };
