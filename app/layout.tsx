import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Standup AI — Turn Slack chaos into clean standup summaries",
  description: "Monitors Slack channels and generates structured daily/weekly standup summaries with action items and blockers extracted. Built for engineering managers and team leads."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="21a0e453-40d9-4b2e-bff5-d7a12af7f0e4"></script>
      </head>
      <body style={{ backgroundColor: "#0d1117", color: "#c9d1d9", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
