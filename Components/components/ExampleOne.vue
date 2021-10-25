<template>
    <div class="wrapper">
        <a href="#"> {{message}} </a>
    </div>
</template>
<script>
module.exports = {
    data: () => {
        return {
            message: 'Link'
        }
    }
}
</script>
<style scoped>
    .wrapper {
        background: aqua;
        padding: 15px;
    }
    .wrapper > a {
        font-size: 100px;
    }
</style>