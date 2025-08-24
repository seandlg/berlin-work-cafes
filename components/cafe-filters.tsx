"use client"

import { Building2, Users, Utensils, WashingMachine, Wifi } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { FilterState } from "@/types/cafe"

interface CafeFiltersProps {
  filters: FilterState
  onFiltersChange: (filters: FilterState) => void
}

export function CafeFilters({ filters, onFiltersChange }: CafeFiltersProps) {
  const filterOptions = [
    { key: "coffee_chain", label: "Chain", icon: Building2 },
    { key: "inside_sitting", label: "Indoor Seating", icon: Users },
    { key: "outside_sitting", label: "Outdoor Seating", icon: Utensils },
    { key: "sanitary_facilities", label: "Restroom", icon: WashingMachine },
    { key: "self_service", label: "Self-service", icon: Wifi },
  ] as const

  const toggleFilter = (key: keyof FilterState) => {
    const currentValue = filters[key]
    let newValue: boolean | null

    if (currentValue === null) {
      newValue = true
    } else if (currentValue === true) {
      newValue = false
    } else {
      newValue = null
    }

    onFiltersChange({
      ...filters,
      [key]: newValue,
    })
  }

  const clearAllFilters = () => {
    onFiltersChange({
      coffee_chain: null,
      inside_sitting: null,
      outside_sitting: null,
      sanitary_facilities: null,
      self_service: null,
    })
  }

  const hasActiveFilters = Object.values(filters).some((value) => value !== null)

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {filterOptions.map(({ key, label, icon: Icon }) => {
          const value = filters[key]
          let variant: "default" | "destructive" | "outline" = "outline"

          if (value === true) variant = "default"
          if (value === false) variant = "destructive"

          return (
            <Button
              key={key}
              variant={variant}
              size="sm"
              onClick={() => toggleFilter(key)}
              className="flex items-center gap-1"
            >
              <Icon className="h-4 w-4" />
              {label}
              {value === false && " ✗"}
            </Button>
          )
        })}
      </div>

      {hasActiveFilters && (
        <Button variant="ghost" size="sm" onClick={clearAllFilters}>
          Clear all filters
        </Button>
      )}
    </div>
  )
}
