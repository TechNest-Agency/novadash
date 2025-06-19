import { Check, ShoppingBag, MessageCircle } from 'lucide-react';

const PricingSection = () => {
  const TechStackLogos = () => (
    <div className="flex gap-2 mb-8 flex-wrap">
   
 
    
      {/* React */}
      <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center group hover:bg-blue-100 transition-colors">
        <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89s-.84 1.89-1.87 1.89c-1.03 0-1.87-.84-1.87-1.89s.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.37 1.95-1.47-.84-1.63-3.05-1.01-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1.01-5.63 1.46-.84 3.45.12 5.37 1.95 1.92-1.83 3.91-2.79 5.37-1.95z"/>
        </svg>
      </div>
      
      {/* Next.js */}
      <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center group hover:bg-gray-100 transition-colors">
        <svg className="w-5 h-5 text-gray-800" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"/>
        </svg>
      </div>
      
      {/* Vue.js */}
      <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center group hover:bg-green-100 transition-colors">
        <svg className="w-5 h-5 text-green-600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z"/>
        </svg>
      </div>
      
      {/* Bootstrap */}
      <div className="w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center group hover:bg-purple-100 transition-colors">
        <svg className="w-5 h-5 text-purple-600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.002 3.416L21.002 3.416Q21.002 3.416 21.002 3.416L21.002 20.584Q21.002 20.584 21.002 20.584L6.002 20.584Q6.002 20.584 6.002 20.584L6.002 3.416Q6.002 3.416 6.002 3.416ZM7.618 5.032L7.618 18.968L19.386 18.968L19.386 5.032L7.618 5.032ZM9.044 11.536Q9.044 11.536 9.044 11.536L9.044 7.616L14.26 7.616Q15.308 7.616 16.004 8.14Q16.7 8.664 16.7 9.568Q16.7 10.328 16.244 10.756Q15.788 11.184 15.14 11.288Q15.884 11.392 16.388 11.872Q16.892 12.352 16.892 13.168Q16.892 14.176 16.124 14.752Q15.356 15.328 14.212 15.328L9.044 15.328L9.044 11.536ZM10.748 10.576L10.748 9.056L13.892 9.056Q14.332 9.056 14.572 9.272Q14.812 9.488 14.812 9.816Q14.812 10.144 14.572 10.36Q14.332 10.576 13.892 10.576L10.748 10.576ZM10.748 13.888L10.748 12.128L14.1 12.128Q14.612 12.128 14.9 12.376Q15.188 12.624 15.188 13.008Q15.188 13.392 14.9 13.64Q14.612 13.888 14.1 13.888L10.748 13.888Z"/>
        </svg>
      </div>
      
      {/* Laravel */}
      <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center group hover:bg-red-100 transition-colors">
        <svg className="w-5 h-5 text-red-600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.642 5.43a.364.364 0 0 1 .014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 0 1-.188.326L9.93 23.949a.316.316 0 0 1-.066.027c-.008.002-.016.008-.024.01a.348.348 0 0 1-.192 0c-.011-.002-.02-.008-.03-.012-.02-.008-.042-.014-.062-.025L.533 18.755a.376.376 0 0 1-.189-.326V2.974c0-.033.005-.066.014-.098.003-.01.01-.02.013-.032a.369.369 0 0 1 .023-.058c.004-.013.015-.022.023-.033l.033-.045c.012-.01.025-.018.037-.027.014-.012.027-.024.041-.034H.53L5.043.05a.375.375 0 0 1 .375 0L9.93 2.647h.002c.015.01.027.021.04.033l.038.027c.013.014.02.03.033.045.008.011.02.021.025.033.01.02.017.038.024.058.003.011.01.021.013.032.01.031.014.064.014.098v9.652l3.76-2.164V5.527c0-.033.004-.066.013-.098.003-.01.01-.02.013-.032a.487.487 0 0 1 .024-.059c.007-.012.018-.02.025-.033.012-.015.021-.030.033-.043.012-.012.025-.02.037-.028.014-.011.026-.023.041-.032h.001l4.513-2.598a.375.375 0 0 1 .375 0l4.513 2.598c.016.01.027.021.042.031.012.01.025.018.036.028.013.014.022.03.034.044.008.012.019.021.024.033.011.02.018.04.024.06.006.01.012.021.015.032zm-.74 5.032V6.179l-1.578.908-2.182 1.256v4.283zm-4.51 7.75v-4.287l-2.146 1.225-6.265 3.576v4.321zM1.093 3.624v14.588l8.273 4.761v-4.32l-4.322-2.445-.002-.003H5.04c-.014-.01-.025-.021-.04-.031-.011-.01-.024-.018-.035-.027l-.001-.002c-.013-.012-.021-.025-.031-.04-.01-.011-.021-.02-.028-.033-.002-.003-.006-.003-.009-.006-.008-.014-.013-.031-.02-.047-.006-.016-.014-.027-.018-.043a.49.49 0 0 1-.008-.057c-.002-.014-.006-.027-.006-.041V5.789l-2.18-1.257zM5.23.81L1.47 2.974l3.76 2.164 3.758-2.164zm1.956 13.505l2.182-1.256V3.624l-1.58.91-2.182 1.255v9.435zm11.581-10.95l-3.76 2.163 3.76 2.163 3.759-2.164zm-.376 4.978L16.21 7.087 14.63 6.18v4.283l2.182 1.256 1.58.908zm-8.65 9.654l5.514-3.148 2.756-1.572-3.757-2.163-4.323 2.489-3.941 2.27z"/>
        </svg>
      </div>
      
      {/* .NET */}
      <div className="w-8 h-8 bg-indigo-50 rounded-lg flex items-center justify-center group hover:bg-indigo-100 transition-colors">
        <svg className="w-5 h-5 text-indigo-600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 8.77h-2.468v7.565h-1.425V8.77h-2.462V7.53H24zm-6.852 7.565h-4.821V7.53h4.63v1.24h-3.205v2.494h2.953v1.234h-2.953v2.604h3.396zm-6.708 0H8.882L4.78 9.863a2.896 2.896 0 0 1-.258-.51h-.036c.032.189.048.592.048 1.21v5.772H3.157V7.53h1.659l3.965 6.32c.167.261.275.442.323.54h.024c-.04-.233-.06-.629-.06-1.185V7.529h1.372zm-8.703-.693a.868.868 0 0 1-.869.693.868.868 0 0 1-.868-.693.868.868 0 0 1 .868-.692.868.868 0 0 1 .869.692z"/>
        </svg>
      </div>
      
      {/* Django */}
      <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center group hover:bg-green-100 transition-colors">
        <svg className="w-5 h-5 text-green-700" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.146 0h3.924v18.166c-2.013.382-3.491.535-5.096.535-4.791 0-7.288-2.166-7.288-6.32 0-4.001 2.65-6.6 6.753-6.6.637 0 1.121.051 1.707.204zm0 9.143a3.894 3.894 0 0 0-1.325-.204c-1.988 0-3.134 1.223-3.134 3.364 0 2.09 1.096 3.236 3.109 3.236.433 0 .79-.025 1.35-.102V9.142zM21.314 6.06v9.097c0 3.134-.229 4.638-.917 5.937-.637 1.249-1.478 2.039-3.211 2.905l-3.644-1.733c1.733-.815 2.574-1.529 3.109-2.625.561-1.121.739-2.421.739-5.835V6.059h3.924zM17.39.021h3.924v4.026H17.39z"/>
        </svg>
      </div>
    </div>
  );
    
 

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            This isn't the end. <span className="text-purple-600">It's just the beginning.</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Vuexy is an investment that saves you thousands of dollars.
            <br />
            With each new update, it becomes more valuable.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Regular License */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-purple-600 mb-4">Regular License</h3>
              <p className="text-gray-600 mb-6">
                Use, by you or one client, in a single end product for which end users{' '}
                <span className="font-semibold text-gray-800">are not</span> charged.
              </p>
              <div className="flex items-baseline mb-6">
                <span className="text-gray-600 text-lg">USD</span>
                <span className="text-4xl font-bold text-gray-800 ml-2">$39</span>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {['6 Months Premium Support Included', 'Quality checked by Envato', 'Lifetime Free Updates'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                    <Check size={16} className="text-white" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <TechStackLogos />

            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-semibold transition-colors flex items-center justify-center">
              <ShoppingBag size={20} className="mr-2" />
              Purchase Vuexy
            </button>
          </div>

          {/* Extended License */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-purple-200 relative hover:shadow-2xl transition-all duration-300 transform lg:scale-105">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Featured
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-purple-600 mb-4">Extended License</h3>
              <p className="text-gray-600 mb-6">
                Use by you or your one client in a single end product for which end users{' '}
                <span className="font-semibold text-gray-800">can be</span> charged.
              </p>
              <div className="flex items-baseline mb-6">
                <span className="text-gray-600 text-lg">USD</span>
                <span className="text-4xl font-bold text-gray-800 ml-2">$799</span>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {['6 Months Premium Support Included', 'Quality checked by Envato', 'Lifetime Free Updates'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                    <Check size={16} className="text-white" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <TechStackLogos />

            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-semibold transition-colors flex items-center justify-center">
              <ShoppingBag size={20} className="mr-2" />
              Purchase Vuexy
            </button>
          </div>

          {/* Custom License */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Custom License</h3>
              <p className="text-gray-600 mb-6">
                Do you need a custom license for your business model? Contact us so we can discuss this.
              </p>
            </div>

            <div className="flex justify-center mb-8">
              <div className="w-full max-w-xs">
                <img 
                  src="/a-man-is-working-at-home-using-laptop-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--freelancer-freelance-work-businessman-worker-pack-people-illustrations-4582954.webp"
                  alt="Business professionals collaborating"
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>
            </div>

            <button className="w-full bg-cyan-400 hover:bg-cyan-500 text-white py-3 rounded-xl font-semibold transition-colors flex items-center justify-center">
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
