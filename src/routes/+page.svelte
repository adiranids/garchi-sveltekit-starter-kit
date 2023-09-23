<script>
	/** @type {import('./$types').PageData} */
	export let data;

  import GarchiComponent from '../components/GarchiComponent.svelte';
</script>

<!-- Take title and description from the Garchi page, and insert them into the HTML <head> tag for SEO -->
<svelte:head>
  <title>{ data.title }</title>
  <meta name="description" content={ data.description }/>
</svelte:head>

<!-- Iterate through page sections and render them as components -->
{#each data.sections as section}
  <GarchiComponent name={ section.name } { ...section.props }/>
{/each}