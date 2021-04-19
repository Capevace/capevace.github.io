---
title: Mixes
subtitle: VIBES ON DEMAND

hideImage: true
layout: titled

mixes:
- {
title: WG13 LOCKDOWN LOUNGE,
tag: '#house #disco #funk #hiphop',
coverUrl: /assets/images/mixes/wg13-lockdown-lounge-cover.jpg,
length: '03:19:39',
videoLink: https://drive.google.com/file/d/1McziAWDtohV7kvvkl9knMCciuNGfEgh-/view?usp=sharing,
audioLink: https://www.mixcloud.com/GiraffeAffe/wg13s-lockdown-lounge/,
embedSrc: https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&light=1&feed=%2FGiraffeAffe%2Fwg13s-lockdown-lounge%2F,
primary: indigo, 
secondary: pink
}
- {
title: DISCOHOUSE@HOME,
tag: feat. KingSizeSlim,
coverUrl: /assets/images/mixes/disco-house-at-home-cover.jpg,
length: '00:24:02',
videoLink: ,
audioLink: https://soundcloud.com/capevace/disco-home-quarantine-mix-feat,
embedSrc: https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/791389888&color=%236b46c1&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true,
primary: purple, 
secondary: orange
}
- {
title: LATINHOUSE@HOME,
tag: '¿Cómo estás?',
coverUrl: /assets/images/mixes/latin-house-at-home-cover.jpg,
length: '00:30:27',
videoLink: ,
audioLink: https://soundcloud.com/capevace/latinathome-quarantine-mix,
embedSrc: https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/789515197&color=%236b46c1&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true,
primary: teal, 
secondary: yellow
}
- {
title: HOUSE@HOME quarantine mix,
tag: fresh quarantime tracks,
coverUrl: /assets/images/mixes/house-at-home-cover.jpg,
length: '00:30:27',
videoLink: https://youtu.be/c3n75-6riNQ,
audioLink: https://soundcloud.com/capevace/houseathome-quarantine-mix,
embedSrc: https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/788486371&color=%236b46c1&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true,
primary: green, 
secondary: orange
}
---

<div class="mt-20">
	{% for mix in page.mixes %}
	<article class="w-full flex flex-wrap sm:flex-no-wrap px-6 py-6 bg-{{mix.primary}}-700 rounded-xl shadow-lg hover:shadow-xl border-4 border-transparent hover:border-{{mix.secondary}}-500 transition relative group overflow-hidden smooth-transition mb-5">
		<div class="absolute inset-0 bg-cover w-full bg-center" style="background-image: url('{{mix.coverUrl}}'); filter: blur(8px) brightness(60%);"></div>
		<section class="w-full sm:w-48 sm:h-48 rounded-lg overflow-hidden sm:mr-5 border-4 border-{{mix.secondary}}-500 mb-5 sm:mb-0">
			<img src="{{mix.coverUrl}}">
		</section>
		<section class="flex flex-col justify-between flex-1 cursor-default">
			<div class="mb-4 sm:mb-1">
				<div class="text-2xl md:text-3xl font-semibold text-{{mix.primary}}-100 ">
					{{mix.title}}
				</div>
				<div class="text-lg sm:text-xl font-mono font-semibold text-{{mix.primary}}-300 mb-1">
					{{mix.tag}}
				</div>
				<div class="flex justify-between text-lg sm:text-xl font-mono  text-{{mix.primary}}-300 ">
					<div class="">
						{{mix.length}}
					</div>
					{% if mix.videoLink and mix.embedSrc %}
						<a href="#" class="block no-link-border hover:text-{{mix.primary}}-200 font-semibold smooth-transition flex justify-center items-center">
							<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="56.401px" height="56.4px" viewBox="0 0 56.401 56.4" xml:space="preserve" class="fill-current w-5 h-5 mr-3">
								<g>
									<g>
										<polygon points="33.721,6.26 26.215,6.26 22.83,12.858 29.901,12.858 		"/>
										<polygon points="46.521,6.26 39.015,6.26 35.63,12.858 42.701,12.858 		"/>
										<polygon points="56.25,6.26 51.816,6.26 48.43,12.858 56.25,12.858 		"/>
										<polygon points="20.92,6.358 0,6.358 0,8.214 0,12.858 17.101,12.858 		"/>
										<path d="M0.15,45.974c0,2.302,1.866,4.167,4.167,4.167h47.917c2.301,0,4.167-1.865,4.167-4.167V17.154H0.15V45.974z
										M21.208,29.655c0-2.301,1.669-3.332,3.727-2.303l8.864,4.432c2.058,1.028,2.058,2.697,0,3.727l-8.864,4.432
										c-2.058,1.028-3.727-0.003-3.727-2.303V29.655z"/>
									</g>
								</g>
							</svg>
							Play Video
						</a>
					{% endif %}
				</div>
			</div>
			{% if mix.embedSrc %}
				<section class="rounded overflow-hidden shadow">
					<iframe width="100%" height="65" src="{{mix.embedSrc}}" frameborder="0" loading="lazy"></iframe>
				</section>
			{% else %}
				<section class="flex justify-between items-center">
					{% if mix.videoLink%}
						<a href="{{mix.videoLink}}" class="block text-xl font-mono no-link-border text-{{mix.primary}}-300 hover:text-{{mix.primary}}-200 font-semibold smooth-transition flex justify-center items-center">
							<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 56.401 56.4" xml:space="preserve" class="fill-current w-5 h-5 mr-3">
								<g>
									<g>
										<polygon points="33.721,6.26 26.215,6.26 22.83,12.858 29.901,12.858 		"/>
										<polygon points="46.521,6.26 39.015,6.26 35.63,12.858 42.701,12.858 		"/>
										<polygon points="56.25,6.26 51.816,6.26 48.43,12.858 56.25,12.858 		"/>
										<polygon points="20.92,6.358 0,6.358 0,8.214 0,12.858 17.101,12.858 		"/>
										<path d="M0.15,45.974c0,2.302,1.866,4.167,4.167,4.167h47.917c2.301,0,4.167-1.865,4.167-4.167V17.154H0.15V45.974z
										M21.208,29.655c0-2.301,1.669-3.332,3.727-2.303l8.864,4.432c2.058,1.028,2.058,2.697,0,3.727l-8.864,4.432
										c-2.058,1.028-3.727-0.003-3.727-2.303V29.655z"/>
									</g>
								</g>
							</svg>
							Play Video
						</a>
					{% endif %}
					{% if mix.audioLink%}
						<a href="{{mix.audioLink}}" class="block text-xl font-mono no-link-border text-{{mix.primary}}-300 hover:text-{{mix.primary}}-200 font-semibold smooth-transition flex justify-center items-center">
							<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 53.523 53.523" class="fill-current w-5 h-5 mr-3" xml:space="preserve">
								<g>
									<g>
										<path d="M48.315,8.157H5.208C2.331,8.157,0,10.489,0,13.365v26.792c0,2.877,2.331,5.209,5.208,5.209h43.107
											c2.877,0,5.208-2.332,5.208-5.209V13.365C53.523,10.489,51.192,8.157,48.315,8.157z M20.655,23.899h10.591v6.582H20.655V23.899z
											M4.818,13.118c-0.738,0-1.336-0.598-1.336-1.335c0-0.737,0.598-1.335,1.336-1.335c0.737,0,1.335,0.598,1.335,1.335
											C6.153,12.521,5.555,13.118,4.818,13.118z M6.057,26.761c0-3.32,2.692-6.011,6.012-6.011s6.011,2.69,6.011,6.011
											c0,3.32-2.691,6.012-6.011,6.012C8.75,32.772,6.057,30.081,6.057,26.761z M42.694,39.356H9.778v-1.719h32.917V39.356z
											M40.12,32.772c-3.321,0-6.012-2.691-6.012-6.012c0-3.32,2.69-6.011,6.012-6.011c3.319,0,6.009,2.69,6.009,6.011
											C46.129,30.081,43.438,32.772,40.12,32.772z M48.706,13.118c-0.737,0-1.335-0.598-1.335-1.335c0-0.737,0.598-1.335,1.335-1.335
											s1.336,0.598,1.336,1.335C50.042,12.521,49.443,13.118,48.706,13.118z"/>
									</g>
								</g>
							</svg>

							Play Audio
						</a>
					{% endif %}
				</section>
			{% endif %}
		</section>
	</article>
	{% endfor %}
</div>
