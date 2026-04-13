import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy — KoalityKids",
  description: "How KoalityKids collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-sage">
      {/* Header */}
      <header className="bg-white border-b border-black/5">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="text-lg font-bold text-text-primary">
            Koality<span className="gradient-text">Kids</span>
          </Link>
          <Link
            href="/"
            className="text-sm text-text-secondary hover:text-text-primary transition-colors flex items-center gap-1"
          >
            <ArrowLeft size={14} />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="py-16 px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-sm">
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-text-secondary mb-10">
            Last updated: {new Date().toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" })}
          </p>

          <div className="space-y-10 text-sm text-text-secondary leading-relaxed">

            {/* ── 1. Introduction ── */}
            <Section title="1. Introduction">
              <p className="mb-3">
                Koality Pty Ltd (ABN pending) (&quot;KoalityKids&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to
                protecting the privacy of children and their families. This Privacy Policy explains how we
                collect, use, disclose, store, and safeguard personal information when you access or use our
                mobile application, website, and related services (collectively, the &quot;Service&quot;).
              </p>
              <p className="mb-3">
                KoalityKids is headquartered on the Sunshine Coast, Queensland, Australia. We provide our
                Service to users worldwide and are committed to complying with applicable privacy laws,
                including the Australian Privacy Act 1988 (Cth), the Australian Privacy Principles (APPs),
                the EU General Data Protection Regulation (GDPR), the UK GDPR, and the U.S. Children&apos;s
                Online Privacy Protection Act (COPPA).
              </p>
              <p>
                By using our Service, you agree to the collection and use of information in accordance with
                this Privacy Policy. If you do not agree, please do not use the Service.
              </p>
            </Section>

            {/* ── 2. Scope & Applicability ── */}
            <Section title="2. Scope &amp; Applicability">
              <p className="mb-3">This Privacy Policy applies to all users of the Service, including:</p>
              <ul className="list-disc pl-5 space-y-1 mb-3">
                <li><strong>Children</strong> — individuals under the age of 16 who use the KoalityKids app.</li>
                <li><strong>Parents &amp; Guardians</strong> — adults who create and manage accounts on behalf of their children.</li>
                <li><strong>Educators &amp; Schools</strong> — teachers, administrators, and educational institutions that use KoalityKids Enterprise.</li>
                <li><strong>Website Visitors</strong> — individuals who visit our website without creating an account.</li>
              </ul>
              <p>
                This policy does not apply to third-party websites, applications, or services linked from our Service.
                We encourage you to review the privacy policies of any third-party services you access.
              </p>
            </Section>

            {/* ── 3. Information We Collect ── */}
            <Section title="3. Information We Collect">
              <SubSection title="3.1 Information You Provide">
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Account registration:</strong> parent/guardian email address, password, child&apos;s display name, and age range.</li>
                  <li><strong>Profile information:</strong> optional avatar, interests, and preferences.</li>
                  <li><strong>User content:</strong> photos, observations, journal entries, and other content created within the app.</li>
                  <li><strong>Communications:</strong> messages you send to us via email or in-app support.</li>
                  <li><strong>Payment information:</strong> subscription and billing details, processed securely by our third-party payment providers (e.g., Apple App Store, Google Play). We do not store credit card numbers.</li>
                </ul>
              </SubSection>
              <SubSection title="3.2 Information Collected Automatically">
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Device information:</strong> device type, operating system, unique device identifiers, and app version.</li>
                  <li><strong>Usage data:</strong> features accessed, time spent in the app, interactions, and crash reports.</li>
                  <li><strong>Location data:</strong> approximate location (if permitted) to tag observations. We do not track precise real-time location. Location permissions can be revoked at any time.</li>
                  <li><strong>Log data:</strong> IP address, browser type, referring/exit pages, and timestamps.</li>
                </ul>
              </SubSection>
              <SubSection title="3.3 Information from Third Parties">
                <p>
                  We may receive limited information from third-party authentication providers (e.g., Sign in with Apple,
                  Google Sign-In) if you choose to use them. This is limited to your name and email address.
                </p>
              </SubSection>
            </Section>

            {/* ── 4. How We Use Your Information ── */}
            <Section title="4. How We Use Your Information">
              <p className="mb-3">We use the information we collect for the following purposes:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Provide the Service:</strong> deliver AI-powered identification, maintain journals, track badges, and enable social features.</li>
                <li><strong>Personalisation:</strong> tailor content, challenges, and recommendations to each child&apos;s interests and progress.</li>
                <li><strong>Safety &amp; moderation:</strong> monitor for inappropriate content and ensure a safe environment for children.</li>
                <li><strong>Improvement &amp; research:</strong> analyse usage patterns to improve features, fix bugs, and develop new functionality.</li>
                <li><strong>Communications:</strong> send service-related notifications, updates, and (with consent) promotional materials to parents.</li>
                <li><strong>Legal compliance:</strong> comply with legal obligations, enforce our terms, and protect our rights.</li>
                <li><strong>Customer support:</strong> respond to enquiries, troubleshoot issues, and provide assistance.</li>
              </ul>
            </Section>

            {/* ── 5. Legal Bases for Processing ── */}
            <Section title="5. Legal Bases for Processing (EEA, UK &amp; International Users)">
              <p className="mb-3">Where applicable under the GDPR or similar legislation, we rely on the following legal bases:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Consent:</strong> where you (or a parent/guardian on behalf of a child) have given explicit consent, such as for location data or marketing communications.</li>
                <li><strong>Contract:</strong> processing necessary to provide the Service you have requested.</li>
                <li><strong>Legitimate interests:</strong> improving and securing our Service, provided these interests are not overridden by your rights.</li>
                <li><strong>Legal obligation:</strong> processing required to comply with applicable laws.</li>
              </ul>
            </Section>

            {/* ── 6. Children's Privacy ── */}
            <Section title="6. Children&apos;s Privacy">
              <p className="mb-3">
                Protecting children&apos;s privacy is central to everything we do. KoalityKids is designed as a
                child-safe platform from the ground up.
              </p>
              <SubSection title="6.1 Parental Consent">
                <p>
                  We require verifiable parental or guardian consent before collecting any personal information
                  from a child. Child accounts can only be created by an authenticated parent or guardian.
                  We comply with COPPA (for users in the United States) and the GDPR&apos;s provisions for
                  children&apos;s data (for users in the EEA/UK).
                </p>
              </SubSection>
              <SubSection title="6.2 What We Collect from Children">
                <p className="mb-3">We limit the data we collect from children to what is strictly necessary:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Display name (not required to be a real name)</li>
                  <li>Age range (not date of birth)</li>
                  <li>Photos and observations created within the app</li>
                  <li>Badge and challenge progress</li>
                  <li>App usage data for service improvement</li>
                </ul>
              </SubSection>
              <SubSection title="6.3 What We Do NOT Do">
                <ul className="list-disc pl-5 space-y-1">
                  <li>We do <strong>not</strong> sell children&apos;s personal information. Ever.</li>
                  <li>We do <strong>not</strong> serve behavioural or targeted advertising to children.</li>
                  <li>We do <strong>not</strong> use children&apos;s data for profiling or automated decision-making.</li>
                  <li>We do <strong>not</strong> require children to disclose more information than is necessary.</li>
                  <li>We do <strong>not</strong> allow children to make their profiles publicly searchable.</li>
                </ul>
              </SubSection>
              <SubSection title="6.4 Parental Rights">
                <p className="mb-3">Parents and guardians have the right to:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Review all personal information collected from their child.</li>
                  <li>Request correction or deletion of their child&apos;s data.</li>
                  <li>Withdraw consent and have their child&apos;s account deleted.</li>
                  <li>Manage privacy settings, content visibility, and social features through the Parent Portal.</li>
                </ul>
                <p className="mt-3">
                  To exercise these rights, use the Parent Portal within the app or contact us at{" "}
                  <a href="mailto:hello@koalitytech.com" className="text-purple hover:underline">hello@koalitytech.com</a>.
                </p>
              </SubSection>
            </Section>

            {/* ── 7. AI & Identification Features ── */}
            <Section title="7. AI &amp; Identification Features">
              <p className="mb-3">
                KoalityKids uses child-safe artificial intelligence to power identification features. When a
                child takes a photo within the app:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>The image is processed by our AI systems to provide identification and educational content.</li>
                <li>Images may be stored to improve identification accuracy over time, but are never linked to a child&apos;s identity for any purpose other than their personal journal.</li>
                <li>We do not use facial recognition technology.</li>
                <li>AI-generated responses are designed to be age-appropriate and are reviewed for safety.</li>
                <li>No personal data from children is used to train third-party AI models.</li>
              </ul>
            </Section>

            {/* ── 8. Data Sharing & Disclosure ── */}
            <Section title="8. Data Sharing &amp; Disclosure">
              <p className="mb-3">
                We do <strong>not</strong> sell, rent, or trade personal information. We may share data only in
                the following limited circumstances:
              </p>
              <SubSection title="8.1 Service Providers">
                <p>
                  We engage trusted third-party providers to help operate and improve the Service (e.g., cloud
                  hosting, analytics, payment processing, customer support). These providers are contractually
                  bound to use personal information only as necessary to perform services on our behalf and are
                  required to maintain appropriate security measures.
                </p>
              </SubSection>
              <SubSection title="8.2 Schools &amp; Educators (Enterprise)">
                <p>
                  For Enterprise accounts, limited child data (display name, observations, and progress) may be
                  shared with authorised educators at the institution that manages the account. Schools act as
                  data controllers for their students&apos; information.
                </p>
              </SubSection>
              <SubSection title="8.3 Legal Requirements">
                <p>
                  We may disclose information if required to do so by law, regulation, legal process, or
                  governmental request, or if we believe disclosure is necessary to protect the safety of
                  any person, prevent fraud, or protect our legal rights.
                </p>
              </SubSection>
              <SubSection title="8.4 Business Transfers">
                <p>
                  In the event of a merger, acquisition, or sale of assets, personal information may be
                  transferred as part of the transaction. We will notify you of any such change and any
                  choices you may have regarding your information.
                </p>
              </SubSection>
            </Section>

            {/* ── 9. Cookies & Tracking Technologies ── */}
            <Section title="9. Cookies &amp; Tracking Technologies">
              <p className="mb-3">
                Our website may use cookies and similar technologies for the following purposes:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Essential cookies:</strong> required for the website to function properly (e.g., session management).</li>
                <li><strong>Analytics cookies:</strong> help us understand how visitors interact with our website so we can improve it.</li>
              </ul>
              <p className="mt-3">
                We do <strong>not</strong> use cookies for advertising or behavioural tracking. We do <strong>not</strong> use
                cookies within the child-facing app. You can manage cookie preferences through your browser settings.
              </p>
            </Section>

            {/* ── 10. International Data Transfers ── */}
            <Section title="10. International Data Transfers">
              <p className="mb-3">
                KoalityKids is based in Australia and our primary data storage is in Australia. However, some
                of our service providers may process data in other jurisdictions. Where personal information is
                transferred outside of your country of residence, we ensure appropriate safeguards are in place, including:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Standard Contractual Clauses (SCCs) approved by the European Commission.</li>
                <li>Data processing agreements with all third-party providers.</li>
                <li>Compliance with the Australian Privacy Principles regarding cross-border disclosure.</li>
              </ul>
            </Section>

            {/* ── 11. Data Security ── */}
            <Section title="11. Data Security">
              <p className="mb-3">
                We take the security of your information seriously and implement a range of technical and
                organisational measures, including:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Encryption of data in transit (TLS/SSL) and at rest (AES-256).</li>
                <li>Secure authentication and access controls.</li>
                <li>Regular security assessments and vulnerability testing.</li>
                <li>Employee access to personal data is restricted on a need-to-know basis.</li>
                <li>Incident response procedures to address any data breach promptly.</li>
              </ul>
              <p className="mt-3">
                While we strive to protect your personal information, no method of transmission over the internet
                or electronic storage is completely secure. We cannot guarantee absolute security.
              </p>
            </Section>

            {/* ── 12. Data Retention & Deletion ── */}
            <Section title="12. Data Retention &amp; Deletion">
              <p className="mb-3">
                We retain personal information only for as long as necessary to fulfil the purposes described
                in this policy, or as required by law. Specifically:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Active accounts:</strong> data is retained for the duration of the account&apos;s active use.</li>
                <li><strong>Inactive accounts:</strong> accounts inactive for 24 months may be flagged for deletion, with prior notice to the account holder.</li>
                <li><strong>Deleted accounts:</strong> upon account deletion, personal data is permanently removed within 30 days, except where retention is required by law.</li>
                <li><strong>Aggregated data:</strong> anonymised, aggregated data that cannot identify any individual may be retained indefinitely for research and improvement purposes.</li>
              </ul>
              <p className="mt-3">
                You can delete your account and all associated data at any time through the Parent Portal or by
                contacting us at{" "}
                <a href="mailto:hello@koalitytech.com" className="text-purple hover:underline">hello@koalitytech.com</a>.
              </p>
            </Section>

            {/* ── 13. Your Rights ── */}
            <Section title="13. Your Rights">
              <p className="mb-3">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Access:</strong> request a copy of the personal information we hold about you or your child.</li>
                <li><strong>Rectification:</strong> request correction of inaccurate or incomplete data.</li>
                <li><strong>Erasure:</strong> request deletion of your personal data (&quot;right to be forgotten&quot;).</li>
                <li><strong>Restriction:</strong> request restriction of processing in certain circumstances.</li>
                <li><strong>Data portability:</strong> request a copy of your data in a structured, machine-readable format.</li>
                <li><strong>Objection:</strong> object to processing based on legitimate interests or for direct marketing.</li>
                <li><strong>Withdraw consent:</strong> withdraw consent at any time where processing is based on consent.</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, please contact us at{" "}
                <a href="mailto:hello@koalitytech.com" className="text-purple hover:underline">hello@koalitytech.com</a>.
                We will respond to your request within 30 days (or sooner where required by law). You also have the right
                to lodge a complaint with your local data protection authority.
              </p>
              <SubSection title="Australian Users">
                <p>
                  Under the Australian Privacy Act 1988, you have the right to access and correct your personal
                  information. If you believe we have breached the APPs, you may lodge a complaint with the
                  Office of the Australian Information Commissioner (OAIC) at{" "}
                  <a href="https://www.oaic.gov.au" className="text-purple hover:underline" target="_blank" rel="noopener noreferrer">www.oaic.gov.au</a>.
                </p>
              </SubSection>
              <SubSection title="EEA &amp; UK Users">
                <p>
                  You have rights under the GDPR/UK GDPR as outlined above. You may contact your local
                  supervisory authority if you have concerns about how we process your data.
                </p>
              </SubSection>
            </Section>

            {/* ── 14. Third-Party Links & Services ── */}
            <Section title="14. Third-Party Links &amp; Services">
              <p>
                Our Service may contain links to third-party websites or services. We are not responsible for
                the privacy practices of these third parties. We encourage you to read the privacy policies of
                any third-party services you visit. KoalityKids does not share children&apos;s personal information
                with third parties for their own marketing purposes.
              </p>
            </Section>

            {/* ── 15. Changes to This Policy ── */}
            <Section title="15. Changes to This Privacy Policy">
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology,
                legal requirements, or other factors. We will notify you of any material changes by posting the
                updated policy on this page, updating the &quot;Last updated&quot; date at the top, and (where appropriate)
                sending a notification via email or in-app alert. We encourage you to review this policy periodically.
                Continued use of the Service after changes constitutes acceptance of the updated policy.
              </p>
            </Section>

            {/* ── 16. Contact Us ── */}
            <Section title="16. Contact Us">
              <p className="mb-3">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data
                practices, please contact us:
              </p>
              <ul className="list-none space-y-1">
                <li><strong>Email:</strong>{" "}
                  <a href="mailto:hello@koalitytech.com" className="text-purple hover:underline">hello@koalitytech.com</a>
                </li>
                <li><strong>Company:</strong> Koality Pty Ltd</li>
                <li><strong>Location:</strong> Sunshine Coast, QLD, Australia</li>
              </ul>
              <p className="mt-3">
                For enquiries specifically related to children&apos;s data, please include &quot;Children&apos;s Privacy&quot;
                in the subject line so we can prioritise your request.
              </p>
            </Section>
          </div>
        </div>
      </main>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-lg font-semibold text-text-primary mb-3">{title}</h2>
      {children}
    </div>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-4">
      <h3 className="text-sm font-semibold text-text-primary mb-2">{title}</h3>
      {children}
    </div>
  );
}
