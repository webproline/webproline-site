export type BusinessSector = 
  | 'barbershop' 
  | 'clinic' 
  | 'restaurant' 
  | 'retail' 
  | 'industry_sme';

export interface SimulatorService {
  id: string;
  name: string;
  duration: string;
  price: string;
  description: string;
  popular?: boolean;
}

export interface SimulatorStaff {
  id: string;
  name: string;
  role: string;
  experience: string;
  initials: string;
  rating: string;
}

export interface SimulatorPreset {
  id: BusinessSector;
  businessName: string;
  businessTag: string;
  category: string;
  address: string;
  accentColor: string;
  services: SimulatorService[];
  staff: SimulatorStaff[];
  availableSlots: string[];
}

export interface BookingState {
  presetId: BusinessSector;
  serviceId: string;
  staffId: string;
  date: string;
  time: string;
  clientName: string;
  clientPhone: string;
  confirmed: boolean;
}

export interface SectorDiagnostic {
  id: BusinessSector;
  title: string;
  subtitle: string;
  iconName: string;
  recommendedSolution: string;
  idealFor: string;
  timeSavedWeeklyHours: number;
  revenueBoostPercent: number;
  keyBenefits: string[];
  techStack: string[];
}
