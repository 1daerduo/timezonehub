import { CITIES, cityToSlug } from '@/lib/timezone-data';

export default function sitemap() {
  const baseUrl = 'https://timezonehub.app';

  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 1.0 },
    { url: `${baseUrl}/time-converter/`, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 0.9 },
    { url: `${baseUrl}/world-clock/`, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 0.9 },
    { url: `${baseUrl}/meeting-planner/`, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 0.9 },
    { url: `${baseUrl}/time-difference/`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  ];

  // Generate city pair pages
  const majorCities = CITIES.filter(c => c.population > 1000000);
  const cityPairPages: { url: string; lastModified: Date; changeFrequency: 'weekly'; priority: number }[] = [];

  for (let i = 0; i < majorCities.length && cityPairPages.length < 600; i++) {
    for (let j = 0; j < majorCities.length && cityPairPages.length < 600; j++) {
      if (i === j) continue;
      if (majorCities[i].timezone === majorCities[j].timezone) continue;
      cityPairPages.push({
        url: `${baseUrl}/time-difference/${cityToSlug(majorCities[i].city)}-to-${cityToSlug(majorCities[j].city)}/`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.6,
      });
    }
  }

  return [...staticPages, ...cityPairPages];
}
