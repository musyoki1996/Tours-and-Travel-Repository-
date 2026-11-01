import { Destination, SafariPackage, Experience, GalleryItem, Testimonial } from '../types';

export const HERO_IMAGE = '/src/assets/images/hero_african_safari_1793524204824.jpg';
export const MAASAI_MARA_IMAGE = '/src/assets/images/destination_maasai_mara_1793524204986.jpg';
export const AMBOSELI_IMAGE = '/src/assets/images/destination_amboseli_1793524205358.jpg';
export const SERENGETI_IMAGE = '/src/assets/images/destination_serengeti_1793524205491.jpg';
export const BALLOON_SAFARI_IMAGE = '/src/assets/images/experience_balloon_safari_1793524205586.jpg';
export const BRAND_LOGO = '/assets/aistudio/Twiga-Trails-Safaris-Logo2_facc5b60.png';

export const DESTINATIONS: Destination[] = [
  {
    id: 'maasai-mara',
    name: 'Maasai Mara National Reserve',
    country: 'Kenya',
    tagline: 'The Crown Jewel of African Wildlife and The Great Migration',
    featuredImage: MAASAI_MARA_IMAGE,
    description: 'Renowned globally for the spectacle of the Great Migration and its legendary predator density. The Maasai Mara offers undulating golden grasslands, winding Mara River crossings, and quintessential African sunrises with iconic flat-topped acacia silhouettes.',
    wildlifeHighlights: ['Lions & Lion Coalitions', 'Leopards & Cheetahs', 'Wildebeest Migration', 'African Elephants', 'Black Rhino', 'Hippos & Crocodiles'],
    bestTimeToVisit: 'July to October (Great Migration) or January to March (Calving & clear predator viewing)',
    suggestedActivities: ['Sunrise Hot Air Balloon Safari', '4x4 Game Drives with Pop-up Roof', 'Authentic Maasai Cultural Village Visit', 'Bush Sundowners & Lantern Dinners'],
    altitude: '1,500m – 2,170m above sea level',
    landscapeType: 'Savannah grassland, riverine forest, acacia woodlands',
    popularPackages: ['mara-migration-5d', 'classic-kenya-8d', 'mara-flyin-luxury-4d']
  },
  {
    id: 'amboseli',
    name: 'Amboseli National Park',
    country: 'Kenya',
    tagline: 'Land of Giants in the Shadow of Mount Kilimanjaro',
    featuredImage: AMBOSELI_IMAGE,
    description: 'Famed for offering the classic African postcard view: free-ranging herds of majestic African elephants walking across dusty plains with the snow-capped peak of Mount Kilimanjaro towering in the background.',
    wildlifeHighlights: ['Large Tusked Elephants', 'Lions & Spotted Hyenas', 'Cheetahs', 'Giraffes & Zebras', 'Over 400 Bird Species', 'Pelicans & Flamingos in seasonal swamps'],
    bestTimeToVisit: 'June to October and December to March for clear views of Kilimanjaro and prime game viewing',
    suggestedActivities: ['Kilimanjaro Viewpoint Game Drives', 'Observation Hill Panoramic Walk', 'Maasai Cultural Community Engagement', 'Bird Watching at Enkongo Narok Swamps'],
    altitude: '1,100m – 1,200m above sea level',
    landscapeType: 'Dry dried-out lake basin, sulphur springs, savannah',
    popularPackages: ['amboseli-tsavo-5d', 'classic-kenya-8d']
  },
  {
    id: 'serengeti',
    name: 'Serengeti National Park',
    country: 'Tanzania',
    tagline: 'Endless Golden Plains and The World’s Greatest Wildlife Movement',
    featuredImage: SERENGETI_IMAGE,
    description: 'An immense UNESCO World Heritage sanctuary spanning over 14,750 sq km. The Serengeti ecosystem is host to over two million herbivores and the highest concentration of large carnivores in Africa.',
    wildlifeHighlights: ['The Big Five', 'High Cheetah Density on Kopjes', 'Great Migration Herds', 'Spotted Hyenas', 'Wild Dogs', 'Nile Crocodiles'],
    bestTimeToVisit: 'December to March (Southern Serengeti calving) and June to October (Northern Mara river crossings)',
    suggestedActivities: ['Kopje Predator Tracking', 'Dawn Balloon Safari with Champagne Breakfast', 'Remote Wilderness Tented Camping', 'Seronera Valley Game Drives'],
    altitude: '920m – 1,850m above sea level',
    landscapeType: 'Treeless savannah plains, rocky granite kopjes, acacia woodlands',
    popularPackages: ['serengeti-crater-6d', 'east-africa-grand-10d']
  },
  {
    id: 'samburu',
    name: 'Samburu National Reserve',
    country: 'Kenya',
    tagline: 'The Rugged Northern Frontier & The Samburu Special Five',
    featuredImage: MAASAI_MARA_IMAGE,
    description: 'A striking arid wilderness along the banks of the palm-fringed Ewaso Nyiro River. Samburu is celebrated for unique northern endemic wildlife species found nowhere else south of the equator.',
    wildlifeHighlights: ['Grevy’s Zebra', 'Gerenuk (Giraffe-necked antelope)', 'Reticulated Giraffe', 'Beisa Oryx', 'Somali Ostrich', 'Leopards'],
    bestTimeToVisit: 'December to March and June to October during the dry seasons when animals congregate at the river',
    suggestedActivities: ['Riverbed Game Tracking', 'Samburu Cultural Village Visit', 'Bird Watching along Ewaso Nyiro', 'Stargazing in pristine unpolluted skies'],
    altitude: '800m – 1,230m above sea level',
    landscapeType: 'Arid scrubland, doum palm forests, rugged granite hills',
    popularPackages: ['samburu-olpejeta-4d', 'kenya-wildlife-photographic-7d']
  },
  {
    id: 'ol-pejeta',
    name: 'Ol Pejeta Conservancy',
    country: 'Kenya',
    tagline: 'Sanctuary for the World’s Last Northern White Rhinos',
    featuredImage: AMBOSELI_IMAGE,
    description: 'A trailblazer in African wildlife conservation, Ol Pejeta spans 90,000 acres in Laikipia with views of Mount Kenya. It is the largest black rhino sanctuary in East Africa and home to the world’s last two remaining Northern White Rhinos.',
    wildlifeHighlights: ['Black & White Rhinos', 'Rescued Chimpanzees', 'Lions & African Wild Dogs', 'Elephants', 'Jackson’s Hartebeest'],
    bestTimeToVisit: 'Year-round, with dry months from June to September and December to February offering optimal viewing',
    suggestedActivities: ['Meet Najin & Fatu (Northern White Rhinos)', 'Sweetwaters Chimpanzee Sanctuary Visit', 'Lion Tracking with Conservation Rangers', 'Night Game Drives'],
    altitude: '1,700m – 1,900m above sea level',
    landscapeType: 'Open plains, whistling thorn acacia, marshland',
    popularPackages: ['samburu-olpejeta-4d', 'classic-kenya-8d']
  },
  {
    id: 'ngorongoro',
    name: 'Ngorongoro Conservation Area',
    country: 'Tanzania',
    tagline: 'Africa’s Eden – The Intact Volcanic Caldera',
    featuredImage: SERENGETI_IMAGE,
    description: 'The world’s largest intact, unflooded volcanic caldera, measuring over 260 sq km and 600m deep. A self-contained sanctuary holding over 25,000 large mammals living in a verdant, dramatic amphitheatre.',
    wildlifeHighlights: ['Critically Endangered Black Rhino', 'Dense Lion Prides', 'Giant Tusker Elephants', 'Flamingos in Lake Magadi', 'Golden Jackals'],
    bestTimeToVisit: 'Outstanding game viewing all year round; May to October offers drier conditions and lush rim views',
    suggestedActivities: ['600m Crater Floor Descent Drive', 'Picnic by the Hippo Pool', 'Empakaai Crater Rim Hike', 'Olduvai Gorge Paleontology Visit'],
    altitude: 'Rim: 2,286m | Floor: 1,700m',
    landscapeType: 'Volcanic caldera, alkaline soda lake, montane forest, open grassland',
    popularPackages: ['serengeti-crater-6d', 'east-africa-grand-10d']
  },
  {
    id: 'tsavo',
    name: 'Tsavo East & Tsavo West National Parks',
    country: 'Kenya',
    tagline: 'The Red Elephants and Untamed Theatre of the Wild',
    featuredImage: AMBOSELI_IMAGE,
    description: 'Together forming one of the largest conservation areas on Earth. Famous for dust-red elephants that roll in the volcanic soil, the crystal-clear Mzima Springs, the dramatic Yatta Plateau, and legendary history.',
    wildlifeHighlights: ['Famous Red Dust Elephants', 'Mzima Springs Hippos & Fish', 'Shetani Lava Flows', 'Leopards', 'Cheetahs', 'Over 500 Bird Species'],
    bestTimeToVisit: 'May to October and January to March',
    suggestedActivities: ['Underwater Hippo Viewing at Mzima Springs', 'Yatta Plateau Panoramic Sunset Drive', 'Ngulia Rhino Sanctuary Visit', 'Rock Climbing & Walking Safaris'],
    altitude: '200m – 1,000m above sea level',
    landscapeType: 'Semi-arid bush, volcanic cones, crystalline spring waters',
    popularPackages: ['amboseli-tsavo-5d', 'bush-to-beach-10d']
  },
  {
    id: 'lake-nakuru',
    name: 'Lake Nakuru National Park',
    country: 'Kenya',
    tagline: 'A Haven for Rhinos and Great Rift Valley Birds',
    featuredImage: MAASAI_MARA_IMAGE,
    description: 'Nestled on the floor of the Great Rift Valley, surrounded by wooded and bushy grasslands. A designated Ramsar wetland sanctuary renowned for both white and black rhinos, Rothschild’s giraffes, and prolific birdlife.',
    wildlifeHighlights: ['Rothschild’s Giraffe', 'Black & White Rhinos', 'Tree-climbing Lions', 'Leopards', 'Great White Pelicans', 'African Fish Eagles'],
    bestTimeToVisit: 'Year-round, with dry months of July to September and January to March being particularly picturesque',
    suggestedActivities: ['Baboon Cliff Panoramic Viewpoint', 'Makalia Falls Visit', 'Rhino Sanctuary Patrol Game Drive', 'Birding Along the Shoreline'],
    altitude: '1,754m above sea level',
    landscapeType: 'Alkaline lake basin, yellow-barked acacia forest, rocky cliffs',
    popularPackages: ['classic-kenya-8d', 'kenya-wildlife-photographic-7d']
  },
  {
    id: 'lake-naivasha',
    name: 'Lake Naivasha & Crescent Island',
    country: 'Kenya',
    tagline: 'Freshwater Tranquility and Walking Amongst Wildlife',
    featuredImage: BALLOON_SAFARI_IMAGE,
    description: 'A serene freshwater lake in the Great Rift Valley fringed by papyrus and yellow fever trees. Visitors enjoy tranquil boat safaris alongside hippos and walking safely amongst giraffes and zebras on Crescent Island.',
    wildlifeHighlights: ['Hundreds of Hippos', 'Fish Eagles & Kingfishers', 'Waterbucks', 'Giraffes & Zebras on Crescent Island'],
    bestTimeToVisit: 'Year-round; perfect weekend escape or transition hub between Nairobi and the Maasai Mara',
    suggestedActivities: ['Boat Safari to Crescent Island Game Sanctuary', 'Walking Safari Among Wildlife', 'Hell’s Gate National Park Cycling & Gorge Walk', 'High Tea by the Lakeshore'],
    altitude: '1,884m above sea level',
    landscapeType: 'Freshwater lake, papyrus swamp, acacia woodland',
    popularPackages: ['classic-kenya-8d', 'mara-migration-5d']
  },
  {
    id: 'mount-kenya',
    name: 'Mount Kenya National Park',
    country: 'Kenya',
    tagline: 'Africa’s Second Highest Mountain and Sacred Glacial Peaks',
    featuredImage: AMBOSELI_IMAGE,
    description: 'An imposing extinct volcano crowned by jagged peaks and equatorial glaciers. A UNESCO World Heritage site known for Afro-alpine flora, giant lobelias, tarns, and pristine mountain hiking.',
    wildlifeHighlights: ['Bongo Antelope (rare)', 'Giant Forest Hogs', 'Black-fronted Duikers', 'Colobus Monkeys', 'Elephants in lower forests'],
    bestTimeToVisit: 'December to March and July to October for clear, dry trekking conditions',
    suggestedActivities: ['Trek to Point Lenana (4,985m)', 'Sirimon & Chogoria Route Hikes', 'Trout Fishing in High Tarns', 'Birding in Montane Forest'],
    altitude: 'Up to 5,199m (Batian Peak)',
    landscapeType: 'Montane forest, bamboo belts, moorlands, glacial tarns, jagged crags',
    popularPackages: ['adventure-mt-kenya-5d']
  },
  {
    id: 'zanzibar',
    name: 'Zanzibar Island & Coastal Escapes',
    country: 'Tanzania',
    tagline: 'The Spice Island – Turquoise Waters and Arabesque Stone Town',
    featuredImage: SERENGETI_IMAGE,
    description: 'The idyllic Indian Ocean archipelago where white sand beaches meet turquoise waters and fragrant spice plantations. The perfect restorative conclusion to any thrilling East African bush safari.',
    wildlifeHighlights: ['Red Colobus Monkeys in Jozani Forest', 'Bottlenose Dolphins', 'Sea Turtles', 'Tropical Reef Coral & Marine Life'],
    bestTimeToVisit: 'June to October and December to February for sunny, warm beach weather',
    suggestedActivities: ['Historic Stone Town UNESCO Walking Tour', 'Spice Farm Sensory Tasting Tour', 'Dhow Sunset Sailing Cruise', 'Mnemba Atoll Snorkeling & Diving'],
    altitude: 'Sea level',
    landscapeType: 'Coral atolls, white sand beaches, spice plantations, historic stone towns',
    popularPackages: ['bush-to-beach-10d']
  },
  {
    id: 'bwindi',
    name: 'Bwindi Impenetrable National Park',
    country: 'Uganda',
    tagline: 'Face-to-Face with the Gentle Giants – Mountain Gorillas',
    featuredImage: MAASAI_MARA_IMAGE,
    description: 'An ancient, misty Afro-montane rainforest in southwestern Uganda holding roughly half of the world’s surviving mountain gorilla population. One of the most emotionally profound wildlife encounters on Earth.',
    wildlifeHighlights: ['Mountain Gorillas', 'Chimpanzees', 'L’Hoest’s Monkeys', 'Over 350 Bird Species', 'Forest Elephants'],
    bestTimeToVisit: 'June to August and December to February (dryer trekking trails)',
    suggestedActivities: ['Habituated Gorilla Trekking Expedition', 'Batwa Cultural Forest Experience', 'Waterfall Trail Forest Hikes', 'Albertine Rift Endemic Birding'],
    altitude: '1,160m – 2,607m above sea level',
    landscapeType: 'Dense ancient rainforest, steep mist-shrouded valleys',
    popularPackages: ['uganda-gorilla-primate-5d']
  }
];

export const SAFARI_PACKAGES: SafariPackage[] = [
  {
    id: 'classic-kenya-8d',
    title: '8-Day Classic Kenya Wildlife Odyssey',
    subtitle: 'Amboseli, Lake Nakuru & Maasai Mara',
    destination: 'Amboseli · Lake Nakuru · Maasai Mara',
    country: 'Kenya',
    durationDays: 8,
    durationText: '8 Days / 7 Nights',
    category: 'Luxury',
    categoryLabel: 'Luxury Safari',
    featuredImage: MAASAI_MARA_IMAGE,
    indicativePrice: 'From $3,450 per person',
    priceNote: 'Indicative luxury rate based on 2 travellers sharing; final quote tailored to travel dates & group size.',
    shortDescription: 'The quintessential Kenya journey combining Amboseli’s giant elephants with Kilimanjaro backdrops, Lake Nakuru’s rhino sanctuary, and three full days exploring the predator-rich Maasai Mara.',
    highlights: [
      'Iconic Mount Kilimanjaro elephant photography in Amboseli',
      'Both Black and White Rhino sightings at Lake Nakuru',
      'Three full days in the Maasai Mara tracking the Big Five',
      'Custom 4x4 Land Cruiser with guaranteed window seats and pop-up roof',
      'KPSGA certified professional safari guide and driver companion'
    ],
    inclusions: [
      'All national park conservation fees and government taxes',
      'Full-board accommodation at premier luxury tented camps and lodges',
      'Transport in custom 4x4 safari Land Cruiser with charging ports & cooler box',
      'Unlimited game drives as specified in the detailed itinerary',
      'Experienced English-speaking professional safari guide',
      'Complimentary bottled mineral water throughout all game drives',
      'Emergency medical evacuation insurance cover (AMREF Flying Doctors)'
    ],
    exclusions: [
      'International flights and entry visas to Kenya',
      'Optional hot air balloon safari in Maasai Mara ($450 - $500 per person)',
      'Gratuities and tips for guides and camp staff',
      'Personal expenses, laundry, and premium alcoholic beverages'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Nairobi to Amboseli National Park',
        location: 'Amboseli National Park',
        description: 'Your Twiga Trails safari buddy meets you at your Nairobi hotel or Jomo Kenyatta International Airport. Depart through scenic Maasai plains towards Amboseli. Arrive in time for lunch at your luxury lodge followed by your first afternoon game drive beneath Mount Kilimanjaro.',
        meals: 'Lunch, Dinner',
        accommodation: 'Ol Tukai Lodge / Amboseli Serena Safari Lodge'
      },
      {
        day: 2,
        title: 'Full Day in Amboseli – Land of the Giants',
        location: 'Amboseli National Park',
        description: 'Early morning game drive while the skies around Kilimanjaro are clearest. Watch massive bull elephants bathe in the Enkongo Narok marshes. Return for midday relaxation and a refreshing dip, followed by an afternoon search for lions, cheetahs, and abundant birdlife.',
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Ol Tukai Lodge / Amboseli Serena Safari Lodge'
      },
      {
        day: 3,
        title: 'Amboseli to Lake Nakuru via Great Rift Valley',
        location: 'Lake Nakuru National Park',
        description: 'Journey past Nairobi and descend into the dramatic Great Rift Valley with panoramic viewpoints. Arrive at Lake Nakuru in time for an afternoon game drive exploring the lake shores and acacia woodland sanctuary.',
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Sarova Lion Hill Game Lodge / Lake Nakuru Sopa'
      },
      {
        day: 4,
        title: 'Lake Nakuru to Maasai Mara National Reserve',
        location: 'Maasai Mara',
        description: 'Morning game drive tracking rhinos and leopards in Nakuru before driving southwest through Narok town to the legendary Maasai Mara. Arrive at your luxury tented camp overlooking the savannah in time for sunset drinks.',
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Ashnil Mara Camp / Mara Serena Safari Lodge'
      },
      {
        day: 5,
        title: 'Full Day Maasai Mara Wildlife Tracking',
        location: 'Maasai Mara',
        description: 'Full day spent traversing the vast reserve with a packed picnic lunch enjoyed under a shady acacia tree. Track pride lions, solitary leopards, and sweeping herds of plains game across the Mara savannah.',
        meals: 'Breakfast, Picnic Lunch, Dinner',
        accommodation: 'Ashnil Mara Camp / Mara Serena Safari Lodge'
      },
      {
        day: 6,
        title: 'Maasai Mara – Mara River & Predator Alley',
        location: 'Maasai Mara',
        description: 'Focus your exploration on the famous Mara River loops, watching giant Nile crocodiles and pod hippos. Opportunity to book a dawn hot air balloon safari gliding over the plains at sunrise.',
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Ashnil Mara Camp / Mara Serena Safari Lodge'
      },
      {
        day: 7,
        title: 'Maasai Mara – Cultural Immersion & Sundowners',
        location: 'Maasai Mara',
        description: 'Morning game drive followed by an authentic visit to a traditional Maasai Manyatta to learn about ancient customs, traditional songs, and beadwork. Finish the evening with a special bush sundowner celebrating your journey.',
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Ashnil Mara Camp / Mara Serena Safari Lodge'
      },
      {
        day: 8,
        title: 'Maasai Mara to Nairobi Departure',
        location: 'Nairobi',
        description: 'Enjoy a final dawn game drive in the Mara. After a hearty bush breakfast, journey back to Nairobi with scenic Rift Valley stops. Drop-off at your hotel or international airport.',
        meals: 'Breakfast, Lunch',
        accommodation: 'Departure (Day room available upon request)'
      }
    ],
    groupSize: 'Private safari (2 to 6 guests per vehicle) or small bespoke groups',
    bestMonths: 'July to October (Great Migration) or January to March',
    featured: true
  },
  {
    id: 'mara-migration-5d',
    title: '5-Day Maasai Mara Great Migration Spectacle',
    subtitle: 'The River Crossings & Big Cat Encounters',
    destination: 'Maasai Mara National Reserve',
    country: 'Kenya',
    durationDays: 5,
    durationText: '5 Days / 4 Nights',
    category: 'Migration',
    categoryLabel: 'Migration Safari',
    featuredImage: MAASAI_MARA_IMAGE,
    indicativePrice: 'From $2,650 per person',
    priceNote: 'Configurable rates based on high migration season (July–Oct) vs green season.',
    shortDescription: 'Dedicated entirely to the greatest wildlife theatre on Earth. Spend four nights deep inside the Maasai Mara ecosystem positioning for dramatic river crossings and predator action.',
    highlights: [
      'Prime positioning at known Mara River crossing points',
      'High chances of witnessing dramatic lion, leopard, and cheetah hunts',
      'Exclusive sunrise and sunset photography hours',
      'Stays at intimate luxury tented camps close to wildlife paths'
    ],
    inclusions: [
      '4 nights luxury tented camp accommodation with all meals',
      'Dedicated 4x4 safari Land Cruiser with open roof hatch',
      'All park entrance fees and conservancy permits',
      'Experienced wildlife tracking guide'
    ],
    exclusions: ['International airfare', 'Hot air balloon safari', 'Personal tips & travel insurance'],
    itinerary: [
      {
        day: 1,
        title: 'Nairobi to Maasai Mara Reserve',
        location: 'Maasai Mara',
        description: 'Pick-up in Nairobi and scenic drive across the Great Rift Valley escarpment into the Mara plains. Afternoon introductory game drive.',
        meals: 'Lunch, Dinner',
        accommodation: 'Entim Mara / Mara Bush Camp'
      },
      {
        day: 2,
        title: 'River Crossings & Mara Triangle Tracking',
        location: 'Mara River',
        description: 'Full day along the Mara River monitoring herds building on the banks, waiting for the thunderous migration crossing.',
        meals: 'Breakfast, Picnic Lunch, Dinner',
        accommodation: 'Entim Mara / Mara Bush Camp'
      },
      {
        day: 3,
        title: 'Big Cat Territories & Open Savannah',
        location: 'Central Plains',
        description: 'Morning and afternoon game drives tracking resident lion prides, cheetah coalitions scanning from termite mounds, and leopards.',
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Entim Mara / Mara Bush Camp'
      },
      {
        day: 4,
        title: 'Sunrise Balloon Safari & Bush Breakfast',
        location: 'Maasai Mara',
        description: 'Optional dawn hot air balloon float over migrating herds followed by champagne bush breakfast. Afternoon game drive and sundowners.',
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Entim Mara / Mara Bush Camp'
      },
      {
        day: 5,
        title: 'Final Bush Drive & Return to Nairobi',
        location: 'Nairobi',
        description: 'Final early morning game drive capturing golden hour wildlife. Return to Nairobi arriving late afternoon.',
        meals: 'Breakfast, Lunch',
        accommodation: 'Departure'
      }
    ],
    groupSize: 'Private 4x4 vehicle',
    bestMonths: 'July, August, September, October',
    featured: true
  },
  {
    id: 'serengeti-crater-6d',
    title: '6-Day Serengeti & Ngorongoro Crater Odyssey',
    subtitle: 'Tanzania’s World-Famous Northern Circuit',
    destination: 'Serengeti National Park · Ngorongoro Crater · Lake Manyara',
    country: 'Tanzania',
    durationDays: 6,
    durationText: '6 Days / 5 Nights',
    category: 'Luxury',
    categoryLabel: 'Luxury Northern Circuit',
    featuredImage: SERENGETI_IMAGE,
    indicativePrice: 'From $3,800 per person',
    priceNote: 'Indicative luxury rates; includes crater service fees and national park permits.',
    shortDescription: 'Witness Tanzania’s endless horizons in the Serengeti and descend into the world’s largest intact volcanic caldera at Ngorongoro for guaranteed Big Five encounters.',
    highlights: [
      'Descent 600m into the UNESCO World Heritage Ngorongoro Crater',
      'Three full days in the heart of Serengeti tracking predators and kopjes',
      'Spotting rare Black Rhinos and massive flamingos at Lake Magadi',
      'Authentic luxury canvas safari camps under starry African skies'
    ],
    inclusions: [
      'Ngorongoro Crater descent fees and permits',
      'All Serengeti National Park entry fees',
      'Private 4x4 safari Land Cruiser with pop-up roof',
      'Full board luxury lodge & tented camp accommodation',
      'Professional bilingual safari guide'
    ],
    exclusions: ['Tanzania visa', 'Flights to Kilimanjaro (JRO) / Arusha', 'Gratuities'],
    itinerary: [
      {
        day: 1,
        title: 'Arusha to Lake Manyara / Karatu',
        location: 'Karatu Highlands',
        description: 'Depart Arusha after briefing and drive into the lush green highlands overlooking the Rift Valley.',
        meals: 'Lunch, Dinner',
        accommodation: 'Kitela Lodge / Gibbs Farm'
      },
      {
        day: 2,
        title: 'Into the Endless Plains of Serengeti',
        location: 'Central Serengeti (Seronera)',
        description: 'Drive via the Ngorongoro rim down into the legendary Serengeti plains. Afternoon game drive around Seronera River.',
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Kubu Kubu Tented Lodge / Serengeti Serena'
      },
      {
        day: 3,
        title: 'Full Day Serengeti Big Cat Expedition',
        location: 'Serengeti National Park',
        description: 'Explore the granite kopjes where cheetahs and lions bask. Watch enormous herds of zebras and gazelles traversing the savannah.',
        meals: 'Breakfast, Picnic Lunch, Dinner',
        accommodation: 'Kubu Kubu Tented Lodge / Serengeti Serena'
      },
      {
        day: 4,
        title: 'Serengeti to Ngorongoro Crater Rim',
        location: 'Ngorongoro Conservation Area',
        description: 'Morning game drive departing Serengeti and ascending to the crater rim with breathtaking views 600m below.',
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Ngorongoro Serena Safari Lodge / Lions Paw'
      },
      {
        day: 5,
        title: 'Ngorongoro Crater Floor Safari',
        location: 'Crater Floor',
        description: 'Early morning descent to the crater floor. Enjoy a magical picnic by the hippo pool surrounded by thousands of resident animals.',
        meals: 'Breakfast, Picnic Lunch, Dinner',
        accommodation: 'Ngorongoro Serena / Karatu Lodge'
      },
      {
        day: 6,
        title: 'Return to Arusha / Kilimanjaro Airport',
        location: 'Arusha',
        description: 'Morning transfer to Arusha or Kilimanjaro International Airport for your onward flight or Zanzibar connection.',
        meals: 'Breakfast, Lunch',
        accommodation: 'Departure'
      }
    ],
    groupSize: 'Private safari (2 to 6 guests)',
    bestMonths: 'Year-round; January to March for Southern calving, June to October for dry season',
    featured: true
  },
  {
    id: 'amboseli-tsavo-5d',
    title: '5-Day Amboseli & Tsavo Big Tuskers Expedition',
    subtitle: 'Kilimanjaro Views and Red Dust Elephants',
    destination: 'Amboseli · Tsavo West · Tsavo East',
    country: 'Kenya',
    durationDays: 5,
    durationText: '5 Days / 4 Nights',
    category: 'Wildlife Photography',
    categoryLabel: 'Wildlife & Photography',
    featuredImage: AMBOSELI_IMAGE,
    indicativePrice: 'From $2,150 per person',
    priceNote: 'Flexible routing connecting directly to Mombasa or Diani Beach on request.',
    shortDescription: 'Ideal for wildlife photographers and elephant lovers. Marvel at Amboseli’s legendary tuskers before venturing into Tsavo’s red earth wilderness and crystal Mzima Springs.',
    highlights: [
      'Unsurpassed Mount Kilimanjaro photo backdrops',
      'Famous red elephants of Tsavo bathing in volcanic dust',
      'Underwater viewing chamber at Mzima Springs observing hippos and fish',
      'Seamless optional continuation to Kenya’s turquoise coast (Diani / Watamu)'
    ],
    inclusions: [
      'All park entrance permits for Amboseli, Tsavo West & Tsavo East',
      '4x4 Land Cruiser transport with fuel and unlimited game mileage',
      'Lodge accommodation with all meals included'
    ],
    exclusions: ['Alcoholic drinks', 'Personal tips', 'Visas'],
    itinerary: [
      {
        day: 1,
        title: 'Nairobi to Amboseli National Park',
        location: 'Amboseli',
        description: 'Morning departure from Nairobi. Arrive in Amboseli for lunch and afternoon game drive.',
        meals: 'Lunch, Dinner',
        accommodation: 'Amboseli Serena Lodge'
      },
      {
        day: 2,
        title: 'Amboseli Full Day Game Drives',
        location: 'Amboseli',
        description: 'Full day tracking Amboseli’s celebrated elephant families and predators across the dry lake bed.',
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Amboseli Serena Lodge'
      },
      {
        day: 3,
        title: 'Amboseli to Tsavo West – Mzima Springs',
        location: 'Tsavo West',
        description: 'Cross the Shetani lava flow into Tsavo West. Visit Mzima Springs to view hippos and crocodiles swimming underwater.',
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Kilaguni Serena Safari Lodge'
      },
      {
        day: 4,
        title: 'Tsavo West to Tsavo East – Red Earth Plains',
        location: 'Tsavo East',
        description: 'Traverse into Tsavo East, home of the legendary man-eaters and iconic red-dusted elephants.',
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Ashnil Aruba Lodge'
      },
      {
        day: 5,
        title: 'Tsavo East to Nairobi or Diani Beach',
        location: 'Nairobi or Mombasa/Diani',
        description: 'Dawn game drive followed by departure back to Nairobi or transfer to the coastal railway station for beach extension.',
        meals: 'Breakfast, Lunch',
        accommodation: 'Departure'
      }
    ],
    groupSize: 'Private safari (2 to 6 guests)',
    bestMonths: 'Year-round',
    featured: false
  },
  {
    id: 'bush-to-beach-10d',
    title: '10-Day Bush to Beach: Mara Safari & Diani Hideaway',
    subtitle: 'Wilderness Thrills Followed by Ocean Bliss',
    destination: 'Maasai Mara · Lake Naivasha · Diani Beach (Indian Ocean)',
    country: 'Kenya',
    durationDays: 10,
    durationText: '10 Days / 9 Nights',
    category: 'Honeymoon',
    categoryLabel: 'Honeymoon & Romantic',
    featuredImage: MAASAI_MARA_IMAGE,
    indicativePrice: 'From $4,200 per person',
    priceNote: 'Includes domestic bush-to-beach flight from Mara to Diani Beach.',
    shortDescription: 'The ultimate honeymoon or luxury holiday pairing: thrilling wildlife encounters in the Maasai Mara followed by barefoot luxury on the powdery white sands of Diani Beach.',
    highlights: [
      'Luxury tented safari experience with romantic private dining',
      'Direct scheduled flight from Maasai Mara airstrip straight to Diani Beach',
      '5 nights at an oceanfront luxury resort on Africa’s leading beach destination',
      'Private sunset dhow cruise and couple’s spa treatment included'
    ],
    inclusions: [
      'All safari lodge full-board stays and beach resort half-board/all-inclusive',
      'Scheduled domestic flight from Mara to Ukunda / Diani',
      'All park entrance fees and marine reserve passes',
      'Dedicated private safari vehicle and chauffeur'
    ],
    exclusions: ['International flights', 'Premium champagnes', 'Scuba diving certifications'],
    itinerary: [
      {
        day: 1,
        title: 'Nairobi to Lake Naivasha',
        location: 'Lake Naivasha',
        description: 'Arrive in Nairobi, drive to Lake Naivasha for a peaceful boat ride to Crescent Island walking among giraffes.',
        meals: 'Lunch, Dinner',
        accommodation: 'Chui Lodge / Lake Naivasha Sopa'
      },
      {
        day: 2,
        title: 'Naivasha to Maasai Mara',
        location: 'Maasai Mara',
        description: 'Drive up into the Maasai Mara. Welcome lunch and afternoon game drive in search of lions and leopards.',
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Governors’ Camp / Neptune Mara Rianta'
      },
      {
        day: 3,
        title: 'Maasai Mara Wilderness Safari',
        location: 'Maasai Mara',
        description: 'Full day exploring the savannah with private picnic and intimate evening sundowner on a scenic viewpoint.',
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Governors’ Camp / Neptune Mara Rianta'
      },
      {
        day: 4,
        title: 'Dawn Balloon Safari & Mara Wildlife',
        location: 'Maasai Mara',
        description: 'Sunrise hot air balloon flight over the Mara with champagne breakfast in the wild. Afternoon relaxed game drive.',
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Governors’ Camp / Neptune Mara Rianta'
      },
      {
        day: 5,
        title: 'Fly Maasai Mara to Diani Beach',
        location: 'Diani Beach (South Coast)',
        description: 'Morning transfer to the local airstrip. Fly directly to Diani Beach where warm Indian Ocean breezes welcome you.',
        meals: 'Breakfast, Dinner',
        accommodation: 'The Sands at Nomad / Swahili Beach Resort'
      },
      {
        day: 6,
        title: 'Diani Beach Relaxation & Ocean Views',
        location: 'Diani Beach',
        description: 'Day at leisure soaking up the sun, swimming in warm turquoise waters, or enjoying beachfront massages.',
        meals: 'Breakfast, Dinner',
        accommodation: 'The Sands at Nomad / Swahili Beach Resort'
      },
      {
        day: 7,
        title: 'Kisite Mpunguti Marine Safari & Dolphins',
        location: 'Kisite Marine Park',
        description: 'Traditional dhow cruise to Kisite Mpunguti Marine Park for snorkeling with sea turtles and playful dolphins.',
        meals: 'Breakfast, Seafood Lunch, Dinner',
        accommodation: 'The Sands at Nomad / Swahili Beach Resort'
      },
      {
        day: 8,
        title: 'Diani Beach & Sunset Dhow Sailing',
        location: 'Diani Beach',
        description: 'Day at leisure followed by an enchanted private sunset cruise with wine and canapés along the shoreline.',
        meals: 'Breakfast, Dinner',
        accommodation: 'The Sands at Nomad / Swahili Beach Resort'
      },
      {
        day: 9,
        title: 'Beachside Indulgence',
        location: 'Diani Beach',
        description: 'Relaxed beach day, water sports, or exploring local artisan craft markets and sacred Kaya Kinondo forest.',
        meals: 'Breakfast, Dinner',
        accommodation: 'The Sands at Nomad / Swahili Beach Resort'
      },
      {
        day: 10,
        title: 'Diani to Nairobi / International Departure',
        location: 'Nairobi',
        description: 'Transfer to Ukunda airstrip for short flight to Nairobi connecting to your international flight home.',
        meals: 'Breakfast',
        accommodation: 'Departure'
      }
    ],
    groupSize: 'Couples, Honeymooners, Families',
    bestMonths: 'July to March',
    featured: true
  },
  {
    id: 'samburu-olpejeta-4d',
    title: '4-Day Samburu & Ol Pejeta Northern Adventure',
    subtitle: 'Rare Northern Endemics & Rhino Conservation',
    destination: 'Samburu National Reserve · Ol Pejeta Conservancy',
    country: 'Kenya',
    durationDays: 4,
    durationText: '4 Days / 3 Nights',
    category: 'Adventure',
    categoryLabel: 'Northern Adventure',
    featuredImage: AMBOSELI_IMAGE,
    indicativePrice: 'From $1,950 per person',
    priceNote: 'Direct departures from Nairobi.',
    shortDescription: 'Explore Kenya’s dramatic northern frontier. Encounter the Samburu Special Five and participate in rhino conservation at Ol Pejeta in the shadow of Mount Kenya.',
    highlights: [
      'Spotting the Samburu Special Five (Grevy’s zebra, gerenuk, reticulated giraffe, etc.)',
      'Close encounter with the world’s last two Northern White Rhinos',
      'Sweetwaters Chimpanzee Sanctuary educational tour',
      'Spectacular views of Mount Kenya’s craggy peaks'
    ],
    inclusions: ['Conservancy and park fees', '4x4 safari cruiser', 'Full board lodge stay'],
    exclusions: ['Tips and personal spending'],
    itinerary: [
      {
        day: 1,
        title: 'Nairobi to Samburu Reserve',
        location: 'Samburu',
        description: 'Drive past pineapple plantations and Mount Kenya slopes into the arid northern beauty of Samburu. Afternoon game drive.',
        meals: 'Lunch, Dinner',
        accommodation: 'Samburu Intrepids / Ashnil Samburu'
      },
      {
        day: 2,
        title: 'Samburu Special Five Wildlife Search',
        location: 'Ewaso Nyiro River',
        description: 'Morning and afternoon tracking rare wildlife along the riverbanks and doum palm woodlands.',
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Samburu Intrepids / Ashnil Samburu'
      },
      {
        day: 3,
        title: 'Samburu to Ol Pejeta Conservancy',
        location: 'Ol Pejeta Conservancy',
        description: 'Drive south to Ol Pejeta. Visit the rhino sanctuary and chimpanzee rescue centre before an evening predator drive.',
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Sweetwaters Serena Camp'
      },
      {
        day: 4,
        title: 'Morning Rhino Patrol & Nairobi Return',
        location: 'Nairobi',
        description: 'Early morning game drive with Mount Kenya vistas. Return to Nairobi late afternoon.',
        meals: 'Breakfast, Lunch',
        accommodation: 'Departure'
      }
    ],
    groupSize: 'Private safari',
    bestMonths: 'Year-round',
    featured: false
  },
  {
    id: 'uganda-gorilla-primate-5d',
    title: '5-Day Bwindi Mountain Gorilla & Queen Elizabeth Safari',
    subtitle: 'Primate Encounters & Tree-Climbing Lions',
    destination: 'Bwindi Impenetrable Forest · Queen Elizabeth National Park',
    country: 'Uganda',
    durationDays: 5,
    durationText: '5 Days / 4 Nights',
    category: 'Adventure',
    categoryLabel: 'Primate Expedition',
    featuredImage: MAASAI_MARA_IMAGE,
    indicativePrice: 'From $3,100 per person',
    priceNote: 'Includes official Uganda Wildlife Authority Gorilla Trekking Permit ($800 value).',
    shortDescription: 'Trek into the mist-veiled forests of Bwindi to spend an awe-inspiring hour face-to-face with habituated mountain gorilla families, combined with savannah safaris in Queen Elizabeth.',
    highlights: [
      'Official habituated Mountain Gorilla tracking permit included',
      'Kazinga Channel boat cruise with highest concentration of hippos in Africa',
      'Tree-climbing lions of Ishasha sector',
      'Deep cultural encounter with the indigenous Batwa community'
    ],
    inclusions: ['1x Gorilla tracking permit per person', 'All park entries & boat cruises', '4x4 safari vehicle with guide'],
    exclusions: ['Uganda entry visa ($50)', 'International flights to Entebbe/Kigali', 'Porter tips ($20 recommended)'],
    itinerary: [
      {
        day: 1,
        title: 'Entebbe or Kigali to Bwindi Forest',
        location: 'Bwindi Impenetrable Forest',
        description: 'Scenic journey through the rolling green terraces of Uganda to your rainforest lodge.',
        meals: 'Lunch, Dinner',
        accommodation: 'Mahogany Springs / Haven Lodge Bwindi'
      },
      {
        day: 2,
        title: 'The Ultimate Gorilla Trekking Experience',
        location: 'Bwindi Forest',
        description: 'Briefing by park rangers at dawn followed by a guided trek into the ancient forest. Spend one transformative hour observing a gorilla family in their natural habitat.',
        meals: 'Breakfast, Packed Lunch, Dinner',
        accommodation: 'Mahogany Springs / Haven Lodge Bwindi'
      },
      {
        day: 3,
        title: 'Bwindi to Queen Elizabeth National Park',
        location: 'Ishasha & Queen Elizabeth',
        description: 'Travel north through the Ishasha sector searching for tree-climbing lions perched on fig tree branches.',
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Mweya Safari Lodge / Buffalo Safari Lodge'
      },
      {
        day: 4,
        title: 'Kazinga Channel Boat Cruise & Savannah Drive',
        location: 'Queen Elizabeth NP',
        description: 'Morning game drive across Kasenyi plains followed by a 2-hour boat cruise along the Kazinga Channel with hundreds of hippos and elephants.',
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Mweya Safari Lodge / Buffalo Safari Lodge'
      },
      {
        day: 5,
        title: 'Return to Entebbe / Kigali',
        location: 'Entebbe / Kigali',
        description: 'Morning transfer back for your evening flight departure.',
        meals: 'Breakfast, Lunch',
        accommodation: 'Departure'
      }
    ],
    groupSize: 'Small group (Max 6 guests per tracking group)',
    bestMonths: 'December to February & June to September',
    featured: false
  }
];

export const SIGNATURE_EXPERIENCES: Experience[] = [
  {
    id: 'great-migration',
    title: 'The Great Wildebeest Migration',
    tagline: 'The Greatest Terrestrial Wildlife Movement on Earth',
    category: 'Wildlife Spectacle',
    image: MAASAI_MARA_IMAGE,
    description: 'Over 1.5 million wildebeest, accompanied by 300,000 zebras and gazelles, make a continuous clockwise 1,800-mile pilgrimage through the Serengeti-Mara ecosystem in search of fresh rainwater grazing. Witness the dramatic river crossings fraught with stealthy predators.',
    bestLocations: ['Maasai Mara (Kenya)', 'Northern Serengeti (Tanzania)', 'Grumeti River (Tanzania)'],
    recommendedDuration: '4 to 6 Days minimum',
    suitableFor: 'Photographers, Wildlife Lovers, First-time Safari Travellers',
    keyHighlights: ['Dramatic Mara River crossings', 'Intense predator-prey dynamics', 'Endless horizons covered in herds']
  },
  {
    id: 'balloon-safari',
    title: 'Hot Air Balloon Safari at Sunrise',
    tagline: 'Float Silently Over Africa’s Golden Savannah at Dawn',
    category: 'Aerial Safari',
    image: BALLOON_SAFARI_IMAGE,
    description: 'Drift serenely above the acacia trees as the morning sun paints the savannah in brilliant hues of gold and amber. Watch herds awaken and shadows stretch across the plains, concluding with an unforgettable champagne breakfast in the open bush.',
    bestLocations: ['Maasai Mara National Reserve', 'Serengeti National Park', 'Amboseli Plains'],
    recommendedDuration: 'Half Day (Early Morning 5:00 AM – 10:30 AM)',
    suitableFor: 'Honeymooners, Anniversaries, Landscape Photographers, Romantic Travellers',
    keyHighlights: ['Silent aerial vantage point over wildlife', 'Champagne bush breakfast served by chefs', 'Custom commemorative flight certificate']
  },
  {
    id: 'big-five',
    title: 'The Legendary African Big Five',
    tagline: 'Lion, Leopard, Elephant, Cape Buffalo, and Black Rhino',
    category: 'Classic Wildlife',
    image: AMBOSELI_IMAGE,
    description: 'Originally named by early explorers as the five most formidable animals to track on foot, today spotting the Big Five in their natural wild habitats is the pinnacle of African wildlife safaris. Our expert guides track with deep generational knowledge.',
    bestLocations: ['Maasai Mara', 'Ngorongoro Crater', 'Ol Pejeta Conservancy', 'Lake Nakuru'],
    recommendedDuration: '5 to 8 Days',
    suitableFor: 'All Travellers, Families, Wildlife Documentarians',
    keyHighlights: ['Specialized tracking of elusive leopards', 'Protected sanctuaries for endangered Black Rhino', 'Encountering giant elephant matriarchs']
  },
  {
    id: 'bush-dining',
    title: 'Bush Dining & Sunset Sundowners',
    tagline: 'An African Safari Tradition Under a Canopy of Stars',
    category: 'Culinary & Romance',
    image: SERENGETI_IMAGE,
    description: 'As the golden African sun dips beneath the horizon, enjoy crafted cocktails and appetizers atop scenic viewpoints. Later, dine under lantern-lit acacia branches with a crackling fire and sounds of the wild murmuring in the twilight.',
    bestLocations: ['Private conservancies in Mara', 'Laikipia Plateau', 'Serengeti Hills'],
    recommendedDuration: 'Evening Experience',
    suitableFor: 'Couples, Families, Private Safari Groups',
    keyHighlights: ['Curated sundowner cocktails & local appetizers', 'Gourmet multi-course bush dinner cooked on-site', 'Stargazing in unpolluted southern hemisphere skies']
  },
  {
    id: 'cultural-maasai',
    title: 'Authentic Maasai & Samburu Cultural Immersion',
    tagline: 'Generations of Harmony Between People and Wildlife',
    category: 'Cultural Heritage',
    image: MAASAI_MARA_IMAGE,
    description: 'Connect respectfully with the Maasai and Samburu communities who have coexisted with East African wildlife for centuries. Learn about traditional bomas, beadwork symbology, medicinal plant lore, and ancestral conservation wisdom.',
    bestLocations: ['Maasai Mara Community Conservancies', 'Samburu Manyattas', 'Amboseli Ecosystem'],
    recommendedDuration: '2 to 3 Hours',
    suitableFor: 'Families, Cultural Enthusiasts, Ethical Travellers',
    keyHighlights: ['Traditional welcome songs and the Adumu jumping dance', 'Direct dialogue with community elders and women artisans', 'Support for local village education and water initiatives']
  },
  {
    id: 'walking-safari',
    title: 'Guided Wilderness Walking Safaris',
    tagline: 'Feel the Pulse of Africa with Every Step',
    category: 'Active Adventure',
    image: AMBOSELI_IMAGE,
    description: 'Step out of the safari vehicle and tune into the subtle nuances of the African bush on foot. Accompanied by armed wildlife rangers and indigenous guides, examine animal tracks, scents, bird calls, and fascinating insect macro-worlds.',
    bestLocations: ['Naivasha Crescent Island', 'Tsavo West Wilderness', 'Private Mara Conservancies'],
    recommendedDuration: '2 to 4 Hours (Morning or Late Afternoon)',
    suitableFor: 'Active Travellers, Bird Watchers, Nature Lovers',
    keyHighlights: ['Close-up tracking of prints and dung', 'Medicinal botany lessons from local guides', 'Safe, exhilarating walking among plains game']
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Sunrise Over the Savannah',
    category: 'landscapes',
    categoryLabel: 'Landscapes',
    image: HERO_IMAGE,
    location: 'Amboseli & Maasai Mara',
    caption: 'Golden light piercing morning mist across the acacia savannah with distant volcanic horizons.'
  },
  {
    id: 'g2',
    title: 'Pride of Lions in the Mara',
    category: 'wildlife',
    categoryLabel: 'Wildlife',
    image: MAASAI_MARA_IMAGE,
    location: 'Maasai Mara National Reserve, Kenya',
    caption: 'A relaxed lion family resting in the shade of a solitary acacia as zebras graze in the background.'
  },
  {
    id: 'g3',
    title: 'The Great Tusker Procession',
    category: 'wildlife',
    categoryLabel: 'Wildlife',
    image: AMBOSELI_IMAGE,
    location: 'Amboseli National Park, Kenya',
    caption: 'Majestic elephant herd walking across Amboseli dust plains with snowy Kilimanjaro towering above.'
  },
  {
    id: 'g4',
    title: 'Cheetah Sentry on the Kopje',
    category: 'wildlife',
    categoryLabel: 'Wildlife',
    image: SERENGETI_IMAGE,
    location: 'Serengeti National Park, Tanzania',
    caption: 'Two alert cheetahs scanning the infinite golden grasses from an ancient granite outcrop at sunset.'
  },
  {
    id: 'g5',
    title: 'Dawn Hot Air Balloon Over Herds',
    category: 'landscapes',
    categoryLabel: 'Landscapes',
    image: BALLOON_SAFARI_IMAGE,
    location: 'Maasai Mara / Serengeti Border',
    caption: 'Floating in tranquil stillness over tens of thousands of plains game in the morning glow.'
  },
  {
    id: 'g6',
    title: 'Custom Safari 4x4 Land Cruiser',
    category: 'vehicles',
    categoryLabel: 'Safari Fleet',
    image: HERO_IMAGE,
    location: 'Twiga Trails Fleet, Nairobi',
    caption: 'Heavy-duty 4x4 pop-up roof safari vehicle fitted with high-frequency radios, inverter charging, and cooler.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    clientName: 'David & Eleanor Richardson',
    country: 'United Kingdom',
    safariTrip: '8-Day Classic Kenya Wildlife Odyssey',
    date: 'September 2026',
    rating: 5,
    quote: 'Twiga Trails Safaris truly proved to be our travel buddies in every sense. Our guide Joseph possessed superhuman wildlife spotting abilities—he found a mother leopard with two cubs in the Mara that no other vehicle had spotted. The attention to detail, comfort of the Land Cruiser, and flawless camp bookings made this the trip of a lifetime.',
    avatarText: 'DR'
  },
  {
    id: 't2',
    clientName: 'The Montgomery Family',
    country: 'United States (California)',
    safariTrip: '10-Day Bush to Beach: Mara & Diani',
    date: 'August 2026',
    rating: 5,
    quote: 'Travelling with teenagers can be daunting, but Twiga Trails crafted an itinerary that kept everyone enthralled every single day. From watching thousands of wildebeest plunge into the Mara River to learning spear-throwing from Maasai warriors, and then chilling out on Diani beach. Outstanding professionalism and warmth.',
    avatarText: 'MF'
  },
  {
    id: 't3',
    clientName: 'Dr. Markus & Sophie Weber',
    country: 'Germany',
    safariTrip: '6-Day Serengeti & Ngorongoro Crater Odyssey',
    date: 'October 2026',
    rating: 5,
    quote: 'As wildlife photography enthusiasts, we needed a guide who understood patience, light angles, and animal behaviour. Our driver-guide went above and beyond, positioning the vehicle with precision. Seeing the sunrise balloon flight and the crater floor was almost spiritual. We will recommend Twiga Trails to all our friends in Europe.',
    avatarText: 'MW'
  },
  {
    id: 't4',
    clientName: 'Amina & Tariq Al-Mansoor',
    country: 'United Arab Emirates',
    safariTrip: '5-Day Maasai Mara Luxury Fly-in',
    date: 'July 2026',
    rating: 5,
    quote: 'Flawless VIP service from the moment we touched down at Nairobi Wilson Airport. The private tented camp arranged by Twiga Trails was sublime, the food was gourmet, and the night sounds of lions roaring in the distance will stay with us forever. Thank you for an unforgettable anniversary!',
    avatarText: 'AA'
  }
];

export const FAQ_ITEMS = [
  {
    question: 'When is the best time to see the Great Migration in Kenya?',
    answer: 'The Great Migration typically arrives in the Maasai Mara between July and October each year. This is when dramatic Mara River crossings occur as millions of wildebeest and zebras search for fresh green pastures. However, wildlife viewing in Kenya is phenomenal all year round!'
  },
  {
    question: 'What kind of safari vehicles does Twiga Trails use?',
    answer: 'We operate customized 4WD Toyota Land Cruisers designed specifically for African safari terrain. Every vehicle features an unobstructed pop-up photographic viewing roof, guaranteed window seating for every traveller, on-board USB inverter charging sockets, a cool box for chilled drinking water, and high-frequency communication radios.'
  },
  {
    question: 'Are safaris suitable for families with young children?',
    answer: 'Absolutely! We curate tailored family safari itineraries with child-friendly luxury lodges, flexible game drive durations, interactive junior ranger activities, and spacious family tented suites. We recommend private vehicle charters for families to travel at their own relaxed pace.'
  },
  {
    question: 'What is included in a Twiga Trails safari package?',
    answer: 'Our comprehensive packages include all national park and conservation fees, full-board accommodation, transport in private 4x4 pop-up roof cruisers with unlimited game mileage, certified professional safari driver-guides, bottled drinking water throughout game drives, and complimentary emergency medical evacuation insurance (AMREF Flying Doctors).'
  },
  {
    question: 'How do I request a custom bespoke safari itinerary?',
    answer: 'You can use our interactive Bespoke Safari Planner on this website, send us an enquiry with your preferred travel dates and budget, or click the WhatsApp button to chat directly with our safari planning team. We provide tailored complimentary quotes within 24 hours.'
  }
];

export const TRAVEL_ARTICLES = [
  {
    id: 'article-1',
    title: 'The Great Migration: The Ultimate Timing & Crossing Guide',
    readTime: '6 min read',
    date: 'Travel Guide 2026',
    summary: 'A seasonal breakdown of herd movements between Serengeti and Maasai Mara, helping you choose the exact month for dramatic river crossings.',
    category: 'Wildlife Guide'
  },
  {
    id: 'article-2',
    title: 'Safari Photography in East Africa: Essential Gear & Light Tips',
    readTime: '5 min read',
    date: 'Photography',
    summary: 'From lens selection (100-400mm) to morning dust management and ethical wildlife shooting distances with your safari buddies.',
    category: 'Photography'
  },
  {
    id: 'article-3',
    title: 'Kenya vs Tanzania: Which Safari is Best for Your First Visit?',
    readTime: '7 min read',
    date: 'Trip Planning',
    summary: 'Comparing park sizes, infrastructure, flight connections, and unique species to help you plan the ideal East African itinerary.',
    category: 'Trip Planning'
  }
];
