<template>
    <div class="card">
                <div class="card-title">Your Instructor</div>
                <div class="card-circle">VG</div>
                <div class="card-name">
                    <div class="light-font">Victor</div>
                    <div>Gonzalez</div>
                </div>
                <div class="card-company">Coder's Tape</div>
            </div>
</template>
<script>
module.exports = {
    
}
</script>
<style>
    .card {
    background: rgb(4, 84, 104);
    color: #dff1f5;
    padding: 15px;
    border-radius: 0 0 15px 15px;
    width: 200px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
    .card-title {
        text-transform: uppercase;
        font-size: 12px;
        font-weight: bold;
        margin-bottom: 10px;
    }
    .card-circle {
        background: linear-gradient(to right, #da4453, #89216b);
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 75px;
        height: 75px;
        font-size: 24px;
        font-weight: bold;
        border-radius: 100%;
        padding: 5px;
        border: 3px solid #fff;
    }
    .card-name {
        display: flex;
        text-transform: uppercase;
        margin-top: 15px;
    }
    .light-font {
        color: #7dd2d5;
        margin-right: 5px;
    }
    .card-company {
        font-size: 14px;
        font-style: italic'
    }
</style>