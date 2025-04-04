import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import FAQ from './Faq'; // Đảm bảo đường dẫn đúng đến file FAQ.tsx

const section = {
  id: "faq-section",
  settings: {
    title: "Discover more in our FAQs",
    padding_top: 36,
    padding_bottom: 36,
  },
  blocks: [
    {
      type: "text_faq",
      settings: {
        orangy_faq_question: "What is your return policy?",
        orangy_faq_answer: "You can return any item within 30 days."
      }
    },
    // Thêm các block khác nếu cần
  ]
};

createRoot(document.getElementById('faq')!).render(
  <StrictMode>
    <FAQ section={section} />
  </StrictMode>
);