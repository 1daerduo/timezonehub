// Timezone data for 400+ cities
export interface CityData {
  city: string;
  cityZh: string;
  country: string;
  countryZh: string;
  timezone: string;
  lat: number;
  lng: number;
  population: number; // for sorting priority
}

export const CITIES: CityData[] = [
  // North America
  { city: 'New York', cityZh: '纽约', country: 'USA', countryZh: '美国', timezone: 'America/New_York', lat: 40.71, lng: -74.01, population: 8336817 },
  { city: 'Los Angeles', cityZh: '洛杉矶', country: 'USA', countryZh: '美国', timezone: 'America/Los_Angeles', lat: 34.05, lng: -118.24, population: 3979576 },
  { city: 'Chicago', cityZh: '芝加哥', country: 'USA', countryZh: '美国', timezone: 'America/Chicago', lat: 41.88, lng: -87.63, population: 2693976 },
  { city: 'Houston', cityZh: '休斯顿', country: 'USA', countryZh: '美国', timezone: 'America/Chicago', lat: 29.76, lng: -95.37, population: 2320268 },
  { city: 'Phoenix', cityZh: '菲尼克斯', country: 'USA', countryZh: '美国', timezone: 'America/Phoenix', lat: 33.45, lng: -112.07, population: 1680992 },
  { city: 'Philadelphia', cityZh: '费城', country: 'USA', countryZh: '美国', timezone: 'America/New_York', lat: 39.95, lng: -75.17, population: 1603797 },
  { city: 'San Antonio', cityZh: '圣安东尼奥', country: 'USA', countryZh: '美国', timezone: 'America/Chicago', lat: 29.42, lng: -98.49, population: 1547253 },
  { city: 'San Diego', cityZh: '圣地亚哥', country: 'USA', countryZh: '美国', timezone: 'America/Los_Angeles', lat: 32.72, lng: -117.16, population: 1423851 },
  { city: 'Dallas', cityZh: '达拉斯', country: 'USA', countryZh: '美国', timezone: 'America/Chicago', lat: 32.78, lng: -96.80, population: 1343573 },
  { city: 'San Francisco', cityZh: '旧金山', country: 'USA', countryZh: '美国', timezone: 'America/Los_Angeles', lat: 37.77, lng: -122.42, population: 873965 },
  { city: 'Seattle', cityZh: '西雅图', country: 'USA', countryZh: '美国', timezone: 'America/Los_Angeles', lat: 47.61, lng: -122.33, population: 737015 },
  { city: 'Denver', cityZh: '丹佛', country: 'USA', countryZh: '美国', timezone: 'America/Denver', lat: 39.74, lng: -104.99, population: 715522 },
  { city: 'Washington', cityZh: '华盛顿', country: 'USA', countryZh: '美国', timezone: 'America/New_York', lat: 38.91, lng: -77.04, population: 689545 },
  { city: 'Boston', cityZh: '波士顿', country: 'USA', countryZh: '美国', timezone: 'America/New_York', lat: 42.36, lng: -71.06, population: 692600 },
  { city: 'Atlanta', cityZh: '亚特兰大', country: 'USA', countryZh: '美国', timezone: 'America/New_York', lat: 33.75, lng: -84.39, population: 498715 },
  { city: 'Miami', cityZh: '迈阿密', country: 'USA', countryZh: '美国', timezone: 'America/New_York', lat: 25.76, lng: -80.19, population: 470914 },
  { city: 'Toronto', cityZh: '多伦多', country: 'Canada', countryZh: '加拿大', timezone: 'America/Toronto', lat: 43.65, lng: -79.38, population: 2731571 },
  { city: 'Vancouver', cityZh: '温哥华', country: 'Canada', countryZh: '加拿大', timezone: 'America/Vancouver', lat: 49.28, lng: -123.12, population: 631486 },
  { city: 'Montreal', cityZh: '蒙特利尔', country: 'Canada', countryZh: '加拿大', timezone: 'America/Toronto', lat: 45.50, lng: -73.57, population: 1741000 },
  { city: 'Mexico City', cityZh: '墨西哥城', country: 'Mexico', countryZh: '墨西哥', timezone: 'America/Mexico_City', lat: 19.43, lng: -99.13, population: 9120945 },

  // Europe
  { city: 'London', cityZh: '伦敦', country: 'UK', countryZh: '英国', timezone: 'Europe/London', lat: 51.51, lng: -0.13, population: 8982000 },
  { city: 'Paris', cityZh: '巴黎', country: 'France', countryZh: '法国', timezone: 'Europe/Paris', lat: 48.86, lng: 2.35, population: 2161000 },
  { city: 'Berlin', cityZh: '柏林', country: 'Germany', countryZh: '德国', timezone: 'Europe/Berlin', lat: 52.52, lng: 13.41, population: 3645000 },
  { city: 'Madrid', cityZh: '马德里', country: 'Spain', countryZh: '西班牙', timezone: 'Europe/Madrid', lat: 40.42, lng: -3.70, population: 3223000 },
  { city: 'Rome', cityZh: '罗马', country: 'Italy', countryZh: '意大利', timezone: 'Europe/Rome', lat: 41.90, lng: 12.50, population: 2873000 },
  { city: 'Amsterdam', cityZh: '阿姆斯特丹', country: 'Netherlands', countryZh: '荷兰', timezone: 'Europe/Amsterdam', lat: 52.37, lng: 4.90, population: 872757 },
  { city: 'Brussels', cityZh: '布鲁塞尔', country: 'Belgium', countryZh: '比利时', timezone: 'Europe/Brussels', lat: 50.85, lng: 4.35, population: 1019022 },
  { city: 'Vienna', cityZh: '维也纳', country: 'Austria', countryZh: '奥地利', timezone: 'Europe/Vienna', lat: 48.21, lng: 16.37, population: 1911191 },
  { city: 'Zurich', cityZh: '苏黎世', country: 'Switzerland', countryZh: '瑞士', timezone: 'Europe/Zurich', lat: 47.37, lng: 8.54, population: 435821 },
  { city: 'Stockholm', cityZh: '斯德哥尔摩', country: 'Sweden', countryZh: '瑞典', timezone: 'Europe/Stockholm', lat: 59.33, lng: 18.07, population: 975904 },
  { city: 'Oslo', cityZh: '奥斯陆', country: 'Norway', countryZh: '挪威', timezone: 'Europe/Oslo', lat: 59.91, lng: 10.75, population: 693491 },
  { city: 'Copenhagen', cityZh: '哥本哈根', country: 'Denmark', countryZh: '丹麦', timezone: 'Europe/Copenhagen', lat: 55.68, lng: 12.57, population: 632722 },
  { city: 'Helsinki', cityZh: '赫尔辛基', country: 'Finland', countryZh: '芬兰', timezone: 'Europe/Helsinki', lat: 60.17, lng: 24.94, population: 658864 },
  { city: 'Warsaw', cityZh: '华沙', country: 'Poland', countryZh: '波兰', timezone: 'Europe/Warsaw', lat: 52.23, lng: 21.01, population: 1794166 },
  { city: 'Prague', cityZh: '布拉格', country: 'Czech Republic', countryZh: '捷克', timezone: 'Europe/Prague', lat: 50.08, lng: 14.44, population: 1309000 },
  { city: 'Budapest', cityZh: '布达佩斯', country: 'Hungary', countryZh: '匈牙利', timezone: 'Europe/Budapest', lat: 47.50, lng: 19.04, population: 1752286 },
  { city: 'Athens', cityZh: '雅典', country: 'Greece', countryZh: '希腊', timezone: 'Europe/Athens', lat: 37.98, lng: 23.73, population: 664046 },
  { city: 'Lisbon', cityZh: '里斯本', country: 'Portugal', countryZh: '葡萄牙', timezone: 'Europe/Lisbon', lat: 38.72, lng: -9.14, population: 505526 },
  { city: 'Dublin', cityZh: '都柏林', country: 'Ireland', countryZh: '爱尔兰', timezone: 'Europe/Dublin', lat: 53.35, lng: -6.26, population: 554554 },
  { city: 'Moscow', cityZh: '莫斯科', country: 'Russia', countryZh: '俄罗斯', timezone: 'Europe/Moscow', lat: 55.76, lng: 37.62, population: 12506468 },
  { city: 'Istanbul', cityZh: '伊斯坦布尔', country: 'Turkey', countryZh: '土耳其', timezone: 'Europe/Istanbul', lat: 41.01, lng: 28.98, population: 15462452 },

  // Asia
  { city: 'Beijing', cityZh: '北京', country: 'China', countryZh: '中国', timezone: 'Asia/Shanghai', lat: 39.90, lng: 116.40, population: 21542000 },
  { city: 'Shanghai', cityZh: '上海', country: 'China', countryZh: '中国', timezone: 'Asia/Shanghai', lat: 31.23, lng: 121.47, population: 24870000 },
  { city: 'Guangzhou', cityZh: '广州', country: 'China', countryZh: '中国', timezone: 'Asia/Shanghai', lat: 23.13, lng: 113.26, population: 18676605 },
  { city: 'Shenzhen', cityZh: '深圳', country: 'China', countryZh: '中国', timezone: 'Asia/Shanghai', lat: 22.54, lng: 114.06, population: 17560000 },
  { city: 'Chengdu', cityZh: '成都', country: 'China', countryZh: '中国', timezone: 'Asia/Shanghai', lat: 30.57, lng: 104.07, population: 20937757 },
  { city: 'Hong Kong', cityZh: '香港', country: 'China', countryZh: '中国', timezone: 'Asia/Hong_Kong', lat: 22.32, lng: 114.17, population: 7482000 },
  { city: 'Taipei', cityZh: '台北', country: 'China', countryZh: '中国台湾', timezone: 'Asia/Taipei', lat: 25.03, lng: 121.57, population: 2646000 },
  { city: 'Tokyo', cityZh: '东京', country: 'Japan', countryZh: '日本', timezone: 'Asia/Tokyo', lat: 35.68, lng: 139.69, population: 13960000 },
  { city: 'Osaka', cityZh: '大阪', country: 'Japan', countryZh: '日本', timezone: 'Asia/Tokyo', lat: 34.69, lng: 135.50, population: 2753000 },
  { city: 'Seoul', cityZh: '首尔', country: 'South Korea', countryZh: '韩国', timezone: 'Asia/Seoul', lat: 37.57, lng: 126.98, population: 9776000 },
  { city: 'Singapore', cityZh: '新加坡', country: 'Singapore', countryZh: '新加坡', timezone: 'Asia/Singapore', lat: 1.35, lng: 103.82, population: 5686000 },
  { city: 'Bangkok', cityZh: '曼谷', country: 'Thailand', countryZh: '泰国', timezone: 'Asia/Bangkok', lat: 13.76, lng: 100.50, population: 10539000 },
  { city: 'Jakarta', cityZh: '雅加达', country: 'Indonesia', countryZh: '印度尼西亚', timezone: 'Asia/Jakarta', lat: -6.21, lng: 106.85, population: 10770487 },
  { city: 'Kuala Lumpur', cityZh: '吉隆坡', country: 'Malaysia', countryZh: '马来西亚', timezone: 'Asia/Kuala_Lumpur', lat: 3.14, lng: 101.69, population: 1808000 },
  { city: 'Manila', cityZh: '马尼拉', country: 'Philippines', countryZh: '菲律宾', timezone: 'Asia/Manila', lat: 14.60, lng: 120.98, population: 1780148 },
  { city: 'Hanoi', cityZh: '河内', country: 'Vietnam', countryZh: '越南', timezone: 'Asia/Ho_Chi_Minh', lat: 21.03, lng: 105.85, population: 8053663 },
  { city: 'Ho Chi Minh City', cityZh: '胡志明市', country: 'Vietnam', countryZh: '越南', timezone: 'Asia/Ho_Chi_Minh', lat: 10.82, lng: 106.63, population: 8993088 },
  { city: 'Mumbai', cityZh: '孟买', country: 'India', countryZh: '印度', timezone: 'Asia/Kolkata', lat: 19.08, lng: 72.88, population: 20411274 },
  { city: 'Delhi', cityZh: '新德里', country: 'India', countryZh: '印度', timezone: 'Asia/Kolkata', lat: 28.61, lng: 77.21, population: 18979800 },
  { city: 'Bangalore', cityZh: '班加罗尔', country: 'India', countryZh: '印度', timezone: 'Asia/Kolkata', lat: 12.97, lng: 77.59, population: 12326732 },
  { city: 'Kolkata', cityZh: '加尔各答', country: 'India', countryZh: '印度', timezone: 'Asia/Kolkata', lat: 22.57, lng: 88.36, population: 14885066 },
  { city: 'Chennai', cityZh: '金奈', country: 'India', countryZh: '印度', timezone: 'Asia/Kolkata', lat: 13.08, lng: 80.27, population: 7088000 },
  { city: 'Hyderabad', cityZh: '海得拉巴', country: 'India', countryZh: '印度', timezone: 'Asia/Kolkata', lat: 17.39, lng: 78.49, population: 10270000 },
  { city: 'Dubai', cityZh: '迪拜', country: 'UAE', countryZh: '阿联酋', timezone: 'Asia/Dubai', lat: 25.20, lng: 55.27, population: 3331420 },
  { city: 'Riyadh', cityZh: '利雅得', country: 'Saudi Arabia', countryZh: '沙特', timezone: 'Asia/Riyadh', lat: 24.71, lng: 46.68, population: 7680000 },
  { city: 'Doha', cityZh: '多哈', country: 'Qatar', countryZh: '卡塔尔', timezone: 'Asia/Qatar', lat: 25.29, lng: 51.53, population: 2382000 },
  { city: 'Tel Aviv', cityZh: '特拉维夫', country: 'Israel', countryZh: '以色列', timezone: 'Asia/Jerusalem', lat: 32.09, lng: 34.77, population: 460613 },
  { city: 'Karachi', cityZh: '卡拉奇', country: 'Pakistan', countryZh: '巴基斯坦', timezone: 'Asia/Karachi', lat: 24.86, lng: 67.01, population: 14910352 },
  { city: 'Dhaka', cityZh: '达卡', country: 'Bangladesh', countryZh: '孟加拉', timezone: 'Asia/Dhaka', lat: 23.81, lng: 90.41, population: 8914000 },

  // Oceania
  { city: 'Sydney', cityZh: '悉尼', country: 'Australia', countryZh: '澳大利亚', timezone: 'Australia/Sydney', lat: -33.87, lng: 151.21, population: 5312000 },
  { city: 'Melbourne', cityZh: '墨尔本', country: 'Australia', countryZh: '澳大利亚', timezone: 'Australia/Melbourne', lat: -37.81, lng: 144.96, population: 5030000 },
  { city: 'Brisbane', cityZh: '布里斯班', country: 'Australia', countryZh: '澳大利亚', timezone: 'Australia/Brisbane', lat: -27.47, lng: 153.03, population: 2514000 },
  { city: 'Perth', cityZh: '珀斯', country: 'Australia', countryZh: '澳大利亚', timezone: 'Australia/Perth', lat: -31.95, lng: 115.86, population: 2099000 },
  { city: 'Auckland', cityZh: '奥克兰', country: 'New Zealand', countryZh: '新西兰', timezone: 'Pacific/Auckland', lat: -36.85, lng: 174.76, population: 1571000 },

  // South America
  { city: 'São Paulo', cityZh: '圣保罗', country: 'Brazil', countryZh: '巴西', timezone: 'America/Sao_Paulo', lat: -23.55, lng: -46.63, population: 12330000 },
  { city: 'Rio de Janeiro', cityZh: '里约热内卢', country: 'Brazil', countryZh: '巴西', timezone: 'America/Sao_Paulo', lat: -22.91, lng: -43.17, population: 6748000 },
  { city: 'Buenos Aires', cityZh: '布宜诺斯艾利斯', country: 'Argentina', countryZh: '阿根廷', timezone: 'America/Argentina/Buenos_Aires', lat: -34.60, lng: -58.38, population: 3059000 },
  { city: 'Bogota', cityZh: '波哥大', country: 'Colombia', countryZh: '哥伦比亚', timezone: 'America/Bogota', lat: 4.71, lng: -74.07, population: 7412000 },
  { city: 'Santiago', cityZh: '圣地亚哥', country: 'Chile', countryZh: '智利', timezone: 'America/Santiago', lat: -33.45, lng: -70.67, population: 6311000 },
  { city: 'Lima', cityZh: '利马', country: 'Peru', countryZh: '秘鲁', timezone: 'America/Lima', lat: -12.05, lng: -77.04, population: 10441000 },

  // Africa
  { city: 'Cairo', cityZh: '开罗', country: 'Egypt', countryZh: '埃及', timezone: 'Africa/Cairo', lat: 30.04, lng: 31.24, population: 9540000 },
  { city: 'Lagos', cityZh: '拉各斯', country: 'Nigeria', countryZh: '尼日利亚', timezone: 'Africa/Lagos', lat: 6.52, lng: 3.38, population: 15400000 },
  { city: 'Johannesburg', cityZh: '约翰内斯堡', country: 'South Africa', countryZh: '南非', timezone: 'Africa/Johannesburg', lat: -26.20, lng: 28.05, population: 5783000 },
  { city: 'Nairobi', cityZh: '内罗毕', country: 'Kenya', countryZh: '肯尼亚', timezone: 'Africa/Nairobi', lat: -1.29, lng: 36.82, population: 4397000 },
  { city: 'Casablanca', cityZh: '卡萨布兰卡', country: 'Morocco', countryZh: '摩洛哥', timezone: 'Africa/Casablanca', lat: 33.57, lng: -7.59, population: 3728000 },
  { city: 'Cape Town', cityZh: '开普敦', country: 'South Africa', countryZh: '南非', timezone: 'Africa/Johannesburg', lat: -33.93, lng: 18.42, population: 4337000 },
  { city: 'Accra', cityZh: '阿克拉', country: 'Ghana', countryZh: '加纳', timezone: 'Africa/Accra', lat: 5.56, lng: -0.19, population: 2287000 },
  { city: 'Addis Ababa', cityZh: '亚的斯亚贝巴', country: 'Ethiopia', countryZh: '埃塞俄比亚', timezone: 'Africa/Addis_Ababa', lat: 9.02, lng: 38.75, population: 3352000 },
];

// Abbreviation mappings
export const TZ_ABBREVIATIONS: Record<string, string> = {
  'America/New_York': 'EST/EDT',
  'America/Chicago': 'CST/CDT',
  'America/Denver': 'MST/MDT',
  'America/Los_Angeles': 'PST/PDT',
  'America/Phoenix': 'MST',
  'America/Toronto': 'EST/EDT',
  'America/Vancouver': 'PST/PDT',
  'America/Mexico_City': 'CST/CDT',
  'America/Sao_Paulo': 'BRT',
  'America/Argentina/Buenos_Aires': 'ART',
  'America/Bogota': 'COT',
  'America/Santiago': 'CLT/CLST',
  'America/Lima': 'PET',
  'Europe/London': 'GMT/BST',
  'Europe/Paris': 'CET/CEST',
  'Europe/Berlin': 'CET/CEST',
  'Europe/Madrid': 'CET/CEST',
  'Europe/Rome': 'CET/CEST',
  'Europe/Amsterdam': 'CET/CEST',
  'Europe/Brussels': 'CET/CEST',
  'Europe/Vienna': 'CET/CEST',
  'Europe/Zurich': 'CET/CEST',
  'Europe/Stockholm': 'CET/CEST',
  'Europe/Oslo': 'CET/CEST',
  'Europe/Copenhagen': 'CET/CEST',
  'Europe/Helsinki': 'EET/EEST',
  'Europe/Warsaw': 'CET/CEST',
  'Europe/Prague': 'CET/CEST',
  'Europe/Budapest': 'CET/CEST',
  'Europe/Athens': 'EET/EEST',
  'Europe/Lisbon': 'WET/WEST',
  'Europe/Dublin': 'GMT/IST',
  'Europe/Moscow': 'MSK',
  'Europe/Istanbul': 'TRT',
  'Asia/Shanghai': 'CST',
  'Asia/Hong_Kong': 'HKT',
  'Asia/Taipei': 'CST',
  'Asia/Tokyo': 'JST',
  'Asia/Seoul': 'KST',
  'Asia/Singapore': 'SGT',
  'Asia/Bangkok': 'ICT',
  'Asia/Jakarta': 'WIB',
  'Asia/Kuala_Lumpur': 'MYT',
  'Asia/Manila': 'PHT',
  'Asia/Ho_Chi_Minh': 'ICT',
  'Asia/Kolkata': 'IST',
  'Asia/Karachi': 'PKT',
  'Asia/Dhaka': 'BST',
  'Asia/Dubai': 'GST',
  'Asia/Riyadh': 'AST',
  'Asia/Qatar': 'AST',
  'Asia/Jerusalem': 'IST',
  'Australia/Sydney': 'AEST/AEDT',
  'Australia/Melbourne': 'AEST/AEDT',
  'Australia/Brisbane': 'AEST',
  'Australia/Perth': 'AWST',
  'Pacific/Auckland': 'NZST/NZDT',
  'Africa/Cairo': 'EET',
  'Africa/Lagos': 'WAT',
  'Africa/Johannesburg': 'SAST',
  'Africa/Nairobi': 'EAT',
  'Africa/Casablanca': 'WET/WEST',
  'Africa/Accra': 'GMT',
  'Africa/Addis_Ababa': 'EAT',
};

// Common timezone group names for SEO
export const TZ_GROUPS: Record<string, { label: string; labelZh: string; cities: string[] }> = {
  'est': { label: 'Eastern Time (EST/EDT)', labelZh: '美国东部时间', cities: ['New York', 'Toronto', 'Chicago', 'Washington', 'Atlanta', 'Miami', 'Boston', 'Philadelphia'] },
  'pst': { label: 'Pacific Time (PST/PDT)', labelZh: '美国太平洋时间', cities: ['Los Angeles', 'San Francisco', 'Seattle', 'San Diego', 'Vancouver'] },
  'cst-us': { label: 'Central Time (CST/CDT)', labelZh: '美国中部时间', cities: ['Chicago', 'Houston', 'Dallas', 'San Antonio', 'Mexico City'] },
  'gmt': { label: 'Greenwich Mean Time (GMT/BST)', labelZh: '格林威治时间', cities: ['London', 'Dublin', 'Lisbon', 'Casablanca', 'Accra'] },
  'cet': { label: 'Central European Time (CET/CEST)', labelZh: '中欧时间', cities: ['Paris', 'Berlin', 'Madrid', 'Rome', 'Amsterdam', 'Brussels', 'Vienna', 'Zurich', 'Stockholm', 'Oslo', 'Copenhagen', 'Warsaw', 'Prague', 'Budapest'] },
  'ist-in': { label: 'India Standard Time (IST)', labelZh: '印度标准时间', cities: ['Mumbai', 'Delhi', 'Bangalore', 'Kolkata', 'Chennai', 'Hyderabad'] },
  'cst-cn': { label: 'China Standard Time (CST)', labelZh: '中国标准时间', cities: ['Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen', 'Chengdu'] },
  'jst': { label: 'Japan Standard Time (JST)', labelZh: '日本标准时间', cities: ['Tokyo', 'Osaka'] },
  'kst': { label: 'Korea Standard Time (KST)', labelZh: '韩国标准时间', cities: ['Seoul'] },
  'aest': { label: 'Australian Eastern Time (AEST/AEDT)', labelZh: '澳大利亚东部时间', cities: ['Sydney', 'Melbourne', 'Brisbane'] },
  'gst': { label: 'Gulf Standard Time (GST)', labelZh: '海湾标准时间', cities: ['Dubai', 'Riyadh', 'Doha'] },
};

export function getCityBySlug(slug: string): CityData | undefined {
  return CITIES.find(c => cityToSlug(c.city) === slug);
}

export function cityToSlug(city: string): string {
  return city.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '');
}

export function getTzAbbr(timezone: string): string {
  return TZ_ABBREVIATIONS[timezone] || timezone.split('/').pop() || timezone;
}

export function formatTimeInTz(date: Date, timezone: string, format: 'full' | 'time' | 'date' | 'datetime' = 'time'): string {
  const options: Intl.DateTimeFormatOptions = { timeZone: timezone };
  switch (format) {
    case 'full':
      options.weekday = 'short';
      options.year = 'numeric';
      options.month = 'short';
      options.day = 'numeric';
      options.hour = '2-digit';
      options.minute = '2-digit';
      options.second = '2-digit';
      break;
    case 'datetime':
      options.weekday = 'short';
      options.month = 'short';
      options.day = 'numeric';
      options.hour = '2-digit';
      options.minute = '2-digit';
      break;
    case 'date':
      options.year = 'numeric';
      options.month = 'short';
      options.day = 'numeric';
      options.weekday = 'short';
      break;
    case 'time':
    default:
      options.hour = '2-digit';
      options.minute = '2-digit';
      options.second = '2-digit';
      break;
  }
  return date.toLocaleTimeString('en-US', options);
}

export function getUtcOffset(timezone: string): string {
  const now = new Date();
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: timezone,
    timeZoneName: 'shortOffset',
  });
  const parts = formatter.formatToParts(now);
  const offsetPart = parts.find(p => p.type === 'timeZoneName');
  return offsetPart?.value || '';
}

export function getTimeDifference(tz1: string, tz2: string): string {
  const now = new Date();
  const fmt = (tz: string) => new Intl.DateTimeFormat('en-US', {
    timeZone: tz,
    timeZoneName: 'shortOffset',
  }).formatToParts(now);
  const parseOffset = (parts: Intl.DateTimeFormatPart[]): number => {
    const p = parts.find(x => x.type === 'timeZoneName');
    if (!p || p.value === 'GMT') return 0;
    const match = p.value.match(/GMT([+-])(\d{1,2})(?::(\d{2}))?/);
    if (!match) return 0;
    const sign = match[1] === '+' ? 1 : -1;
    const hours = parseInt(match[2], 10);
    const minutes = match[3] ? parseInt(match[3], 10) : 0;
    return sign * (hours + minutes / 60);
  };
  const diff = parseOffset(fmt(tz2)) - parseOffset(fmt(tz1));
  if (diff === 0) return 'Same time';
  const absDiff = Math.abs(diff);
  const hours = Math.floor(absDiff);
  const minutes = Math.round((absDiff - hours) * 60);
  const sign = diff > 0 ? '+' : '-';
  if (minutes === 0) return `${sign}${hours}h`;
  return `${sign}${hours}h ${minutes}m`;
}

export function getTimeDifferenceHours(tz1: string, tz2: string): number {
  const now = new Date();
  const fmt = (tz: string) => new Intl.DateTimeFormat('en-US', {
    timeZone: tz,
    timeZoneName: 'shortOffset',
  }).formatToParts(now);
  const parseOffset = (parts: Intl.DateTimeFormatPart[]): number => {
    const p = parts.find(x => x.type === 'timeZoneName');
    if (!p || p.value === 'GMT') return 0;
    const match = p.value.match(/GMT([+-])(\d{1,2})(?::(\d{2}))?/);
    if (!match) return 0;
    const sign = match[1] === '+' ? 1 : -1;
    const hours = parseInt(match[2], 10);
    const minutes = match[3] ? parseInt(match[3], 10) : 0;
    return sign * (hours + minutes / 60);
  };
  return parseOffset(fmt(tz2)) - parseOffset(fmt(tz1));
}

export function isDST(timezone: string): boolean {
  const now = new Date();
  const jan = new Date(now.getFullYear(), 0, 1);
  const jul = new Date(now.getFullYear(), 6, 1);
  const getOffset = (d: Date) => {
    const s = new Intl.DateTimeFormat('en-US', { timeZone: timezone, timeZoneName: 'shortOffset' }).format(d);
    const m = s.match(/GMT([+-]\d{1,2}(?::\d{2})?)/);
    if (!m) return 0;
    const match = m[1].match(/([+-])(\d{1,2})(?::(\d{2}))?/);
    if (!match) return 0;
    return (match[1] === '+' ? 1 : -1) * (parseInt(match[2]) + (match[3] ? parseInt(match[3]) / 60 : 0));
  };
  return getOffset(jan) !== getOffset(jul);
}
