item_1.opacity = 0
item_2.opacity = 0
to_list.originY = 0
to_list.scaleY = 0

to_list.states =
	one:
		originY: 0
		scaleY: 0
		options:
			curve: Bezier
			time: .2
			delay: .2
	
	two:
		originY: 0
		scaleY: 1
		options:
			curve: 'spring-dho'
			curveOptions:
				stiffness: 180
				damping: 25
				mass: 1
				velocity: 0
			time: .3
		
item_1.states =
	one:
		opacity: 0
		options:
			time: .2
		
	two:
		opacity: 100
		options:
			time: .5
			delay: .4
			
item_2.states =
	one:
		opacity: 0
		options:
			time: .2
		
	two:
		opacity: 100
		options:
			time: .5
			delay: .5
			
background.states =
	on:
		borderColor: "rgba(71, 188, 255, 0.6)"
		
	off:
		borderColor: "rgb(216, 223, 227)"
		
text.states =
	on:
		color: "rgba(5, 36, 46, 0.8)"
		text: "|"
		options:
			time: 0
		
	off:
		color: "rgba(71, 188, 255, 0.3)"
		text: "Name or Email Address"
		options:
			time: 0

to_field.onTap ->
	item_1.states.switch("two")
	item_2.states.switch("two")
	to_list.states.switch("two")
	background.states.switch("on")
	text.states.switch("on")
	
outside.onTap ->
	item_1.states.switch("one")
	item_2.states.switch("one")
	to_list.states.switch("one")
	background.states.switch("off")
	text.states.switch("off")