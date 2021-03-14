<script>
  import Counter from './Counter.svelte';
  import TodoList from './TodoList.svelte';
  import Poly from './Poly.svelte';
  import Pokemon from './Pokemon.svelte';

  let name = '';
</script>

<input bind:value={name} placeholder="Your your pokemon name" />
<Pokemon pokemon={name} />
