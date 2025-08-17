import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileContract } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Terms() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen py-10 px-6 sm:px-12 lg:px-32 text-gray-800">
        {/* Header */}
        <header className="flex items-center gap-4 mb-8">
          <div>
            <h1 className="text-5xl font-bold">Terms &amp; Conditions</h1>
            <p className="text-gray-500 text-sm">
              Last updated: <strong>August 9, 2025</strong>
            </p>
          </div>
        </header>

        {/* Introduction */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
          <p>
            Welcome to <strong>Guidexa</strong> (the “Website” or “Service”).
            These Terms and Conditions ("Terms") govern your access to and use
            of the Service. By accessing the Service, you agree to be bound by
            these Terms. If you do not agree, do not use the Service.
          </p>
        </section>

        {/* Use of Website */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">2. Use of the Website</h2>
          <p>
            You may use the Website for lawful purposes only. You are
            responsible for ensuring your use complies with applicable laws and
            regulations. Misuse of the Service is strictly prohibited.
          </p>
        </section>

        {/* Intellectual Property */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            3. Intellectual Property
          </h2>
          <p>
            All content on the Website, including text, graphics, logos, and
            software, is owned by or licensed to Guidexa and is protected by
            copyright, trademark, and other intellectual property laws. You may
            not reproduce or distribute content without permission.
          </p>
        </section>

        {/* User Content */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">4. User Content</h2>
          <p>
            If you submit or generate content while using the Website, you are
            solely responsible for that content. By submitting content, you
            grant Guidexa a worldwide, non-exclusive, royalty-free license to
            use and display it in connection with the Service.
          </p>
        </section>

        {/* No Data Collection */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">5. No Data Collection</h2>
          <p>
            Guidexa does not collect, store, or share personal information. All
            processing happens locally in your browser.
          </p>
        </section>

        {/* Limitation of Liability */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            6. Limitation of Liability
          </h2>
          <p>
            To the fullest extent permitted by law, Guidexa and its affiliates
            will not be liable for any indirect, incidental, special, or
            consequential damages arising from your use of the Website.
          </p>
        </section>

        {/* Changes */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">7. Changes to Terms</h2>
          <p>
            We may update these Terms at any time. Changes take effect when
            posted. Continued use of the Service after posting means you accept
            the updated Terms.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
}
export default Terms;
