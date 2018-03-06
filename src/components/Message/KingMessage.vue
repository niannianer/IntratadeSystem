<template>
    <div class="msg-box">
        <div class="msg-wrapper" @click.stop="wrapClose"></div>
        <div class="modal-body" >
            <div class="msg-header" v-if="!options.hideTitle">
                {{options.title||'提示'}}
            </div>
            <div class="msg-body" v-html="options.msg"></div>
            <div class="msg-btns" flex="box:mean">
                <button flex-box="1" class="close" @click="cancelAction" v-if="options.showCancelButton" :class="[{'disabled':timer},options.closeClass]">
                    {{options.closeText||'取消'}}
                </button>
                <button class="btn-confirm" @click="okAction" flex-box="1" v-if="options.showConfirmButton" :class="[{'disabled':timer},options.confirmClass]">
                    {{options.confirmText||'确认'}}
                    <span v-if="timer">（{{timer}}）</span>
                </button>
            </div>
        </div>
    </div>

</template>
<script>
    /**
     * showConfirmButton:是否显示确认按钮，默认true，显示
     * showCancelButton:是否显示取消按钮，默认false，隐藏
     *  hideTitle:是否隐藏标题，默认false，不隐藏
     *  timer:确认按钮倒计时时间，默认空，无倒计时
     * */
    import './message.less';
    export default {
        name: 'message',
        props: ['options'],
        data(){
            return{
                timer: 3,
                close: false
            }
        },
        created(){
          this.timer = this.options.countDown;
          let showConfirmButton = this.options.showConfirmButton;
          this.options.showConfirmButton = showConfirmButton == undefined ? true : showConfirmButton;
          if(this.timer){
              this.countDownFn();
          }
        },
        methods: {
            okAction(result) {
                if(this.timer){
                    return;
                }
                this.closeFn();
                this.$emit('confirmBack', result)
            },
            cancelAction(){
                this.closeFn();
                this.$emit('cancelBack');
            },
            wrapClose(){
                this.closeFn();
                this.$emit('cancelBack','close');
            },
            closeFn(){
                this.close = true;
            },
            countDownFn(){
                let timeout;
                timeout = setInterval(()=>{
                    if(this.timer > 0){
                        this.timer--;
                        if(this.timer == 0){
                            clearTimeout(timeout);
                        }
                    }
                },1000);
            }
        }

    }
</script>
