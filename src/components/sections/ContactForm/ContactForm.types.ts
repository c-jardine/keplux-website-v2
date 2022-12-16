export interface ContactFormProps {
  name: string;
  email: string;
  website: string;
  inquiryType: 'quote' | 'general';
  interestedIn: string[];
  message: string;
}
