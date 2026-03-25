import { ServicePageTemplate } from "@/components/ServicePageTemplate";
    import { SERVICES_DATA } from "@/data/services-data";
    
    export default function ContentMarketingPage() {
      return <ServicePageTemplate data={SERVICES_DATA["content-marketing"]} />;
    }
    