<template>
    <li class="oa-dropdown-item" @click.stop="dropdownClick">
        <span>
            <slot></slot>
        </span>
    </li>
</template>

<script>
    export default{
        data() {
            return {
            }
        },
        methods: {
            dropdownClick() {
                this.$emit('dropdownClick');
            }
        }
    }
</script>

<style lang="scss" scoped>
    .oa-dropdown-item{
        list-style: none;
        line-height: 36px;
        padding: 0 20px;
        margin: 0;
        font-size: 14px;
        color: #606266;
        cursor: pointer;
        outline: none;
        box-sizing: border-box;
    }

    .oa-dropdown-item:hover{
        border-radius: 4px;
        background-color: #e9faf9;
        color: #52d5d2;
    }
</style>