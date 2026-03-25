export interface ServiceData {
  id: string;
  title: string;
  subtitle: string;
  heroImage: string;
  overview: string;
  approach: {
    title: string;
    description: string;
  }[];
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
  benefits: string[];
  caseStudy: {
    title: string;
    result: string;
    description: string;
  };
}

export const SERVICES_DATA: Record<string, ServiceData> = {
  "performance-marketing": {
    id: "performance-marketing",
    title: "Performance Marketing",
    subtitle: "Data-Driven Growth & High ROI Campaigns",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    overview: "We don't just run ads; we engineer growth. Our performance marketing strategies are built on deep data analysis, ensuring every rupee spent contributes directly to your bottom line. We focus on scalable, measurable results that drive business value.",
    approach: [
      { title: "Audit & Analysis", description: "We deep-dive into your historical data and market landscape to identify untapped opportunities." },
      { title: "Strategy & Execution", description: "Developing a multi-channel funnel that targets the right audience at the right time." },
      { title: "Optimization", description: "Real-time adjustments based on A/B testing and performance metrics to maximize efficiency." }
    ],
    features: [
      { title: "PPC Management", description: "Google Ads and Bing Ads campaigns optimized for conversion.", icon: "🎯" },
      { title: "Paid Social", description: "Strategic spend on Meta, LinkedIn, and Twitter to capture intent.", icon: "📱" },
      { title: "Programmatic Advertising", description: "Automated real-time bidding for precise audience targeting.", icon: "🤖" },
      { title: "Retargeting", description: "Sophisticated remarketing funnels to bring back lost leads.", icon: "🔄" }
    ],
    benefits: [
      "Guaranteed ROAS improvement",
      "Transparent reporting & live dashboards",
      "Dedicated account management",
      "Full-funnel optimization"
    ],
    caseStudy: {
      title: "FinTech Client Success",
      result: "320% ROI Increase",
      description: "Implemented an automated bidding strategy that reduced CPA by 45% while tripling volume."
    }
  },
  "mobile-app-marketing": {
    id: "mobile-app-marketing",
    title: "Mobile App Marketing",
    subtitle: "Acquire, Engage, and Retain Mobile Users",
    heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80",
    overview: "In a crowded app marketplace, being discovered is only half the battle. We specialize in App Store Optimization (ASO) and user acquisition strategies that not only drive downloads but ensure long-term user retention.",
    approach: [
      { title: "Visibility", description: "Optimizing app store listings to rank for high-intent keywords." },
      { title: "Acquisition", description: "Running targeted install campaigns across various ad networks." },
      { title: "Retention", description: "Using push notifications and in-app analytics to keep users coming back." }
    ],
    features: [
      { title: "ASO Strategy", description: "Keyword research and A/B testing for App Store/Play Store.", icon: "📈" },
      { title: "CPI Campaigns", description: "Cost-per-install focused paid media across social and search.", icon: "💸" },
      { title: "App Engagement", description: "Deeplinking and re-engagement strategies for dormant users.", icon: "👋" },
      { title: "Attribution Tracking", description: "Detailed tracking of user journeys from click to install.", icon: "🔍" }
    ],
    benefits: [
      "Higher App Store rankings",
      "Lower Cost Per Install (CPI)",
      "Increased LTV (Lifetime Value)",
      "Global reach for local apps"
    ],
    caseStudy: {
      title: "E-Commerce App Growth",
      result: "500k+ Installs in 3 Months",
      description: "Scaled a local fashion app to top 10 in its category using a mix of ASO and influencer collabs."
    }
  },
  "ecommerce-marketing": {
    id: "ecommerce-marketing",
    title: "E-Commerce Marketing",
    subtitle: "Scale Your Online Store to New Heights",
    heroImage: "https://images.unsplash.com/photo-1556742049-04ff4366753a?auto=format&fit=crop&q=80",
    overview: "Transform your online store into a revenue-generating machine. From Shopify to Amazon, we specialize in driving qualified traffic and converting browsers into loyal customers.",
    approach: [
      { title: "Inventory Alignment", description: "Marketing high-margin products while clearing out old stock through smart sales." },
      { title: "Conversion Focus", description: "Optimizing the path-to-purchase to minimize cart abandonment." },
      { title: "Loyalty Programs", description: "Building email and SMS sequences to encourage repeat purchases." }
    ],
    features: [
      { title: "Marketplace Management", description: "Optimization for Amazon, Flipkart, and more.", icon: "🛒" },
      { title: "Shopping Ads", description: "Google Shopping and Meta Catalog ads for direct sales.", icon: "🛍️" },
      { title: "Email Automation", description: "Abandoned cart, welcome series, and post-purchase flows.", icon: "📧" },
      { title: "Affiliate Marketing", description: "Expanding reach through partner networks and influencers.", icon: "🤝" }
    ],
    benefits: [
      "Increased average order value",
      "Reduction in cart abandonment",
      "Enhanced brand loyalty",
      "Full-scale marketplace management"
    ],
    caseStudy: {
      title: "D2C Skincare Brand",
      result: "10x Revenue Growth",
      description: "Multi-channel approach scaled monthly revenue from 5 Lakhs to 50 Lakhs in 12 months."
    }
  },
  "social-media-marketing": {
    id: "social-media-marketing",
    title: "Social Media Marketing",
    subtitle: "Building Communities & Driving Engagement",
    heroImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80",
    overview: "Your social media should be an extension of your brand's soul. We create content that resonates, engages, and builds a community around your business while driving measurable business outcomes.",
    approach: [
      { title: "Brand Voice", description: "Defining a unique tone and visual style for your social presence." },
      { title: "Content Creation", description: "High-quality reels, posts, and stories designed for engagement." },
      { title: "Analytics", description: "Monitoring sentiment and performance to guide future strategy." }
    ],
    features: [
      { title: "Content Strategy", description: "Comprehensive calendars and thematic content pillars.", icon: "📅" },
      { title: "Community Management", description: "Responding to comments and fostering real conversations.", icon: "💬" },
      { title: "Influencer Marketing", description: "Connecting your brand with relevant creators.", icon: "🌟" },
      { title: "Social Advertising", description: "Targeted ad spend to boost reach and conversions.", icon: "📢" }
    ],
    benefits: [
      "Stronger brand recognition",
      "Direct customer engagement",
      "Viral-ready creative content",
      "High-quality lead generation"
    ],
    caseStudy: {
      title: "Lifestyle Brand Campaign",
      result: "2M+ Reach in 30 Days",
      description: "A viral reel campaign that trended across Instagram, resulting in 50k new followers."
    }
  },
  "content-marketing": {
    id: "content-marketing",
    title: "Content Marketing",
    subtitle: "Words and Visuals That Drive Action",
    heroImage: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80",
    overview: "Content is the fuel for your digital engine. We produce high-quality, SEO-optimized content that positions your brand as an authority and nurtures prospects through the sales funnel.",
    approach: [
      { title: "Research", description: "Finding the topics your audience is actually searching for." },
      { title: "Creation", description: "Writing, filming, and designing assets that provide real value." },
      { title: "Distribution", description: "Ensuring your content reaches the right people via the right channels." }
    ],
    features: [
      { title: "Blog Writing", description: "Long-form SEO content that drives organic traffic.", icon: "✍️" },
      { title: "Video Production", description: "Engaging video content for YouTube and social media.", icon: "🎥" },
      { title: "Whitepapers & Ebooks", description: "Lead magnet content to capture B2B interest.", icon: "📖" },
      { title: "Copywriting", description: "Persuasive copy for ads, websites, and landing pages.", icon: "💡" }
    ],
    benefits: [
      "Establish industry authority",
      "Sustainable organic traffic",
      "Better customer education",
      "Improved brand sentiment"
    ],
    caseStudy: {
      title: "SaaS Enterprise",
      result: "400% Organic Traffic Growth",
      description: "A year-long content strategy focused on high-intent keywords and problem-solving guides."
    }
  },
  "seo": {
    id: "seo",
    title: "Search Engine Optimization",
    subtitle: "Rank Higher, Reach Further",
    heroImage: "https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?auto=format&fit=crop&q=80",
    overview: "Organic search is often the biggest driver of business growth. Our SEO services combine technical excellence with content strategy to ensure you're found by those who matter most.",
    approach: [
      { title: "Technical Audit", description: "fixing site speed, indexing, and mobile-friendliness issues." },
      { title: "Keyword Research", description: "Identifying high-volume, low-competition keywords for your niche." },
      { title: "Backlink Building", description: "Acquiring high-authority links to boost your domain authority." }
    ],
    features: [
      { title: "On-Page SEO", description: "Meta tags, headers, and content structure optimization.", icon: "🛠️" },
      { title: "Local SEO", description: "Dominating local search results and GMB management.", icon: "📍" },
      { title: "E-commerce SEO", description: "Product page optimization and schema markup.", icon: "🛍️" },
      { title: "Content Strategy", description: "Topic clusters and pillar pages for SEO success.", icon: "🏗️" }
    ],
    benefits: [
      "Page 1 rankings for key terms",
      "Long-term sustainable growth",
      "Reduced dependence on paid ads",
      "Improved site user experience"
    ],
    caseStudy: {
      title: "Local Service Business",
      result: "#1 Rank for 20+ Keywords",
      description: "Took a local dental clinic to the top of Google Maps and Search in just 6 months."
    }
  },
  "cro": {
    id: "cro",
    title: "Conversion Rate Optimization",
    subtitle: "Turning Visitors Into Customers",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
    overview: "More traffic isn't always the answer. Sometimes, you just need to make the traffic you already have work harder. We use psychological triggers and data to optimize your user journey.",
    approach: [
      { title: "Heatmap Analysis", description: "Visualizing where users click, scroll, and drop off." },
      { title: "Hypothesis Testing", description: "Creating A/B tests to validate UI and UX changes." },
      { title: "Implementation", description: "Deploying high-performing variations to increase conversion." }
    ],
    features: [
      { title: "A/B Testing", description: "Scientific testing of headlines, buttons, and layouts.", icon: "🧪" },
      { title: "UX Audits", description: "Identifying friction points in the user journey.", icon: "👤" },
      { title: "Landing Page Design", description: "Creating high-converting pages from scratch.", icon: "📐" },
      { title: "Funnel Analysis", description: "Tracking leaks in the conversion funnel.", icon: "📊" }
    ],
    benefits: [
      "Lower Customer Acquisition Cost",
      "Maximizing existing ad spend",
      "Data-backed design decisions",
      "Improved ROI on every visitor"
    ],
    caseStudy: {
      title: "EdTech Platform",
      result: "45% Increase in Signups",
      description: "Redesigned the landing page and simplified the checkout process to skyrocket conversions."
    }
  }
};
