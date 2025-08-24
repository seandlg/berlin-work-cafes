"use client"

import { MapPin, ExternalLink, Wifi, Users, Utensils, WashingMachine, Building2, HandPlatter, Map } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import ReactMarkdown from "react-markdown"
import type { Cafe } from "@/types/cafe"

interface CafeCardProps {
  cafe: Cafe
}

export function CafeCard({ cafe }: CafeCardProps) {
  const getMetadataIcon = (key: string) => {
    switch (key) {
      case "coffee_chain":
        return <Building2 className="h-4 w-4" />
      case "inside_sitting":
        return <Users className="h-4 w-4" />
      case "outside_sitting":
        return <Utensils className="h-4 w-4" />
      case "sanitary_facilities":
        return <WashingMachine className="h-4 w-4" />
      case "self_service":
        return <HandPlatter className="h-4 w-4" />
      case "wifi":
        return <Wifi className="h-4 w-4" />
      case "kiez":
        return <Map className="h-4 w-4" />
      default:
        return null
    }
  }

  const getMetadataLabel = (key: string) => {
    switch (key) {
      case "coffee_chain":
        return "Chain"
      case "inside_sitting":
        return "Indoor"
      case "outside_sitting":
        return "Outdoor"
      case "sanitary_facilities":
        return "Restroom"
      case "self_service":
        return "Self-service"
      case "wifi":
        return "WiFi"
      case "kiez":
        return cafe.kiez
      default:
        return key
    }
  }

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-xl">{cafe.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        {/* Description */}
        <div className="text-sm text-muted-foreground mb-4 flex-1 prose prose-sm max-w-none prose-slate prose-ul:list-disc prose-ul:ml-4 prose-ul:pl-0 prose-li:my-1 prose-li:marker:text-foreground [&_ul]:list-disc [&_ul]:ml-4 [&_li]:my-1">
          <ReactMarkdown>{cafe.description}</ReactMarkdown>
        </div>

        {/* Metadata badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="secondary" className="flex items-center gap-1">
            {getMetadataIcon("kiez")}
            {getMetadataLabel("kiez")}
          </Badge>
          {Object.entries(cafe.metadata).map(([key, value]) => {
            if (value) {
              return (
                <Badge key={key} variant="secondary" className="flex items-center gap-1">
                  {getMetadataIcon(key)}
                  {getMetadataLabel(key)}
                </Badge>
              )
            }
            return null
          })}
        </div>

        {/* Actions */}
        <div className="flex gap-2 mt-auto">
          <Button asChild size="sm" className="flex-1">
            <a href={cafe.urls.google_maps} target="_blank" rel="noopener noreferrer">
              <MapPin className="h-4 w-4 mr-1" />
              Maps
            </a>
          </Button>
          {cafe.urls.website && (
            <Button asChild variant="outline" size="sm" className="flex-1 bg-transparent">
              <a href={cafe.urls.website} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-1" />
                Website
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
