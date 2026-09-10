import { SectionLabel } from "@/components/SectionLabel";
import { caseStats, diagnosisUrl } from "@/lib/data";

export const metadata = { title: "Case Tulli" };

export default function TulliCasePage() {
  return (
    <main className="innerPage darkSection">
      <div className="gridBackdrop" />
      <div className="shell">
        <SectionLabel>CASE / TULLI</SectionLabel>
        <h1 className="caseTitle">DE 5% A 85%<br /><span>DE FECHAMENTO.</span></h1>

        <div className="caseStoryGrid">
          <div className="caseStage">
            <span>01 / CONTEXTO</span>
            <h2>Boa entrega técnica. Comercial ainda sem previsibilidade.</h2>
            <p>O desafio era transformar capacidade técnica em um processo mais consistente de venda e acompanhamento.</p>
          </div>
          <div className="caseStage">
            <span>02 / INTERVENÇÃO</span>
            <h2>Estrutura comercial, rotina e processo.</h2>
            <p>A lógica da Ozare entra para organizar o caminho entre oportunidade, proposta, acompanhamento e fechamento.</p>
          </div>
          <div className="caseStage accentStage">
            <span>03 / RESULTADO</span>
            {caseStats.map((s) => (
              <div className="caseMetricInline" key={s.label}>
                <small>{s.label}</small>
                <strong>{s.value}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="caseCta">
          <h2>Quer entender o gargalo do seu comercial?</h2>
          <a className="pill pillPrimary pillLarge" href={diagnosisUrl} target="_blank" rel="noreferrer">Fazer diagnóstico ↗</a>
        </div>
      </div>
    </main>
  );
}
