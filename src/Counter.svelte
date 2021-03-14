<script>
  let count = 0;

  const hadnleClick = () => {
    count++;
  }

  $: doubled = count * 2;

  $: if (count >= 10) {
    alert(`count is dangerously high!`);
    count = 9;
  }
</script>

<!-- <style>
  .box {
    display: flex;
  }

  .box > span {
    flex: 1 0 auto;
  }
</style> -->

<div class="box">
  <span>Once {count}</span>
  <span>Twice {doubled}</span>

  <button on:click={hadnleClick}>
    Click me
  </button>
</div>
