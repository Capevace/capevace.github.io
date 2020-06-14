---
layout: default
---

<div class="container mx-auto mt-10 mb-16 " id="projects">
	<h2 class="text-3xl font-semibold mb-24 text-gray-900 text-center fade-in">Projects</h2>
	<section class="flex flex-wrap justify-between mb-16 fade-in">
		{% assign projects2 = site.projects | sort: 'featured' %}
		{% for project in projects2 %}
			{% if project.featured == nil or project.featured >= 10 %}
				{% continue %}
			{% else %}
				{% assign icon = append: '/' | append: project.slug | append: '/icon.png' | relative_url %}
				<a href="{{ project.url }}" class="mb-10 text-black w-full sm:w-1/4 no-link-border ">
					<img class="filter-shadow hover-scale mb-3 h-32 m-auto" src="{{icon}}">
					<section class="text-center sm:px-0  px-20">
						<h3 class="font-bold mb-1">{{project.title}}</h3>
						<h4 class="font-semibold text-sm text-gray-600 ">{{project.subtitle}}</h4>
					</section>
				</a>
		  	{% endif %}
		{% endfor %}
	</section>

    <h2 class="text-xl font-medium mt-10 mb-12 text-gray-700 text-center z-10 fade-in delay-300">Other Apps</h2>
    <section class="flex flex-wrap justify-center mb-20 px-20 fade-in delay-500">
    	{% assign projects2 = site.projects | sort: 'featured' %}
    	{% for project in projects2 %}
    		{% if project.featured == nil or project.featured < 10 %}
    			{% continue %}
    		{% else %}
    			{% assign icon = append: '/' | append: project.slug | append: '/icon.png' | relative_url %}
    			<!-- <a href="{{ project.url }}" class="mb-10 text-black w-full sm:w-1/3 no-link-border flex mx-5">
    				<img class="filter-shadow hover-scale mb-3 h-20 mr-10" src="{{icon}}">
    				<section class="text-centers ">
    					<h3 class="font-bold mb-1">{{project.title}}</h3>
    					<h4 class="font-medium text-sm text-gray-600 ">{{project.subtitle}}</h4>
    				</section>
    			</a> -->
    			<a href="{{ project.url }}" class="mb-10 text-black w-full sm:w-1/2 no-link-border flex items-center">
    				<img class="filter-shadow hover-scale  h-20 mr-8" src="{{icon}}">
    				<section class="text-left">
    					<h3 class="font-bold">{{project.title}}</h3>
    					<h4 class="font-semibold text-sm text-gray-600 ">{{project.subtitle}}</h4>
    				</section>
    			</a>
    	  	{% endif %}
    	{% endfor %}
    </section>

    <h2 class="text-xl font-medium mt-10 mb-12 text-gray-700 text-center ">Open Source</h2>
    <section class="px-20 flex flex-wrap justify-left mb-20 ">
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

    <h2 class="text-xl font-medium mt-10 mb-12 text-gray-700 text-center ">Websites</h2>
    <section class="px-20  flex flex-wrap justify-between mb-10 ">
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

</div>
