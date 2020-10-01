<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    deactivated(){
        console.log('dectivated')
    }
};
</script>

<style scoped>
</style>