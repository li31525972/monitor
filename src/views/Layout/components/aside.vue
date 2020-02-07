<template>
    <div class="mon-aside">
        <el-menu :default-active="path" class="el-menu-vertical-demo" background-color="#3D3E49"
                 text-color="rgb(191, 203, 217)" active-text-color="#fff" unique-opened router>
                <el-submenu :index="i+''" v-for="(item,i) in routes" :key="i" v-if="item.children.length > 1">
                    <template slot="title">
                        <i :class="'el-icon-' + item.meta.icon"></i>
                        <span slot="title">{{ item.meta.title }}</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item v-for="(route, key) in item.children" :key="i + '' + key"
                                      :index="item.path + '/' + route.path">{{
                                                                            route.meta.title }}
                        </el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-menu-item v-else :index="item.path">
                    <span slot="title">{{ item.meta.title }}</span>
                </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    computed: {
        routes() {
            return this.$router.options.routes.filter(item => item.children)
        },
        path() {
            return this.$route.path;
        }
    },
    watch: {},
    created() {
    
    },
    mounted() {
    
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>
<style>
    .el-menu-item.is-active {
        background-color: #2C2D36 !important;
    }
</style>
<style lang="scss" scoped>
    .mon-aside {
        float: left;
        height: 100%;
        width: 180px;
        overflow: auto;
        
        .el-menu {
            min-height: 100%;
        }
    }
</style>
