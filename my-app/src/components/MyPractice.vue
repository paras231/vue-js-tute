<template>
    <div>
        <h1>HELLO WORLD THIS IS PRACTICE</h1>
        <div>
            <p v-for="item in myData" :key="item.id">{{ item.name }}</p>
        </div>
    </div>
</template>

<script >

export default {
    data() {
        return {
            myData: [
                {
                    id: 1,
                    name: 'Vue',
                    price: 100
                },
                {
                    id: 2,
                    name: 'Angular',
                    price: 200
                },
                {
                    id: 3,
                    name: 'React',
                    price: 300
                }
            ]
        }
    }
}

</script >


// basic styling in vue js
<style scoped>
h1 {
    color: red;
}
</style>