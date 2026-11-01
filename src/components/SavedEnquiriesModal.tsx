import React from 'react';
import { BookingEnquiry } from '../types';
import { X, Calendar, MapPin, Users, Trash2, Download, MessageSquare, Compass } from 'lucide-react';

interface SavedEnquiriesModalProps {
  isOpen: boolean;
  onClose: () => void;
  enquiries: BookingEnquiry[];
  onClearEnquiries: () => void;
}

export const SavedEnquiriesModal: React.FC<SavedEnquiriesModalProps> = ({
  isOpen,
  onClose,
  enquiries,
  onClearEnquiries
}) => {
  if (!isOpen) return null;

  const handleExportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(enquiries, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `twiga_trails_enquiries_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div 
        className="relative bg-[#080907] text-[#E9DFC9] border border-[#34451C] rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8"
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

        <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#B96829] font-semibold">
              Traveller Dashboard & Records
            </div>
            <h2 className="text-2xl font-serif font-bold text-white mt-1">
              Your Safari Enquiries ({enquiries.length})
            </h2>
          </div>
          {enquiries.length > 0 && (
            <div className="flex items-center gap-2">
              <button
                onClick={handleExportJSON}
                className="py-1.5 px-3 bg-white/10 hover:bg-white/20 text-[#E9DFC9] text-xs font-medium rounded transition-colors flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export JSON</span>
              </button>
              <button
                onClick={onClearEnquiries}
                className="py-1.5 px-3 bg-red-950/60 hover:bg-red-900 text-red-300 text-xs font-medium rounded transition-colors flex items-center gap-1.5"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear All</span>
              </button>
            </div>
          )}
        </div>

        {enquiries.length === 0 ? (
          <div className="py-12 text-center text-white/50 space-y-3">
            <Compass className="w-12 h-12 mx-auto text-[#B96829]/60" />
            <h3 className="text-base font-serif font-semibold text-white">No Enquiries Logged Yet</h3>
            <p className="text-xs text-white/50 max-w-md mx-auto">
              Whenever you request a quote for a safari package or submit a custom bespoke journey, 
              it will be stored here in your browser session for easy review and direct WhatsApp follow-up.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {enquiries.map((item, idx) => (
              <div
                key={item.id || idx}
                className="p-5 bg-white/5 border border-white/10 rounded-xl space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-2">
                  <div>
                    <h4 className="text-base font-serif font-bold text-white">
                      {item.packageTitle || 'Custom Safari Request'}
                    </h4>
                    <span className="text-[11px] text-white/50">
                      Logged on: {item.createdAt ? new Date(item.createdAt).toLocaleString() : 'Recent'}
                    </span>
                  </div>
                  <a
                    href={`https://wa.me/254700000000?text=${encodeURIComponent(`Hello Twiga Trails Safaris! I'm following up on my enquiry for "${item.packageTitle}". Client name: ${item.fullName}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-1.5 px-3 bg-[#52650B] hover:bg-[#435209] text-white text-xs font-medium rounded flex items-center gap-1.5 self-start sm:self-auto"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Follow-up</span>
                  </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 text-xs text-white/80">
                  <div>
                    <span className="text-white/40 block text-[10px] uppercase">Lead Name</span>
                    <strong>{item.fullName}</strong> ({item.countryOfResidence})
                  </div>
                  <div>
                    <span className="text-white/40 block text-[10px] uppercase">Contact</span>
                    {item.email} · {item.phoneWhatsapp}
                  </div>
                  <div>
                    <span className="text-white/40 block text-[10px] uppercase">Dates</span>
                    {item.travelStartDate} {item.travelEndDate ? `to ${item.travelEndDate}` : ''}
                  </div>
                  <div>
                    <span className="text-white/40 block text-[10px] uppercase">Guests</span>
                    {item.adultsCount} Adults, {item.childrenCount} Children
                  </div>
                  <div>
                    <span className="text-white/40 block text-[10px] uppercase">Tier</span>
                    {item.accommodationTier}
                  </div>
                  <div>
                    <span className="text-white/40 block text-[10px] uppercase">Budget</span>
                    {item.estimatedBudget}
                  </div>
                </div>

                {item.specialRequirements && (
                  <div className="pt-2 text-xs text-white/70 italic bg-black/30 p-2.5 rounded border border-white/5">
                    "{item.specialRequirements}"
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 pt-4 border-t border-white/10 text-right">
          <button
            onClick={onClose}
            className="py-2 px-6 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors"
          >
            Close Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};
