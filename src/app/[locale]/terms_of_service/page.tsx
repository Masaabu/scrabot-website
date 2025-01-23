import ReactMarkdown from 'react-markdown';
import TranslationManager from "@/lib/TranslationManager"
import { getLocale } from "@/lib/getLocale";

export default async function Home() {
  const locale = await getLocale()
  const tm = new TranslationManager(locale);
  const t = tm.t.bind(tm);

  return (
    <main>
      <div className="banner grid max-h-[30vh] h-96 text-center items-center text-[large]">
        <h1 className="text-4xl text-white font-bold m-7">{t("terms_of_service")}</h1>
      </div>

      <div className="markdown max-w-5xl mx-auto">
        <ReactMarkdown>{t("terms_of_service_content")}</ReactMarkdown>
      </div>
    </main>
  );
}