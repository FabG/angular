#Angular Tutorial
From Codevolution
https://www.youtube.com/watch?v=mDoHtD1hI3I

####Pre-req
1/ Install Node.js and npm
https://nodejs.org/en/

As of OCt 2018, it installed for me:  
    •    Node.js v8.12.0 to /usr/local/bin/node  
    •    npm v6.4.1 to /usr/local/bin/npm

2/ Install Angular CLI  
`$ sudo npm install -g @angular/cli`  


####To create a new Angular App
1/ Create new Angular project
`$ ng new <projectname>`

This will create a folder


2/ To run the application, do:  
`$ cd <projectname>  
$ ng serve
** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **
`

In a browser, type:  
http://localhost:4200  
and you will see the app being served   


3/ To create a new Component:  
`$ ng g c <component name>
`

This will create the html, css, test (spec) and typescript (ts) files  
Ex:  
`CREATE src/app/test/test.component.css (0 bytes)
CREATE src/app/test/test.component.html (23 bytes)
CREATE src/app/test/test.component.spec.ts (614 bytes)
CREATE src/app/test/test.component.ts (261 bytes)
UPDATE src/app/app.module.ts (388 bytes)`


4/ To create a new Service:  
`$ng g s <service>
`

This will create a new .service.ts file (along with a test file)   
Ex:  
`$ ng g s employee
CREATE src/app/employee.service.spec.ts (343 bytes)
CREATE src/app/employee.service.ts (137 bytes)`
