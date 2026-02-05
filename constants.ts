
import { Location, LocationInfo } from './types';

export const ZENYUM_BLUE = '#005AE2';

export const LOCATIONS: LocationInfo[] = [
  {
    id: Location.MONG_KOK,
    name: '旺角分店',
    subName: 'Mong Kok',
    calendlyUrl: 'https://calendly.com/zenyumoffline/zenyumconsultation/?hide_landing_page_details=1&hide_gdpr_banner=1&primary_color=005AE2',
    address: 'Mong Kok Hub, Kowloon, Hong Kong'
  },
  {
    id: Location.CAUSEWAY_BAY,
    name: '銅鑼灣分店',
    subName: 'Causeway Bay',
    calendlyUrl: 'https://calendly.com/zenyumoffline4/heroroom_cwb/?hide_landing_page_details=1&hide_gdpr_banner=1&primary_color=005AE2',
    address: 'Causeway Bay Centre, Hong Kong Island'
  }
];
