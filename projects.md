---
layout: default
title: Projects
---

<div class="container mb-6 mb-10">
	<h2 class="text-2xl font-semibold mb-10">Apps</h2>
	<section class="flex flex-wrap justify-center mb-20">
		{% assign projects2 = site.projects | sort: 'featured' %}
		{% for project in projects2 %}
			{% if project.featured == nil %}
				{% continue %}
			{% else %}
				{% assign icon = append: '/' | append: project.slug | append: '/icon.png' | relative_url %}
				<a href="{{ project.url }}" class="mb-10 text-black w-full sm:w-1/3 no-link-border">
					<img class="filter-shadow hover-scale mb-3 h-32 m-auto" src="{{icon}}">
					<section class="text-center">
						<h3 class="font-bold mb-1">{{project.title}}</h3>
						<h4 class="font-semibold text-sm text-gray-600 ">{{project.subtitle}}</h4>
					</section>
				</a>
		  	{% endif %}
		{% endfor %}
	</section>
	<h2 class="text-2xl font-semibold mb-5">Websites</h2>
	<section class="flex flex-wrap justify-between mb-5">
		{% assign projects = site.projects | sort: 'order' | reverse %}
		{% for project in projects %}
			{% if project.featured or project.type == 'stuff' %}
				{% continue %}
			{% else %}
				{% assign thumbnail = append: '/' | append: project.slug | append: '/thumbnail.png' | relative_url %}
				<a href="{{ project.url }}" class="mb-10 text-black w-full sm:w-30% no-link-border">
					<img class="shadow-lg rounded-lg hover-scale mb-5" src="{{thumbnail}}">
					<section class="">
						<h3 class="text-left font-semibold leading-tight">{{project.title}}</h3>
						<span class="text-left font-semibold text-sm text-gray-600">{{project.project.platform}}</span>
					</section>
				</a>
			{% endif %}
		{% endfor %}
	</section>
	<h2 class="text-2xl font-semibold mb-5">Other things I made</h2>
	<section class="flex flex-wrap justify-left mb-10">
		{% assign projects2 = site.projects | sort: 'featured' %}
		{% for project in projects2 %}
			{% if project.type != 'stuff' %}
				{% continue %}
			{% else %}
				{% if project.link %}
					{% assign url = project.link %}
				{% else %}
					{% assign url = project.url %}
				{% endif %}
				{% assign icon = append: '/' | append: project.slug | append: '/icon.png' | relative_url %}
				<a href="{{ url }}" class="mb-10 text-black w-full sm:w-1/2 no-link-border">
					<!-- <img class="filter-shadow hover-scale mb-3 h-32 m-auto" src="{{icon}}"> -->
					<section class="text-left">
						<h3 class="font-bold">{{project.title}}</h3>
						<h4 class="font-semibold text-sm text-gray-600 ">{{project.subtitle}}</h4>
					</section>
				</a>
		  	{% endif %}
		{% endfor %}
	</section>
</div>