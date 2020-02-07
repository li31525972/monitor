<template>
    <ul class="mon-tags">
        <li v-for="item in TAGS" :key="item.path" @click="handleClickTags(item)"
            :class="{'active': path === item.path }">{{ item.name }}
            <i @click.stop="handleRemoveTags(item)" v-if="path === item.path">X</i>
        </li>
    </ul>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
        
        }
    },
    computed: {
        ...mapGetters(['TAGS']),
        path() {
            return this.$route.path
        }
    },
    watch: {
    
    },
    created() {
    
    },
    mounted() {
    
    },
    methods: {
        handleClickTags(item) {
            this.$router.push(item.path)
        },
        handleRemoveTags(item) {
            this.$store.commit('REMOVE_TAGS', item)
            let len = this.TAGS.length
            this.$router.replace(this.TAGS[len-1].path)
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "~@/assets/css/var.scss";
.mon-tags {
    height: 30px;
    line-height: 30px;
    li {
        height: 28px;
        float: left;
        padding: 0 15px;
        cursor: pointer;
        font-size: 14px;
        &.active {
            color: $theme;
            border-bottom: 2px solid $theme;
        }
        i {
            display: inline-block;
            padding: 0 5px;
        }
    }
}
</style>
