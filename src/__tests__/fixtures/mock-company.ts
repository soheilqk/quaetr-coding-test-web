import type { Company } from '@/lib/types/company'

export const mockCompany: Company = {
  companyId: 1,
  companyName: 'Test Company',
  companyCountry: 'NO',
  companyTicker: 'TEST',
  displayName: 'Test Company AS',
  infoUrl: 'https://test.com',
  liveUrl: 'https://test.com/investor',
  logoLightUrl: 'https://example.com/logo-light.png',
  logoDarkUrl: 'https://example.com/logo-dark.png',
  iconUrl: null,
  description: 'This is a test company description',
  reportingCurrency: 'NOK',
  colorSettings: {
    brandColor: '#000000',
  },
  events: [
    {
      eventId: 1,
      eventTitle: 'Q4 2024 Earnings Release',
      eventDate: '2024-02-15T14:00:00Z',
      fiscalYear: '2024',
      fiscalPeriod: 'Q4',
      reportUrl: 'https://example.com/report',
      pdfUrl: null,
      audioUrl: null,
      qnaTimestamp: null,
    },
  ],
  isins: [],
}
