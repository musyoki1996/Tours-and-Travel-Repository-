import React, { useState } from 'react';
import { BookingEnquiry } from '../types';
import { CheckCircle, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';

interface BespokePlannerProps {
  onSaveEnquiry: (enquiry: BookingEnquiry) => void;
}

export const BespokePlanner: React.FC<BespokePlannerProps> = ({ onSaveEnquiry }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneWhatsapp: '',
    countryOfResidence: '',
    destinations: [] as string[],
    travelStartDate: '',
    travelEndDate: '',
    adultsCount: 2,
    childrenCount: 0,
    accommodationTier: 'Luxury Safari Lodges' as BookingEnquiry['accommodationTier'],
    estimatedBudget: '$3,000 - $5,000 per person',
    travelStyle: 'Classic 4x4 Wildlife Safari',
    specialRequirements: '',
    specialInterests: [] as string[]
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const destinationOptions = [
    'Maasai Mara National Reserve (Kenya)',
    'Amboseli & Kilimanjaro (Kenya)',
    'Serengeti National Park (Tanzania)',
    'Ngorongoro Crater (Tanzania)',
    'Samburu & Northern Frontier (Kenya)',
    'Ol Pejeta Rhino Sanctuary (Kenya)',
    'Lake Nakuru & Naivasha (Kenya)',
    'Diani Beach Coastal Escape (Kenya)',
    'Zanzibar Island (Tanzania)',
    'Bwindi Mountain Gorillas (Uganda)'
  ];

  const interestOptions = [
    'The Great Migration',
    'Big Cat Tracking (Lions, Leopards, Cheetahs)',
    'Hot Air Balloon Dawn Safari',
    'Wildlife Photography Masterclass',
    'Maasai / Samburu Cultural Encounters',
    'Bush Dining & Sunset Sundowners',
    'Bird Watching (Rift Valley)',
    'Family-Friendly Flexible Drives',
    'Honeymoon / Romantic Escapes'
  ];

  const handleDestinationToggle = (dest: string) => {
    setFormData(prev => ({
      ...prev,
      destinations: prev.destinations.includes(dest)
        ? prev.destinations.filter(d => d !== dest)
        : [...prev.destinations, dest]
    }));
  };

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      specialInterests: prev.specialInterests.includes(interest)
        ? prev.specialInterests.filter(i => i !== interest)
        : [...prev.specialInterests, interest]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phoneWhatsapp.trim()) {
      setErrorMsg('Please provide your full name, email address, and WhatsApp/phone number.');
      return;
    }

    const newEnquiry: BookingEnquiry = {
      fullName: formData.fullName,
      email: formData.email,
      phoneWhatsapp: formData.phoneWhatsapp,
      countryOfResidence: formData.countryOfResidence || 'International',
      preferredDestination: formData.destinations.length > 0 ? formData.destinations.join('; ') : 'Flexible East Africa Itinerary',
      packageTitle: 'Custom Bespoke Safari Proposal',
      travelStartDate: formData.travelStartDate || 'Flexible / To Be Confirmed',
      travelEndDate: formData.travelEndDate || 'Flexible',
      adultsCount: Number(formData.adultsCount),
      childrenCount: Number(formData.childrenCount),
      accommodationTier: formData.accommodationTier,
      estimatedBudget: formData.estimatedBudget,
      travelStyle: formData.travelStyle,
      specialRequirements: `Interests: ${formData.specialInterests.join(', ')}. Details: ${formData.specialRequirements}`,
      source: 'bespoke_planner'
    };

    onSaveEnquiry(newEnquiry);
    setSubmitted(true);
    setErrorMsg('');
  };

  const getWhatsAppMessage = () => {
    const text = `Hello Twiga Trails Safaris! I just built a custom safari request:
- Name: ${formData.fullName || 'Guest'}
- Destinations: ${formData.destinations.join(', ') || 'Best of Kenya'}
- Dates: ${formData.travelStartDate || 'Flexible'}
- Guests: ${formData.adultsCount} Adults, ${formData.childrenCount} Children
- Tier: ${formData.accommodationTier}
- Budget: ${formData.estimatedBudget}
- Interests: ${formData.specialInterests.join(', ') || 'Wildlife'}
Please send me a custom proposal!`;
    return encodeURIComponent(text);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F8F5EE] dark:bg-[#080907] transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="text-xs uppercase tracking-widest text-[#52650B] font-semibold mb-2">
            Tailor-Made Wilderness Planning
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#080907] dark:text-white tracking-tight">
            YOUR JOURNEY. YOUR PACE. YOUR AFRICA.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#242522]/80 dark:text-[#E9DFC9]/80 max-w-2xl mx-auto font-normal leading-relaxed">
            Every traveller holds a unique dream of Africa. Whether it is tracking a leopard at twilight, 
            witnessing millions of wildebeest crossing the Mara, or unwinding in a private plunge pool overlooking the savannah. 
            Tell us your vision and let your safari buddies handcraft your journey.
          </p>
        </div>

        {submitted ? (
          <div className="bg-white dark:bg-[#181a15] border border-[#52650B] rounded-2xl p-8 sm:p-12 text-center shadow-lg animate-fadeIn">
            <div className="w-16 h-16 bg-[#52650B]/10 dark:bg-[#52650B]/20 text-[#52650B] rounded-full flex items-center justify-center mx-auto mb-5">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#080907] dark:text-white mb-3">
              Your Bespoke Safari Request Has Been Received!
            </h3>
            <p className="text-sm text-[#242522]/80 dark:text-[#E9DFC9]/80 max-w-xl mx-auto leading-relaxed mb-8">
              Thank you, <strong className="text-[#080907] dark:text-white">{formData.fullName}</strong>. Our senior safari architects in Nairobi 
              are reviewing your preferences and preparing a tailored day-by-day itinerary proposal with transparent costing. 
              We will contact you via email ({formData.email}) and WhatsApp ({formData.phoneWhatsapp}) within 24 hours.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`https://wa.me/254700000000?text=${getWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto py-3 px-6 bg-[#52650B] hover:bg-[#435209] text-white text-xs font-semibold uppercase tracking-wider rounded transition-all shadow flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-300" />
                <span>Follow Up Instantly on WhatsApp</span>
              </a>
              <button
                onClick={() => setSubmitted(false)}
                className="w-full sm:w-auto py-3 px-6 bg-[#E9DFC9] dark:bg-white/10 hover:bg-[#d8ccb2] dark:hover:bg-white/20 text-[#080907] dark:text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors"
              >
                Create Another Itinerary
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white dark:bg-[#181a15] border border-[#E9DFC9] dark:border-[#34451C] rounded-2xl p-6 sm:p-10 shadow-sm space-y-10">
            
            {errorMsg && (
              <div className="p-4 bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-xs rounded-lg">
                {errorMsg}
              </div>
            )}

            {/* Step 1: Destination Selection */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full bg-[#52650B] text-white text-xs font-bold flex items-center justify-center">1</span>
                <h3 className="text-base sm:text-lg font-serif font-bold text-[#080907] dark:text-white">
                  Where Would You Love to Go? (Select all that interest you)
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {destinationOptions.map((dest) => {
                  const isChecked = formData.destinations.includes(dest);
                  return (
                    <button
                      type="button"
                      key={dest}
                      onClick={() => handleDestinationToggle(dest)}
                      className={`p-3 text-left text-xs font-medium rounded-lg border transition-all flex items-center justify-between ${
                        isChecked
                          ? 'bg-[#52650B]/15 border-[#52650B] text-[#52650B] dark:text-emerald-400 font-semibold'
                          : 'bg-[#F8F5EE]/40 dark:bg-white/5 border-[#E9DFC9] dark:border-white/10 text-[#242522]/80 dark:text-white/80 hover:border-[#52650B]'
                      }`}
                    >
                      <span>{dest}</span>
                      <span className={`w-4 h-4 rounded border flex items-center justify-center text-[10px] ${
                        isChecked ? 'bg-[#52650B] border-[#52650B] text-white' : 'border-[#E9DFC9] dark:border-white/20'
                      }`}>
                        {isChecked && '✓'}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Special Interests & Experiences */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full bg-[#52650B] text-white text-xs font-bold flex items-center justify-center">2</span>
                <h3 className="text-base sm:text-lg font-serif font-bold text-[#080907] dark:text-white">
                  What Experiences Are Top on Your Wishlist?
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {interestOptions.map((item) => {
                  const isSelected = formData.specialInterests.includes(item);
                  return (
                    <button
                      type="button"
                      key={item}
                      onClick={() => handleInterestToggle(item)}
                      className={`p-3 text-left text-xs rounded-lg border transition-all ${
                        isSelected
                          ? 'bg-[#B96829]/15 border-[#B96829] text-[#B96829] dark:text-amber-400 font-semibold'
                          : 'bg-[#F8F5EE]/40 dark:bg-white/5 border-[#E9DFC9] dark:border-white/10 text-[#242522]/80 dark:text-white/80 hover:border-[#B96829]'
                      }`}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Dates & Party Size */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full bg-[#52650B] text-white text-xs font-bold flex items-center justify-center">3</span>
                <h3 className="text-base sm:text-lg font-serif font-bold text-[#080907] dark:text-white">
                  Travel Schedule & Travelling Party
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#242522] dark:text-white mb-1">Estimated Start Date</label>
                  <input
                    type="date"
                    value={formData.travelStartDate}
                    onChange={(e) => setFormData({ ...formData, travelStartDate: e.target.value })}
                    className="w-full text-xs p-2.5 bg-[#F8F5EE] dark:bg-[#242522] text-[#242522] dark:text-white border border-[#E9DFC9] dark:border-white/10 rounded focus:outline-none focus:border-[#52650B]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#242522] dark:text-white mb-1">Estimated End Date</label>
                  <input
                    type="date"
                    value={formData.travelEndDate}
                    onChange={(e) => setFormData({ ...formData, travelEndDate: e.target.value })}
                    className="w-full text-xs p-2.5 bg-[#F8F5EE] dark:bg-[#242522] text-[#242522] dark:text-white border border-[#E9DFC9] dark:border-white/10 rounded focus:outline-none focus:border-[#52650B]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#242522] dark:text-white mb-1">Adults (Age 12+)</label>
                  <select
                    value={formData.adultsCount}
                    onChange={(e) => setFormData({ ...formData, adultsCount: Number(e.target.value) })}
                    className="w-full text-xs p-2.5 bg-[#F8F5EE] dark:bg-[#242522] text-[#242522] dark:text-white border border-[#E9DFC9] dark:border-white/10 rounded focus:outline-none focus:border-[#52650B]"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, '12+ (Group)'].map((num) => (
                      <option key={num} value={typeof num === 'number' ? num : 12}>{num} Adults</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#242522] dark:text-white mb-1">Children (Under 12)</label>
                  <select
                    value={formData.childrenCount}
                    onChange={(e) => setFormData({ ...formData, childrenCount: Number(e.target.value) })}
                    className="w-full text-xs p-2.5 bg-[#F8F5EE] dark:bg-[#242522] text-[#242522] dark:text-white border border-[#E9DFC9] dark:border-white/10 rounded focus:outline-none focus:border-[#52650B]"
                  >
                    {[0, 1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>{num} Children</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Step 4: Accommodation Tier & Budget */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full bg-[#52650B] text-white text-xs font-bold flex items-center justify-center">4</span>
                <h3 className="text-base sm:text-lg font-serif font-bold text-[#080907] dark:text-white">
                  Accommodation Tier & Estimated Budget
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#242522] dark:text-white mb-1">Preferred Accommodation Level</label>
                  <select
                    value={formData.accommodationTier}
                    onChange={(e) => setFormData({ ...formData, accommodationTier: e.target.value as any })}
                    className="w-full text-xs p-2.5 bg-[#F8F5EE] dark:bg-[#242522] text-[#242522] dark:text-white border border-[#E9DFC9] dark:border-white/10 rounded focus:outline-none focus:border-[#52650B]"
                  >
                    <option value="Luxury Safari Lodges">Luxury Safari Lodges (Serena, Governors', Ashnil)</option>
                    <option value="Mid-Range Tented Camps">Comfortable Mid-Range Tented Camps</option>
                    <option value="Standard / Budget Friendly">Standard / Budget Friendly Safaris</option>
                    <option value="Private Ultra-Luxury Villas">Private Ultra-Luxury Wilderness Villas & Fly-in</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#242522] dark:text-white mb-1">Estimated Budget per Person (Excl. Int'l Flights)</label>
                  <select
                    value={formData.estimatedBudget}
                    onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
                    className="w-full text-xs p-2.5 bg-[#F8F5EE] dark:bg-[#242522] text-[#242522] dark:text-white border border-[#E9DFC9] dark:border-white/10 rounded focus:outline-none focus:border-[#52650B]"
                  >
                    <option value="Under $2,000 per person">Under $2,000 per person</option>
                    <option value="$2,000 - $3,500 per person">$2,000 - $3,500 per person</option>
                    <option value="$3,500 - $5,500 per person">$3,500 - $5,500 per person (Recommended for Luxury)</option>
                    <option value="$5,500 - $8,000+ per person">$5,500 - $8,000+ per person (Ultra-Luxury & Fly-in)</option>
                    <option value="Flexible / Advice Needed">Flexible / Seek Twiga Trails Advice</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Step 5: Contact Details */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full bg-[#52650B] text-white text-xs font-bold flex items-center justify-center">5</span>
                <h3 className="text-base sm:text-lg font-serif font-bold text-[#080907] dark:text-white">
                  Your Contact Information
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#242522] dark:text-white mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full text-xs p-2.5 bg-[#F8F5EE] dark:bg-[#242522] text-[#242522] dark:text-white border border-[#E9DFC9] dark:border-white/10 rounded focus:outline-none focus:border-[#52650B]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#242522] dark:text-white mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. sarah@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full text-xs p-2.5 bg-[#F8F5EE] dark:bg-[#242522] text-[#242522] dark:text-white border border-[#E9DFC9] dark:border-white/10 rounded focus:outline-none focus:border-[#52650B]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#242522] dark:text-white mb-1">Telephone / WhatsApp Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +44 7123 456789 or +1 (555) 012-3456"
                    value={formData.phoneWhatsapp}
                    onChange={(e) => setFormData({ ...formData, phoneWhatsapp: e.target.value })}
                    className="w-full text-xs p-2.5 bg-[#F8F5EE] dark:bg-[#242522] text-[#242522] dark:text-white border border-[#E9DFC9] dark:border-white/10 rounded focus:outline-none focus:border-[#52650B]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#242522] dark:text-white mb-1">Country of Residence</label>
                  <input
                    type="text"
                    placeholder="e.g. United Kingdom, USA, Germany, Kenya"
                    value={formData.countryOfResidence}
                    onChange={(e) => setFormData({ ...formData, countryOfResidence: e.target.value })}
                    className="w-full text-xs p-2.5 bg-[#F8F5EE] dark:bg-[#242522] text-[#242522] dark:text-white border border-[#E9DFC9] dark:border-white/10 rounded focus:outline-none focus:border-[#52650B]"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-xs font-semibold text-[#242522] dark:text-white mb-1">Special Requirements or Travel Notes</label>
                <textarea
                  rows={3}
                  placeholder="Tell us about dietary preferences, celebrations (honeymoon, birthday), mobility needs, or specific wildlife you wish to photograph..."
                  value={formData.specialRequirements}
                  onChange={(e) => setFormData({ ...formData, specialRequirements: e.target.value })}
                  className="w-full text-xs p-2.5 bg-[#F8F5EE] dark:bg-[#242522] text-[#242522] dark:text-white border border-[#E9DFC9] dark:border-white/10 rounded focus:outline-none focus:border-[#52650B]"
                />
              </div>
            </div>

            {/* Submission Button */}
            <div className="pt-4 border-t border-[#E9DFC9] dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-[#242522]/70 dark:text-[#E9DFC9]/70">
                <ShieldCheck className="w-4 h-4 text-[#52650B]" />
                <span>100% Privacy. Zero booking obligations or hidden fees.</span>
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto py-3.5 px-8 bg-[#B96829] hover:bg-[#a0561e] text-white text-xs font-semibold uppercase tracking-wider rounded transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <span>Submit Bespoke Safari Request</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </form>
        )}

      </div>
    </section>
  );
};
