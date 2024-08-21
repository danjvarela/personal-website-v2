import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="flex justify-center px-2 py-8">
      <Loader2 className="h-6 w-6 animate-spin" />
    </div>
  )
}
