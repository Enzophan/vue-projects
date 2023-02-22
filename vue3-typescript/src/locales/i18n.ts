import { createI18n } from 'vue-i18n';
import en from './en.json';
import vi from './vi.json';

const i18n = createI18n({
    locale: "en",
    messages: {
        en: en,
        vi: vi
    }
})

export default i18n;