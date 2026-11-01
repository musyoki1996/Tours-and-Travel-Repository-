import React, { useState, useEffect } from 'react';
import { SafariPackage, BookingEnquiry } from '../types';
import { SAFARI_PACKAGES } from '../data/safariData';
import { X, CheckCircle, MessageSquare, ShieldCheck, ArrowRight, Calendar, Users, MapPin } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedPackageTitle?: string;
  onSaveEnquiry: (enquiry: BookingEnquiry) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedPackageTitle,
  onSaveEnquiry
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneWhatsapp: '',
    countryOfResidence: '',
    packageTitle: preselectedPackageTitle || '8-Day Classic Kenya Wildlife Odyssey',
    preferredDestination: 'Kenya & East Africa',
    travelStartDate: '',
    travelEndDate: '',
    adultsCount: 2,
    childrenCount: 0,
    accommodationTier: 'Luxury Safari Lodges' as BookingEnquiry['accommodationTier'],
    estimatedBudget: '$3,000 - $5,000 per person',
    specialRequirements: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (preselectedPackageTitle) {
      setFormData(prev => ({
        ...prev,
        packageTitle: preselectedPackageTitle
      }));
    }
  }, [preselectedPackageTitle]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phoneWhatsapp.trim()) {
      setErrorMsg('Please provide your full name, email address, and WhatsApp/telephone number.');
      return;
    }

    const newEnquiry: BookingEnquiry = {
      fullName: formData.fullName,
      email: formData.email,
      phoneWhatsapp: formData.phoneWhatsapp,
      countryOfResidence: formData.countryOfResidence || 'International',
      preferredDestination: formData.preferredDestination,
      packageTitle: formData.packageTitle,
      travelStartDate: formData.travelStartDate || 'Flexible',
      travelEndDate: formData.travelEndDate || 'Flexible',
      adultsCount: Number(formData.adultsCount),
      childrenCount: Number(formData.childrenCount),
      accommodationTier: formData.accommodationTier,
      estimatedBudget: formData.estimatedBudget,
      travelStyle: 'Classic 4x4 Custom Safari',
      specialRequirements: formData.specialRequirements,
      source: 'direct_modal'
    };

    onSaveEnquiry(newEnquiry);
    setSubmitted(true);
    setErrorMsg('');
  };

  const generateWhatsAppLink = () => {
    const text = `Hello Twiga Trails Safaris! I would like to book/enquire about:
- Package: ${formData.packageTitle}
- Name: ${formData.fullName || 'Guest'}
- Dates: ${formData.travelStartDate || 'Flexible'}
- Guests: ${formData.adultsCount} Adults, ${formData.childrenCount} Children
- Tier: ${formData.accommodationTier}
- Phone: ${formData.phoneWhatsapp}
Please send me a formal quotation!`;
    return `https://wa.me/254700000000?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div 
        className="relative bg-[#080907] text-[#E9DFC9] border border-[#34451C] rounded-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-white/70 hover:text-white bg-black/60 hover:bg-black/90 rounded-full transition-colors border border-white/20"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-5">
            <div className="w-16 h-16 bg-[#52650B]/20 text-[#52650B] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Booking Enquiry Received!
            </h3>
            <p className="text-xs sm:text-sm text-white/80 max-w-lg mx-auto leading-relaxed">
              Thank you, <strong className="text-[#E9DFC9]">{formData.fullName}</strong>. Your quotation request for 
              <strong className="text-[#B96829]"> "{formData.packageTitle}"</strong> has been logged with our Nairobi reservations office. 
              Our safari buddy will contact you at <strong className="text-[#E9DFC9]">{formData.email}</strong> and WhatsApp within 24 hours.
            </p>

            <div className="p-4 bg-white/5 border border-white/10 rounded-xl text-left text-xs space-y-1.5 max-w-md mx-auto">
              <div><strong className="text-[#B96829]">Travel Dates:</strong> {formData.travelStartDate || 'Flexible'}</div>
              <div><strong className="text-[#B96829]">Party Size:</strong> {formData.adultsCount} Adults, {formData.childrenCount} Children</div>
              <div><strong className="text-[#B96829]">Tier:</strong> {formData.accommodationTier}</div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto py-3 px-6 bg-[#52650B] hover:bg-[#435209] text-white text-xs font-semibold uppercase tracking-wider rounded transition-all shadow flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-300" />
                <span>Instant WhatsApp Confirmation</span>
              </a>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full sm:w-auto py-3 px-6 bg-white/10 hover:bg-white/20 text-[#E9DFC9] text-xs font-semibold uppercase tracking-wider rounded transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="text-xs uppercase tracking-widest text-[#B96829] font-semibold mb-1">
                Twiga Trails Safaris Reservations
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                Plan & Book Your Safari
              </h2>
              <p className="text-xs text-white/70 mt-1 font-light">
                Fill in your details below for a tailored itinerary and transparent quote. Zero obligation.
              </p>
            </div>

            {errorMsg && (
              <div className="p-3 mb-4 bg-red-900/50 border border-red-500 text-red-200 text-xs rounded">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              {/* Package or Destination Choice */}
              <div>
                <label className="block text-white/80 font-semibold mb-1">
                  Selected Safari Package or Experience *
                </label>
                <select
                  value={formData.packageTitle}
                  onChange={(e) => setFormData({ ...formData, packageTitle: e.target.value })}
                  className="w-full p-2.5 bg-white/10 border border-white/20 rounded text-white focus:outline-none focus:border-[#B96829]"
                >
                  {SAFARI_PACKAGES.map((pkg) => (
                    <option key={pkg.id} value={pkg.title} className="bg-[#080907] text-white">
                      {pkg.title} ({pkg.durationText})
                    </option>
                  ))}
                  <option value="Custom Tailored Safari Proposal" className="bg-[#080907] text-white">
                    -- Custom Tailored Safari Proposal --
                  </option>
                  <option value="Hot Air Balloon Sunrise Safari" className="bg-[#080907] text-white">
                    -- Hot Air Balloon Sunrise Safari --
                  </option>
                  <option value="Bwindi Gorilla Trekking Permit & Safari" className="bg-[#080907] text-white">
                    -- Bwindi Gorilla Trekking Permit & Safari --
                  </option>
                </select>
              </div>

              {/* Travel Dates */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-white/80 font-semibold mb-1">
                    Preferred Start Date
                  </label>
                  <input
                    type="date"
                    value={formData.travelStartDate}
                    onChange={(e) => setFormData({ ...formData, travelStartDate: e.target.value })}
                    className="w-full p-2.5 bg-white/10 border border-white/20 rounded text-white focus:outline-none focus:border-[#B96829]"
                  />
                </div>
                <div>
                  <label className="block text-white/80 font-semibold mb-1">
                    Preferred End Date
                  </label>
                  <input
                    type="date"
                    value={formData.travelEndDate}
                    onChange={(e) => setFormData({ ...formData, travelEndDate: e.target.value })}
                    className="w-full p-2.5 bg-white/10 border border-white/20 rounded text-white focus:outline-none focus:border-[#B96829]"
                  />
                </div>
              </div>

              {/* Travellers and Tier */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-white/80 font-semibold mb-1">
                    Adults (12+)
                  </label>
                  <select
                    value={formData.adultsCount}
                    onChange={(e) => setFormData({ ...formData, adultsCount: Number(e.target.value) })}
                    className="w-full p-2.5 bg-white/10 border border-white/20 rounded text-white focus:outline-none focus:border-[#B96829]"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, '10+'].map((num) => (
                      <option key={num} value={typeof num === 'number' ? num : 10} className="bg-[#080907]">
                        {num} Adults
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-white/80 font-semibold mb-1">
                    Children (Under 12)
                  </label>
                  <select
                    value={formData.childrenCount}
                    onChange={(e) => setFormData({ ...formData, childrenCount: Number(e.target.value) })}
                    className="w-full p-2.5 bg-white/10 border border-white/20 rounded text-white focus:outline-none focus:border-[#B96829]"
                  >
                    {[0, 1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num} className="bg-[#080907]">
                        {num} Children
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-white/80 font-semibold mb-1">
                    Accommodation Tier
                  </label>
                  <select
                    value={formData.accommodationTier}
                    onChange={(e) => setFormData({ ...formData, accommodationTier: e.target.value as any })}
                    className="w-full p-2.5 bg-white/10 border border-white/20 rounded text-white focus:outline-none focus:border-[#B96829]"
                  >
                    <option value="Luxury Safari Lodges" className="bg-[#080907]">Luxury Lodges</option>
                    <option value="Mid-Range Tented Camps" className="bg-[#080907]">Mid-Range Tented</option>
                    <option value="Standard / Budget Friendly" className="bg-[#080907]">Standard / Budget</option>
                    <option value="Private Ultra-Luxury Villas" className="bg-[#080907]">Ultra-Luxury Fly-in</option>
                  </select>
                </div>
              </div>

              {/* Personal Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block text-white/80 font-semibold mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Michael Thorne"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full p-2.5 bg-white/10 border border-white/20 rounded text-white focus:outline-none focus:border-[#B96829]"
                  />
                </div>
                <div>
                  <label className="block text-white/80 font-semibold mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. michael@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-2.5 bg-white/10 border border-white/20 rounded text-white focus:outline-none focus:border-[#B96829]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-white/80 font-semibold mb-1">
                    WhatsApp / Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +44 7123 456789"
                    value={formData.phoneWhatsapp}
                    onChange={(e) => setFormData({ ...formData, phoneWhatsapp: e.target.value })}
                    className="w-full p-2.5 bg-white/10 border border-white/20 rounded text-white focus:outline-none focus:border-[#B96829]"
                  />
                </div>
                <div>
                  <label className="block text-white/80 font-semibold mb-1">
                    Country of Residence
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. United Kingdom, USA, Germany"
                    value={formData.countryOfResidence}
                    onChange={(e) => setFormData({ ...formData, countryOfResidence: e.target.value })}
                    className="w-full p-2.5 bg-white/10 border border-white/20 rounded text-white focus:outline-none focus:border-[#B96829]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/80 font-semibold mb-1">
                  Special Notes or Dietary Preferences
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us about special occasions (honeymoon, anniversary), photography requests, or specific dietary needs..."
                  value={formData.specialRequirements}
                  onChange={(e) => setFormData({ ...formData, specialRequirements: e.target.value })}
                  className="w-full p-2.5 bg-white/10 border border-white/20 rounded text-white focus:outline-none focus:border-[#B96829]"
                />
              </div>

              <div className="pt-3 border-t border-white/15 flex items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 text-[11px] text-white/60">
                  <ShieldCheck className="w-4 h-4 text-[#52650B]" />
                  <span>Free cancellation policy & AMREF Flying Doctors cover</span>
                </div>
                <button
                  type="submit"
                  className="py-3 px-8 bg-[#B96829] hover:bg-[#a0561e] text-white text-xs font-semibold uppercase tracking-wider rounded transition-all shadow-lg flex items-center gap-2"
                >
                  <span>Submit Safari Enquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </form>
          </div>
        )}
      </div>
    </div>
  );
};
