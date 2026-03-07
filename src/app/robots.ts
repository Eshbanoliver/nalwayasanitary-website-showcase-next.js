import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://nalwayasanitary.com';

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/private/', '/api/'], // Generic disallows to protect any prospective private APIs
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
