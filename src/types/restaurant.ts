export type DietaryType = 'non-veg' | 'veg';

export interface MenuItem {
  id: string;
  name: string;
  arabicName?: string;
  category: 'shawaya' | 'shawarma' | 'grills' | 'rice-meals' | 'burgers' | 'snacks' | 'drinks' | 'special';
  description: string;
  price: number;
  currency: string;
  dietary: DietaryType;
  image: string;
  isPopular?: boolean;
  isSpecial?: boolean;
  spicyLevel?: 0 | 1 | 2 | 3;
  calories?: string;
  portion?: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  dishRecommended?: string;
  verified?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
  selectedSpice?: 'mild' | 'medium' | 'spicy';
  specialInstructions?: string;
}

export interface RestaurantInfo {
  name: string;
  tagline: string;
  subheadline: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  whatsappDisplay: string;
  email: string;
  address: string;
  addressDetails: string;
  city: string;
  openingHours: string;
  googleMapsEmbedUrl: string;
  socials: {
    instagram: string;
    facebook: string;
    whatsapp: string;
    youtube: string;
  };
}
