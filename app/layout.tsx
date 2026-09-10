import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Ozare — Estrutura o negócio de quem já domina a obra",
    template: "%s · Ozare"
  },
  description:
    "Consultoria para engenheiros e arquitetos. Estrutura comercial, processo e crescimento para quem já domina a técnica."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="noise" aria-hidden="true" />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
