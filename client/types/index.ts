export enum QueryKeys {
  me = "me",
  videos = "videos",
}

export interface User {
  _id: string;
  email: string;
  username: string;
  pic: string;
}

export interface Blog {
  _id: string;
  email: string;
  username: string;
  coverImage: string;
  description: string;
  categories: string[];
  owner: User;
  title: string;
  timeCreated: string;
  likes: User[];
}

export interface Video {
  _id: string;
  owner: string;
  published: boolean;
  videoId: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  extension: string;
  description: string;
  title: string;
}

export interface EmployeeModel {
  EmployeeId?: number;
  CustomerName?: string;
  CustomerEmail?: string;
  CustomerImage?: string;
  Department?: string;
  Status?: string;
  Phone?: string;
  Role?: string;
  Location?: string;
}

export interface EmployeeFormData {
  firstname: boolean | string;
  lastname: boolean | string;
  email: boolean | string;
  phone: boolean | string;
  password: boolean | string;
  confirmPassword: boolean | string;
  mailAddress: boolean | string;
}
