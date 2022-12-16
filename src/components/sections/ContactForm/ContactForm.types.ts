export interface ContactFormProps {
  name: string;
  email: string;
  website: string;
  inquiryType: 'quote' | 'general';
  quoteOptions: string[];
  message: string;
}
