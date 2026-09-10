import { SectionLabel } from "@/components/SectionLabel";
import { diagnosisUrl } from "@/lib/data";

export const metadata = { title: "Contato" };

export default function ContactPage() {
  return (
    <main className="innerPage darkSection">
      <div className="gridBackdrop" />
      <div className="shell contactPage">
        <SectionLabel>DIAGNÓSTICO OZARE</SectionLabel>
        <h1 className="innerTitle">EM QUE MOMENTO<br /><span>SEU ESCRITÓRIO ESTÁ?</span></h1>
        <p className="innerIntro">
          Responda o diagnóstico e identifique qual gargalo comercial está limitando sua próxima etapa.
        </p>
        <a className="pill pillPrimary pillLarge" href={diagnosisUrl} target="_blank" rel="noreferrer">
          Começar diagnóstico ↗
        </a>
      </div>
    </main>
  );
}
