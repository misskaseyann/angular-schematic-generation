import { HeyDudeComponentDriver } from './hey-dude.driver';

export class Tester {
  /**
   * This is where the 'given' comment goes
   */
  public given: Given;

  /**
   * This is where the 'when' comment goes
   */
  public when: When;

  /**
   * This is where the 'then' comment goes
   */
  public then: Then;

  constructor(
    componentDriver: HeyDudeComponentDriver,
    ...stubbedServices: any[]
  ) {
    this.given = new Given(componentDriver);
    this.when = new When(componentDriver);
    this.then = new Then(componentDriver);
  }
}

/**
 * This is where the 'Given' class comment goes
 */
class Given {
  constructor(private componentDriver: HeyDudeComponentDriver) {}
}

/**
 * This is where the 'When' class comment goes
 */
class When {
  constructor(private componentDriver: HeyDudeComponentDriver) {}
}

/**
 * This is where the 'Then' class comment goes
 */
class Then {
  constructor(private componentDriver: HeyDudeComponentDriver) {}
}
