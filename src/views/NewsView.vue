<template>
  <div>
      <list-item></list-item>
  </div>
</template>

<script>
import listItem from '../components/ListItem.vue';
import ListMixin from '../mixins/ListMixin.js';

export default {
    components: {
        listItem,
    },
    mixins: [ListMixin],

}
</script>

<style>

</style>