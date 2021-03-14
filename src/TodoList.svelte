<script>
  let todos = [];

  const addTodo = (todo) => {
    todos = [...todos, todo];
  }
</script>

<button on:click={() => addTodo("buy apple")}>add "buy apple"</button>
<button on:click={() => addTodo("buy banana")}>add "buy banana"</button>

<ul>
  {#each todos as todo (todo)}
    <li>{todo}</li>
  {/each}
</ul>
