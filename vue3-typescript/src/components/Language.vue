<template>
  <div class="locale-changer">
    <select v-model="$i18n.locale" @change="updateLanguage($i18n.locale)">
      <!-- <option
        v-for="locale in $i18n.availableLocales"
        :key="`locale-${locale}`"
        :value="locale"
      >
        {{ locale }}
      </option> -->

      <option v-for="locale in locales" :key="locale.key" :value="locale.key">
        {{ locale.flag }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
const locales = [
  {
    key: "en",
    flag: "🇺🇸",
  },
  {
    key: "vi",
    flag: "🇻🇳",
  },
  {
    key: "ja-JP",
    flag: "🇯🇵",
  },
];

const updateLanguage = (locate) => {
  localStorage.setItem("language_default", locate);
};
</script>

<style scoped></style>
