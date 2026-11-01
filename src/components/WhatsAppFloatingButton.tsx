import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';

interface WhatsAppFloatingButtonProps {
  currentContext?: string;
}

export const WhatsAppFloatingButton: React.FC<WhatsAppFloatingButtonProps> = ({ currentContext }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const defaultMsg = currentContext 
    ? `Hello Twiga Trails Safaris! I am interested in: ${currentContext}. Please share more details and a quote.`
    : `Hello Twiga Trails Safaris! I am interested in planning an East African safari. Please share details.`;

  const whatsappUrl = `https://wa.me/254700000000?text=${encodeURIComponent(defaultMsg)}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Interactive Tooltip Card */}
      {showTooltip && (
        <div className="mb-3 max-w-xs bg-[#080907] text-white border border-[#34451C] rounded-xl p-4 shadow-2xl animate-fadeIn relative">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-white/50 hover:text-white"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-[11px] font-semibold text-[#B96829] uppercase tracking-wider">
              Twiga Safari Buddy Online
            </span>
          </div>
          <p className="text-xs text-white/80 leading-relaxed font-light">
            Need quick answers on dates, migration crossings, or custom quotes? Chat with us directly on WhatsApp!
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block w-full py-2 px-3 bg-[#52650B] hover:bg-[#435209] text-white text-[11px] font-semibold uppercase tracking-wider text-center rounded transition-colors"
          >
            Chat Now (+254 700 000 000)
          </a>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <div className="relative group">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setShowTooltip(true)}
          className="flex items-center gap-2.5 py-3 px-4 sm:px-5 bg-[#52650B] hover:bg-[#435209] text-white rounded-full shadow-2xl transition-all duration-300 transform group-hover:scale-105 active:scale-95 border-2 border-white/20"
          aria-label="Chat on WhatsApp with Twiga Trails Safaris"
        >
          {/* Official WhatsApp style SVG icon */}
          <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.2.662.591 1.221.774 1.394.861.174.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.144.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.392-12.416c-5.523 0-10 4.477-10 10 0 1.763.457 3.42 1.258 4.865l-1.336 4.877 4.996-1.31c1.393.759 2.977 1.191 4.662 1.191 5.522 0 10-4.477 10-10 0-5.522-4.478-10-10-10z"/>
          </svg>
          <span className="text-xs font-semibold uppercase tracking-wider hidden sm:inline">
            Safari Buddy WhatsApp
          </span>
        </a>
      </div>
    </div>
  );
};
