export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  techStack: string[];
  url?: string;
}

export const projects: Project[] = [
  {
    id: "hms-poornima",
    title: "Hospital Management System",
    description: "Scalable system managing 40k+ patient records, reducing operational costs by 60%",
    fullDescription: "Architected and delivered a production-grade Hospital Management System that transformed Poornima Ayurvedic Hospital's operations from paper-based workflows to a fully digital ecosystem. The client was struggling with manual record-keeping, appointment scheduling errors, and inventory management inefficiencies that were costing them 8+ hours daily in administrative overhead.\n\nMy solution: Built a scalable, cloud-native platform handling 40,000+ patient records with sub-second query performance. Implemented automated appointment scheduling that reduced no-shows by 45%, real-time inventory tracking preventing stockouts, and automated billing that eliminated 100% of calculation errors. The system processes 500+ daily transactions with 99.9% uptime.\n\nBusiness Impact: Reduced administrative workload by 60%, enabling staff to focus on patient care. Cut billing processing time from 2 hours to 15 minutes daily. Automated reporting saved 20+ hours weekly. The hospital can now handle 3x patient volume without additional staff. ROI achieved within 4 months through operational efficiency gains.\n\nTechnical Excellence: Designed microservices architecture on AWS with PostgreSQL for ACID compliance, implemented role-based access control, real-time notifications, and comprehensive audit trails. Built responsive React frontend with offline capability for low-connectivity scenarios.",
    techStack: ["React", "Node.js", "PostgreSQL", "AWS", "TypeScript", "Express", "Microservices"],
    url: ""
  },
  {
    id: "jewelry-erp",
    title: "Jewelry ERP System",
    description: "End-to-end ERP with hardware integration, reducing inventory errors by 95%",
    fullDescription: "Developed a custom ERP solution for jewelry retailers that solved critical inventory management and billing challenges. The client was losing revenue due to inventory discrepancies, manual billing errors, and inability to track high-value items efficiently.\n\nMy solution: Engineered a full-stack ERP with seamless hardware integration—connecting label printers and barcode scanners via REST APIs for real-time inventory updates. Built automated billing system with tax calculations, discount management, and multi-payment gateway support. Implemented barcode-based product identification reducing checkout time by 70%.\n\nBusiness Impact: Eliminated 95% of inventory discrepancies through automated tracking. Reduced billing errors from 15% to near-zero. Cut checkout time from 5 minutes to 90 seconds per transaction. Enabled real-time inventory visibility preventing overstocking and stockouts. Increased sales velocity by 40% through faster transaction processing.\n\nTechnical Excellence: Built scalable Next.js application with PostgreSQL for transactional integrity. Integrated multiple hardware vendors via standardized APIs. Implemented real-time synchronization ensuring data consistency across devices. Designed for 24/7 operations with automated backup and disaster recovery.",
    techStack: ["Next.js", "PostgreSQL", "Node.js", "TypeScript", "REST APIs", "Hardware Integration", "Payment Gateways"],
    url: ""
  },
  {
    id: "fashion-erp",
    title: "Fashion ERP Platform",
    description: "Payment tracking system recovering 30% of previously lost revenue",
    fullDescription: "Delivered a comprehensive Fashion ERP platform addressing critical payment tracking and cash flow management issues. The client was struggling with unpaid invoices, unclear payment statuses, and lack of financial visibility affecting their cash flow and business decisions.\n\nMy solution: Built an intelligent payment tracking system with automated reminders, payment reconciliation, and real-time financial dashboards. Implemented multi-channel payment tracking (cash, card, UPI, bank transfers) with automated matching. Created predictive analytics for payment delays and cash flow forecasting.\n\nBusiness Impact: Recovered 30% of previously lost revenue through automated payment tracking and follow-ups. Reduced average payment collection time from 45 days to 18 days. Improved cash flow visibility enabling better inventory and expansion decisions. Automated reconciliation saved 15+ hours weekly. Reduced bad debt by 25% through proactive payment management.\n\nTechnical Excellence: Architected real-time payment tracking with Supabase for instant updates. Built automated email/SMS notification system. Implemented secure payment gateway integrations with PCI compliance. Created comprehensive analytics dashboard with export capabilities for accounting systems.",
    techStack: ["React", "Supabase", "TypeScript", "Tailwind CSS", "Payment Gateway Integration", "Analytics"],
    url: ""
  },
  {
    id: "homepay",
    title: "Homepay - Real Estate Platform",
    description: "Full-stack platform with role-based dashboards, increasing lead conversion by 50%",
    fullDescription: "Architected and developed a comprehensive real estate platform similar to Magic Bricks, solving the client's need for a unified system managing buyers, sellers, agents, and properties. The client required a scalable solution to replace their fragmented Excel-based and manual processes.\n\nMy solution: Built a multi-tenant platform with role-based dashboards—buyers get personalized property recommendations, sellers manage listings with analytics, agents track leads and commissions, and admins oversee operations. Implemented advanced search with 20+ filters, saved searches with email alerts, inquiry management, and automated lead distribution to agents.\n\nBusiness Impact: Increased lead conversion by 50% through personalized dashboards and automated follow-ups. Reduced property listing time from 2 hours to 15 minutes. Automated lead distribution saved 10+ hours daily for admin staff. Improved agent productivity by 40% through centralized lead management. Enabled data-driven pricing decisions through analytics.\n\nTechnical Excellence: Designed scalable MongoDB schema for millions of property records. Built real-time notification system. Implemented secure document management for property papers. Created payment integration for booking management. Optimized search queries handling 10,000+ concurrent users with sub-200ms response times.",
    techStack: ["React", "Node.js", "MongoDB", "Express", "AWS", "TypeScript", "Payment Integration", "Real-time Systems"],
    url: ""
  },
  {
    id: "shivam-ayurvedalya",
    title: "Shivam Ayurvedalaya Website",
    description: "AI-powered medical website increasing patient inquiries by 200%",
    fullDescription: "Developed a complete digital presence for Shivam Ayurvedalaya, transforming their patient acquisition and engagement. The client needed to modernize their practice, reduce phone call overhead, and provide 24/7 patient support.\n\nMy solution: Built a professional medical website with AI-powered chatbot handling 80% of common inquiries automatically, integrated appointment booking system, automated email workflows for confirmations and reminders, and comprehensive treatment information. The chatbot uses natural language processing to understand patient queries and provides instant responses.\n\nBusiness Impact: Increased patient inquiries by 200% through improved online presence and 24/7 availability. Reduced phone call volume by 60% through chatbot automation. Improved appointment show-up rate by 35% through automated reminders. Enabled online appointment booking reducing administrative time by 8 hours weekly. Enhanced patient trust through professional digital presence.\n\nTechnical Excellence: Implemented intelligent chatbot with context awareness and fallback to human support. Built automated email system with templates and scheduling. Created responsive design optimized for mobile (70% of traffic). Integrated analytics for tracking patient behavior and conversion optimization. Ensured HIPAA-compliant data handling.",
    techStack: ["React", "Node.js", "Chatbot API", "Email Service", "TypeScript", "Tailwind CSS", "AI/ML"],
    url: "https://www.shivamayurvedalaya.com"
  },
  {
    id: "madan-jewellers",
    title: "Madan Jewellers Website",
    description: "E-commerce platform driving 40% of total sales through online channel",
    fullDescription: "Engineered a complete e-commerce solution for Madan Jewellers, enabling their digital transformation and online sales expansion. The client wanted to expand beyond physical store limitations and reach customers 24/7.\n\nMy solution: Built a high-performance e-commerce platform with optimized product catalog showcasing 500+ jewelry items, secure payment integration, inventory synchronization, customer accounts with order history, and responsive design for all devices. Implemented advanced features like wishlist, product comparisons, and personalized recommendations.\n\nBusiness Impact: Online channel now contributes 40% of total sales, opening new revenue stream. Expanded customer reach beyond geographical limitations. Reduced in-store footfall pressure enabling better customer service. 24/7 availability increased sales during non-business hours. Automated order management reduced manual work by 12 hours weekly.\n\nTechnical Excellence: Built with Next.js for SEO optimization and fast page loads. Implemented secure payment gateway with PCI compliance. Created real-time inventory sync preventing overselling. Optimized images and lazy loading for fast mobile experience. Integrated analytics for sales tracking and customer behavior analysis.",
    techStack: ["Next.js", "E-commerce Platform", "Payment Gateway", "TypeScript", "Tailwind CSS", "SEO Optimization"],
    url: "https://madanjewellers.shop"
  }
];
