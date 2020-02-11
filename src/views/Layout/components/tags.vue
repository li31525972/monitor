<template>
    <ul class="mon-tags">
        <li
                v-for="item in TAGS"
                :key="item.path"
                @click="handleClickTags(item)"
                :class="{'active': path === item.path }"
        >
            {{ item.name }}
            <i @click.stop="handleRemoveTags(item)" v-if="item.path !== '/home'">X</i>
        </li>
        <li>
            <el-dropdown @command="handleClose">
                <el-button size="mini" type="primary" class="more">
                    更多
                    <i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="a">关闭其它</el-dropdown-item>
                    <el-dropdown-item command="b">关闭全部</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </li>
    </ul>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data() {
        return {}
    },
    computed: {
        ...mapGetters(['TAGS']),
        path() {
            return this.$route.path
        }
    },
    watch: {},
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
            if (this.$route.path === item.path) {
                this.$router.replace(this.TAGS[len - 1].path)
            }
        },
        // 关闭全部
        handleClose(name) {
            console.log(name);
            if (name === 'b') {
                this.$store.commit('REMOVE_ALL')
                this.$router.replace('/home')
            } else if (name === 'a') {
                this.$store.commit('REMOVE_OTHOR', this.path)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "~@/assets/css/var.scss";
    
    .mon-tags {
        height: 30px;
        line-height: 30px;
        background: #fff;
        
        li {
            height: 28px;
            float: left;
            padding: 0 15px;
            cursor: pointer;
            font-size: 14px;
            
            &.active,
            &:hover {
                color: $theme;
                border-bottom: 2px solid $theme;
                
                i {
                    display: inline-block;
                    padding: 0 5px;
                }
            }
            
            i {
                display: none;
                padding: 0 5px;
            }
            
            &:last-child {
                float: right;
                border-bottom: none;
                
                i {
                    display: inline-block;
                }
            }
        }
        
        .more {
            background: #4F70C8;
            border: 1px solid #4F70C8;
        }
    }
</style>
