import { <%= classify(name) %>Component } from './<%= dasherize(name) %>.component';
import { <%= classify(name) %>ComponentDriver } from './<%= dasherize(name) %>.driver';
import { componentTestingSetup } from 'angular-component-driver';
import { Tester } from './<%= dasherize(name) %>.test-utils';

/**
 * setup the component driver for testing
 */
function testSetup() {
  return componentTestingSetup({
    componentClass: <%= classify(name) %>Component,
    driver: <%= classify(name) %>ComponentDriver,
    servicesToStub: [],
    imports: []
  });
}

describe('<%= classify(name)%>Component', () => {
  let componentDriver: <%= classify(name) %>ComponentDriver;
  let tester: Tester;

  beforeEach(() => {
    // Initialize component driver and any injected services
    componentDriver = testSetup().createComponentDriver();
    tester = new Tester(componentDriver);
  });

  it('should test something', () => {});
});
