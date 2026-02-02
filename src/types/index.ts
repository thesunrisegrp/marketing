export interface Leader {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface Certification {
  id: string;
  title: string;
  desc: string;
}

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export enum DivisionType {
  CHEMICALS = 'chemicals',
  TEXTILE = 'textile',
  ENGINEERING = 'engineering',
}

export interface ProductCategory {
  title: string;
  items: string[];
}

export interface DivisionData {
  id: DivisionType;
  title: string;
  description: string;
  capabilities: string[];
  image: string;
  iconName: string;
  productCategories: ProductCategory[];
}

