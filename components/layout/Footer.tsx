import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { AcademicCapIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <AcademicCapIcon className="h-8 w-8 text-indigo-400" />
              <span className="text-2xl font-bold">
                <span className="text-red-500">E</span>du
                <span className="text-red-500">V</span>erse
              </span>
            </div>
            <p className="text-sm leading-6 text-gray-300">
              India's leading platform for competitive exam preparation.
              Empowering students to achieve their dreams with expert guidance
              and comprehensive study material.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Grid */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Courses
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link
                      href="/courses"
                      className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                    >
                      All Courses
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/courses?category=ssc"
                      className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                    >
                      SSC Courses
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/courses?category=upsc"
                      className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                    >
                      UPSC Courses
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/courses?category=banking"
                      className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                    >
                      Banking Courses
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/courses?category=railway"
                      className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                    >
                      Railway Courses
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Company
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link
                      href="/about"
                      className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/instructors"
                      className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                    >
                      Our Instructors
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/testimonials"
                      className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                    >
                      Testimonials
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Support
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link
                      href="/help"
                      className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                    >
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/faq"
                      className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                    >
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/support"
                      className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                    >
                      Contact Support
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/refund"
                      className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                    >
                      Refund Policy
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Legal
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link
                      href="/privacy"
                      className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms"
                      className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                    >
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/cookie"
                      className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                    >
                      Cookie Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-gray-800 pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs leading-5 text-gray-400">
              &copy; {currentYear} EduVerse. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-xs text-gray-400">
              <span>Made with ❤️ for students</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
