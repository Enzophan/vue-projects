import Vue from 'vue'
import VueRouter from 'vue-router'
import { Route } from 'vue-router'

/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

// Expansion
declare module 'vue/types/vue' {
  interface Vue {
    $router: VueRouter,
    $route: Route
  }
}