import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { SERVICES_DATA } from "@/data/services-data";

export default function SocialMediaMarketingPage() {
  return <ServicePageTemplate data={SERVICES_DATA["social-media-marketing"]} />;
}
