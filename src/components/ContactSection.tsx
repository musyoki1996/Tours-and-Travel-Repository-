import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare, Clock, Send, CheckCircle, ShieldCheck } from 'lucide-react';
import { BookingEnquiry } from '../types';

interface ContactSectionProps {
  onSaveEnquiry: (enquiry: BookingEnquiry) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onSaveEnquiry }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: 'General Safari Enquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;

    onSaveEnquiry({
      fullName: formData.fullName,
      email: formData.email,
      phoneWhatsapp: formData.phone || '+254 700 000 000',
      countryOfResidence: 'International',
      preferredDestination: 'Kenya & East Africa',
      packageTitle: `Contact Form: ${formData.subject}`,
      travelStartDate: 'To be determined',
      adultsCount: 2,
      childrenCount: 0,
      accommodationTier: 'Luxury Safari Lodges',
      estimatedBudget: 'Flexible',
      travelStyle: 'Tailored',
      specialRequirements: formData.message,
      source: 'contact_page'
    });

    setSubmitted(true);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F8F5EE] dark:bg-[#080907] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-widest text-[#52650B] font-semibold mb-2">
            Get In Touch · East Africa
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#080907] dark:text-white tracking-tight">
            Connect With Your Travel Buddies
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#242522]/80 dark:text-[#E9DFC9]/80 font-normal leading-relaxed">
            Have questions about visas, the best month for the Great Migration, or customized family itineraries? 
            Our safari specialists in Nairobi are ready to guide you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Details & Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 bg-white dark:bg-[#181a15] border border-[#E9DFC9] dark:border-[#34451C] rounded-2xl shadow-sm space-y-6">
              <h3 className="text-xl font-serif font-bold text-[#080907] dark:text-white">
                Twiga Trails Safaris HQ
              </h3>
              
              <div className="space-y-5 text-xs text-[#242522] dark:text-[#E9DFC9]">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-[#52650B]/10 dark:bg-[#52650B]/20 text-[#52650B] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-sm font-semibold text-[#080907] dark:text-white mb-0.5">Nairobi Office Hub</strong>
                    <span className="text-[#242522]/75 dark:text-[#E9DFC9]/75 leading-relaxed">
                      Nairobi, Kenya<br />
                      Karen / Westlands Tourism Corridor<br />
                      (Representative desk also in Arusha, Tanzania)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-[#B96829]/10 dark:bg-[#B96829]/20 text-[#B96829] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-sm font-semibold text-[#080907] dark:text-white mb-0.5">Telephone & WhatsApp</strong>
                    <a href="tel:+254700000000" className="block text-[#242522]/85 dark:text-[#E9DFC9]/85 hover:text-[#B96829] font-medium">
                      +254 700 000 000 (Configurable Placeholder)
                    </a>
                    <span className="text-[11px] text-[#242522]/60 dark:text-[#E9DFC9]/60">Available on WhatsApp 24/7 for emergency dispatch</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-[#34451C]/10 dark:bg-[#34451C]/30 text-[#34451C] dark:text-emerald-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-sm font-semibold text-[#080907] dark:text-white mb-0.5">Official Email</strong>
                    <a href="mailto:info@twigatrailssafaris.com" className="block text-[#242522]/85 dark:text-[#E9DFC9]/85 hover:text-[#52650B] font-medium">
                      info@twigatrailssafaris.com (Configurable Placeholder)
                    </a>
                    <span className="text-[11px] text-[#242522]/60 dark:text-[#E9DFC9]/60">We reply to all safari quotation requests within 24 hours</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-[#E9DFC9] dark:bg-white/10 text-[#080907] dark:text-[#E9DFC9] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-sm font-semibold text-[#080907] dark:text-white mb-0.5">Operating Hours</strong>
                    <span className="text-[#242522]/75 dark:text-[#E9DFC9]/75">
                      Monday to Sunday: 08:00 AM – 06:00 PM (EAT / UTC+3)<br />
                      Guest 24/7 In-Country Safari Concierge active during travel
                    </span>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Quick Link */}
              <div className="pt-4 border-t border-[#E9DFC9] dark:border-white/10">
                <a
                  href="https://wa.me/254700000000?text=Hello%20Twiga%20Trails%20Safaris,%20I%20would%20like%20to%20plan%20a%20safari."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-[#52650B] hover:bg-[#435209] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 shadow"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-300" />
                  <span>Start WhatsApp Conversation</span>
                </a>
              </div>
            </div>

            {/* Interactive Route Hub Card */}
            <div className="p-6 bg-[#080907] text-[#E9DFC9] rounded-2xl border border-[#34451C]">
              <h4 className="text-base font-serif font-bold text-white mb-2">
                Safari Departures & Regional Logistics
              </h4>
              <p className="text-xs text-white/70 leading-relaxed font-light mb-3">
                All Twiga Trails road safaris depart with private hotel or Jomo Kenyatta International Airport (NBO) pick-ups. 
                Fly-in safaris connect seamlessly via Nairobi Wilson Airport (WIL) directly into Mara, Amboseli, or Serengeti airstrips.
              </p>
              <div className="flex items-center gap-2 text-[11px] text-[#B96829] font-medium">
                <ShieldCheck className="w-4 h-4" />
                <span>Complimentary airport transfer included in all 5+ day packages</span>
              </div>
            </div>
          </div>

          {/* Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 bg-white dark:bg-[#181a15] border border-[#E9DFC9] dark:border-[#34451C] rounded-2xl shadow-sm">
              <h3 className="text-2xl font-serif font-bold text-[#080907] dark:text-white mb-2">
                Send Us a Direct Message
              </h3>
              <p className="text-xs text-[#242522]/70 dark:text-[#E9DFC9]/70 mb-8 font-normal">
                Tell us about your upcoming travel plans and our safari coordinators will respond promptly.
              </p>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 bg-[#52650B]/10 dark:bg-[#52650B]/20 text-[#52650B] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-7 h-7" />
                  </div>
                  <h4 className="text-2xl font-serif font-bold text-[#080907] dark:text-white">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-xs text-[#242522]/80 dark:text-[#E9DFC9]/80 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#080907] dark:text-white">{formData.fullName}</strong>. A copy of your inquiry has been recorded 
                    and dispatched to our reservations desk. We will get back to you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ fullName: '', email: '', phone: '', subject: 'General Safari Enquiry', message: '' });
                    }}
                    className="py-2.5 px-6 bg-[#E9DFC9] dark:bg-white/10 hover:bg-[#d8ccb2] dark:hover:bg-white/20 text-[#080907] dark:text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#080907] dark:text-white mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Johnathan Clark"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full text-xs p-3 bg-[#F8F5EE] dark:bg-[#242522] text-[#242522] dark:text-white border border-[#E9DFC9] dark:border-white/10 rounded-lg focus:outline-none focus:border-[#52650B]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#080907] dark:text-white mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. j.clark@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full text-xs p-3 bg-[#F8F5EE] dark:bg-[#242522] text-[#242522] dark:text-white border border-[#E9DFC9] dark:border-white/10 rounded-lg focus:outline-none focus:border-[#52650B]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#080907] dark:text-white mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. +44 700 000 000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full text-xs p-3 bg-[#F8F5EE] dark:bg-[#242522] text-[#242522] dark:text-white border border-[#E9DFC9] dark:border-white/10 rounded-lg focus:outline-none focus:border-[#52650B]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#080907] dark:text-white mb-1.5">
                        Inquiry Topic
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full text-xs p-3 bg-[#F8F5EE] dark:bg-[#242522] text-[#242522] dark:text-white border border-[#E9DFC9] dark:border-white/10 rounded-lg focus:outline-none focus:border-[#52650B]"
                      >
                        <option value="General Safari Enquiry">General Safari Enquiry</option>
                        <option value="Maasai Mara Migration Package">Maasai Mara Migration Package</option>
                        <option value="Amboseli & Kilimanjaro Tour">Amboseli & Kilimanjaro Tour</option>
                        <option value="Tanzania Serengeti & Ngorongoro">Tanzania Serengeti & Ngorongoro</option>
                        <option value="Custom Family Itinerary">Custom Family Itinerary</option>
                        <option value="Honeymoon & Romantic Safaris">Honeymoon & Romantic Safaris</option>
                        <option value="Travel Agent / B2B Partnership">Travel Agent / B2B Partnership</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#080907] dark:text-white mb-1.5">
                      Your Message & Travel Ideas *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Share your travel dates, number of guests, preferred safari style, or any specific wildlife you dream of seeing..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full text-xs p-3 bg-[#F8F5EE] dark:bg-[#242522] text-[#242522] dark:text-white border border-[#E9DFC9] dark:border-white/10 rounded-lg focus:outline-none focus:border-[#52650B]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#B96829] hover:bg-[#a0561e] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-all shadow flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Twiga Trails</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
