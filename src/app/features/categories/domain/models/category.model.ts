import { CategoryStatus } from "../enums/category-status.enum";

export interface Category {
  id: string;
  code: string;
  name: string;
  description?: string;
  status: CategoryStatus;
}