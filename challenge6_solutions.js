// Task 1 solution beginning


function inner(array) {
	//sort array
	var arraySorted = array.sort(function(a, b){return a - b});
	var breakValues = [0];
	var result = [];

	// Calculate break values

	for (var i = 0; i < arraySorted.length; i++) {
	    if (arraySorted[i] < arraySorted[i + 1]) {
	    	var count = i + 1;
	    	breakValues = breakValues.concat(count);
	    }
	}

	// Fill in result array

	for (var k = 0; k < breakValues.length; k++) {
		//divide array at break values
		result[k] = arraySorted.slice(breakValues[k], breakValues[k + 1]);
		if (result[k].length == 1) {
			//write elements to result array
			result[k] = result[k][0];
		}
	}
	return result
}


function answer(array) {
	var numbers = [];
	var strings = [];
	var result = [];

	//check if array has strings and numbers
	array.map(function organizeArray(element) {
		if (typeof element === "number") {
			//build array with only numbers
			numbers.push(element);
			//run function for numbers
			inner(numbers);
			result[0] = numbers;
		} else {
			//build array with only strings
			strings.push(element);
			//run function for strings
			inner(strings);
			result[1] = strings;
		}
	})
	return result

}

answer([1,'2',4,'591',392,'391',2,'5',10,'2',1,'1',1,'20',20]);

// Task 1 solution end

// Task 2 solution beginning

function answer(array, number) {
	var array1 = array.map(function checkElements(element) {
		//calculate the value so that the addition results in number
			var secondElement = number - element;
			//check if calculated value is in the array
			if (secondElement != element && array.includes(secondElement)) {
				//write the pair of numbers to result array
				var result = [element, secondElement];
			}

			return result
	})
	//this part makes sure that function doesn/t return two the same numbers
	if (array1.includes(undefined)) {
		array1.sort(function(a, b){return a - b});
		array1.pop();		
	}
	//remove pairs of numbers that repeat
	array1 = array1.slice(0, array1.length / 2);

	return array1
}

answer([1,2,3,4,5,6,7,8,9], 10);

// Task 2 solution end

// Task 3 solution beginning

function rgb2hex(array) {
	var result = "";
	array.map(component => {
		//changes rgb to hex component
		var rgb = Number(component).toString(16);
		//adds padding to components with length 1
		rgb = rgb.length == 1 ? "0" + rgb : rgb;
		result += rgb;		
	})
	return '#' + result
}

function hex2rgb(value) {
	//finds red, green and blue components and writes them to array
	var result = [value.slice(0,2), value.slice(2,4), value.slice(4)];
	//changes hex to rgb
	result = result.map(component => parseInt(component, 16))
	return 'RGB ' + result.toString();
}

//function that recognises hex and rgb format
function convertHexRgb(value) {
	if (value.includes(",")) {
		var array = value.split(",");
		return rgb2hex(array);

	} else {
		return hex2rgb(value);

	}
}

convertHexRgb('FF0000');

// Task 3 solution end
