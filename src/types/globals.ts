export interface IProperty {
  title?: string;
  description?: string;
  images?: { src?: string }[];
  pricing?: { monthly: number };
  availability?: { available?: boolean; dates?: string[] };
  location?: {
    streetAddress?: string;
    district?: string;
    division?: string;
    zipCode?: string;
  };
  contact?: { name?: string; email?: string; phone?: string };
  reviews?: { user?: string; rating?: number; comment?: string }[];
  additionalDetails?: {
    size?: string;
    bedrooms?: number;
    bathrooms?: number;
    amenities?: string[];
  };
  units?: { name?: string; available?: boolean }[];
}
