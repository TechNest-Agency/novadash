import { ArrowRight, ShoppingBag, MessageCircle } from 'lucide-react';

const PricingSection = () => {
  const features = [
    '6 Months Premium Support Included',
    'Quality checked by Envato',
    'Lifetime Free Updates',
  ];

  return (
    <div className="bg-gradient-to-br from-purple-50 via-white to-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            This isn’t the end. <span className="text-purple-600">It’s just the beginning.</span>
          </h1>
          <p className="text-gray-600 text-lg mt-4">
            Vuexy is an investment that saves you thousands of dollars. <br />
            With each new update, it becomes more valuable.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Regular License */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 flex flex-col justify-between h-full">
            <div>
              <h3 className="text-2xl font-bold text-purple-600 mb-4">Regular License</h3>
              <p className="text-gray-600 mb-6">
                Use, by you or one client, in a single end product for which end users{' '}
                <span className="font-semibold text-gray-800">are not</span> charged.
              </p>
              <div className="flex items-baseline mb-6">
                <span className="text-gray-600 text-lg">USD</span>
                <span className="text-4xl font-bold text-gray-800 ml-2">$39</span>
              </div>
              <div className="space-y-4 mb-8">
                {features.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                      <ArrowRight size={16} className="text-white" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-100 rounded-xl p-4 mt-auto">
              <img
                src="/WhatsApp_Image_2025-06-22_at_16.15.15_c130a285-removebg-preview.png"
                alt="Tech Stack"
                className="w-full h-auto object-contain"
              />
            </div>

            <button className="w-full bg-purple-600 text-white mt-6 py-3 rounded-xl font-semibold flex items-center justify-center">
              <ShoppingBag size={20} className="mr-2" />
              Purchase Vuexy
            </button>
          </div>

          {/* Extended License */}
          <div className="bg-white rounded-2xl p-8 border border-purple-700 flex flex-col justify-between h-full relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Featured
              </span>
            </div>

            <div className="mt-6">
              <h3 className="text-2xl font-bold text-purple-600 mb-4">Extended License</h3>
              <p className="text-gray-600 mb-6">
                Use by you or your one client in a single end product for which end users{' '}
                <span className="font-semibold text-gray-800">can be</span> charged.
              </p>
              <div className="flex items-baseline mb-6">
                <span className="text-gray-600 text-lg">USD</span>
                <span className="text-4xl font-bold text-gray-800 ml-2">$799</span>
              </div>
              <div className="space-y-4 mb-8">
                {features.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                      <ArrowRight size={16} className="text-white" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-100 rounded-xl p-4 mt-auto">
              <img
                src="/WhatsApp_Image_2025-06-22_at_16.15.15_c130a285-removebg-preview.png"
                alt="Tech Stack"
                className="w-full h-auto object-contain"
              />
            </div>

            <button className="w-full bg-purple-600 text-white mt-6 py-3 rounded-xl font-semibold flex items-center justify-center">
              <ShoppingBag size={20} className="mr-2" />
              Purchase Vuexy
            </button>
          </div>

          {/* Custom License */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 flex flex-col justify-between h-full">
            <div>
              <h3 className="text-2xl font-bold text-[#00F59B] mb-4">Custom License</h3>
              <p className="text-gray-600 mb-8">
                Do you need a custom license for your business model? Contact us so we can discuss this.
              </p>
              <img
                src="/8f226397a614a400a25a1231e2c32eae3f91b35f.png"
                alt="Custom"
                className="rounded-lg w-full object-contain"
              />
            </div>

            <button
              className="w-full mt-8 text-white py-3 rounded-xl font-semibold flex items-center justify-center"
              style={{ backgroundColor: '#00F59B' }}
            >
              <MessageCircle size={20} className="mr-2" />
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
