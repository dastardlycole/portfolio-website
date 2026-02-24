import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Ifemide Cole — Software Engineer"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#000",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 24,
        }}
      >
        <div
          style={{
            fontSize: 180,
            fontWeight: 700,
            color: "#fff",
            letterSpacing: "-8px",
            lineHeight: 1,
          }}
        >
          IC
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#888",
            letterSpacing: "8px",
            textTransform: "uppercase",
          }}
        >
          Software Engineer
        </div>
      </div>
    ),
    size
  )
}
