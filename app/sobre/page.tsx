import { SectionLabel } from "@/components/SectionLabel";
import { diagnosisUrl } from "@/lib/data";

export const metadata = { title: "Sobre" };

export default function AboutPage() {
  return (
    <main className="innerPage creamSection">
      <div className="shell">
        <SectionLabel>QUEM SOMOS</SectionLabel>
        <h1 className="innerTitle darkText">CONSTRUÍDA NA<br /><span>LINHA DE FRENTE.</span></h1>

        <div className="aboutPageGrid">
          <div className="portraitPlaceholder tall">
            <div className="portraitCode">RZ / FOUNDER</div>
            <div className="portraitInitials">RZ</div>
            <p>ÁREA RESERVADA PARA RETRATO OFICIAL</p>
          </div>
          <div className="aboutNarrative">
            <h2>Rafael Zaccari</h2>
            <h3>Fundador · Grupo Ozare</h3>
            <p>
              A Ozare nasceu da experiência prática de um engenheiro que percebeu que crescimento
              não depende apenas de talento técnico — depende de estrutura, precificação e decisão.
            </p>
            <p>
              Hoje, a empresa atua ao lado de negócios de engenharia e arquitetura em diferentes
              fases, da organização comercial à construção de operações mais previsíveis.
            </p>
            <blockquote>
              “Engenheiro bom não quebra por falta de técnica. Quebra por vender mal,
              precificar mal e tentar carregar a empresa inteira sozinho.”
            </blockquote>
            <a className="pill pillPrimary" href={diagnosisUrl} target="_blank" rel="noreferrer">Fazer diagnóstico ↗</a>
          </div>
        </div>
      </div>
    </main>
  );
}
