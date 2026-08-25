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


5. By using text value of an element

//*[text()='Text value of an element']

//*[text() = 'Test login'] - //h2[text()='Test login']



6. //tagname[contains(text(), 'some part of text value')]

//li[contains(text(),'positive and negative LogIn')]

// input[contains(@id , 'user')]



// To write the locator using css selector or xpath - page.locator("")

page.locator("#username")
page.locator("//*[@id='username']")


// 3. Playwright special methods for locators


// GetBy locators in Playwright


These are the recommebded built-in locators


page.getByRole()
page.getByText()
page.getByLabel()
page.getByAltText()
page.getByPlaceholder()
page.getByTitle()
page.getByTestId()


1. page.getByRole("rolename", {name:'textvalue of element})

// heading - <h1-h6>
// button - <button> or class="btn"
// textbox - <input> or <textarea>
// radio - type="radio"
// checkbox - type = "checkbox"
// link - <a> </a>


<h2>ad</h2>
<h2>ads</h2>

2. page.getByText('ad', {exact:true}) - To locate by text content

3. page.getByLabel() - To locate a form control by associated label text

  1. When you have "for" as an attribute for an element that have been developed
  using <label> - there we can directly use page.getByLabel("label text")
  2. When you find out "<input>" inside the <label>

  <label class="form-check-label" <input....>>Tuesday</label>
  page.getByLabel("Tuesday")


4. page.getByAltText() - to locate an element, usually image, by its text alternative.
("alt" as an attribute)

page.getByAltText("logo image")

5. page.getByPlaceholder() - to locate an INPUT by "placeholder" as an attribute

page.getByPlaceholder("First Name")
page.getByPlaceholder("Enter your full name")


6. page.getByTitle() - to locate an element by using it's "title" attribute

page.getByTilte("HyperText Markup Language")

7. page.getByTestId() - to locate an element based on it's "data-testid" attribute

page.getByTestId('directions')






1. Assignment - https://testautomationpractice.blogspot.com/2018/09/automation-form.html

Write the xpath for Dynamic Web Table:

for System - CPU%

2. Write 20 different locators using css selector, xpath and getBy Locators






npx playwright test 
npx playwright test tests/UIBasics.spec.ts









table
tbody - Total body of the table
tr - Table row
td - Table column (Table definition)
th - Table Header



//tr[td[text()='Chrome']]/td - Identify all the columns of Chrome row

//th[text()='CPU (%)'] - Identify the CPU % column

count(//th[text()='CPU (%)']/preceding-sibling::th)+1 - return the number of preceding-sibling

- 4 - cpu is at 5th



//tr[td[text()='Chrome']]/td[count(//th[text()='CPU (%)']/preceding-sibling::th)+1]

//tr[td[text()='Chrome']]/td[count(//th[text()='CPU (%)']/preceding-sibling::th)+1]

function locator(name, columnName){
  return //tr[td[text()='+name+']]/td[count(//th[text()='+columnName+']/preceding-sibling::th)+1]
}


locator("Chrome", "Disk")


 */

function locator(name:string, columnName:string){
  return "//tr[td[text()='"+name+"']]/td[count(//th[text()='"+columnName+"']/preceding-sibling::th)+1]"
}


console.log(locator("Chrome", "CPU (%)"))