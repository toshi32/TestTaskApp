<template>
  <div>
    <div>
      <input v-model="newTask" placeholder="to doを追加して下さい">
      <div v-on:click="createTask">
        <i>追加</i>
      </div>
    </div>
    <ul>
      <li v-for="(task, index) in tasks">
        <input type="checkbox" v-model="task.is_done" v-on:click="update(task.id, index)">
        <span v-bind:class="{done: task.is_done}">{{ task.name }}</span>
        <button v-on:click="deleteTask(task.id, index)">削除</button>
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data: function () {
      return {
        tasks: [],
        newTask: ''
      }
    },
    mounted: function () {
      this.fetchTasks();
    },
    methods: {
      fetchTasks: function () {
        axios.get('/api/tasks').then((response) => {
          for(let i = 0; i < response.data.tasks.length; i++) {
            this.tasks.push(response.data.tasks[i]);
          }
        }, (error) => {
          console.log(error, response);
        });
      },
      createTask: function () {
        if(this.newTask == '') return;

        axios.post('/api/tasks', { task: { name: this.newTask } }).then((response) => {
          this.tasks.unshift(response.data);
          this.newTask = '';
        }, (error) => {
          console.log(error, response);
        });
      },
      deleteTask: function (task_id, index) {
        axios.delete('/api/tasks/' + task_id).then((response) => {
          this.tasks.splice(index, 1);
        }, (error) => {
          console.log(error, response);
        });
      },
      update: function (task_id) {
        axios.put('/api/tasks/' + task_id).then((response) => {
        }, (error) => {
          console.log(error);
        });
      }
    }
  }
</script>