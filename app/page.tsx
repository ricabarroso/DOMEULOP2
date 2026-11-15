import Link from "next/link";
import AccountDashboard from "@/components/account-dashboard";
import MedicationSearch from "@/components/medication-search";

const documents = [
  {
    href: "/receita",
    title: "Receita médica",
    description: "Preencha medicamentos, dosagem e orientações de uso.",
    accent: "from-emerald-900 via-green-500 to-emerald-700",
  },
  {
    href: "/atestado",
    title: "Atestado médico",
    description: "Prepare o período de afastamento e as observações clínicas.",
    accent: "from-green-700 via-green-400 to-emerald-800",
  },
  {
    href: "/pedido-exames",
    title: "Pedido de exames",
    description: "Informe a justificativa clínica e os exames solicitados.",
    accent: "from-emerald-900 via-green-600 to-green-400",
  },
  {
    href: "/apac",
    title: "APAC",
    description: "Estruture procedimento, justificativa e dados do estabelecimento.",
    accent: "from-green-800 via-green-500 to-emerald-800",
  },
  {
    href: "/atendimento-antirrabico",
    title: "Ficha de atendimento antirrábico",
    description: "Preencha os dados e gere uma cópia do formulário original em PDF.",
    accent: "from-emerald-800 via-green-400 to-emerald-900",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen px-4 py-10 text-slate-100 md:px-8">
      <div className="mx-auto max-w-6xl space-y-8">
        <header className="rounded-3xl border border-green-400 bg-white/95 p-7 shadow-lg shadow-black/25 md:p-12">
          <div aria-hidden="true" className="mb-6 h-1.5 w-24 rounded-full bg-gradient-to-r from-emerald-900 via-green-500 to-emerald-900" />
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-green-700">
            DOMEULOP <span className="mx-1 text-slate-400">/</span> Documentos clínicos
          </p>
          <h1 className="mt-4 max-w-3xl text-3xl font-normal leading-[1.16] tracking-[0.015em] text-emerald-950 md:text-4xl">
            Documentos médicos, com clareza e cuidado.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-700">
            Preencha documentos clínicos e gere PDFs prontos para imprimir, em um só lugar.
          </p>
          <Link
            href="#documentos"
            className="mt-7 inline-flex items-center gap-2 rounded-xl border border-green-500 bg-emerald-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-500"
          >
            Escolher documento <span aria-hidden="true">↓</span>
          </Link>
        </header>

        <section aria-label="Conta e acesso" className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-green-400 bg-white/95 px-5 py-4 shadow-lg shadow-black/20">
          <div>
            <h2 className="text-base font-semibold text-emerald-950">Acesso à plataforma</h2>
            <p className="mt-0.5 text-sm text-slate-600">Entre para acessar sua conta e seus modelos salvos.</p>
          </div>
          <AccountDashboard />
        </section>

        <MedicationSearch />

        <section id="documentos" aria-labelledby="documents-heading">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-300">Modelos disponíveis</p>
              <h2 id="documents-heading" className="mt-1 text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
                Escolha um documento
              </h2>
            </div>
            <p className="text-sm text-slate-300">Preenchimento simples. PDF pronto para revisar.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {documents.map((document) => (
              <Link
                key={document.href}
                href={document.href}
                className="group rounded-3xl border border-green-300 bg-white/95 p-6 text-slate-900 shadow-md shadow-black/20 transition hover:-translate-y-0.5 hover:border-green-500 hover:shadow-lg hover:shadow-black/30 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-400"
              >
                <span className={`mb-5 block h-2 rounded-full bg-gradient-to-r ${document.accent}`} />
                <h3 className="text-lg font-semibold leading-snug text-emerald-950">{document.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{document.description}</p>
                <span className="mt-5 inline-flex items-center text-sm font-semibold text-emerald-800 group-hover:text-emerald-950">
                  Abrir documento <span aria-hidden="true" className="ml-2">→</span>
                </span>
              </Link>
            ))}
          </div>
        </section>

        <aside className="rounded-2xl border border-green-400 bg-white/90 px-5 py-4 text-xs leading-5 text-slate-700 shadow-sm shadow-black/20">
          <h2 className="mb-1 text-xs font-bold uppercase tracking-[0.16em] text-emerald-900">Privacidade dos dados</h2>
          Modelos de prescrição são armazenados na conta autenticada. Os dados de pacientes e profissionais ficam apenas na memória desta sessão e não são enviados ao Supabase. A busca de medicamentos envia somente o termo pesquisado ao servidor para consultar o catálogo, sem dados do paciente. Na ficha antirrábica, o preenchimento e o PDF permanecem no navegador.
        </aside>
      </div>
    </main>
  );
}
