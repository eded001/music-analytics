import { Layout } from "@/components/ui/Layout";
import { Header, HeaderSubtitle, HeaderTitle } from "@/components/ui/Header";
import { Article } from "@/components/ui/Article";
import { Section, SectionTitle } from "@/components/ui/Section";

export default function Contact() {
    return (
        <Layout>
            <Header>
                <HeaderTitle>Contato</HeaderTitle>
                <HeaderSubtitle>Canais de comunicação para suporte e parcerias.</HeaderSubtitle>
            </Header>

            <Article className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
                <Section>
                    <SectionTitle variant="secondary">Comunicação Direta</SectionTitle>
                    <Article className="md:text-xl">
                        <a href="mailto:edgarams.profissional@gmail.com" className="text-zinc-400 hover:text-white transition-colors border-b border-zinc-800 pb-1 block w-fit">
                            edgarams.profissional@gmail.com
                        </a>
                    </Article>
                </Section>

                <Section variant="default">
                    <SectionTitle variant="secondary">Recursos Externos</SectionTitle>
                    <Article className="flex gap-6 md:text-xl">
                        <a href="https://github.com/eded001" target="_blank" className="text-zinc-400 hover:text-white underline decoration-zinc-800 underline-offset-8">GitHub</a>
                        <a href="https://eded001.github.io/portfolio/" target="_blank" className="text-zinc-400 hover:text-white underline decoration-zinc-800 underline-offset-8">Portfólio</a>
                    </Article>
                </Section>
            </Article>
        </Layout>
    );
}