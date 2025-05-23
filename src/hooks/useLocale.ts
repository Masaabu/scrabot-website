"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function useLocale() {
    const pathname = usePathname(); // 現在のURLパスを取得
    const [locale, setLocale] = useState<string |null>(null);

    useEffect(() => {
        if (pathname) {
            // パスを分割して先頭のセグメントを取得
            const segments = pathname.split("/").filter(Boolean);
            setLocale(segments[0] || null);
        }
    }, [pathname]);

    return locale;
}

export function LocalizeLink(link: string) {
    // 言語コードを取得
    const locale = useLocale()

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

export function GetPathWithoutLocale() {
    const pathname = usePathname(); // 現在のURLパスを取得

    if (!pathname) return "";

    // パスを分割して言語セグメントを削除
    const segments = pathname.split("/").filter(Boolean);

    // 言語コードを取り除いたパスを生成
    const newPath = segments.slice(1).join("/");

    return `/${newPath}`;
}