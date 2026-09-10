import { SectionLabel } from "@/components/SectionLabel";
import { diagnosisUrl, solutions } from "@/lib/data";

export const metadata = { title: "Soluções" };

export default function SolutionsPage() {
  return (
    <main className="innerPage darkSection">
      <div className="gridBackdrop" />
      <div className="shell">
        <SectionLabel>SOLUÇÕES OZARE</SectionLabel>
        <h1 className="innerTitle">PARA CADA FASE,<br /><span>UM PRÓXIMO NÍVEL.</span></h1>
        <p className="innerIntro">
          Não são etapas obrigatórias. São respostas a maturidades e gargalos diferentes
          de empresas de engenharia e arquitetura.
        </p>

        <div className="solutionDetailList">
          {solutions.map((s) => (
            <article className={s.featured ? "featuredDetail" : ""} key={s.title}>
              <div className="detailNum">{s.level}</div>
              <div>
                <span className="detailPhase">{s.phase}</span>
                <h2>{s.title}</h2>
                <h3>{s.lead}</h3>
              </div>
              <div>
                <p>{s.copy}</p>
                <span className="detailMeta">{s.meta}</span>
              </div>
              <a href={diagnosisUrl} target="_blank" rel="noreferrer">Quero entender se faz sentido ↗</a>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
