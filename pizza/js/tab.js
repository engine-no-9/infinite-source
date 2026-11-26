const tab = document.querySelector('.tabs');
const tabButtons = tab.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tab.querySelectorAll('[role="tabpanel"]'));


function tabClickHandler(e) {
	//Hide All Tabpane
	tabPanels.forEach(panel => {
		panel.hidden = 'true';
	});


	//Deselect Tab Button
	tabButtons.forEach(button => {
		button.setAttribute('aria-selected', 'false');
	});

	
	//Mark New Tab
	e.currentTarget.setAttribute('aria-selected', 'true');
	


	//Show New Tab
	const { id } = e.currentTarget;

	// const { id } uses object destructuring to extract a specific property named id from an object

	// an <li> tag is treated as an object in JavaScript. // HTMLLIElement

	// e.currentTarget; is  ->  <li role="tab" aria-selected="true" id="js"><section class="tab-link active">PIZZA PIE</section></li> -> which is an object
	// {id} -> the standard attributes defined on an <li> HTML tag are reflected as properties on the HTMLLIElement DOM object... so,  -id-  is a property of the li object



	const currentTab = tabPanels.find(
		panel => panel.getAttribute('aria-labelledby') === id
	);

	// This loops through the array of panel elements. It stops and returns the first element as soon as the condition inside evaluates to true.



	

	currentTab.hidden = false;
}



tabButtons.forEach(button => {
	button.addEventListener('click', tabClickHandler);
})