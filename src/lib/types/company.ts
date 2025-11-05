/**
 * Company event fiscal period type
 */
export type FiscalPeriod = "Q1" | "Q2" | "Q3" | "Q4";

/**
 * Represents a company's quarterly or annual event
 */
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

/**
 * Company branding color settings
 */
export interface ColorSettings {
  brandColor: string;
}

/**
 * Represents a trending company with all associated metadata
 */
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

/**
 * API response structure for companies endpoint
 */
export interface CompaniesResponse {
  data: Company[];
}
