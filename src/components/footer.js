"use server"

import { getLocale } from "@/lib/getLocale";
import TranslationManager from "@/utils/TranslationManager.js"

const contents = {
  Pages: [
    { label: "commands", link: "/commands", target: "_self" },
    { label: "terms_of_use", link: "/terms_of_use", target: "_self" },
  ],
  Link: [
    { label: "discord", link: "https://discord.gg/HD85SkybXY" },
    { label: "addDiscord", link: "https://discord.com/oauth2/authorize?client_id=1330992974556823662&permissions=280576&integration_type=0&scope=bot" }
  ]
}

export default async function Header() {
  const locale = await getLocale()
  const tm = new TranslationManager(locale);
  const t = tm.t.bind(tm);

  return (
    <footer className="bg-[#252527] px-0 py-[1em]">
      <div className="flex max-w-[50em] justify-around text-center m-auto">
        <p>&copy; Masaabu</p>
        {Object.keys(contents).map((key) => (
          <dl key={key}>
            <dt>{key}</dt>
            {contents[key].map((content, index) => (
              <dd key={index} className="mx-[1em] my-0">
                <a className="text-[lavender] no-underline" href={`${content.link.startsWith("https") ? "" : `/${locale}`}${content.link}`} target={content.target ? content.target : "_blank"}>
                  {t(content.label)}
                </a>
              </dd>
            ))}
          </dl>
        ))}
      </div>
    </footer>
  );
}
