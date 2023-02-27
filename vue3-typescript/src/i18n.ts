import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import vi from './locales/vi.json';
import jaJP from './locales/ja-JP.json';

// Refer: https://dev.to/flycode/step-by-step-how-to-create-a-vue-multi-language-app-with-vue-i18n-b5c

const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: localStorage.getItem('language_default') || process.env.VUE_APP_I18N_LOCALE,
    fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || "en",
    messages: {
        en: en,
        vi: vi,
        "ja-JP": jaJP
    },
    datetimeFormats: {
        en: {
            short: {
                year: "numeric",
                month: "short",
                day: "numeric"
            },
            long: {
                year: "numeric",
                month: "long",
                day: "numeric",
                weekday: "long"
            }
        },
        "ja-JP": {
            short: {
                year: "numeric",
                month: "short",
                day: "numeric"
            },
            long: {
                year: "numeric",
                month: "long",
                day: "numeric",
                weekday: "long"
            }
        },
        vi: {
            short: {
                year: "numeric",
                month: "short",
                day: "numeric"
            },
            long: {
                year: "numeric",
                month: "long",
                day: "numeric",
                weekday: "long"
            }
        }
    }
})

export default i18n;