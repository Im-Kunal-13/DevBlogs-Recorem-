export enum QueryKeys {
  me = "me",
  videos = "videos",
}

export interface Me {
  _id: string;
  email: string;
  username: string;
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

