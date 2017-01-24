# Angular 2 Master Class

This is the Angular 2 Master Class exercise repository. Here's where you'll build your Angular application throughout this training.

Please make sure to follow our [Preparation Guide](http://thoughtram.io/prepare-for-your-training.html) to set up your machine **before** you come to the class.

If not done already, clone this repository using:

```
$ git clone https://github.com/thoughtram/angular2-master-class-starter.git
```

Done? Great, now install the dependencies (this might take a little while):

```
$ cd angular2-master-class-starter
$ npm install
```

Then run the application by executing:

```
$ ng serve
```

Then open up your browser at `http://localhost:4200`

Have fun and good luck!

Christoph & Pascal & Thomas



## EXTRA NOTES JEROEN BOONE

to investigate: 

	* https://blog.thoughtram.io/angular/2015/06/29/shadow-dom-strategies-in-angular2.html:
	* shadow dom
	* html templates
	* html injection
	* webcomponents.org
	* http://stackoverflow.com/questions/6003819/properties-and-attributes-in-html
	* terminal tmux


Angular writes to properties

	* attribute: ?is the visual in the dom? always strings
	* properties: ?the javascript value?


forkjoin: http://classroom.thoughtram.io/#/class/angular2-master-class/observables/87 <br>
You only get notified when all the observables are complete and you get the last result of each observable

@Output()
Is an observable

Create Component
ng g c contacts-detail-view

Create Service
ng generate service contacts

Cold vs Hot Observables: https://blog.thoughtram.io/angular/2016/06/16/cold-vs-hot-observables.html


