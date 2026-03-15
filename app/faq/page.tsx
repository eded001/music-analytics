import { Layout } from "@/components/ui/Layout";
import { Header, HeaderSubtitle, HeaderTitle } from "@/components/ui/Header";
import { Article } from "@/components/ui/Article";

export default function FAQ() {
    return (
        <Layout>
            <Header>
                <HeaderTitle>FAQ</HeaderTitle>
                <HeaderSubtitle>Perguntas Frequentes</HeaderSubtitle>
            </Header>

            <Article className="divide-y divide-zinc-800/50">
                <section className="py-10">
                    <h3 className="text-white font-medium text-lg mb-3 tracking-tight">Disponibilidade do Código-Fonte</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                        O repositório oficial é público e pode ser auditado no GitHub através do endereço:
                        <a href="https://github.com/eded001/music-analytics" target="_blank" className="text-[#1ED760] ml-1 hover:underline">eded001/music-analytics</a>.
                    </p>
                </section>

                <section className="py-10">
                    <h3 className="text-white font-medium text-lg mb-3 tracking-tight">Integridade e Coleta de Dados</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                        A aplicação não utiliza cookies de rastreio ou armazenamento persistente de dados do usuário. Para conformidade técnica, consulte nossa seção de
                        <a href="/privacy-policy" className="text-[#1ED760] ml-1 hover:underline">Privacidade</a>.
                    </p>
                </section>
            </Article>
        </Layout>
    );
}