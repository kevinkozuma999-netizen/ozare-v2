import Link from "next/link";
import { SectionLabel } from "@/components/SectionLabel";
import { caseStats, stats } from "@/lib/data";

export const metadata = { title: "Resultados" };

export default function ResultsPage() {
  return (
    <main className="innerPage lightSection">
      <div className="shell">
        <SectionLabel>RESULTADOS</SectionLabel>
        <h1 className="innerTitle darkText">NÚMEROS QUE<br /><span>SAEM DO PAPEL.</span></h1>

        <div className="statsHuge">
          {stats.map((s) => (
            <div key={s.label}><strong>{s.value}</strong><span>{s.label}</span></div>
          ))}
        </div>

        <Link className="caseFeature standaloneCase" href="/cases/tulli">
          <div className="caseTop"><span>CASE EM DESTAQUE</span><strong>TULLI</strong></div>
          {caseStats.map((s) => (
            <div className="bigMetric" key={s.label}><small>{s.label}</small><strong>{s.value}</strong></div>
          ))}
          <span className="caseLink">Ver case completo ↗</span>
        </Link>

        <p className="legalNote">
          Resultados são individuais e não representam promessa ou garantia de faturamento.
        </p>
      </div>
    </main>
  );
}
