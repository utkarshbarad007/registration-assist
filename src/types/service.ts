
export interface ServiceData {
  title: string;
  description: string;
  price: number;
  category: string;
  serviceType: string;
  features: string[];
  requirements: string[];
  process: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
}
