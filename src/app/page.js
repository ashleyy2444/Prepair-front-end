"use client"

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [faqOpen, setFaqOpen] = useState(null);

  return (
    <div className="bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-3xl font-extrabold text-orange-500 tracking-wide">
          PrePair
        </h1>
        <div className="space-x-4">
          <a href="#" className="text-black">Electrical & Plumbing</a>
          <a href="#" className="text-black">Structural</a>
          <a href="#" className="text-black">Interior</a>
          <button className="bg-orange-500 text-white px-4 py-2 rounded">Discussion</button>
          <button className="bg-orange-500 text-white px-4 py-2 rounded">Register</button>
          <button className="bg-orange-500 text-white px-4 py-2 rounded">Login</button>
          <button className="bg-orange-500 text-white px-4 py-2 rounded">Make a Request</button>
        </div>
      </nav>

      {/* Why Choose Prepair? */}
      <div className="text-center p-10">
        <h2 className="text-xl font-bold">Why Choose PrePair?</h2>
        <div className="flex justify-center space-x-4 mt-6">
          {[
            { title: "AI-Powered Advisory", desc: "Smart recommendations for your repair needs." },
            { title: "Easy Access to Professionals", desc: "Connect with trusted contractors instantly." },
            { title: "Transparent", desc: "Clearer pricing with no hidden costs." },
            { title: "Effective", desc: "Efficient solutions tailored for your home." }
          ].map((feature, index) => (
            <div key={index} className="bg-orange-500 text-white p-6 rounded-lg w-1/5 text-center font-bold">
              <p>{feature.title}</p>
              <p className="text-sm font-normal mt-2">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Trusted By Forward Thinkers */}
      <div className="p-6 flex flex-col items-center">
        <h3 className="text-lg font-bold text-center">Trusted By Forward Thinkers</h3>

        {/* Scrollable Transparent Box */}
        <div className="relative w-full max-w-4xl mt-4 bg-gray-100 bg-opacity-50 p-4 rounded-lg shadow-lg">
          <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            <div className="flex space-x-4 w-max px-4">
              {[
                { username: "@ZackeusChoo", text: "This platform is lit" },
                { username: "@Chicken", text: "I'm so happy I could find my repairman" },
                { username: "@Repairguy", text: "I wanna help others" },
                { username: "@GF", text: "Wow this is so transparent!" }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white shadow p-4 rounded-lg min-w-[250px] text-center">
                  <p className="font-bold">{testimonial.username}</p>
                  <p className="text-sm">{testimonial.text}</p>
                  <p className="text-xs text-gray-500">Joined December 2021</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="p-6 text-center">
        <h3 className="text-lg font-bold">How It Works</h3>
        <div className="flex justify-center space-x-8 mt-6">
          {[
            {
              icon: (
                <svg className="w-12 h-12 text-orange-500 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 3H3v18h18V3zM11 17H5v-2h6v2zm8-4H5v-2h14v2zm0-4H5V7h14v2z"></path>
                </svg>
              ),
              title: "Describe Your Issue",
              desc: "Tell us what needs fixing, and we’ll find the right professionals for you."
            },
            {
              icon: (
                <svg className="w-12 h-12 text-orange-500 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 1 0-.71.71l.27.28v.79l5 4.99L20.49 19l-4.99-5zM10 15a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"></path>
                </svg>
              ),
              title: "Get Matched Instantly",
              desc: "Our smart system finds the best-rated contractors in your area."
            },
            {
              icon: (
                <svg className="w-12 h-12 text-orange-500 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <circle cx="12" cy="6" r="3" />
                  <path d="M6 21v-3a6 6 0 0112 0v3" />
                </svg>
              ),
              title: "Compare & Hire",
              desc: "Browse professional profiles, read reviews, and select the best fit."
            },
            {
              icon: (
                <svg className="w-12 h-12 text-orange-500 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.2l-3.5-3.5L4 14l5 5 10-10-1.5-1.5L9 16.2z"></path>
                </svg>
              ),
              title: "Job Done & Reviewed",
              desc: "After the job is completed, leave a review to help others choose."
            }
          ].map((step, index) => (
            <div key={index} className="bg-white shadow-md p-4 rounded-lg w-1/5 text-center">
              {step.icon}
              <p className="font-bold mt-2">{step.title}</p>
              <p className="text-sm text-gray-700 mt-2">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="p-6 text-center">
        <h3 className="text-lg font-bold">Frequently Asked Questions</h3>
        <div className="mt-4 max-w-lg mx-auto">
          {[
            "How do I find a trusted repair expert?",
            "Are the professionals licensed?",
            "What if I’m not satisfied with the repair?"
          ].map((question, index) => (
            <div key={index} className="border-b">
              <button
                className="w-full text-left py-3 px-2 font-medium flex justify-between items-center"
                onClick={() => setFaqOpen(faqOpen === index ? null : index)}
              >
                {question}
                <span>{faqOpen === index ? "▲" : "▼"}</span>
              </button>
              {faqOpen === index && (
                <p className="p-3 text-gray-600">This is the answer to the question.</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white p-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h4 className="text-lg font-bold">Prepair</h4>
          <p>Connecting homeowners with trusted repair professionals.</p>

          <div className="flex justify-center space-x-12 mt-4">
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold">Quick Links</h4>
              <ul>
                <li><a href="#" className="hover:underline">Home</a></li>
                <li><a href="#" className="hover:underline">About</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h4 className="text-lg font-bold">Follow Us</h4>
              <div className="flex justify-center space-x-4 mt-2">
                {/* Facebook */}
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <svg className="w-6 h-6 text-white hover:text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-3v-3h3V9.2c0-3 1.8-4.6 4.5-4.6 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 1-2 2v2.5h3.5l-.5 3h-3v7A10 10 0 0 0 22 12z"></path>
                  </svg>
                </a>

                {/* Instagram */}
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <svg className="w-6 h-6 text-white hover:text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 2C4.8 2 2 4.8 2 7v10c0 2.2 2.8 5 5 5h10c2.2 0 5-2.8 5-5V7c0-2.2-2.8-5-5-5H7zm0 2h10c1.6 0 3 1.4 3 3v10c0 1.6-1.4 3-3 3H7c-1.6 0-3-1.4-3-3V7c0-1.6 1.4-3 3-3zm10 2a1 1 0 0 0 0 2 1 1 0 0 0 0-2zM12 6a6 6 0 1 0 0 12A6 6 0 0 0 12 6zm0 2a4 4 0 1 1 0 8A4 4 0 0 1 12 8z"></path>
                  </svg>
                </a>

                {/* Twitter */}
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                  <svg className="w-6 h-6 text-white hover:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.6 10.6 0 0 1-3 .8A4.3 4.3 0 0 0 22.4 1a8.9 8.9 0 0 1-2.8 1 4.3 4.3 0 0 0-7.3 3.9A12 12 0 0 1 2 2.9a4.3 4.3 0 0 0 1.3 5.7 4.3 4.3 0 0 1-2-.5v.1a4.3 4.3 0 0 0 3.4 4.2 4.3 4.3 0 0 1-2 .1 4.3 4.3 0 0 0 4 3 8.7 8.7 0 0 1-5.3 1.8A8.9 8.9 0 0 1 0 19.6a12.2 12.2 0 0 0 6.6 1.9A12.2 12.2 0 0 0 19 9.4c0-.2 0-.4-.1-.6A8.8 8.8 0 0 0 23 3z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <p className="mt-4">&copy; 2025 Prepair. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
