"use client"

import { useState, useMemo } from "react"
import { Search, Coffee } from "lucide-react"
import { Input } from "@/components/ui/input"
import { CafeCard } from "./cafe-card"
import { CafeFilters } from "./cafe-filters"
import { ThemeToggle } from "./theme-toggle"
import { cafesData } from "@/data/cafes"
import { fuzzySearch } from "@/lib/fuzzy-search"
import type { FilterState } from "@/types/cafe"

export function CafeDirectory() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filters, setFilters] = useState<FilterState>({
    coffee_chain: null,
    inside_sitting: null,
    outside_sitting: null,
    sanitary_facilities: null,
    self_service: null,
  })

  const filteredCafes = useMemo(() => {
    let results = cafesData

    // Apply filters
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== null) {
        results = results.filter((cafe) => cafe.metadata[key as keyof typeof cafe.metadata] === value)
      }
    })

    // Apply fuzzy search
    if (searchQuery.trim()) {
      results = fuzzySearch(results, searchQuery)
    }

    return results
  }, [searchQuery, filters])

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Hero Section */}
      <div className="relative mb-12 rounded-lg overflow-hidden">
        <div className="absolute top-4 right-4 z-10">
          <ThemeToggle />
        </div>
        <img
          src="/images/cafe-hero.jpg"
          alt="Modern cafe interior with laptop-friendly workspace"
          className="w-full h-64 md:h-80 object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Berlin Work Cafes</h1>
            <p className="text-lg md:text-xl opacity-90">Curated spaces perfect for coffee + productivity</p>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="mb-8 space-y-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search cafes by name or description..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        <CafeFilters filters={filters} onFiltersChange={setFilters} />
      </div>

      {/* Results */}
      <div className="mb-6">
        <p className="text-muted-foreground">
          {filteredCafes.length} {filteredCafes.length === 1 ? "cafe" : "cafes"} found
        </p>
      </div>

      {/* Cafe Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredCafes.map((cafe, index) => (
          <CafeCard key={index} cafe={cafe} />
        ))}
      </div>

      {filteredCafes.length === 0 && (
        <div className="text-center py-12">
          <Coffee className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-lg font-medium mb-2">No cafes found</h3>
          <p className="text-muted-foreground">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  )
}
