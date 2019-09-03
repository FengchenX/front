<template>
  <ul class="listItem">
    <item v-for="(section, key) in itemJson" :section="section" :key="key"></item>
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
