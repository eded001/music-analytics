import { Layout } from "@/components/ui/Layout"
import { Header, HeaderSubtitle, HeaderTitle } from "@/components/ui/Header"
import { Article } from "@/components/ui/Article"
import { Section, SectionContent, SectionTitle } from "@/components/ui/Section"

export default function About() {
    return (
        <Layout>
            <Header>
                <HeaderTitle>Sobre o Projeto</HeaderTitle>
                <HeaderSubtitle>Documentação Institucional</HeaderSubtitle>
            </Header>

            <Article variant="grid">
                <Section>
                    <p className="text-zinc-300 leading-relaxed">
                        O <span className="text-white font-medium">Spotify Analytics</span> é uma plataforma de visualização de dados musicais projetada para converter métricas de streaming em insights visuais. Inspirado pelo Receiptify, o sistema expande a análise de consumo para oferecer uma interface clara e minimalista.
                    </p>
                </Section>

                <Section className="grid md:grid-cols-2 gap-12 my-10 py-8 border-y border-zinc-800/50">
                    <Article>
                        <SectionTitle>Referências</SectionTitle>

                        <ul className="flex flex-col gap-2 text-sm">
                            <li>
                                <a href="https://trackify.am/" target="_blank" className="text-zinc-400 hover:text-white transition-colors">
                                    Trackify
                                </a>
                            </li>

                            <li>
                                <a href="https://spotify.com/stats" target="_blank" className="text-zinc-400 hover:text-white transition-colors">
                                    Stats for Spotify
                                </a>
                            </li>
                        </ul>
                    </Article>

                    <Article>
                        <SectionTitle>Stack Técnica</SectionTitle>

                        <SectionContent>
                            Desenvolvido com React, Next.js e Tailwind CSS, integrando-se diretamente à infraestrutura da Spotify Web API.
                        </SectionContent>
                    </Article>
                </Section>

                <Section>
                    <p className="text-zinc-500 text-xs italic leading-relaxed">
                        Este projeto opera como um estudo de caso técnico para demonstração de conceitos de análise de dados e design de interface em tempo real.
                    </p>
                </Section>
            </Article>
        </Layout>
    )
}