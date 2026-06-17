export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen" style={{ background: '#F2EDE3' }}>
      {/* Subtle radial glow matching the app's atmospheric background */}
      <div className="fixed inset-0 pointer-events-none" aria-hidden>
        <div
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(22,106,69,0.12) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute top-1/2 -left-32 w-[400px] h-[400px] rounded-full opacity-25"
          style={{
            background: 'radial-gradient(circle, rgba(201,150,42,0.14) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24">
        {/* Header */}
        <div className="animate-fade-up mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-10 h-10 rounded-2xl flex items-center justify-center"
              style={{ background: '#166A45' }}
            >
              <span className="text-white font-black text-sm tracking-tight">M</span>
            </div>
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#6B6B6B', letterSpacing: '0.15em' }}>
              Minaret Atelier
            </span>
          </div>
          <h1
            className="text-4xl md:text-5xl font-black tracking-tight mb-3"
            style={{ color: '#1A1A1A', letterSpacing: '-0.02em' }}
          >
            Privacy Policy
          </h1>
          <p className="text-sm font-medium" style={{ color: '#6B6B6B' }}>
            Effective Date: 1 June 2026
          </p>
          <div className="h-px mt-8" style={{ background: 'rgba(201,150,42,0.25)' }} />
        </div>

        {/* Content Card */}
        <div
          className="glass-card rounded-[2rem] p-8 md:p-12 animate-fade-up-delay-1"
        >
          <div className="prose max-w-none">
            <p style={{ color: '#3A3A3A' }}>
              Minaret ("we", "our", or "us") is an Islamic lifestyle application operated by
              Minaret Atelier. The app provides prayer time calculations, a global mosque
              directory, Quran reading with audio, Hadith collections, Janaza announcements,
              community notifications, and Imam identity verification. This Privacy Policy
              explains what information we collect, how we use it, and your rights regarding
              your data.
            </p>

            <h2>1. Information We Collect</h2>

            <h3>Account Information</h3>
            <p>
              When you create an account we collect your name, email address, and profile photo.
              Mosque administrators and Imams requesting verification provide additional
              professional information (such as identification documents and credentials) during
              that process.
            </p>

            <h3>Location Data</h3>
            <p>
              When you use prayer time calculations or the mosque finder we request access to
              your device location. Location data is used in real time to calculate accurate
              prayer times for your latitude and longitude and to show nearby mosques.
              <strong> We do not store your location history </strong> — location is processed
              as needed and not retained.
            </p>

            <h3>Device &amp; Usage Data</h3>
            <p>We may collect the following device and usage-related information:</p>
            <ul>
              <li>Device model, operating system version, and language preference</li>
              <li>App version and session telemetry (e.g., feature usage, button taps)</li>
              <li>Crash reports and error logs via Firebase Crashlytics</li>
              <li>Performance monitoring data via Firebase Performance Monitoring</li>
              <li>Notifications open / dismiss events</li>
            </ul>

            <h3>Visual / Media Data</h3>
            <p>
              If you use camera-related features (such as scanning a mosque prayer-board via
              on-device OCR, or submitting an ID document for Imam verification), the image or
              scan data is processed on-device by Google ML Kit. We do not upload or retain
              images beyond what is necessary for verification or the specific processing task.
            </p>

            <h2>2. How We Use Your Information</h2>
            <p>Your information is used to:</p>
            <ul>
              <li>Calculate and display prayer times based on your current location</li>
              <li>Show nearby mosques and deliver mosque announcements</li>
              <li>Deliver scheduled Adhan (call-to-prayer) notifications</li>
              <li>Verify mosque administrator and Imam credentials</li>
              <li>Personalise content in your preferred language</li>
              <li>Diagnose, fix, and improve technical issues</li>
              <li>Prevent abuse and secure the platform</li>
            </ul>
            <p>
              We do <strong>not</strong> sell your personal information to any third party.
            </p>

            <h2>3. Third-Party Services</h2>
            <p>
              Minaret uses the following third-party services. Each service collects data in
              accordance with its own privacy policy.
            </p>
            <ul>
              <li>
                <strong>Firebase (Google LLC)</strong> — authentication (Firebase Auth), cloud
                database (Cloud Firestore), server-side logic (Cloud Functions), file storage
                (Cloud Storage), push notifications (Cloud Messaging), crash reporting
                (Crashlytics), analytics (Firebase Analytics and Performance Monitoring), and
                remote configuration. Google&apos;s privacy policy (
                <a href="https://policies.google.com/privacy">policies.google.com/privacy</a>
                ) governs data processed by Firebase services.
              </li>
              <li>
                <strong>Google Sign-In</strong> — allows you to sign in with your Google
                account. Google processes the sign-in flow; we receive only your profile name,
                email, and photo as provided by Google. (
                <a href="https://policies.google.com/privacy">policies.google.com/privacy</a>
                )
              </li>
              <li>
                <strong>Google AdMob</strong> — serves banner and interstitial advertisements.
                AdMob may collect device identifiers and interaction data to personalise ads.
                You may opt out of personalised ads in your device settings. (
                <a href="https://policies.google.com/privacy">policies.google.com/privacy</a>
                )
              </li>
              <li>
                <strong>Google ML Kit</strong> — performs on-device text recognition (OCR) for
                scanning identification documents and mosque prayer-time boards. Images are
                processed locally on your device and not uploaded to Google servers.
                (
                <a href="https://policies.google.com/privacy">policies.google.com/privacy</a>
                )
              </li>
            </ul>

            <h2>4. Data Security</h2>
            <p>
              All data transmitted between the app and our servers is sent over encrypted HTTPS
              connections. Account authentication is handled through Firebase Authentication.
              Firestore security rules restrict each user to their own data. We apply
              certificate pinning on connections to our own backend to prevent interception.
              On-device storage is secured via platform mechanisms (Keychain / Keystore) where
              applicable.
            </p>

            <h2>5. Data Retention</h2>
            <ul>
              <li>Account data is retained while your account remains active.</li>
              <li>Notification records are automatically deleted after 90 days.</li>
              <li>ID scan or verification submissions are retained only as long as required for
              review; they are deleted upon completion or rejection.</li>
              <li>You may request deletion of your account and all associated data at any time
              (see Section 6).</li>
            </ul>

            <h2>6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request export of your data in a portable format</li>
              <li>Request deletion of your account and associated data</li>
              <li>Withdraw consent for optional permissions (location, camera)</li>
            </ul>
            <p>
              To exercise any of these rights, contact us at{" "}
              <strong>minaret.coo@gmail.com</strong>. We will respond within 30 days.
            </p>

            <h2>7. Children&apos;s Privacy</h2>
            <p>
              Minaret is not directed at children under the age of 13. We do not knowingly
              collect personal information from children. If you believe a child has provided
              us with information, contact us at minaret.coo@gmail.com and we will delete it
              promptly.
            </p>

            <h2>8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of
              material changes through the app or by email. Continued use of Minaret after
              changes are posted constitutes acceptance. You are advised to review this page
              periodically.
            </p>

            <h2>9. Contact Us</h2>
            <p>
              For privacy questions, data subject requests, or general inquiries:
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:minaret.coo@gmail.com">minaret.coo@gmail.com</a>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="animate-fade-up-delay-2 mt-12 text-center">
          <div className="h-px mb-8" style={{ background: 'rgba(201,150,42,0.2)' }} />
          <p className="text-xs font-medium" style={{ color: '#6B6B6B', letterSpacing: '0.04em' }}>
            © {new Date().getFullYear()} Minaret Atelier. All rights reserved.
          </p>
          <p className="text-xs mt-1" style={{ color: '#6B6B6B' }}>
            A high-end digital atelier for professional prayer management.
          </p>
        </div>
      </div>
    </div>
  );
}
