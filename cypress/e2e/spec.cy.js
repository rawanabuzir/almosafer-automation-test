describe('Visiting a website Randomly', () => {
  it('Should visit one of the websites and type a destination based on language', () => {
    const websiteIndex = Math.floor(Math.random() * 2);
    const WebsiteArray = [
      'https://www.almosafer.com/ar',
      'https://www.almosafer.com/en'
    ];


    cy.visit(WebsiteArray[websiteIndex]);

    cy.get('.cta__saudi').click();
    cy.get('#uncontrolled-tab-example-tab-hotels').click();
    cy.get('[data-testid="Header__LanguageSwitch"]').invoke('text').then((languageText) => {
      if (languageText.includes('English')) {
        const arrayDestanationarabic = [' دبي', 'جدة'];
        const randomIndex = Math.floor(Math.random() * arrayDestanationarabic.length);
        cy.get('[data-testid="AutoCompleteInput"]').type(arrayDestanationarabic[randomIndex]);
      } else if (languageText.includes("العربية")) {
        const arrayDestenationenglish = ['Dubai', 'Jeddah', 'Riyadh'];
        const randomIndextwo = Math.floor(Math.random() * arrayDestenationenglish.length);
        cy.get('[data-testid="AutoCompleteInput"]').type(arrayDestenationenglish[randomIndextwo]);
      }
      cy.get('[data-testid="AutoCompleteResultsList"]')
        .find("li")
        .eq(1)
        .click();

      const roomIndex = Math.floor(Math.random() * 2);

      cy.get('[data-testid="HotelSearchBox__ReservationSelect_Select"]').select(roomIndex)
      cy.get('[data-testid="HotelSearchBox__SearchButton"]').click()




    });
  });
});
