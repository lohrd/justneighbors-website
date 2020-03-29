# portfolio-website

This is a website made for the band 'Just Neighbors'. It has three pages: a home page, an about page, and a contact page. 

HOME:
The home page has four logo's that are clickable-hyperlinks to the band's to facebook, instagram, twitter, and spotify accounts respectively. 

ABOUT:
The about page has no functionality (yet). It displays a static image with text superimposed above the band members. Perhaps an easter egg will be developed- adding a hidden clickable link to a secret treasure trove of unreleased music? TBA.

CONTACT:
This page serves as a method of getting in touch with the band. Three inputs on the page link directly to a database that saves all incoming contact requests. The architecture implemented is as follows: Axios Call -> Express Server -> ContactController -> ContactDao -> Postgres. 
