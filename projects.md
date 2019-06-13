---
layout: default
title: Projects
---

<div class="container my-6 mb-10 flex flex-wrap justify-between">
	{% assign projects = site.projects | sort: 'order' | reverse %}
	{% for project in projects %}
		<a href="{{ project.url }}" class="mb-10 text-black" style="flex-basis: 30%;">
			<img class="shadow-lg rounded-lg hover-scale mb-5" src="{{ append: '/' | append: project.slug | append: '/thumbnail.png' | relative_url }}">
			<section class="">
				<h3 class="text-left font-semibold leading-tight">{{project.title}}</h3>
				<span class="text-left font-semibold text-sm text-gray-600">{{project.project.platform}}</span>
			</section>
		</a>
	{% endfor %}
</div>