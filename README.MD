#  Password Validation Check

[![https://i.imgur.com/JODljaM.gif](https://i.imgur.com/JODljaM.gif "https://i.imgur.com/JODljaM.gif")](https://i.imgur.com/JODljaM.gif "https://i.imgur.com/JODljaM.gif")

### 📄 Content 
This project develops a password validation check with HTML, CSS and JAVASCRIPT VAINILLA.
By using this password validation checker, you can easily enter your desired password and check if it meets the necessary requirements for a strong password or not.

In this project we put the following concepts into practice:
- [EventTarget: addEventListener() method](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener "EventTarget: addEventListener() method")
- [Document.querySelectorAll()](https://developer.mozilla.org/es/docs/Web/API/Document/querySelectorAll "Document.querySelectorAll()")
- [Arrow function expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions "Arrow function expressions")
- [HTMLStyleElement](https://developer.mozilla.org/es/docs/Web/API/HTMLStyleElement "HTMLStyleElement")
- [Element: classList property](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList "Element: classList property")
- [Array](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")
- [Event: target property](https://developer.mozilla.org/en-US/docs/Web/API/Event/target "Event: target property")

we create an array of password requeriments with corresponding regular expressions and index on the requirement list item:
```javascript
const requirements = [
    {regex: /.{8,}/, index: 0}, // minimum characters
    {regex: /[0-9]/, index: 1}, // at least one number
    {regex: /[a-z]/, index: 2}, // at least one lowercase letter
    {regex: /[^A-Za-z0-9]/, index: 3}, //at least one special symbol
    {regex: /[A-Z]/, index: 4}, //at least one uppercase letter
]
```



<h3 align="left"> Languages and Tools</h3>
<p align="left"> <a href="https://www.w3.org/html/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> </p>

### ✒️  Autor
- [Tristan Venegas](https://github.com/TG-VA "Tristan Venegas") - Front end Developer.

# Validador de Contraseñas

[![https://i.imgur.com/JODljaM.gif](https://i.imgur.com/JODljaM.gif "https://i.imgur.com/JODljaM.gif")](https://i.imgur.com/JODljaM.gif "https://i.imgur.com/JODljaM.gif")

###  📄 Introducción
En este proyecto se desarrolla un validador de contraseñas con HTML, CSS y JAVASCRIPT VAINILLA. Este verificador sirve para dar validación de una contraseña, que la contraseña deseada pueda ingresarse facilmente y poder verificar si esta cumple con los requisitos necesarios para ser un contraseña segura o no.

En este projecto ponemos en práctica los siguientes conceptos:
- [EventTarget: addEventListener() method](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener "EventTarget: addEventListener() method")
- [Document.querySelectorAll()](https://developer.mozilla.org/es/docs/Web/API/Document/querySelectorAll "Document.querySelectorAll()")
- [Arrow function expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions "Arrow function expressions")
- [HTMLStyleElement](https://developer.mozilla.org/es/docs/Web/API/HTMLStyleElement "HTMLStyleElement")
- [Element: classList property](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList "Element: classList property")
- [Array](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")
- [Event: target property](https://developer.mozilla.org/en-US/docs/Web/API/Event/target "Event: target property")

Manejamos los requerimientos de la contraseña con un array y agregamos un index en este mismo:
```javascript
const requirements = [
    {regex: /.{8,}/, index: 0}, // minimum characters
    {regex: /[0-9]/, index: 1}, // at least one number
    {regex: /[a-z]/, index: 2}, // at least one lowercase letter
    {regex: /[^A-Za-z0-9]/, index: 3}, //at least one special symbol
    {regex: /[A-Z]/, index: 4}, //at least one uppercase letter
]
```

<h3 align="left"> Tecnologías y herramientas</h3>
<p align="left"> <a href="https://www.w3.org/html/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> </p>

### ✒️  Autor
- [Tristan Venegas](https://github.com/TG-VA "Tristan Venegas") - Front end Developer.