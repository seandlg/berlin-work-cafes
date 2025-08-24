export interface Cafe {
  name: string
  query: string
  description: string // multiline markdown string
  kiez: string // Added kiez field for neighborhood information
  rating: number // Added rating field (1-5 stars)
  metadata: {
    coffee_chain: boolean
    inside_sitting: boolean
    outside_sitting: boolean
    sanitary_facilities: boolean
    self_service: boolean
    wifi: boolean
    electricity: boolean // Added electricity/sockets availability
  }
  urls: {
    google_maps: string
    website?: string
  }
}

export interface FilterState {
  coffee_chain: boolean | null
  inside_sitting: boolean | null
  outside_sitting: boolean | null
  sanitary_facilities: boolean | null
  self_service: boolean | null
  wifi: boolean | null
  electricity: boolean | null // Added electricity filter
}
