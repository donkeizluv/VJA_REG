<template>
    <v-app>
        <v-content>
            <reg-view></reg-view>
        </v-content>
    </v-app>
</template>
<script>
    import register from './Register.vue'
    export default {
        components: {
            'reg-view': register
        },
    }
</script>
<style>

</style>