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

| Attribute Name | Required   | Type  | Example                                                                                        | Comments                                                                                |
| -------------- | ---------- | ----- | -----------------------------------------------------------------------------------------------| --------------------------------------------------------------------------------------- |
| content        |   **Yes**  | Array | [{"firstName": "Bilbo", "lastName": "Baggins"}, {"firstName": "Frodo", "lastName": "Baggins"}] | Used to tell the component if it should wrap the repeated content within the Shadow DOM |

Template
--------

Example
=======

You can find a working example by running `index.html` in a modern web browser or take a look at the code below:

````html
<template-repeater content='[{"firstName": "Bilbo", "lastName": "Baggins"}, {"firstName": "Frodo", "lastName": "Baggins"}, {"firstName": "Samwise", "lastName": "Gamgee"}]'>
    <li>${firstName} ${lastName}</li>
</template-repeater>
````

Contributing
============

To contribute to this project all you will need is npm installed and a love of web components. Please submit any suggestions or changes via a pull request.