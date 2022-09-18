
<template>
    <v-app class="pt-0">
        <v-container xs class="layoutv2">
            <nuxt />
        </v-container>
    </v-app>
</template>
  

<script>

export default {

}
</script>

<style lang="scss" scoped>
.layoutv2 {
    padding: 0;
    height: 100vh;
    overflow-y: auto;
    // border: 1px solid $light-grey;
    position: relative;
    max-width: 420px;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 50px;
}

@media only screen and (max-width: 420px) {
    .layoutv2 {
        border-radius: unset;
        box-shadow: unset;
    }
}
</style>
