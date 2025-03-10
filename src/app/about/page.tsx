import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  const skills = [
    { category: 'Programming', items: ['Linux', 'C', 'Pascal', 'Python', 'SQL', 'Git'] },
    { category: 'Statistical Software', items: ['SAS', 'Stata', 'R', 'Octave'] },
    { category: 'Visualization Tools', items: ['Spotfire', 'PowerBI', 'Tableau'] },
    { category: 'Data Modeling', items: ['Schema-on-read', 'Schema-on-write', 'Jackson', 'UML'] },
    { category: 'Project Management', items: ['Waterfall', 'Agile', 'Lean/Safe', 'Atlassian'] },
    { category: 'Cloud Platforms', items: ['Azure', 'Google Cloud'] },
    { category: 'Databases', items: ['Oracle', 'MS SQL', 'Sybase'] },
    { category: 'DevOps', items: ['Docker','CI/CD', 'Azure DevOps'] },
    { category: 'Financial Data', items: ['SecMaster Reference Data', 'Portfolio Data Management', '3rd Party Data Management'] },
    { category: 'Financial Modelling', items: ['Fixed Income', 'Equities', 'Multi-Asset', 'Factor Models', 'VaR Models'] }
  ];

  const experiences = [
    {
      title: 'Executive Director / Technology and Data',
      company: 'MSCI, Berkeley',
      period: 'January 2020 - July 2024',
      description: 'Coordinated across IT, Program Management, and Data organizations on analytics projects. Acted as proxy of Product (BU) and represented their priorities in engineering organizations. Led technology transformation initiatives and implemented RCA-driven improvements focusing on data integrity.',
    },
    {
      title: 'Vice President / Data Content Services - 3rd Party Benchmark',
      company: 'MSCI',
      period: 'January 2016 - January 2020',
      description: 'Led global team responsible for 3rd party portfolio content digestion, normalization, QA, shipments and corresponding engineering work across 3 locations. Successfully grew the team from 9 to 20+ people, with 8-10 data engineers cross-reporting.',
    },
    {
      title: 'Vice President / Data Content Services - Data Integration',
      company: 'MSCI, Berkeley',
      period: 'January 2014 - January 2016',
      description: 'Led global project groups processing pass-through and derived analytics content. Architected data delivery and integration systems and coordinated execution across data and application engineering. Spearheaded efforts to reduce technology debt.',
    },
    {
      title: 'Sr. Associate / Data Content Services',
      company: 'MSCI',
      period: 'January 2009 - January 2014',
      description: 'Established Budapest Data team presence, building various data teams across the company. Led EMEA Data operation for Fixed-income pass-through and derived model data. Created new fixed income reference database, significantly enhancing data management capabilities.',
    },
    {
      title: 'Risk Modeling Analyst',
      company: 'CIB Bank (SP-Intesa), Budapest',
      period: 'August 2007 - December 2008',
      description: 'Developed scorecards and risk analytic reports. Prepared regular provision reporting for Assets and Liabilities committee. Created fraud detection and 3rd party risk assessment solutions for internal compliance.',
    },
    {
      title: 'Risk Analyst, Statistician',
      company: 'Cetelem (BnP Paribas), Budapest',
      period: 'April 2005 - August 2007',
      description: 'Developed behavioral, collection, and granting scorecards. Built SAS-based models for the risk department and BI reporting tools. Maintained C and Cobol based decision making frameworks.',
    },
    {
      title: 'Founder & Principal Consultant',
      company: 'Hermes Finances Consulting',
      period: 'January 2025 - Present',
      description: 'Providing specialized consulting services in financial technology, data architecture, and risk management solutions. Helping clients optimize their data infrastructure and implement effective financial analytics systems.',
    },
    {
      title: 'Member',
      company: 'El Cerrito Financial Advisory Board',
      period: 'March 2025 - Present',
      description: 'Serving as an advisory board member providing financial expertise and guidance to the city of El Cerrito. Contributing to fiscal policy recommendations and financial planning initiatives.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* About Section */}
        <section className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">About Me</h1>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-8 text-white">
            <div className="flex flex-col md:flex-row gap-8 items-center mb-6">
              <div className="w-48 h-48 relative overflow-hidden rounded-lg border-4 border-white/20">
                <Image 
                  src="/images/profil.jpg"
                  alt="Janos Szlatenyi"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Hello there!</h2>
                <p className="text-lg">
                  I'm Janos Szlatenyi ['jɑni slɑ'tɛnji], but please, call me Jani. It is easier for both of us. Welcome to my personal website.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-lg">
                Hungarian born resourceful economist and finance expert with strong IT background and polymathic tendencies. I've spent my career in data engineering, analytics, and technology management, with over 15 years of experience in the financial sector.
              </p>
              <p className="text-lg">
                My brain is like a sponge - I'm surprisingly versatile, resourceful and interested in everything from economics and finance to cognitive psychology and philosophy. I play piano, do origami, and have a deep appreciation for movies and creative problem-solving.
              </p>
              <p className="text-lg">
                Throughout my career, I've been better at hiring good people than claiming credit for their work, and I take pride in seeing junior analysts grow into smart, mature leaders. I'm an out-of-the-box thinker who values meaningful work and client satisfaction above all.
              </p>
              <p className="text-lg font-medium mt-8">
                Thank you for visiting,
              </p>
              <p className="text-lg font-medium">
                Jani
              </p>
            </div>
          </div>
        </section>
        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">Skills & Expertise</h2>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 md:p-4 text-white">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 text-sm">
              {skills.map((skillGroup, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-2">
                  <h3 className="text-base font-bold mb-1 text-white/90 border-b border-white/10 pb-1">{skillGroup.category}</h3>
                  <ul className="space-y-0.5 text-xs">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-center">
                        <svg
                          className="w-3 h-3 text-white/70 mr-1 flex-shrink-0"
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
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Professional Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-white">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <p className="text-white/80 font-medium">{exp.company}</p>
                  </div>
                  <p className="text-white/70 mt-2 md:mt-0">{exp.period}</p>
                </div>
                <p className="text-white/90">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Hermes Finances Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Hermes Finances</h2>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-8 text-white">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="w-48 h-48 rounded-xl overflow-hidden relative">
                  <Image 
                    src="/images/hermesfinances_logo.jpg"
                    alt="Hermes Finances Logo"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-xl"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-bold mb-4">Investment Management Services</h3>
                <p className="mb-6">
                  Hermes Finances provides comprehensive investment management services to help clients achieve their financial goals. With a focus on personalized strategies and long-term growth, we offer a range of services including portfolio management, retirement planning, and wealth preservation.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="bg-white/20 px-3 py-1 rounded-full">Portfolio Management</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full">Wealth Management</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full">Financial Planning</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full">Retirement Planning</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full">Tax Optimization</span>
                </div>
                <a 
                  href="https://hermesfinances.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/50 rounded-full px-6 py-2 transition-all duration-300"
                >
                  Visit Website
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Midas Finances Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Midas Finances</h2>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-8 text-white">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="w-48 h-48 rounded-xl overflow-hidden relative">
                  <Image 
                    src="/images/midasfinances_logo.jpg"
                    alt="Midas Finances Logo"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-xl"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-bold mb-4">Financial Technology Solutions</h3>
                <p className="mb-6">
                  At Midas Finances, we're leveraging technology to revolutionize how people interact with financial services. Our innovative fintech solutions combine cutting-edge technology with financial expertise to deliver seamless, efficient, and secure financial experiences.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="bg-white/20 px-3 py-1 rounded-full">Digital Asset Management</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full">Security Master Services</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full">Financial APIs and document services </span>
                  <span className="bg-white/20 px-3 py-1 rounded-full">Risk and Performance Analytics</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full">AI, tools and integration</span>
                </div>
                <a 
                  href="https://midasfinances.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/50 rounded-full px-6 py-2 transition-all duration-300"
                >
                  Visit Website
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 