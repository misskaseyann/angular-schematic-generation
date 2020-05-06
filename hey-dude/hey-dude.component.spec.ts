import { HeyDudeComponent } from './hey-dude.component';
import { HeyDudeComponentDriver } from './hey-dude.driver';
import { componentTestingSetup } from 'angular-component-driver';
import { Tester } from './hey-dude.test-utils';

/**
 * setup the component driver for testing
 */
function testSetup() {
  return componentTestingSetup({
    componentClass: HeyDudeComponent,
    driver: HeyDudeComponentDriver,
    servicesToStub: [],
    imports: []
  });
}

describe('HeyDudeComponent', () => {
  let componentDriver: HeyDudeComponentDriver;
  let tester: Tester;

  beforeEach(() => {
    // Initialize component driver and any injected services
    componentDriver = testSetup().createComponentDriver();
    tester = new Tester(componentDriver);
  });

  it('should test something', () => {});
});
