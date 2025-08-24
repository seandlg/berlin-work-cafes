export interface Cafe {
  name: string
  query: string
  description: string // base64 encoded markdown
  kiez: string // Added kiez field for neighborhood information
  metadata: {
    coffee_chain: boolean
    inside_sitting: boolean
    outside_sitting: boolean
    sanitary_facilities: boolean
    self_service: boolean
    wifi: boolean
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
}
