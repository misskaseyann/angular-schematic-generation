import { FancyNewThingComponent } from './fancy-new-thing.component';
import { FancyNewThingComponentDriver } from './fancy-new-thing.driver';
import { componentTestingSetup } from 'angular-component-driver';
import { Tester } from './fancy-new-thing.test-utils';

/**
 * setup the component driver for testing
 */
function testSetup() {
  return componentTestingSetup({
    componentClass: FancyNewThingComponent,
    driver: FancyNewThingComponentDriver,
    servicesToStub: [],
    imports: []
  });
}

describe('FancyNewThingComponent', () => {
  let componentDriver: FancyNewThingComponentDriver;
  let tester: Tester;

  beforeEach(() => {
    // Initialize component driver and any injected services
    componentDriver = testSetup().createComponentDriver();
    tester = new Tester(componentDriver);
  });

  it('should test something', () => {});
});
