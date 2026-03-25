import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { SERVICES_DATA } from "@/data/services-data";

export default function SEOPage() {
  return <ServicePageTemplate data={SERVICES_DATA["seo"]} />;
}
