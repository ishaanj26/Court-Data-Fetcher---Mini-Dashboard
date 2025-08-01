import React, { useState } from 'react'

function Help() {
  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    {
      id: 1,
      question: "How do I search for a specific case?",
      answer: "Use the search form on the home page. Enter the case type, case number, and filing year. The system will search across all available jurisdictions and return matching results."
    },
    {
      id: 2,
      question: "What case types are supported?",
      answer: "We support civil, criminal, family law, probate, bankruptcy, traffic violations, small claims, and juvenile cases across multiple jurisdictions."
    },
    {
      id: 3,
      question: "How secure is my search data?",
      answer: "All searches are encrypted and we do not store personal information. Our platform is SOC 2 Type II compliant with enterprise-grade security measures."
    },
    {
      id: 4,
      question: "Can I access historical court records?",
      answer: "Yes, our database includes historical records going back several decades, depending on the jurisdiction and case type."
    },
    {
      id: 5,
      question: "How do I get API access?",
      answer: "Contact our team at support@courtdata.com to discuss API integration options and obtain access credentials."
    },
    {
      id: 6,
      question: "What jurisdictions are covered?",
      answer: "We cover federal courts, all 50 state court systems, and major local jurisdictions. Coverage varies by case type and historical availability."
    }
  ]

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-stone-50 to-amber-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-amber-200">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-slate-800 mb-4">Help & Support</h1>
            <p className="text-lg text-slate-600">Get the assistance you need</p>
          </div>

          {/* Quick Help Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-slate-50 to-amber-50 p-6 rounded-xl border border-slate-200 text-center">
              <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">FAQ</h3>
              <p className="text-slate-600 text-sm">Find answers to common questions</p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-amber-50 p-6 rounded-xl border border-slate-200 text-center">
              <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Email Support</h3>
              <p className="text-slate-600 text-sm">Get help via email</p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-amber-50 p-6 rounded-xl border border-slate-200 text-center">
              <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Phone Support</h3>
              <p className="text-slate-600 text-sm">Call us for immediate help</p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-800 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.id} className="border border-slate-200 rounded-lg">
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-medium text-slate-800">{faq.question}</span>
                    <svg
                      className={`w-5 h-5 text-slate-500 transition-transform ${
                        openFaq === faq.id ? 'rotate-180' : ''
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  {openFaq === faq.id && (
                    <div className="px-6 pb-4">
                      <p className="text-slate-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-br from-slate-50 to-amber-50 p-8 rounded-xl border border-slate-200">
            <h2 className="text-2xl font-semibold text-slate-800 mb-6">Contact Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Get in Touch</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-amber-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span className="text-slate-700">support@courtdata.com</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-amber-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span className="text-slate-700">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-amber-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-700">Legal District, CA 90210</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Support Hours</h3>
                <div className="space-y-2 text-slate-700">
                  <p><strong>Monday - Friday:</strong> 8:00 AM - 6:00 PM PST</p>
                  <p><strong>Saturday:</strong> 9:00 AM - 2:00 PM PST</p>
                  <p><strong>Sunday:</strong> Closed</p>
                  <p className="text-sm text-slate-600 mt-3">
                    Emergency support available 24/7 for enterprise customers
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-8 text-center">
            <h3 className="text-lg font-semibold text-slate-800 mb-4">Need Immediate Help?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 focus:ring-4 focus:ring-amber-300 shadow-lg">
                Start Live Chat
              </button>
              <button className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 focus:ring-4 focus:ring-slate-300 shadow-lg">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Help 