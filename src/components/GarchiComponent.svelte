<script lang="ts">
	export let name: string = '';
</script>

<!-- Dynamically import the Svelte component that the Garchi section name -->
{#await import(`./garchi/${ name }.svelte`) then component}
  <svelte:component this={ component.default } {...$$restProps}/>
<!-- If the component can't be found... -->
{:catch error}
  <p style="color:red">Garchi section "{ name }" does not have a matching Svelte component</p>
{/await}