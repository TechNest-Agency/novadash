import { useState } from 'react';
import { AnimatePresence, motion as Motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqData = [
    {
      question: "Do all the frameworks/technologies mentioned above come with the purchase?",
      answer:
        "Yes, once you purchase the template, the downloadable package includes all the listed frameworks and technologies such as React, Vue, HTML, Laravel, and more."
    },
    {
      question: "Do you charge for each upgrade?",
      answer:
        "No, all future updates are free for life. Once you purchase a license, you’ll receive every new version at no additional cost."
    },
    {
      question: "Do I need to purchase a license for each website?",
      answer:
        "Yes, each license is valid for one end product only. If you’re developing multiple websites, you’ll need a separate license for each."
    },
    {
      question: "What is regular license?",
      answer:
        "A Regular License allows you to use the product in one end product which end users are not charged for. It's perfect for personal or internal business use."
    },
    {
      question: "What is extended license?",
      answer:
        "An Extended License allows you to use the product in an end product for which users can be charged. It's suitable for SaaS or commercial use cases."
    },
    {
      question: "Which license is applicable for SASS application?",
      answer:
        "For SASS (Software as a Service) applications where users are charged, you’ll need an Extended License to comply with licensing terms."
    }
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Frequently asked <span className="text-purple-600">questions</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            <span className="font-semibold">Got a question?</span> We've got answers. If you have other questions, please{' '}
            <span className="text-orange-500 font-semibold cursor-pointer hover:underline">get in touch</span>.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openItems.has(index);
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-4 sm:px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-sm sm:text-base md:text-lg text-gray-800 font-medium text-start">
                    {item.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
                  )}
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <Motion.div
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { height: 'auto', opacity: 1 },
                        collapsed: { height: 0, opacity: 0 }
                      }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="px-4 sm:px-6 overflow-hidden"
                    >
                      <div className="pb-5 text-sm sm:text-base text-gray-600 leading-relaxed">
                        {item.answer}
                      </div>
                    </Motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
