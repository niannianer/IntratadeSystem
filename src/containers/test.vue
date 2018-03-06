<template>
    <div class="test">
        <button @click.stop="changeLang">切换语言</button>
        <div class="content" flex="box:mean">
            <p class="p" >{{$t('message.title')}}</p>
        </div>
        <button @click.stop="toast">Toast</button>
    </div>
</template>
<script>
    import {Toast} from 'mint-ui';
    import $api from '../tools/api';
    import '../less/test.less';
    export default {
        name: 'login',
        data(){
            return {
                username: ''
            }
        },
        created(){

        },
        computed: {},
        methods: {
            changeLang(){
                this.$i18n.locale = 'zh';
            },
            toast(){
                Toast('这是提示toast')
            }

        }
    }
</script>
