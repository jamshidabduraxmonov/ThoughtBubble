The Problem:
	I wanted an app which can display the fleeting thoughts
as flying visual and clean clouds which can help users to keep
their ideas clear and coordinated.

Key Technical Challenges:
1) State Management and DOM Synchronization
     Ensuring the UI always accurately represents the data, especially
     when items are added or deleted.
	
	Solution: I implemented a state-driven UI patttern to maintain
a 'Single Source of Truth'. Instead of manually manipulating DOM elements
during deletion, I focused on updating the underlying JavaScript array(the state).
Then I used a centralized display() function to perform a re-render of the container.
This approach ensures that the data and the view are always in sync
and prevents the 'ghost element' bugs common in manual DOM manipulation.

2) Event Delegation for Dyanmic Elements
	The Challange: Attaching click listeners to cloud bubbles that doesn't exist yet
	when page first loads.
	
	The Solution: To optimize performance and handle dynamically generated
elements, I utilized Event Delegation. Rather than attaching individual
event listeners to every new 'cloud' item - which would be memory-intensive - 
I attached a single listener to the parent container. By analyzing the event.target, I was able to identify the which specific child
was clicked. This makes the application more scalable and simplifies the lifecycle management of the DOM elements.


Future Vision:
1. UX and Interaction
	a) Allow users to select a "mood" for their bubble(eg. Red for Urgent, Blue for calm)
	b) Draggable Interface - Let users move clouds around the 'sky'!
	d) Dark Mode Support - Let users to choose Dark/Light themed UI 
