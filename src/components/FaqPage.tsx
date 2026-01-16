import React from 'react'

const FaqPage: React.FC = () => {
  // FAQ data
  const faqs = [
    {
      question: "When and where is the Colorado Law Classic held?",
      answer: "The 14th Annual Colorado Law Classic will be held on Sunday, August 17th, 2025, at City Park Golf Course in Denver, Colorado. Check-in begins at 6:30 AM with a 7:30 AM start time."
    },
    {
      question: "How much does it cost to participate?",
      answer: "Individual registration is $150 per player, which includes 18 holes of golf, lunch, a tournament gift, and entry into individual and team competitions. Team registration (foursome) is available for $600."
    },
    {
      question: "What is the format of the tournament?",
      answer: "The Colorado Law Classic is played as an 18-hole scramble format, making it accessible and enjoyable for golfers of all skill levels."
    },
    {
      question: "What is included with registration?",
      answer: "Registration includes 18 holes of golf at City Park Golf Course, lunch following the tournament, a tournament gift, and entry into individual and team competitions with opportunities to win prizes."
    },
    {
      question: "How do I register for the tournament?",
      answer: "You can register directly through our website by visiting the Registration page. Options are available for individual players and complete foursomes."
    },
    {
      question: "Are there sponsorship opportunities available?",
      answer: "Yes, we offer several sponsorship levels ranging from $1,000 to $2,500 with various benefits. Please visit our Sponsorship page for details on each level and the benefits included."
    },
    {
      question: "What happens if there is inclement weather?",
      answer: "The tournament will proceed rain or shine unless conditions are deemed unsafe. In case of cancellation due to severe weather, participants will be notified as early as possible, and the event may be rescheduled."
    },
    {
      question: "Is my registration fee tax-deductible?",
      answer: "For income tax purposes, the approximate value of goods and services exchanged per golfer is $100. The remainder of your registration fee may be tax-deductible. Please consult your tax advisor."
    },
    {
      question: "Can I bring my own food and beverages?",
      answer: "Outside alcoholic beverages are not permitted per golf course policy. Water and non-alcoholic beverages will be available on the course, and lunch is included with registration."
    },
    {
      question: "Will there be food available?",
      answer: "Yes, lunch is included with your registration and will be served following the tournament."
    },
    {
      question: "Are golf carts included?",
      answer: "Yes, golf carts are included with registration and will be assigned at check-in."
    },
    {
      question: "What time should I arrive?",
      answer: "Check-in begins at 6:30 AM. We recommend arriving at least 30 minutes before the 7:30 AM start time to allow for check-in, warm-up, and finding your assigned cart."
    }
  ]
  
  return (
    <div className="py-12">
      <div className="container">
        <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>
        
        <div className="mb-12">
          <p className="text-gray-600 max-w-3xl mb-6">
            Find answers to common questions about the Colorado Law Classic. If you don't see your 
            question answered here, please contact us directly.
          </p>
        </div>
        
        <div className="space-y-6 mb-12">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-primary/10 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Still Have Questions?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            If you couldn't find the answer to your question, please don't hesitate to contact us. 
            We're here to help make your Colorado Law Classic experience as enjoyable as possible.
          </p>
          <button className="btn btn-primary">Contact Us</button>
        </div>
      </div>
    </div>
  )
}

export default FaqPage
