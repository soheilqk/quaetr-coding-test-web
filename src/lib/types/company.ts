export type FiscalPeriod = "Q1" | "Q2" | "Q3" | "Q4";

export interface CompanyEvent {
  eventId: number;
  eventTitle: string;
  eventDate: string;
  fiscalPeriod: FiscalPeriod;
  fiscalYear: string;
  reportUrl: string;
  pdfUrl: string | null;
  audioUrl?: string | null;
  qnaTimestamp: number | null;
}

export interface ColorSettings {
  brandColor: string;
}

export interface Company {
  companyId: number;
  companyName: string;
  companyCountry: string;
  companyTicker: string;
  displayName: string;
  description: string;
  reportingCurrency: string;
  infoUrl: string;
  liveUrl: string;
  logoLightUrl: string;
  logoDarkUrl: string;
  iconUrl: string | null;
  colorSettings: ColorSettings;
  events: CompanyEvent[];
  isins: string[];
}

export interface CompaniesResponse {
  data: Company[];
}
