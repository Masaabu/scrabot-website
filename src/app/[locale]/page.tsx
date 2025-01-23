import TranslationManager from "@/lib/TranslationManager"
import { getLocale, serverLocalizeLink } from "@/lib/getLocale";
import LocaleSwitch from "@/components/ui/localeSwitch";
import { FadeUpElement } from "@/components/ui/feadinElement";

export default async function Home() {
  const locale = await getLocale()
  const tm = new TranslationManager(locale);
  const t = tm.t.bind(tm);

  const cards = [
    { img: "images/project_command.webp", button: <a className="inline-block px-5 py-2 rounded-lg bg-[#7150b9] text-xl" href={await serverLocalizeLink("/commands")}>{t("commands")}</a> },
    { img: "images/user_command.webp", button: <LocaleSwitch /> },
    { img: "images/moya.webp", button: <a className="inline-block px-5 py-2 rounded-lg bg-[#7150b9] text-xl" href="https://discord.gg/HD85SkybXY" target="_blank">{t("send_feedback")}</a> }
  ];

  return (
    <main>
      <div className="banner grid min-h-[70vh] text-center items-center text-[large]">
        <div className="fadeup">
          <h1 className="text-4xl font-bold m-7">{t("description")}</h1>
          <a
            className="px-6 py-3 rounded-lg bg-[#515ce7] hover:bg-[#3e4aa6] text-2xl transition-[background-color]"
            href={await serverLocalizeLink("/invite")}
            target="_blank"
          >
            {t("add_to_discord")}
          </a>
        </div>
      </div>

      {cards.map((card, i) => (
        <FadeUpElement key={i}>
          <div className="md:flex block justify-between md:h-96 h-auto max-w-6xl mx-auto my-0 mb-24 px-6">
            <div className="md:w-[450px] w-[90vw] md:mx-0 mx-auto my-auto p-4 md:text-left text-center md:rounded-md md:border-l-4 md:border-[#845fd2] md:bg-[#00000011]">
              <h2 className="text-3xl font-bold">{t(`cardTitle_${i}`)}</h2>
              <p className="my-4 text-lg opacity-70">{t(`cardDesc_${i}`)}</p>
              {card.button && card.button}
            </div>
            <img className={`md:w-[450px] w-[90vw]  md:ml-0 ml-[5vw] object-contain ${i % 2 || "-order-1"}`} src={card.img} alt="true" />
          </div>
        </FadeUpElement>
      ))}
    </main>
  );
}
