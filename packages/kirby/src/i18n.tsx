import { i18n } from "@lingui/core";

export const setLocale = (locale: string) => {
  localStorage.setItem("locale", locale);
  location.reload();
};

export const getLocale = (): string => {
  return localStorage.getItem("locale") ?? "en";
};

/**
 * Load messages for requested locale and activate it.
 * This function isn't part of the LinguiJS library because there are
 * many ways how to load messages — from REST API, from file, from cache, etc.
 */
export async function loadCatalog(locale: string) {
  const { messages } = await import(`../locale/${locale}/messages.po`);
  i18n.loadAndActivate({ locale, messages });
}

export const LocaleSwitch = () => {
  return (
    <div style={{ display: "flex", gap: "8px", marginBlock: "8px" }}>
      <p style={{ display: "inline", margin: 0 }}>Switch language:</p>
      <button
        onClick={() => {
          setLocale("en");
        }}
      >
        en
      </button>
      <button
        onClick={() => {
          setLocale("pl");
        }}
      >
        pl
      </button>
    </div>
  );
};
