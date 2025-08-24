import { CafeDirectory } from "@/components/cafe-directory"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <CafeDirectory />
      <Footer />
    </main>
  )
}
