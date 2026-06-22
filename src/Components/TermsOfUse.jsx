import { Link } from "react-router-dom";

const sections = [
  {
    title: "TERMS OF USE - Website",
    content: (
      <>
        <p>
          These terms of use (this &apos;Agreement&apos;) set forth the standards of use of{" "}
          <a
            href="https://www.mdrcindia.com"
            className="text-[#005C96] underline hover:text-[#0ECE91]"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.mdrcindia.com
          </a>{" "}
          and all of its associated internal pages and linked websites. The link{" "}
          https://www.mdrcindia.com and all such associated pages and websites are collectively
          referred to herein as the Website.
        </p>
        <p>
          The words &apos;You&apos; or &apos;User&apos; &apos;Your&apos; as used herein refer to all
          individuals accessing or using the Website to avail its services or any other purposes.
        </p>
        <p>
          By using the Website, You represent that you have read and agree to be bound by the terms
          of this Agreement, as well as any other guidelines, processes, privacy policy, rules and
          additional terms referenced herein, collectively referred to as &apos;Terms of Use&apos;.
          These Terms of Use set out the legally binding terms with respect to your access and use
          of the Website and our provision of Services by Modern Diagnostic &amp; Research Centre Pvt.
          Ltd. (as defined below).
        </p>
        <p>
          Please read these Terms of Use carefully. Your access to Website and/or use of the
          Service constitutes your acceptance of all the provisions of these Terms of Use. If you are
          unwilling to be bound by these Terms of Use, do not access Website and/or use the Service.
        </p>
      </>
    ),
  },
  {
    title: "1. DEFINITIONS AND INTERPRETATIONS",
    content: (
      <>
        <p className="font-semibold text-[#005C96]">Definitions</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>&apos;Account or Profile&apos;</strong> means the account successfully opened by
            the User on the Company&apos;s Website by inserting information such as name, age, sex,
            contact details, user name, password as required to be filled in the webpage during the
            registration process and includes any further changes and additions to the information
            from time to time.
          </li>
          <li>
            <strong>&apos;Company&apos;</strong> means Modern Diagnostic &amp; Research Centre Pvt.
            Ltd. or any of its assignee, incorporated under the Companies Act, 1956.
          </li>
          <li>
            <strong>&apos;Customer&apos;</strong> means any User who accesses the Website completes
            the registration according to clause 6.
          </li>
          <li>
            <strong>&apos;Health Packages&apos;</strong> means the exclusive and customized health
            diagnostic packages being offered by the Company and any such other packages which the
            Company may be introduced from time to time through website.
          </li>
          <li>
            <strong>&apos;Fee or Charges&apos;</strong> means the price prescribed by the Company
            for the Health Packages/Services or individual tests as notified on its Website from
            time to time.
          </li>
          <li>
            <strong>&apos;Home Sample Collection&apos;</strong> means the facility provided by the
            Company to facilitate Blood Sample Collection at the Customer&apos;s door step.
          </li>
          <li>
            <strong>&apos;Order ID or Visit ID&apos;</strong> means the unique identification number
            which is used by the Company to identify a Customer upon placing a request for booking
            the Services/ Health Packages.
          </li>
          <li>
            <strong>&apos;Registration Process&apos;</strong> means the entire process which a
            Customer/User undergoes while registering himself on the Website in accordance with
            clause 6.
          </li>
          <li>
            <strong>&apos;Services&apos;</strong> means the services as mentioned in clause 3.2.
          </li>
          <li>
            <strong>&apos;User&apos;</strong> means any person who accesses the Website.
          </li>
        </ul>
        <p className="mt-4 font-semibold text-[#005C96]">Interpretation</p>
        <p>
          In this Agreement, unless the context otherwise requires references to recitals, clauses
          and sub-clauses are to recitals, clauses and sub-clauses of this Agreement; headings are
          inserted for ease of reference only; references to the singular number shall include the
          plural number and vice versa; words denoting one gender include all genders; any reference
          in this Agreement to a statutory provision includes that provision and any regulation made
          in pursuance thereof, as from time to time modified or re-enacted; and any reference to a
          time limit in this Agreement means the time limit set out in the relevant clause or
          sub-clause or such other time limit which may be mutually agreed by the parties in
          writing.
        </p>
      </>
    ),
  },
  {
    title: "2. ELIGIBILITY",
    content: (
      <p>
        By using the Website and/or the Services, You represent and warrant that You have the right,
        authority, and capacity to enter into these Terms of Use and to abide by all of the terms
        and conditions set forth herein. You also represent and warrant to the Company that You will
        use Website in a manner consistent with any and all applicable laws and regulations.
      </p>
    ),
  },
  {
    title: "3. SERVICES",
    content: (
      <>
        <p>
          The use of this Website entitles the User, whether a User or a Customer, to avail certain
          services as provided in the following clauses (&apos;Services&apos;) and interpretation of
          the term &apos;Services&apos; shall be done accordingly depending upon the context.
        </p>
        <p className="font-semibold text-[#005C96]">The Users are entitled to the following Services:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            If You have not completed the registration as per clause 6, You are entitled to view the
            snapshots of various E-Health Packages or other offers being offered on the Website.
          </li>
          <li>
            If You have completed the registration as per clause 6, on the payment of Fee, You are
            entitled to book E-Health Packages, opt for Home Service or Centre visit, receive
            Order ID/Visit Number, and receive test reports within the suggested time.
          </li>
          <li>
            By clicking the button Get Call Now, I agree to be called on behalf of Modern Diagnostic
            &amp; Research Centre, using an automatic telephone dialling system.
          </li>
          <li>
            Government mandated documents required for certain investigations must be provided at
            the time of visit or home collection. Failure to produce required documents will result
            in test not being performed.
          </li>
          <li>
            Services opted at checkout are non-transferable. The Customer must carry photo ID, copy
            of invoice and Order ID/Visit number when visiting the Lab or availing Home Service.
          </li>
        </ul>
        <p className="mt-4">
          The Company reserves the right to change the nature of Services at its sole discretion.
          Such change may be notified to the User/Customer by publishing the same on the Website.
        </p>
      </>
    ),
  },
  {
    title: "4. REGISTRATION PROCESS",
    content: (
      <ul className="list-disc space-y-2 pl-5">
        <li>The Registration Process involves creating a login id in accordance with clause 3.2.2.</li>
        <li>
          Registration is mandatory for Customers and requires basic information such as name, age,
          sex, email address, collection address, zip/postal code and phone number.
        </li>
        <li>
          Only after completing the Registration Process, Users become Customers entitled to avail
          Services subject to payment of Fee.
        </li>
        <li>
          The Company may screen and verify information and may ask for further information even
          after Registration Process.
        </li>
      </ul>
    ),
  },
  {
    title: "5. PAYMENT",
    content: (
      <ul className="list-disc space-y-2 pl-5">
        <li>
          The Company shall endeavour to provide facilities/gateways to pay the Fee through credit
          cards, debit cards, and internet banking.
        </li>
        <li>
          Services shall only commence after realization of money in the accounts of the Company in
          case online payment is opted for.
        </li>
        <li>
          The Company reserves the right to refuse or cancel any order placed for a product/package
          listed at an incorrect price.
        </li>
        <li>
          In no event shall the Company take responsibility for malfunctioning or defect in any
          payment procedure. Payment of the Price shall be the sole responsibility of the
          User/Customer.
        </li>
      </ul>
    ),
  },
  {
    title: "6. REFUND AND CANCELLATION POLICY",
    content: (
      <ul className="list-disc space-y-2 pl-5">
        <li>
          The E-Health Package is valid for 7 days from the time and date of invoice generation.
        </li>
        <li>
          Cancellation is acceptable only if the Customer informs the Company within 72 hours from
          booking via info@mdrcindia.com.
        </li>
        <li>
          Refund amount will be sent to the respective debit card/credit card/account from where
          payment was made.
        </li>
      </ul>
    ),
  },
  {
    title: "7. REPORTS DELIVERY",
    content: (
      <ul className="list-disc space-y-2 pl-5">
        <li>
          The Company shall endeavour to release test report/s through digital platforms within
          seven working days, subject to each test&apos;s TAT (Turn around Time).
        </li>
        <li>
          Customers may also collect reports by hand during working hours from the designated
          collection centre/branch.
        </li>
      </ul>
    ),
  },
  {
    title: "8. MODIFICATION OF TERMS OF USE",
    content: (
      <p>
        You understand and agree that these Terms of Use, the Website and the Services can be
        modified by the Company at its sole discretion, at any time without prior notice. Unless
        expressly stated otherwise, any new features or modifications shall be subject to these
        Terms of Use.
      </p>
    ),
  },
  {
    title: "9. MAINTENANCE",
    content: (
      <p>
        The Company may deactivate or suspend User&apos;s/Customer&apos;s access to the Website
        and/or Services without prior notice for system maintenance, upgrading, testing or repairs.
        The Company shall not be liable for any loss or damage resulting from such deactivation or
        suspension.
      </p>
    ),
  },
  {
    title: "10. TERM AND TERMINATION",
    content: (
      <p>
        These Terms of Use shall remain in full force during use of the Website and commence from
        Registration Process. The Company may terminate this Agreement with immediate effect if the
        Account remains unused for six months or more, or if the User has breached any terms and
        conditions.
      </p>
    ),
  },
  {
    title: "11. LIABILITIES UPON TERMINATION",
    content: (
      <p>
        If the Terms of Use is terminated, You shall not be refunded whether a part or whole of the
        Fee.
      </p>
    ),
  },
  {
    title: "12. OWNERSHIP",
    content: (
      <p>
        Any material, content or logos, marks, software on or part of the Website is owned by the
        Company or its licensors. You are prohibited to modify, reproduce, distribute, or exploit
        any content except as expressly allowed under the Terms of Use.
      </p>
    ),
  },
  {
    title: "13. COPYRIGHT DISPUTE POLICY",
    content: (
      <p>
        The Company has adopted a policy towards copyright infringement. If the Company believes
        material on its Website has been illegally copied, it shall send an Infringement Notice. If
        requisite steps are not taken, the Company may proceed by filing a suit in the appropriate
        court of law.
      </p>
    ),
  },
  {
    title: "14. DISCLAIMER",
    content: (
      <>
        <p>
          THE WEBSITE IS PROVIDED BY THE COMPANY ON AN &apos;AS IS&apos; BASIS. THE COMPANY AND ITS
          LICENSORS AND AFFILIATES MAKE NO REPRESENTATIONS OR WARRANTIES OF ANY KIND AS TO THE
          OPERATION OF THE WEBSITE, PROVISION OF SERVICES OR SOFTWARE OR THE INFORMATION, CONTENT,
          MATERIALS, OR PRODUCTS INCLUDED ON THE WEBSITE.
        </p>
        <p className="mt-4">
          ALL THE CONTENTS OF THIS WEBSITE ARE ONLY FOR GENERAL INFORMATION OR USE. THEY DO NOT
          CONSTITUTE ANY MEDICAL ADVICE AND SHOULD NOT BE RELIED UPON IN MAKING (OR REFRAINING FROM
          MAKING) ANY DECISION. IT IS IMPORTANT THAT YOU COMMUNICATE WITH YOUR PHYSICIAN TO
          DETERMINE YOUR HEALTH STATUS.
        </p>
        <p className="mt-4">
          IN NO EVENT SHALL THE COMPANY BE LIABLE FOR ANY DIRECT, INDIRECT, PUNITIVE, INCIDENTAL,
          SPECIAL, CONSEQUENTIAL DAMAGES OR ANY OTHER DAMAGES RESULTING FROM USE OR INABILITY TO USE
          THE SERVICES.
        </p>
      </>
    ),
  },
  {
    title: "15. LIMITATION ON LIABILITY",
    content: (
      <p>
        The Company shall not be liable for any failure to perform obligations where such failure
        results from any cause beyond the Company&apos;s reasonable control. WITHOUT LIMITING THE
        FOREGOING, THE COMPANY WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, PUNITIVE, AND
        CONSEQUENTIAL DAMAGES.
      </p>
    ),
  },
  {
    title: "16. INDEMNITY",
    content: (
      <p>
        You agree to indemnify and hold the Company, its parents, subsidiaries, affiliates, officers
        and employees, harmless from any claim due to your access to the Website, use of Services,
        violation of these Terms of Use, or infringement of any intellectual property right.
      </p>
    ),
  },
  {
    title: "17. PRIVACY",
    content: <p>Use of the Website and/or the Services is also governed by our Privacy Policy.</p>,
  },
  {
    title: "18. CONFIDENTIALITY",
    content: (
      <p>
        Confidential Information means all information supplied to or possessed by a party, which is
        confidential or proprietary in nature. The Receiving Party shall keep such information
        confidential and not disclose to any third party without prior written permission, except as
        required by law.
      </p>
    ),
  },
  {
    title: "19. MISCELLANEOUS",
    content: (
      <>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Governing law:</strong> Laws of India. Disputes subject to exclusive
            jurisdiction of courts of New Delhi, India.
          </li>
          <li>
            <strong>Grievance Redressal:</strong> Contact info@mdrcindia.com.
          </li>
          <li>
            <strong>Links to third party sites:</strong> The Company is not responsible for contents
            of Linked Sites and provides links only as a convenience.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "20. Communication with the Customers/Users",
    content: (
      <p>
        When you visit the Website or communicate with us, You consent to receive communications via
        electronic records from us periodically or as required. These Terms of Use and Privacy Policy
        constitute a binding agreement between You and the Company.
      </p>
    ),
  },
  {
    title: "21. PC-PNDT Act",
    content: (
      <p>
        Modern Diagnostic &amp; Research Centre Pvt. Ltd. (MDRC) strongly agrees that pre-natal
        gender screening and pre-natal gender selection are illegal in India. MDRC strongly follows
        the terms and conditions as mentioned in the PCPNDT Act. The Act strictly prohibits sex
        determination or disclosure of the gender of the fetus.
      </p>
    ),
  },
];

const ourPresence = [
  "Gurugram", "Delhi", "Guwahati", "Srinagar", "Amritsar", "Bhiwadi", "Jaipur",
  "Bareilly", "Gorakhpur", "Kolkata", "Yamunanagar", "Karnal", "Panipat", "Noida",
  "Kurukshetra", "Indore", "Jammu", "Varanasi", "Lucknow", "Meerut", "Kanpur",
  "Aligarh", "Chandigarh",
];

const TermsOfUse = () => (
  <div className="font-roboto">
    <section className="relative overflow-hidden bg-gradient-to-br from-[#004E7A] via-[#005E91] to-[#0C759A] pt-24 text-white sm:pt-28 lg:pt-32">
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute -right-20 top-10 h-64 w-64 rounded-full border border-white/20" />
        <div className="absolute -left-16 bottom-0 h-48 w-48 rounded-full border border-white/10" />
      </div>
      <div className="relative mx-auto max-w-4xl px-4 py-10 text-center sm:px-6 sm:py-14">
        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">Terms &amp; Conditions</h1>
        <p className="mt-3 text-sm text-white/85 sm:text-base">
          <Link to="/" className="transition hover:text-[#0ECE91]">Home</Link>
          {" / "}
          <span className="text-[#0ECE91]">Terms &amp; Conditions</span>
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
          Please read these Terms of Use carefully before using the MDRC India website and services.
        </p>
        <p className="mt-2 text-xs text-white/60">Last updated: June 2026</p>
      </div>
    </section>

    <section className="bg-[#F4F8FB] px-4 py-10 sm:px-6 sm:py-14">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_280px]">
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#005C96]/8 sm:p-8">
          <div className="space-y-8">
            {sections.map((section) => (
              <article key={section.title}>
                <h2 className="mb-3 text-lg font-bold text-[#005C96] sm:text-xl">
                  {section.title}
                </h2>
                <div className="space-y-3 text-sm leading-relaxed text-gray-700 sm:text-[15px]">
                  {section.content}
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-[#005C96]/8">
            <h3 className="mb-3 text-base font-bold text-[#005C96]">Our Presence</h3>
            <div className="flex flex-wrap gap-2">
              {ourPresence.map((city) => (
                <span
                  key={city}
                  className="rounded-full bg-[#E8F4FA] px-2.5 py-1 text-xs font-medium text-[#005C96]"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-[#005E91] to-[#0C759A] p-5 text-white">
            <h3 className="mb-2 font-semibold">Need Help?</h3>
            <p className="mb-4 text-sm text-white/80">
              For grievances or questions about these terms, contact our customer care.
            </p>
            <a
              href="mailto:info@mdrcindia.com"
              className="block rounded-xl bg-white/15 px-4 py-2.5 text-center text-sm font-medium transition hover:bg-white/25"
            >
              info@mdrcindia.com
            </a>
            <Link
              to="/contact"
              className="mt-2 block rounded-xl bg-gradient-to-r from-[#05AF79] to-[#0ECE91] px-4 py-2.5 text-center text-sm font-semibold transition hover:opacity-90"
            >
              Contact Us
            </Link>
          </div>
        </aside>
      </div>
    </section>
  </div>
);

export default TermsOfUse;
