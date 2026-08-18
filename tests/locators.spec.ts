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

parentLocator childLocator

Ex: #login h2 - by placing a single space between parent and child


first() - 
last()
nth(index) - 0 based index

page.locator("#login h2").first() - to get the first matching element
page.locator("#login h2").last() - to get the last matching element
page.locator("#login h2").nth(1) - to get the 2nd matching element



2. XPATH

Abosulte xpath - / - /html/body/div/div/section/section/h2
Relative xpath - // - //h2


Syntax:

1. //tagname[@attribute = 'value']   - //input[@id='username']
  //*[@attribute = 'value'] - //*[@id='username']


2. (//*[@attribute = 'value'])[1] - (//input)[2] - Index starts with 1 in xpath


3. // Parent to child - by using /(immediate child) or //(any childern - can be descandant)

Parent to immediate child - //div[@id='userName-wrapper']/div[2]/input
Parent to any children - (//div[@id='userName-wrapper']//input)[1]


4. Move from one sibling to another sibling

<label for="username">Username</label> - preceding-sibling to input tag element
<input type="text" name="username" id="username"> - follwing-sibling to label tag element

//tagname[@attribute='value']/following-sibling::input[@id='username']
//tagname[@attribute='value']/preceding-sibling::label


//label[@for='password']/following-sibling::input
//input[@id='username']/preceding-sibling::label






 */