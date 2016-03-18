template-repeater
=================

This is a template repeater elelment modified from Leon Revill's original web component [rebel-repeater](https://github.com/RevillWeb/rebel-repeater) & inspired by ngRepeat from the AngularJS framework.

Usage
-----

There are two ways you can make use of this web component. You can use it as part of a bigger ES2015 project as ES2015 source, or you can include a compiled ES5 version.

Browser Support
---------------

Requirements
------------

Development
-----------

API
===

Attributes
----------

| Attribute Name | Required | Type | Example | Comments |
| -------------- | -------- | ---- | ------- | -------- |
| element        |   No   | String | ul, div, ol, etc. | Used to tell the component what element to wrap the contents in |
| shadow         |   No   | boolean | true, false | Used to tell the component if it should wrap the repeated content within the Shadow DOM |
| content        |   **Yes**  | Array | [{"firstName": "Bilbo", "lastName": "Baggins"}, {"firstName": "Frodo", "lastName": "Baggins"}] | Used to tell the component if it should wrap the repeated content within the Shadow DOM |

Template
--------

You create the template which is to be repeated within the `rbl-repeater` element itself and make use of the ES2015 template string variables `${}` to pull out object properties. For example if you had populated the content attribute with an array of objects which look like this:

```
{
    "title": "Game of Thrones",
    "genre": "Adventure, Drama, Fantasy"
}
```

You could write the following template to pull out the show title:

`<p>${title}</p>`

Example
=======

You can find a working example by running `index.html` in a modern web browser or take a look at the code below:

````html
<rbl-repeater element="ul" shadow="true" content='[{"firstName": "Bilbo", "lastName": "Baggins"}, {"firstName": "Frodo", "lastName": "Baggins"}, {"firstName": "Samwise", "lastName": "Gamgee"}]'>
    <li>${firstName} ${lastName}</li>
</rbl-repeater>
````

Contributing
============

To contribute to this project all you will need is jspm installed and a love of web components. Please submit any suggestions or changes via a pull request.