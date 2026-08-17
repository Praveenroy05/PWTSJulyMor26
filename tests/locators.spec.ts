// Locators - To identify the element on the web page is known as locators

// <input type="text" name="username" id="username">- DOM

// input - tagname
// type, name, id - attributes of an element
// text, username, .... - Values of the attribute

// <label for="username">Username</label> - DOM

// <...>text</>

// <label> - Starting tag
// </label> - closing tag

// label - tagname
// for - attribute
// text - Username


// 1. css selector - #2
// 2. xpath - #3
// 3. Playwright getBy locators - #1


/**

CSS Selector

1. If "id" as an attribute is present we use the below css selector for locators:

Syntax:

# - id attribute

a. tagname#idvalue or b. #idvalue c. [id = 'idvalue']

Example:

<input type="password" name="password" id="password">


a. input#password or b. #password c. [id='password']

Note: "id" attribute will always be unique for every element.


2. if "class" attribute is present we can use the below css selector:

. - class attribute

a. tagname.classname b. .classname c. [class='classname']

<button id="submit" class="btn">Submit</button>

a. button.btn or b.  .btn c. [class='btn']

Note: "class" attribute might not be unique for every element

class =" mr-sm-2 form-control" - .mr-sm-2 or .form-control

input.mr-sm-2.form-control


3. Write css selector by using any attribute : []

Syntax:

[attribute='value'] // [id='username']

tagname[attribute='value'] // input[id='username']

[class='mr-sm-2 form-control']


4. Write css traversing from parent to child:





 */