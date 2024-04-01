import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    ssr: true, // Enable server-side rendering if needed
    components,
    directives,
  });

  nuxtApp.vueApp.use(vuetify);
});
