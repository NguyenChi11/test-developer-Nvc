import React from 'react';


interface FAQBlock {
  type: string;
  settings: {
    orangy_faq_question: string;
    orangy_faq_answer: string;
  };
}

interface FAQSection {
  id: string;
  settings: {
    title: string;
    padding_top: number;
    padding_bottom: number;
  };
  blocks: FAQBlock[];
}

interface FAQProps {
  section: FAQSection;
}

const FAQ: React.FC<FAQProps> = ({ section }) => {
  return (
    <div className={`section-${section.id}-padding faq-all`} style={{
      paddingTop: `${section.settings.padding_top}px`,
      paddingBottom: `${section.settings.padding_bottom}px`,
    }}>
      <div
        className="faq"
        data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="500"
      >
        <div className="faq__title">
          <h1>{section.settings.title || "Discover more in our FAQs"}</h1>
        </div>
        <div className="faq__menu">
          {section.blocks.map((block, index) => {
            if (block.type === "text_faq") {
              return (
                <div className="faq__items" key={index}>
                  <div className="faq__questions">
                    <h2>{block.settings.orangy_faq_question || "Default text"}</h2>
                    <div className="icon">
                      <div className="icon-act icon-plus">
                        <i className="fa-solid fa-plus"></i>
                      </div>
                      <div className="icon-act icon-mins hide">
                        <i className="fa-solid fa-minus"></i>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="faq__answer">
                    <p>{block.settings.orangy_faq_answer}</p>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQ;