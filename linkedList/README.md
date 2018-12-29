# Linked Lists
12/21/18 -- Heather Cherewaty 

12/27/18 -- Code Challenge 6 with Jacob Anderson

12/28/18 -- Code Challenge 7 with Lena Eivy

## Challenge
### 12/21/18 Per canvas instructions:  

* Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.

* Within your LinkedList class, include a head property. Upon instantiation, an empty Linked List should be created.

* This object should be aware of a default empty value assigned to head when the linked list is instantiated.

* Define a method called insert which takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.
Define a method called includes which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.

* Define a method called print which takes in no arguments and outputs all of the current Node values in the Linked List.

* At no time should an exception or stack trace be shown to the end user. Catch and handle any such exceptions and return a printed value or operation which cleanly represents the state and either stops execution cleanly, or provides the user with clear direction and output.

* Be sure to follow your language/frameworks standard naming conventions (e.g. C# uses PascalCasing for all method and class names).

### 12/27/18 Per canvas instructions:  
* Write the following methods for the Linked List class:

* .append(value) which adds a new node with the given value to the end of the list

* .insertBefore(value, newVal) which add a new node with the given newValue immediately before the first value node

* .insertAfter(value, newVal) which add a new node with the given newValue immediately after the first value node

### 12/28/18 Per canvas instructions: 

* Write a method for the Linked List class which takes a number, k, as a parameter. Return the node’s value that is k from the end of the linked list. You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

## Approach & Efficiency

* Created Node class with constructor.
* Created LinkedList class with construction and insert, includes, appends, insertBefore, insertAfter, and print methods.
* Added new nodes.
* Made additional test assertions to test the LinkedList class and it's methods.
* White board.

## Solution
![LL kth From End Image](ll_kth_from_end.jpeg)