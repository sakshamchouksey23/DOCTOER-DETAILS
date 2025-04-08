import type React from "react"
import { cn } from "@/lib/utils"

interface BackgroundBlobProps extends React.SVGProps<SVGSVGElement> {
  className?: string
}

export function BackgroundBlob({ className, ...props }: BackgroundBlobProps) {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={cn("fill-current", className)} {...props}>
      <path
        d="M42.8,-73.2C56.9,-66.7,70.8,-57.8,78.1,-44.9C85.4,-32,86.2,-16,85.4,-0.5C84.6,15,82.2,30,74.3,41.6C66.4,53.2,53,61.3,39.4,67.3C25.8,73.3,12.9,77.2,-0.9,78.7C-14.7,80.2,-29.4,79.3,-42.6,73.5C-55.8,67.7,-67.5,57,-75.2,43.5C-82.9,30,-86.6,15,-86.1,0.3C-85.6,-14.4,-80.9,-28.8,-73.1,-41.7C-65.3,-54.6,-54.3,-66,-41.3,-72.5C-28.3,-79,-14.2,-80.5,0.2,-80.9C14.5,-81.3,28.7,-79.7,42.8,-73.2Z"
        transform="translate(100 100)"
      />
    </svg>
  )
}
