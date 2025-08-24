import type { Cafe } from "@/types/cafe"

export const cafesData: Cafe[] = [
  {
    name: "Einstein Cafe Gendarmenmarkt",
    query: "EINSTEIN KAFFEE Gendarmenmarkt",
    description: `# Great views, laptop-friendly
- Sun all day, even in winter
- Large coffee ~5 euros
- Great views over Gendarmenmarkt`,
    kiez: "Mitte",
    rating: 5, // Added 5-star rating
    metadata: {
      coffee_chain: true,
      inside_sitting: true,
      outside_sitting: true,
      sanitary_facilities: true,
      self_service: true,
      wifi: true,
      electricity: true, // Added electricity availability
    },
    urls: {
      google_maps: "https://maps.app.goo.gl/23yfCRCjEHzDYUmo9",
      website: "https://einstein-kaffee.de/standorte/standorte-berlin/gendarmenmarkt/",
    },
  },
  {
    name: "Haferkater Eberswalder",
    query: "Haferkater Eberswalder Strasse",
    description: `# Laptop-friendly and cozy
- Cozy inside, great for working
- Outside a bit loud with traffic, but nice in summer
- Very good food + coffee, all veggie`,
    kiez: "Prenzlauer Berg",
    rating: 5, // Added 5-star rating
    metadata: {
      coffee_chain: true,
      inside_sitting: true,
      outside_sitting: true,
      sanitary_facilities: true,
      self_service: true,
      wifi: true,
      electricity: true, // Added electricity availability
    },
    urls: {
      google_maps: "https://maps.app.goo.gl/qXYQtyHdEJ9fXJij7",
      website: "https://haferkater.com/stores/eberswalder-strasse/",
    },
  },
  {
    name: "Milch&Zucker Friedrichshain",
    query: "Milch&Zucker Boxhagener Platz",
    description: `# One of the best cafes for working around Boxhagener Platz
- Laptop friendly most of the time
- Decent food, especially cooked meals
- Good coffee and free wifi
- Toilet available but sometimes long queues
- Indoor + outdoor seating (outdoor can be noisy)
- Sockets available but a little hard to reach`,
    kiez: "Friedrichshain",
    rating: 4, // Added 4-star rating
    metadata: {
      coffee_chain: false,
      inside_sitting: true,
      outside_sitting: true,
      sanitary_facilities: true,
      self_service: true,
      wifi: true,
      electricity: true, // Added electricity availability (limited access)
    },
    urls: {
      google_maps: "https://maps.app.goo.gl/WfMMhXw2ujeLK1ns8",
      website: "https://milchundzucker.eu/",
    },
  },
  {
    name: "Espresso House Ostbahnhof",
    query: "Espresso House Ostbahnhof Friedrichshain-Kreuzberg",
    description: `# Comfortable seating and vibe near Ostbahnhof
- No restroom - need to use and pay in Ostbahnhof station
- Comfortable seating and good vibe for working
- Some food options, lots more in Ostbahnhof
- Outdoor seating facing south, but traffic noise from street
- Good for laptop work with available sockets`,
    kiez: "Friedrichshain-Kreuzberg",
    rating: 4, // Added 4-star rating
    metadata: {
      coffee_chain: true,
      inside_sitting: true,
      outside_sitting: true,
      sanitary_facilities: false, // No restroom available
      self_service: true,
      wifi: true,
      electricity: true, // Sockets available indoors
    },
    urls: {
      google_maps: "https://maps.app.goo.gl/8dwthxcyAzqs5XR8A",
      website: "https://de.espressohouse.com/find-us/ostbahnhof",
    },
  },
]
