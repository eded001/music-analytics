import {Article} from "@/components/ui/Article";
import { Header, HeaderSubtitle, HeaderTitle } from "@/components/ui/Header";
import { Layout } from "@/components/ui/Layout";
import { Section, SectionContent, SectionSubtitle, SectionTitle } from "@/components/ui/Section";

export default function PrivacyPolicy() {
    return (
        <Layout>
            <Header>
                <HeaderTitle>Privacidade e Dados</HeaderTitle>
                <HeaderSubtitle>Protocolos de Segurança</HeaderSubtitle>
            </Header>

            <Article>
                <Section>
                    <SectionTitle>Escopo da API</SectionTitle>
                    <SectionContent>
                        Operamos como uma aplicação &quot;stateless&quot; (sem estado) baseada na API oficial do Spotify. Ao autenticar, o sistema solicita acesso temporário para leitura do perfil e histórico de audição.
                    </SectionContent>
                </Section>

                <Section variant="card">
                    <SectionTitle>Compromisso de Armazenamento Zero</SectionTitle>
                    <SectionContent>
                        Nenhum dado pessoal, histórico de faixas ou credenciais são armazenados em bancos de dados externos. Toda a análise é processada em memória e descartada ao encerrar a sessão.
                    </SectionContent>
                </Section>

                <Section className="pt-6 border-t border-zinc-800">
                    <p className="text-zinc-500 text-xs mb-4">Gestão de permissões de terceiros:</p>
                    <button
                        className="inline-block text-[10px] font-black text-black bg-white px-4 py-2 hover:bg-[#1DB954] transition-colors uppercase tracking-widest"
                    >
                        <a
                            href="https://www.spotify.com/account/apps/"
                            target="_blank"
                        >
                            Revogar Acesso via Spotify.com
                        </a>
                    </button>
                </Section>
            </Article>
        </Layout>
    );
}