import React from 'react'
import LocationDateReserve from './LocationDateReserve'
import { Func } from 'mocha';

describe('<LocationDateReserve />', () => {

  let testObj: { dataHandler :Function, locationHandler: Function };

  beforeEach(()=>{
    testObj = {
      dataHandler: ()=>{

      },
      locationHandler: ()=>{

      }
    }
    cy.spy(testObj, "locationHandler").as("locationSpy");
  })
  
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<LocationDateReserve onDateChange={testObj.dataHandler} onLocationChange={testObj.locationHandler} />)

    cy.get("#location").parent().click().get('ul > li[data-value="CNX"]').click()
    cy.get("@locationSpy").should('be.calledOnce')
    cy.get("@locationSpy").should('be.calledWith', "CNX")
  })
})