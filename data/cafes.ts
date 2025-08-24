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
    metadata: {
      coffee_chain: true,
      inside_sitting: true,
      outside_sitting: true,
      sanitary_facilities: true,
      self_service: true,
      wifi: true,
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
    metadata: {
      coffee_chain: true,
      inside_sitting: true,
      outside_sitting: true,
      sanitary_facilities: true,
      self_service: true,
      wifi: true,
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
- Indoor + outdoor seating (outdoor can be noisy)`,
    kiez: "Friedrichshain",
    metadata: {
      coffee_chain: false,
      inside_sitting: true,
      outside_sitting: true,
      sanitary_facilities: true,
      self_service: true,
      wifi: true,
    },
    urls: {
      google_maps: "https://maps.app.goo.gl/WfMMhXw2ujeLK1ns8",
      website: "https://milchundzucker.eu/",
    },
  },
]
