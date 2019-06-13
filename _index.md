---
layout: base
---
<div class="header-background"></div>

<div class="flex flex-col justify-between min-h-screen">
	{% include nav.html %}

	<section class="container z-10 text-center">
		<img class="rounded-full border-8 shadow-lg w-1/4 border-white m-auto" src="{{ "/public/images/profile.jpg" | absolute_url }}">

		<p class="text-5xl font-bold z-10 mt-10">Lukas Mateffy</p>
		<p class="text-3xl font-bold z-10 text-gray-600">Web Developer</p>

		<!-- <section class="mt-10">
			<button class="rounded-lg bg-blue-500 px-8 py-2 text-white shadow-blue mr-5">Projects</button>
			<button class="rounded-lg bg-blue-500 px-8 py-2 text-white shadow-blue">Blog</button>
		</section> -->
	</section>

	{% include footer.html %}
</div>