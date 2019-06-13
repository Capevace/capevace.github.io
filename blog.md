---
layout: default
title: Blog
---
<div class="container my-6 mb-10">
	{% assign posts = site.posts | reverse %}
	{% for post in posts %}
	<a href="{{ post.url }}" class="my-6 mb-10">
		<h1 class="text-4xl font-bold mb-2 leading-tight">{{ post.title }}</h1>
		<p class="font-semibold text-gray-600 mb-5">{{ post.date | date_to_long_string }} &centerdot; 5 min read</p>
	</a>
	{% endfor %}
</div>