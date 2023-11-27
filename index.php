<?php
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To Do List</title>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <link rel="stylesheet" href="./css/app.css">
</head>
<body>
    <div id="app">
        <main>
            <section>
                <div class="container">
                    <h1 class="title-todo">{{ message }}</h1>
                </div>
                <div class="container">
                    <input v-model="newTodo" @keyup.enter="storeTodo" type="text" placeholder=" nuova todo" >
                </div>
            </section>

            <section>
                <div class="container">
                    <ul>
                        <li  class=" todo" :class="{
                                done: todo.done
                            }"
                            v-for="(todo ,i) in todos" :key="i">
                            <span class="todo-text">{{ todo.text }}</span>
                            <button class="todo-button">elimina</button>
                        </li>
                    </ul>
                 </div>
            </section>
        </main>
    </div>

    <script src="./js/app.js"></script>
</body>
</html>