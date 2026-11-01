export type PageRoute = 
  | 'home' 
  | 'about' 
  | 'destinations' 
  | 'packages' 
  | 'experiences' 
  | 'bespoke' 
  | 'gallery' 
  | 'contact';

export interface ItineraryDay {
  day: number;
  title: string;
  location: string;
  description: string;
  meals: string;
  accommodation: string;
}

export interface SafariPackage {
  id: string;
  title: string;
  subtitle: string;
  destination: string;
  country: 'Kenya' | 'Tanzania' | 'Combined' | 'Uganda';
  durationDays: number;
  durationText: string;
  category: 'Luxury' | 'Wildlife Photography' | 'Family' | 'Honeymoon' | 'Migration' | 'Adventure' | 'Budget' | 'Private';
  categoryLabel: string;
  featuredImage: string;
  indicativePrice: string; // e.g. "From $2,850 per person"
  priceNote: string;
  shortDescription: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: ItineraryDay[];
  groupSize: string;
  bestMonths: string;
  featured?: boolean;
}

export interface Destination {
  id: string;
  name: string;
  country: 'Kenya' | 'Tanzania' | 'Uganda';
  tagline: string;
  featuredImage: string;
  description: string;
  wildlifeHighlights: string[];
  bestTimeToVisit: string;
  suggestedActivities: string[];
  altitude: string;
  landscapeType: string;
  popularPackages: string[]; // package IDs
}

export interface Experience {
  id: string;
  title: string;
  tagline: string;
  category: string;
  image: string;
  description: string;
  bestLocations: string[];
  recommendedDuration: string;
  suitableFor: string;
  keyHighlights: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'wildlife' | 'landscapes' | 'vehicles' | 'camps' | 'culture';
  categoryLabel: string;
  image: string;
  location: string;
  caption: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  country: string;
  safariTrip: string;
  date: string;
  rating: number;
  quote: string;
  avatarText: string;
}

export interface BookingEnquiry {
  id?: string;
  createdAt?: string;
  fullName: string;
  email: string;
  phoneWhatsapp: string;
  countryOfResidence: string;
  preferredDestination: string;
  packageId?: string;
  packageTitle?: string;
  travelStartDate: string;
  travelEndDate?: string;
  adultsCount: number;
  childrenCount: number;
  accommodationTier: 'Luxury Safari Lodges' | 'Mid-Range Tented Camps' | 'Standard / Budget Friendly' | 'Private Ultra-Luxury Villas';
  estimatedBudget: string;
  travelStyle: string;
  specialRequirements: string;
  source: 'direct_modal' | 'package_page' | 'bespoke_planner' | 'contact_page';
}
