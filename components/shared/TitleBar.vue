<template>
    <div class="wrap-titlebar">
        <div class="titlebar px">
            <v-btn icon class="iconbar" :to="link" @click="handleBack">
                <v-icon color="black">mdi-chevron-left</v-icon>
            </v-btn>

            <div class="titlebar">{{title}}</div>
        </div>

    </div>
</template>

<script>
export default {
    props: {
        title: String,
        link: String,
    },
    methods: {
        handleBack() {
            return this.$router.back()
        }
    },
}
</script>

<style lang="scss" scoped>
.wrap-titlebar {
    position: sticky;
    top: 55px;

    .titlebar {
        background-color: $smoke;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        .iconbar {
            position: absolute;
            left: 0;
        }

        .titlebar {
            font-size: 12px;
            font-weight: 700;
        }
    }
}
</style>