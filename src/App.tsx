import React, { useState, useEffect } from 'react';
import { PageRoute, Destination, SafariPackage, BookingEnquiry } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HomeIntroAndFaq } from './components/HomeIntroAndFaq';
import { FeaturedDestinations } from './components/FeaturedDestinations';
import { SafariPackagesSection } from './components/SafariPackagesSection';
import { PackageDetailModal } from './components/PackageDetailModal';
import { DestinationDetailModal } from './components/DestinationDetailModal';
import { WhyChooseUs } from './components/WhyChooseUs';
import { SignatureExperiences } from './components/SignatureExperiences';
import { BespokePlanner } from './components/BespokePlanner';
import { AboutUsSection } from './components/AboutUsSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { TravelArticlesSection } from './components/TravelArticlesSection';
import { BookingModal } from './components/BookingModal';
import { SavedEnquiriesModal } from './components/SavedEnquiriesModal';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { SearchModal } from './components/SearchModal';
import { Footer } from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [selectedPackage, setSelectedPackage] = useState<SafariPackage | null>(null);
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [prefilledBookingTitle, setPrefilledBookingTitle] = useState<string | undefined>(undefined);
  const [savedEnquiriesModalOpen, setSavedEnquiriesModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [quickFilters, setQuickFilters] = useState<{ destination?: string; duration?: string; month?: string } | undefined>(undefined);

  // Theme state: dark / light
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    try {
      const stored = localStorage.getItem('twiga_theme');
      if (stored) return stored === 'dark';
      // Default to false (Warm Ivory luxury aesthetic) or system preference
      return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
    } catch {
      return false;
    }
  });

  // Apply dark class to documentElement whenever isDarkMode changes
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    try {
      localStorage.setItem('twiga_theme', isDarkMode ? 'dark' : 'light');
    } catch (e) {
      console.error(e);
    }
  }, [isDarkMode]);

  const handleToggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  // Keyboard shortcut listener for Search (Cmd+K or Ctrl+K or /)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchModalOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Persistent enquiries state in LocalStorage
  const [enquiries, setEnquiries] = useState<BookingEnquiry[]>(() => {
    try {
      const stored = localStorage.getItem('twiga_trails_enquiries');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // URL Hash Sync for bookmarkable pages
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageRoute;
      const validPages: PageRoute[] = ['home', 'about', 'destinations', 'packages', 'experiences', 'bespoke', 'gallery', 'contact'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageRoute) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSaveEnquiry = (newEnquiry: BookingEnquiry) => {
    const enrichedEnquiry: BookingEnquiry = {
      ...newEnquiry,
      id: `twiga-${Date.now()}`,
      createdAt: new Date().toISOString()
    };
    const updated = [enrichedEnquiry, ...enquiries];
    setEnquiries(updated);
    try {
      localStorage.setItem('twiga_trails_enquiries', JSON.stringify(updated));
    } catch (err) {
      console.error('Could not save to localStorage', err);
    }
  };

  const handleClearEnquiries = () => {
    setEnquiries([]);
    try {
      localStorage.removeItem('twiga_trails_enquiries');
    } catch (err) {
      console.error('Could not clear localStorage', err);
    }
  };

  const handleOpenBooking = (packageTitle?: string) => {
    setPrefilledBookingTitle(packageTitle);
    setBookingModalOpen(true);
  };

  const handleQuickSearch = (filters: { destination: string; duration: string; month: string }) => {
    setQuickFilters(filters);
    handleNavigate('packages');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F5EE] dark:bg-[#080907] text-[#242522] dark:text-[#E9DFC9] transition-colors duration-300">
      
      {/* Global Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenBooking}
        onOpenEnquiries={() => setSavedEnquiriesModalOpen(true)}
        enquiriesCount={enquiries.length}
        isDarkMode={isDarkMode}
        onToggleTheme={handleToggleTheme}
        onSetThemeMode={(dark) => setIsDarkMode(dark)}
        onOpenSearch={() => setSearchModalOpen(true)}
      />

      {/* Main Page Rendering */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <>
            <Hero
              onNavigate={handleNavigate}
              onOpenBooking={() => handleOpenBooking()}
              onQuickSearch={handleQuickSearch}
            />
            
            <HomeIntroAndFaq
              onOpenBooking={() => handleOpenBooking()}
              onExplorePackages={() => handleNavigate('packages')}
            />

            <FeaturedDestinations
              onSelectDestination={(dest) => setSelectedDestination(dest)}
              onEnquireDestination={(destName) => handleOpenBooking(`Safari in ${destName}`)}
              onViewAll={() => handleNavigate('destinations')}
              isFullPage={false}
            />

            <SafariPackagesSection
              onSelectPackage={(pkg) => setSelectedPackage(pkg)}
              onRequestQuote={(pkg) => handleOpenBooking(pkg.title)}
              onViewAll={() => handleNavigate('packages')}
              isFullPage={false}
            />

            <WhyChooseUs />

            <SignatureExperiences
              onOpenBooking={(title) => handleOpenBooking(title)}
              onViewAll={() => handleNavigate('experiences')}
              isFullPage={false}
            />

            <TestimonialsSection />

            <TravelArticlesSection
              onOpenBooking={(topic) => handleOpenBooking(topic)}
            />

            {/* Teaser CTA for Bespoke Planning */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#080907] text-white border-t border-[#34451C]/60 text-center">
              <div className="max-w-4xl mx-auto">
                <span className="text-xs uppercase tracking-widest text-[#B96829] font-semibold mb-2 block">
                  Tailored Travel Assistance
                </span>
                <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight mb-4">
                  Dreaming of a Unique African Adventure?
                </h2>
                <p className="text-sm text-white/70 max-w-xl mx-auto leading-relaxed mb-8">
                  Whether you wish to combine a Great Migration safari with the white sand beaches of Diani or trek with mountain gorillas in Uganda, our team creates bespoke itineraries suited to your budget and dreams.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={() => handleNavigate('bespoke')}
                    className="py-3.5 px-8 bg-[#B96829] hover:bg-[#a0561e] text-white text-xs font-semibold uppercase tracking-wider rounded transition-all shadow"
                  >
                    Open Bespoke Safari Planner
                  </button>
                  <button
                    onClick={() => handleOpenBooking()}
                    className="py-3.5 px-8 bg-white/10 hover:bg-white/20 text-[#E9DFC9] text-xs font-semibold uppercase tracking-wider rounded transition-all border border-white/20"
                  >
                    Quick Booking Enquiry
                  </button>
                </div>
              </div>
            </section>
          </>
        )}

        {currentPage === 'about' && (
          <AboutUsSection onOpenBooking={() => handleOpenBooking()} />
        )}

        {currentPage === 'destinations' && (
          <FeaturedDestinations
            onSelectDestination={(dest) => setSelectedDestination(dest)}
            onEnquireDestination={(destName) => handleOpenBooking(`Safari in ${destName}`)}
            isFullPage={true}
          />
        )}

        {currentPage === 'packages' && (
          <SafariPackagesSection
            onSelectPackage={(pkg) => setSelectedPackage(pkg)}
            onRequestQuote={(pkg) => handleOpenBooking(pkg.title)}
            isFullPage={true}
            initialFilters={quickFilters}
          />
        )}

        {currentPage === 'experiences' && (
          <SignatureExperiences
            onOpenBooking={(title) => handleOpenBooking(title)}
            isFullPage={true}
          />
        )}

        {currentPage === 'bespoke' && (
          <BespokePlanner onSaveEnquiry={handleSaveEnquiry} />
        )}

        {currentPage === 'gallery' && (
          <GallerySection onOpenBooking={(subject) => handleOpenBooking(subject)} />
        )}

        {currentPage === 'contact' && (
          <ContactSection onSaveEnquiry={handleSaveEnquiry} />
        )}
      </main>

      {/* Global Modals */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onSelectPackage={(pkg) => setSelectedPackage(pkg)}
        onSelectDestination={(dest) => setSelectedDestination(dest)}
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenBooking}
      />

      <PackageDetailModal
        pkg={selectedPackage}
        onClose={() => setSelectedPackage(null)}
        onRequestQuote={(pkg) => handleOpenBooking(pkg.title)}
      />

      <DestinationDetailModal
        destination={selectedDestination}
        onClose={() => setSelectedDestination(null)}
        onEnquire={(destName) => handleOpenBooking(`Safari in ${destName}`)}
      />

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        preselectedPackageTitle={prefilledBookingTitle}
        onSaveEnquiry={handleSaveEnquiry}
      />

      <SavedEnquiriesModal
        isOpen={savedEnquiriesModalOpen}
        onClose={() => setSavedEnquiriesModalOpen(false)}
        enquiries={enquiries}
        onClearEnquiries={handleClearEnquiries}
      />

      {/* Floating WhatsApp Button */}
      <WhatsAppFloatingButton
        currentContext={
          selectedPackage
            ? selectedPackage.title
            : selectedDestination
            ? selectedDestination.name
            : currentPage !== 'home'
            ? `${currentPage} page`
            : undefined
        }
      />

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
      />

    </div>
  );
}
