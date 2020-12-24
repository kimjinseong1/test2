<template>
  <div>
      <list-item></list-item>
  </div>
</template>

<script>
import listItem from '../components/ListItem.vue';
import ListXMixin from '../mixins/ListMixin.js';

export default {
    components: {
        listItem,
    },
    mixins: [ListXMixin],
}
</script>

<style>

</style>