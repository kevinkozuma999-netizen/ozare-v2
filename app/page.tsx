import Link from "next/link";
import { TechVisual } from "@/components/TechVisual";
import { SectionLabel } from "@/components/SectionLabel";
import { caseStats, diagnosisUrl, pains, principles, solutions, stats } from "@/lib/data";

export default function HomePage() {
  return (
    <main>
      <section className="hero darkSection">
        <div className="gridBackdrop" />
        <div className="shell">
          <SectionLabel>CONSULTORIA PARA ENGENHEIROS E ARQUITETOS</SectionLabel>

          <div className="heroGrid">
            <div className="heroCopy">
              <h1>
                ENGENHARIA VOCÊ
                <br />
                JÁ DOMINA.
                <span>AGORA, ESTRUTURE O NEGÓCIO.</span>
              </h1>

              <p>
                A Ozare transforma competência técnica em operação comercial estruturada,
                previsível e preparada para crescer.
              </p>

              <div className="actions">
                <a className="pill pillPrimary" href={diagnosisUrl} target="_blank" rel="noreferrer">
                  Fazer diagnóstico ↗
                </a>
                <Link className="pill" href="/solucoes">Ver soluções</Link>
              </div>
            </div>

            <TechVisual />
          </div>

          <div className="statBar">
            {stats.map((item) => (
              <div className="statItem" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
            <div className="statStatement">NEGÓCIO É SISTEMA, NÃO ESFORÇO.</div>
          </div>
        </div>
      </section>

      <section className="lightSection systemHome">
        <div className="shell">
          <SectionLabel>O PROBLEMA</SectionLabel>
          <div className="splitHeadline">
            <h2>TÉCNICA NÃO<br />ESCALA SOZINHA.</h2>
            <div>
              <p>
                Um escritório pode entregar excelente engenharia e ainda assim crescer de forma
                frágil. A Ozare estrutura o sistema em volta da técnica.
              </p>
              <div className="painList">
                {pains.map((pain, index) => (
                  <div key={pain}><span>0{index + 1}</span>{pain}</div>
                ))}
              </div>
            </div>
          </div>

          <div className="principleGrid">
            {principles.map(([num, title]) => (
              <article key={num}>
                <span>{num}</span>
                <h3>{title}</h3>
              </article>
            ))}
          </div>

          <div className="processBlock">
            <div className="processTop">
              <SectionLabel>SISTEMA OZARE</SectionLabel>
              <span>FUNDAÇÃO → ESTRUTURA → PROCESSO → OPERAÇÃO → ESCALA</span>
            </div>
            <div className="processLine">
              {["Fundação", "Estrutura", "Processos", "Operação", "Escala"].map((x, i) => (
                <div className={i === 4 ? "active" : ""} key={x}>
                  <span>0{i + 1}</span>
                  <strong>{x}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="darkSection solutionsHome">
        <div className="shell">
          <div className="sectionHeader">
            <div>
              <SectionLabel>SOLUÇÕES</SectionLabel>
              <h2>QUATRO NÍVEIS.<br /><span>UMA EVOLUÇÃO.</span></h2>
            </div>
            <p>Entre no ponto em que sua empresa está hoje e avance para o próximo nível.</p>
          </div>

          <div className="solutionGrid">
            {solutions.map((s) => (
              <article className={`solutionCard ${s.featured ? "featured" : ""}`} key={s.title}>
                <div className="solutionMeta"><span>{s.level}</span><span>{s.phase}</span></div>
                <div>
                  <small>{s.lead}</small>
                  <h3>{s.title}</h3>
                  <p>{s.copy}</p>
                </div>
                <div className="solutionBottom">
                  <span>{s.meta}</span>
                  <Link href="/solucoes">Ver solução ↗</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="lightSection resultHome">
        <div className="shell">
          <SectionLabel>RESULTADOS</SectionLabel>
          <div className="resultGrid">
            <div className="resultTitle">
              <h2>PROCESSO É BOM.<br /><span>RESULTADO É MELHOR.</span></h2>
              <p>Estrutura só faz sentido quando aparece em indicadores reais de operação.</p>
            </div>

            <Link href="/cases/tulli" className="caseFeature">
              <div className="caseTop">
                <span>CASE EM DESTAQUE</span>
                <strong>TULLI</strong>
              </div>
              {caseStats.map((s) => (
                <div className="bigMetric" key={s.label}>
                  <small>{s.label}</small>
                  <strong>{s.value}</strong>
                </div>
              ))}
              <span className="caseLink">Ver case completo ↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="creamSection founderHome">
        <div className="shell founderGrid">
          <div className="portraitPlaceholder">
            <div className="portraitCode">RZ / 01</div>
            <div className="portraitInitials">RZ</div>
            <p>SUBSTITUIR PELA FOTO OFICIAL DO FUNDADOR</p>
          </div>

          <div className="founderCopy">
            <SectionLabel>ORIGEM</SectionLabel>
            <h2>A OZARE NASCEU NA LINHA DE FRENTE DA ENGENHARIA.</h2>
            <p>
              Rafael Zaccari começou como projetista BIM e construiu a Ozare a partir de um
              problema vivido na prática: técnica forte sem estrutura comercial não vira escala.
            </p>
            <Link className="textLink" href="/sobre">Conhecer a história ↗</Link>
          </div>
        </div>
      </section>

      <section className="finalCta darkSection">
        <div className="gridBackdrop" />
        <div className="shell ctaInner">
          <SectionLabel>PRÓXIMO PASSO</SectionLabel>
          <h2>SUA ENGENHARIA JÁ FUNCIONA.<br /><span>AGORA FAÇA O NEGÓCIO FUNCIONAR.</span></h2>
          <p>Descubra qual gargalo comercial está limitando o próximo nível do seu escritório.</p>
          <a className="pill pillPrimary pillLarge" href={diagnosisUrl} target="_blank" rel="noreferrer">
            Fazer meu diagnóstico ↗
          </a>
        </div>
      </section>
    </main>
  );
}
