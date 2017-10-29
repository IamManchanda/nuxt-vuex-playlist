<template>
  <div class="p-Index">
    <app-list-one></app-list-one>
    <app-list-two></app-list-two>
  </div>
</template>

<script>
import AppListOne from '~/components/AppListOne.vue';
import AppListTwo from '~/components/AppListTwo.vue';

export default {
  components: {
    'app-list-one': AppListOne,
    'app-list-two': AppListTwo,
  },
};
</script>
