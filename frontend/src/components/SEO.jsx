import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "Eddie's Inboard Marine - V-Drive Boat Specialists | Tucson, AZ",
  description = "Expert V-drive boat service in Tucson, AZ. 40+ years specializing in Mandella boats, complete restoration, engine building, and maintenance. Locally owned and operated.",
  keywords = "boat service tucson, v-drive boats, mandella boats, boat restoration, marine service, boat engine building, speed boats tucson, boat maintenance arizona, inboard marine service",
  image = "https://eddiesinboardmarine.com/uploads/3/5/0/4/35040330/6243769.jpg",
  url = "https://site-replica-207.preview.emergentagent.com",
  robots = "index, follow"
}) => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Eddie's Inboard Marine",
    "image": image,
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3760 E 37th St",
      "addressLocality": "Tucson",
      "addressRegion": "AZ",
      "postalCode": "85713",
      "addressCountry": "US"
    },
    "telephone": "+1-520-400-1423",
    "priceRange": "$$",
    "openingHours": "Mo-Fr 08:00-17:00",
    "url": url,
    "serviceType": ["Boat Service", "Boat Restoration", "Marine Maintenance", "V-Drive Boats"],
    "areaServed": "Tucson, Arizona"
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={robots} />
      <meta name="language" content="English" />
      <meta name="author" content="Eddie's Inboard Marine" />
      
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>
    </Helmet>
  );
};

export default SEO;
