import Link from 'next/link';
import Image from 'next/image';

export default function Companies() {
  const companies = [
    {
      name: 'Hermes Finances',
      logo: '/images/hermesfinances_logo.jpg',
      website: 'https://hermesfinances.com',
      description: 'Hermes Finances is a financial services company specializing in investment management and financial consulting for companies in fintech industry.',
      services: [
        'Investment Portfolio Management',
        'Wealth Management',
        'Financial Planning',
        'AI-powered Financial Analysis and processing',
        'Tax Optimization Strategies',
      ],
      achievements: [
        'We started in March 2025... ',
        'It is still a startup!',
      ],
    },
    {
      name: 'Midas Finances',
      logo: '/images/midasfinances_logo.jpg',
      website: 'https://midasfinances.com',
      description: 'Midas Finances is a fintech company revolutionizing B2B AI-powered software solutions.',
      services: [
        'Digital Banking Solutions',
        'Portfolio Management Platform',
        'Financial API Integration',
        'Document Processing',
        'Security Master and Market Data management',
      ],
      achievements: [
        'you are reading this...'
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">Company information</h1>
        <p className="text-xl text-white/90 text-center max-w-3xl mx-auto mb-12">
          Hermes Finances and Midas Finances are two sides of the same company. Providing consultation and software solutions to the financial industry.
        </p>

        {/* Companies side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {companies.map((company, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-8 text-white">
              <div className="flex flex-col items-center">
                <div className="w-48 h-48 mb-6 relative overflow-hidden rounded-xl">
                  <Image 
                    src={company.logo}
                    alt={`${company.name} logo`}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-xl"
                  />
                </div>
                
                <h2 className="text-2xl font-bold mb-4 text-center">{company.name}</h2>
                <p className="text-lg mb-6 text-center">{company.description}</p>
                
                <div className="mb-6 w-full">
                  <h3 className="text-xl font-semibold mb-3">Services</h3>
                  <ul className="grid grid-cols-1 gap-2">
                    {company.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-white/70 mt-1 mr-2 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <a
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/50 rounded-full px-6 py-2 transition-all duration-300"
                >
                  Visit Website
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional information section */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-8 text-white">
          <h2 className="text-2xl font-bold mb-4 text-center">Our Approach</h2>
          <p className="text-lg mb-6">
            Both Hermes Finances and Midas Finances work together to provide comprehensive financial solutions. 
            While Hermes focuses on investment management and financial consulting, Midas specializes in developing 
            cutting-edge fintech solutions that power modern financial services.
          </p>
          <p className="text-lg">
            Our combined expertise allows us to offer end-to-end services for financial institutions, 
            from strategic consulting to implementation of advanced technological solutions.
          </p>
        </div>
      </div>
    </div>
  );
} 