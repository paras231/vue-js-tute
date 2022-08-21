<template>
    <div>
        <header>
            <ul>
                <li>HOME</li>
                <li>HOME</li>
                <li>HOME</li>
                <li>HOME</li>
            </ul>
        </header>
    </div>
</template>

<script >
 export default {
    name: 'HeaderComponent',
    components: {
      
    }
 }
</script>

<style  scoped>
header {
    background-color: #f5f5f5;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
}

ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
}

li {
    width: 100px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    color: #000;
    border-bottom: 1px solid #000;
}
</style>