<template>
    <h3 class="vchat-apheader" :style="{backgroundColor: bgColor}" style="text-align:center;font-family:STHeiti ;font-weight:600;font-size:16px ">
        <a v-if="back">
            <v-icon name="fanhui" cursor="pointer" color="blue" @clickIcon="goBack"></v-icon>
        </a>
        <span v-if="title">{{title}}</span>
        <div class="icon-slot">
            <slot></slot>
        </div>
    </h3>
</template>

<script>
    export default{
        props: {
            back: {
                default: ''
            },
            title: {
                type: String,
                default: ''
            },
            bgColor: {
                type: String,
                default: '#f8f8f8'
            }
        },
        data() {
            return {};
        },
        methods: {
            goBack() {
                console.log(111111111111);
                this.$store.dispatch('setTransitionName');
                if (this.back === '-1') {
                    this.$router.go(-1);
                } else {
                    this.$router.push(this.back);
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    h3.vchat-apheader{
        width: 100%;
        font-size: 14px;
        color: black;
        font-weight: 400;
        display: flex;
        justify-content: center;
        padding: 10px 15px;
        box-sizing: border-box;
        position: relative;
        height: 40px;
        span{
            color: black;
        }
        >a:first-child{
            display: block;
            position: absolute;
            left:5px;
            top:10px;
            i{
                display: inline-block;
                width:24px;
                height: 24px;
                cursor: pointer;
                color: #323232;
            }
        }
        .icon-slot{
            position: absolute;
            right: 15px;
            top:10px;
            a{
                color: black;
                font-size: 14px;
            }
        }
    }
</style>