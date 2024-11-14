import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SourFace Studio",
  description: "Sanity Studio for the SourFace ecommerce store.",
};

export default function StudioRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
