"use server";

/**
 * ローカライズ関係の関数です。問題が解決出来ない場合は直接質問してね by 桐生トア
 */

import { headers } from "next/headers";

export async function getLocale() {
    const headersList = await headers();
    const header_url = headersList.get("x-url");

    if (header_url) {
        // URLをパースしてパスを取得
        const urlPath = new URL(header_url).pathname;

        // パスを分割して先頭の値（言語部分）を取得
        const segments = urlPath.split("/").filter(Boolean);
        const locale = segments[0]; // パスの最初のセグメントが言語コード
        return locale;
    } else {
        console.log("x-url header is not found");
        return "en";
    }
}

// リンクを変換する関数
export async function serverLocalizeLink(link: string) {
    // 言語コードを取得
    const locale = await getLocale();

    // 外部リンクの場合、変換せずそのまま返す
    if (link.startsWith("http://") || link.startsWith("https://")) {
        return link;
    }

    // 言語コードが取得できた場合、リンクに適用
    if (locale) {
        return `/${locale}${link}`;
    }

    // 言語コードがない場合、そのまま返す
    return link;
}