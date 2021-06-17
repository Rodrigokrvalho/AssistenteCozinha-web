<template>
  <ins
    class="adsbygoogle"
    style="display: block"
    :data-ad-client="adClient"
    :data-ad-slot="adSlot"
    data-ad-format="auto"
    data-full-width-responsive="true"
  ></ins>
</template>
<script>
export default {
  props: {
    adClient: {
      type: String,
      required: false,
    },
    adSlot: {
      type: String,
      required: false,
    },
  },

  mounted() {
    // eslint-disable-next-line no-undef
    (adsbygoogle = window.adsbygoogle || []).push({});
  }
};
</script>

