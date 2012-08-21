var minHeap = require("../lib/minHeap.js"); 

describe('When adding ten elements to the min heap', function () {
	var list;

	beforeEach(function() {		
		list = new minHeap();
		list.add(20);
		list.add(10);
		list.add(100);
		list.add(30);
		list.add(-10);
		list.add(90);
		list.add(70);
		list.add(40);
		list.add(50);
		list.add(60); 
	});

	afterEach(function() {
		list = null;
	});

	it('the minHeap length should by 10', function () { 
		expect(list.array.length).toBe(10);
	});

	it('the 1st element of the minHeap should be the smallest value of the ten.', function () {   
		expect(list.array[0]).toBe(-10);
	});

	it('and you remove the head, it should be the smallest element.', function () {   
		expect(list.removeHead()).toBe(-10);
	});    

	it('and you remove the head twice, you should get the two smallest elements.', function () {   
		expect(list.removeHead()).toBe(-10);
		console.log(list.array);
		expect(list.removeHead()).toBe(10);
	});  

	//todo: add check to actually walk tree and check all relationships
});