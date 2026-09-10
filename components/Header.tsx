import Link from "next/link";
import { diagnosisUrl } from "@/lib/data";

export function Header() {
  return (
    <header className="header shell">
      <Link className="logo" href="/" aria-label="Ozare">
        <span className="logoGlyph">OZ</span>
        <span>OZARE</span>
      </Link>

      <nav className="nav" aria-label="Navegação principal">
        <Link href="/solucoes">Soluções</Link>
        <Link href="/resultados">Resultados</Link>
        <Link href="/sobre">Sobre</Link>
      </nav>

      <a className="pill pillSmall" href={diagnosisUrl} target="_blank" rel="noreferrer">
        Fazer diagnóstico ↗
      </a>
    </header>
  );
}
