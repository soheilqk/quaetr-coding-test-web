import type { Company } from "@/lib/types/company";

export const mockCompany: Company = {
  companyId: 1,
  companyName: "Test Company",
  companyCountry: "NO",
  companyTicker: "TEST",
  displayName: "Test Company AS",
  infoUrl: "https://test.com",
  liveUrl: "https://test.com/investor",
  logoLightUrl: "https://example.com/logo-light.png",
  logoDarkUrl: "https://example.com/logo-dark.png",
  iconUrl: null,
  description: "This is a test company description",
  reportingCurrency: "NOK",
  colorSettings: {
    brandColor: "#000000",
  },
  events: [
    {
      eventId: 1,
      eventTitle: "Q4 2024 Earnings Release",
      eventDate: "2024-02-15T14:00:00Z",
      fiscalYear: "2024",
      fiscalPeriod: "Q4",
      reportUrl: "https://example.com/report",
      pdfUrl: null,
      qnaTimestamp: null,
    },
  ],
  isins: [],
};

export const mockCompanies: Company[] = [
  mockCompany,
  {
    companyId: 2,
    companyName: "Test Company 2",
    displayName: "Test Company 2",
    companyCountry: "US",
    companyTicker: "TEST2",
    description: "Test description 2",
    reportingCurrency: "USD",
    infoUrl: "https://test2.com",
    liveUrl: "https://test2.com/live",
    logoLightUrl: "https://test2.com/logo-light.png",
    logoDarkUrl: "https://test2.com/logo-dark.png",
    iconUrl: null,
    colorSettings: { brandColor: "#ffffff" },
    events: [
      {
        eventId: 2,
        eventTitle: "Q2 2024",
        eventDate: "2024-04-15T00:00:00.000Z",
        fiscalPeriod: "Q2",
        fiscalYear: "2024",
        reportUrl: "https://test.com/report2.pdf",
        pdfUrl: null,
        qnaTimestamp: null,
      },
    ],
    isins: [],
  },
];
