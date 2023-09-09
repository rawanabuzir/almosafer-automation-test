describe('Visiting a website Randomly', () => {
    it('Should visit one of the websites and type a destination based on language', () => {

        const WebsiteArray = [
            'https://www.almosafer.com/ar',
            'https://www.almosafer.com/en'
        ];


        const websiteIndex = Math.floor(Math.random() * WebsiteArray.length);
        const websiteUrl = WebsiteArray[websiteIndex];

        cy.visit(websiteUrl);


        cy.get('.cta__saudi').click();


        cy.get('#uncontrolled-tab-example-tab-hotels').click();

        // استرجاع نص اللغة الحالية
        cy.get('[data-testid="Header__LanguageSwitch"]').invoke('text').then((languageText) => {
            if (languageText.includes('English')) {
                const arrayDestinationArabic = [' دبي', 'جدة'];
                const randomIndex = Math.floor(Math.random() * arrayDestinationArabic.length);
                cy.get('[data-testid="AutoCompleteInput"]').type(arrayDestinationArabic[randomIndex]);
            } else if (languageText.includes("العربية")) {
                const arrayDestinationEnglish = ['Dubai', 'Jeddah', 'Riyadh'];
                const randomIndexTwo = Math.floor(Math.random() * arrayDestinationEnglish.length);
                cy.get('[data-testid="AutoCompleteInput"]').type(arrayDestinationEnglish[randomIndexTwo]);
            }

            // اختيار العنصر الثاني من نتائج البحث
            cy.get('[data-testid="AutoCompleteResultsList"]')
                .find("li")
                .eq(1)
                .click();

            // اختيار عدد الغرف بشكل عشوائي (هنا افترضت انه لديك خيارين)
            const roomIndex = Math.floor(Math.random() * 2);

            cy.get('[data-testid="HotelSearchBox__ReservationSelect_Select"]').select(roomIndex);

            // انقر على زر البحث
            cy.get('[data-testid="HotelSearchBox__SearchButton"]').click();
        });
    });
});
