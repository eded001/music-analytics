import Link from "next/link"

import { Layout } from "@/components/ui/Layout"
import { HeaderTitle } from "@/components/ui/Header"
import { Article } from "@/components/ui/Article"
import { Section } from "@/components/ui/Section"

export default function NotFound() {
    return (
        <Layout className="flex flex-1 flex-col items-center justify-center">
                <HeaderTitle>
                    404 <span className="text-zinc-600">|</span> Página Não Encontrada
                </HeaderTitle>

                <Article className="mt-6 max-w-xl">/
                    <Section>
                        <p className="text-zinc-400 leading-relaxed">
                            A página que você está tentando acessar não existe ou foi movida
                            dentro da estrutura da aplicação.
                        </p>
                    </Section>

                    <Section className="mt-6 flex justify-center">
                        <Link
                            href="/"
                            className="inline-block text-[11px] font-bold uppercase tracking-widest text-black bg-white px-6 py-3 hover:bg-[#1ED760] transition-colors"
                        >
                            Voltar para o início
                        </Link>
                    </Section>
                </Article>
        </Layout>
    )
}