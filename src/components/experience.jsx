export default function Experience() {
  return (
    <div className="bg-indigo-900 min-h-screen py-16 text-center">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-12 border-b-4 border-indigo-500 inline-block pb-2">
          Experience
        </h1>

        <div className="space-y-8 text-left">
          {/* AppSecure Security */}
          <div className="rounded-2xl p-6 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg transition-transform hover:scale-[1.02] text-white">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
              <div>
                <h3 className="text-2xl font-semibold text-indigo-200">
                  Penetration Testing Intern
                </h3>
                <p className="text-indigo-300">AppSecure Security</p>
              </div>
              <span className="text-sm text-slate-300 mt-2 md:mt-0">
                July 2026 – Sep 2026
              </span>
            </div>
            <ul className="list-disc list-inside space-y-2 text-slate-200">
              <li>
                Performed OWASP-based web application penetration testing across
                client engagements, identifying IDOR, CORS misconfigurations,
                SQL injection, XSS, CSRF, and JWT-related weaknesses.
              </li>
              <li>
                Conducted Android static analysis with JADX-GUI, secrets
                detection with TruffleHog, and attack-surface mapping using
                Katana, Nuclei, and Nmap.
              </li>
              <li>
                Delivered structured remediation guidance for real client
                applications and network infrastructure, maintaining strict
                confidentiality.
              </li>
            </ul>
          </div>

          {/* Jazzee Technologies */}
          <div className="rounded-2xl p-6 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg transition-transform hover:scale-[1.02] text-white">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
              <div>
                <h3 className="text-2xl font-semibold text-indigo-200">
                  Cybersecurity &amp; AI Intern
                </h3>
                <p className="text-indigo-300">Jazzee Technologies</p>
              </div>
              <span className="text-sm text-slate-300 mt-2 md:mt-0">
                Jan 2025 – June 2026
              </span>
            </div>
            <ul className="list-disc list-inside space-y-2 text-slate-200">
              <li>
                Assessed an ERP system for Silicon University, identifying
                weaknesses in access controls, authentication flows, and data
                exposure points.
              </li>
              <li>
                Studied HackerOne bug bounty reports and AI-integrated
                security workflows to strengthen real-world vulnerability
                triage skills.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
