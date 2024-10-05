import { Department } from './department';

export interface User {
  id?: number;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  email?: string;
  password?: string;
  status?: boolean;
  department?: Department;
  departmentId?: number;
  createdAt: Date;
  updatedAt: Date;
}
