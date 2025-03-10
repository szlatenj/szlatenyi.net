import Link from 'next/link';

export default function CV() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">Curriculum Vitae</h1>
        
        {/* Personal Info Section */}
        <section className="mb-12">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Jani Szlatenyi</h2>
            <p className="text-xl mb-4">Tech-savvy Economist | Data Engineering & Analytics Lead | Technology Management</p>
            <div className="flex flex-wrap gap-4 text-white/80">
              <p>El Cerrito, CA 94530</p>
              <p>|</p>
              <p>(909) 343-3108</p>
              <p>|</p>
              <p>jani@szlatenyi.net</p>
            </div>
          </div>
        </section>
        
        {/* Summary Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Summary</h2>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-8 text-white">
            <p className="mb-4">
              Experienced technology and data professional with a strong background in economics, risk and performance analytics, and financial technology. Over 15 years of experience contributing to innovation and business growth in the financial sector, with progressively increasing responsibilities. Strong contributor to MSCI's remarkable growth over the past 15 years, as the company expanded its workforce by over 550% and grew its market capitalization to more than $40 billion. During this period, the analytics business experienced more than tenfold growth.
            </p>
            <p className="mb-4">
              Instrumental in building and developing global teams, executing on location and technology strategy, building out global presence in both data operations and project work, including direct support for high-profile clients. Deep expertise in financial markets data and technical vendor management, analytics, and risk management systems. Proven track record of leading cross-functional teams, managing engineering heavy and research driven complex projects, and bridging technical and business aspects in various initiatives across the firm.
            </p>
          </div>
        </section>
        
        {/* Core Competencies */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Core Competencies</h2>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-8 text-white">
            <div className="flex flex-wrap gap-3">
              <span className="bg-white/20 px-3 py-1 rounded-full">Leadership</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">Technology Management</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">Financial Technology (FinTech)</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">Product Management</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">Data Architecture</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">Risk Management</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">Technical Project/Program Management</span>
            </div>
          </div>
        </section>
        
        {/* Professional Experience */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Professional Experience</h2>
          
          {/* MSCI Executive Director */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-8 text-white mb-6">
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold">MSCI, Berkeley</h3>
                <p className="text-xl font-semibold">Executive Director / Technology and Data</p>
              </div>
              <p className="text-white/80">January 2020 - July 2024</p>
            </div>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Coordinated across IT, Program Management, and Data organizations on various analytics projects</li>
              <li>Acted as proxy of Product (BU) and represented their priorities in the various engineering organizations</li>
              <li>Ensured adequate data support and coordination across analytics</li>
              <li>Worked on the technology transformation of the engineering organization</li>
              <li>Created Root Cause Analyses (RCAs) and implemented RCA-driven improvements</li>
              <li>Led DevOps transformation in data engineering</li>
              <li>Supported new product initiatives and cross-product compatibility efforts</li>
            </ul>
            <h4 className="font-semibold mb-2">Business Impact:</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>Improved data integrity and system stability especially around timeliness</li>
              <li>Contributed significantly to enhancing cross-compatibility between platforms</li>
              <li>Enhanced data architecture to support cutting-edge financial analytics products</li>
              <li>Drove operational efficiency and data integrity improvements across global organizations</li>
            </ul>
          </div>
          
          {/* MSCI Vice President */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-8 text-white mb-6">
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold">MSCI</h3>
                <p className="text-xl font-semibold">Vice President / Data Content Services - 3rd Party Benchmark</p>
              </div>
              <p className="text-white/80">January 2016 - January 2020</p>
            </div>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Led global team responsible for 3rd party portfolio content digestion and normalization</li>
              <li>Successfully grew the team from 9 to 20+ people</li>
              <li>Completed Agile transformation with IT and Business analyst integration</li>
              <li>Managed data from 35+ major benchmark vendors on various interfaces</li>
              <li>Enhanced portfolio store systems with quality assurance and lean operations</li>
            </ul>
            <h4 className="font-semibold mb-2">Business Impact:</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>Led, grew and ran a robust engineering and data team</li>
              <li>Expanded benchmark and Fund coverage, significantly enhancing MSCI's market position</li>
              <li>Drove and contributed to Performance Attribution transformation</li>
            </ul>
          </div>
          
          {/* Previous Roles - Summarized */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-8 text-white">
            <h3 className="text-xl font-bold mb-4">Previous Roles</h3>
            <ul className="space-y-4">
              <li>
                <div className="flex flex-col md:flex-row justify-between">
                  <p className="font-semibold">Vice President / Data Content Services - Data Integration</p>
                  <p className="text-white/80">January 2014 - January 2016</p>
                </div>
                <p className="text-white/90">MSCI, Berkeley</p>
              </li>
              <li>
                <div className="flex flex-col md:flex-row justify-between">
                  <p className="font-semibold">Sr. Associate / Data Content Services</p>
                  <p className="text-white/80">January 2009 - January 2014</p>
                </div>
                <p className="text-white/90">MSCI</p>
              </li>
              <li>
                <div className="flex flex-col md:flex-row justify-between">
                  <p className="font-semibold">Risk Modeling Analyst</p>
                  <p className="text-white/80">August 2007 - December 2008</p>
                </div>
                <p className="text-white/90">CIB Bank (SP-Intesa), Budapest</p>
              </li>
              <li>
                <div className="flex flex-col md:flex-row justify-between">
                  <p className="font-semibold">Risk Analyst, Statistician</p>
                  <p className="text-white/80">April 2005 - August 2007</p>
                </div>
                <p className="text-white/90">Cetelem (BnP Paribas), Budapest</p>
              </li>
            </ul>
          </div>
        </section>
        
        {/* Education */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Education</h2>
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-8 text-white">
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-xl font-bold">MSc in Economics</h3>
                <p className="text-white/80">September 2000 - May 2006</p>
              </div>
              <p className="mb-2">Pecsi Tudomanyegyetem, Pecs</p>
              <p className="text-white/90">Thesis: Prospect Theory - The way of economics to a more human-centric consumer model</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-8 text-white">
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-xl font-bold">BSc equivalent in IT Development - System Architecture</h3>
                <p className="text-white/80">September 1994 - May 2000</p>
              </div>
              <p className="mb-2">Rend-Szam/Kando Kalman Foiskola, Budapest</p>
              <p className="text-white/90">Enrolled parallel with High-school, with special permission.</p>
            </div>
          </div>
        </section>
        
        {/* Technical Skills */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Technical Skills</h2>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-8 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold mb-3">Programming</h3>
                <p className="text-white/90">Linux, C, Pascal, Python, SQL, Git</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Statistical Software</h3>
                <p className="text-white/90">SAS, Stata, R, Octave</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Office Tools</h3>
                <p className="text-white/90">Microsoft Office Suite, Atlassian</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Visualization Tools</h3>
                <p className="text-white/90">Spotfire, PowerBI, Tableau</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Cloud Platforms</h3>
                <p className="text-white/90">Azure, Google Cloud</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Databases</h3>
                <p className="text-white/90">Oracle, MS SQL, Sybase</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Languages */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">Languages</h2>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-8 text-white">
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/20 px-4 py-2 rounded-full">
                <span className="font-semibold">Hungarian:</span> Native
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-full">
                <span className="font-semibold">English:</span> Advanced
              </div>
            </div>
          </div>
        </section>
        
        {/* Download CV Button */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/50 rounded-full px-8 py-3 transition-all duration-300"
          >
            Download Full CV
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
} 