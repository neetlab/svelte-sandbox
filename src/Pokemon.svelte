<script>
  export let pokemon;
  let url;
  let promise;

  $: {
    url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    promise = fetch(url).then(r => r.json())
  }
</script>

<div>
    {#await promise}
      <span>loading...</span>
    {:then data} 
      <pre>
        <code>
          {JSON.stringify(data, null, 2)} 
        </code>
      </pre>
    {:catch e}
      <pre>
        <code>
          {e} 
        </code>
      </pre>
    {/await}
</div>
