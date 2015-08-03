<h1>{{ pagename|title }}</h1>
<ul>
	{% for author in authors %}
		{% include "./includes/item.tpl" %}
	{% endfor %}

	{% include "./includes/item.tpl" { "author": "Daniel" } %}
</ul>