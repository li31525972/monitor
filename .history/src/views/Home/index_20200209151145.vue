<template>
    <div>
        <!-- 首页 -->
        <PanelGroup :form="form" />
        <div>
            <Table />
        </div>
    </div>
</template>

<script>
import PanelGroup from './components/PanelGroup'
import Table from '../../components/Table'
export default {
    components:{
        PanelGroup,
        Table
    },
    data() {
        return {
            form:{
                Numhome:5,
                Check:10,
                User:15,
                average:100,
                totalData:500,
                day:2,
                hour:10,
                province:20,
                city:19,
                county:200,
            }
        }
    },
    computed: {
    
    },
    watch: {
    
    },
    created() {
    
    },
    mounted() {
    
    },
    methods: {
    
    }
}
</script>

<style lang="scss" scoped>

</style>
