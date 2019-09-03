<template>
  <ul class="listItem">
    <item v-for="section in itemJson" :section="section"></item>
  </ul>
</template>

<script>
    import Item from './item'

    export default {
        name: 'listItem2',
        components: {Item},
        props: ['itemJson']
    }
</script>

<style scoped lang="stylus">

</style>
