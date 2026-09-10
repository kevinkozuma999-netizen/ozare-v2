import Link from "next/link";
import { diagnosisUrl } from "@/lib/data";

export function Footer() {
  return (
    <footer className="footer shell">
      <div>
        <div className="footerLogo">OZARE</div>
        <p>A engenharia é sua. O comercial é nosso.</p>
      </div>
      <div className="footerLinks">
        <Link href="/solucoes">Soluções</Link>
        <Link href="/resultados">Resultados</Link>
        <Link href="/sobre">Sobre</Link>
        <a href={diagnosisUrl} target="_blank" rel="noreferrer">Diagnóstico</a>
      </div>
      <div className="footerLegal">
        <span>© 2026 Grupo Ozare</span>
        <span>Consultoria para engenheiros e arquitetos.</span>
      </div>
    </footer>
  );
}
