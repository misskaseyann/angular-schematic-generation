import { <%= classify(name) %>Component } from './<%= dasherize(name) %>.component';
import { ComponentDriver } from 'angular-component-driver';

export class <%= classify(name) %>ComponentDriver extends ComponentDriver<<%= classify(name) %>Component>{

}
