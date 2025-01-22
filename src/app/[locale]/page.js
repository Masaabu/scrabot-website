import Image from "next/image";
import TranslationManager from "@/utils/TranslationManager.js"
import { getLocale, serverLocalizeLink } from "@/lib/getLocale";
import { localizeLink } from "@/hooks/useLocale";

// serverLocalizeLink("<link>") これはサーバーサイドでローカライズリンクを生成する

export default async function Home() {
  const locale = await getLocale()
  const tm = new TranslationManager(locale);
  const t = tm.t.bind(tm);
// localizeLink("<link>") これローカライズリンク生成してくれる関数 
  const cards = [
    { img:"images/project_command.webp", button:<a className="text-xl rounded-lg bg-[#8866da77] px-4 py-1" href={await serverLocalizeLink("/commands")}>{t("commands")}</a> },
    { img:"images/user_command.webp"},
    { img:"images/moya.webp"}
  ];

  return (
    <main>
      <div className="banner grid min-h-[70vh] text-center items-center text-[large]">
        <div>
          <h1 className="text-4xl text-white font-bold m-7">{t("description")}</h1>
          <a
            className="px-6 py-3 rounded-lg bg-[#515ce7] hover:bg-[#3e4aa6] text-2xl transition-[background-color]"
            href="https://discord.com/oauth2/authorize?client_id=1330992974556823662&permissions=280576&integration_type=0&scope=bot"
            target="_blank"
          >
            {t("addDiscord")}
          </a>
        </div>
      </div>

      {cards.map((card, i) => (
        <div className="md:flex block md:h-96 h-auto max-w-5xl justify-between mb-24 mx-auto my-0" key={i}>
          <div className="md:w-96 w-[90vw] text-center md:mx-0 mx-auto my-auto">
            <h2 className="text-3xl font-bold">{t(`cardTitle_${i}`)}</h2>
            <p className="text-lg opacity-70">{t(`cardDesc_${i}`)}</p>
            {card.button&&card.button}
          </div>
          <img className="md:w-[450px] w-[90vw]  md:ml-0 ml-[5vw] object-contain" src={card.img} alt="true"/>
        </div>
      ))}
    </main>
  );
}