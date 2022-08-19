<template>
    <div>
       <input type="checkbox" :id="id" :checked="isDone" />
        <label :for="id">{{ label }}</label>
    </div>
</template>

<script>
import  uniqueId from 'lodash.uniqueid';
export default {

    // passing props
    props: {
        label: { required: true, type: String },
        done: { default: false, type: Boolean }
    },
    // binding the state
    data() {
        return {
            isDone: this.done,
            id:uniqueId('todo-')
        }
    }
}
console.log(uniqueId('todo-'));
console.log(uniqueId('todo-'));
</script>