import Image from 'next/image';

export default function QRElCerrito() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* QR Code Warning Section */}
      <section className="bg-red-500/90 backdrop-blur-sm rounded-lg p-6 mb-8 border-2 border-red-600">
        <div className="flex items-start gap-4">
          <div className="text-4xl">⚠️</div>
          <div className="text-white">
            <h2 className="text-2xl font-bold mb-3">If you are here, you scanned a QR code...</h2>
            <p className="mb-2">
              Please don't scan random QR codes, it is dangerous. They can: 
            </p>
            <ul className="list-disc list-inside space-y-1 mb-3">
              <li>link to malicious websites that steal personal information</li>
              <li>automatically download malware to your device</li>
              <li>scammers use fake QR codes to redirect you to phishing sites</li>
              <li>you can't see the destination URL before scanning</li>
            </ul>
            <p className="font-semibold">
              This site is not malicious, on the contrary. In every way. 
            </p>
          </div>
        </div>
      </section>

      {/* El Cerrito City Logo Section */}
      <section className="bg-white/90 backdrop-blur-sm rounded-lg p-8 mb-8 text-center">
        <div className="mb-6">
          <Image
            src="/images/elcerrito.jpeg"
            alt="El Cerrito City Logo"
            width={400}
            height={200}
            className="mx-auto border-4 border-gray-300 rounded-lg p-4 bg-white shadow-md"
          />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Jani for the city council!</h1>
        <p className="text-xl text-gray-600">Janos Szlatenyi</p>
      </section>

      {/* Introduction Section */}
      <section className="bg-white/90 backdrop-blur-sm rounded-lg p-8 mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
        <div className="text-gray-700 space-y-4">
          <p>
            Hello! I'm Janos Szlatenyi, I'm the "concerned citizen" of El Cerrito. I'm a US citizen, originally from Hungary, but I've been living in the bay for the last 15 years, I'm married, and I'm living nearby the Korematsu middle school for the last 5 years. 
            <p>
            I'm an economist by trade, and I've been working in the fintech/financial services sector for the last 15 years. I'm good wiht computers, I have a strong hacker metality.           
          </p>
          </p>
          <p>
          
          </p>
        </div>
      </section>

      {/* Current Issues Section */}
      <section className="bg-white/90 backdrop-blur-sm rounded-lg p-8 mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Current Issues and Opinions</h2>
        <div className="text-gray-700 space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-blue-600 mb-2">🏗️ TOD Project and Library</h3>
            <p>
              The Transit-Oriented Development project and the future of our library are critical issues facing our city. We need to carefully evaluate the impact on our community and ensure that any development serves the best interests of El Cerrito residents.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-600 mb-2">🛣️ Richmond Street</h3>
            <p>
              Richmond Street is a vital artery of our city that requires attention and thoughtful planning for its future development and maintenance. We must consider both traffic flow and pedestrian safety in any improvements.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-600 mb-2">💰 Municipal Finances</h3>
            <p>
              Financial stability is paramount for our city's future. As a member of the Financial Advisory Board, I understand the importance of responsible fiscal management and maintaining our city's financial health.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-white/90 backdrop-blur-sm rounded-lg p-8 mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">My Vision for El Cerrito</h2>
        <div className="text-gray-700 space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-blue-600 mb-2">🤝 Community Engagement and Development</h3>
            <p>
              I envision a more connected and engaged El Cerrito, where residents actively participate in shaping our city's future. We need to strengthen community bonds and create more opportunities for civic involvement.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-600 mb-2">👨‍👩‍👧‍👦 Age Distribution Balance</h3>
            <p>
              We need to address our city's demographic challenges and create an environment that attracts and retains young families while supporting our senior residents. A balanced age distribution is crucial for a vibrant and sustainable community.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="bg-blue-600/90 backdrop-blur-sm rounded-lg p-8 mb-8 text-white">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="text-2xl">📧</span>
            <div>
              <p className="font-semibold">Email</p>
              <a href="mailto:jani@szlatenyi.net" className="hover:underline">
                [jani@szlatenyi.net]
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-2xl">📱</span>
            <div>
              <p className="font-semibold">Phone</p>
              <a href="tel:+1234567890" className="hover:underline">
                [909 343 3108]
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-2xl">🌐</span>
            <div>
              <p className="font-semibold">Website</p>
              <a href="https://szlatenyi.net" className="hover:underline">
                szlatenyi.net
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
