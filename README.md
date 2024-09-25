# Web Service for Workspace Rental Platform (Hot Desking)

Jan 2024 - Apr 2024  
Primarily worked remotely, but met in person one or two days every week to discuss modifications and additional features with the  backend team and the product manager.  

**Methodology**: Assigning one feature every week or two, creating a branch, developing it, then submitting a pull request and merging.

### Notice
Please disable the `eslint` and `prettier` extensions in your vscode (workspace), and uncheck `format on save` in the vscode settings when running locally.

[Application URL, click and explore!](https://hotdesking-git-develop-wontae-chois-projects-63012546.vercel.app/)

## Purpose of the Project

**Kiosk system for the study café**

We originally had to use software from an external company, which cost around £150 per month. Since we planned to run the study café for at least two years, we decided to develop our own software rather than paying for expensive, non-customizable software. This way, we could create a system that offered the features, products, and payment methods we wanted, tailored to our needs.

## Contributions

**Overview**

We went from just an idea to a complete implementation and I participated in including planning, development, and peer testing. 

I sketched flowcharts and wireframes on paper, developed them into detailed blueprints. Wrote the majority of the frontend code, contributed to data modeling, which allowed me to research design patterns and get hands-on experience with modeling.  


**Contributions**

All client-side development, collaborating with the backend team.

- Designed the UI/UX for all pages and components using TailwindCSS.
- Introduced Apollo Client for communicating with the backend via GraphQL.
- Data modeling (e.g., Ticket → UserTicket Factory pattern).
- Implemented Next.js server components and actions.
- Integrated NextAuth.js for OAuth2 authentication.

## Main Features

1. A mobile-friendly layout, considering that users would want to purchase tickets on their way to the café.
2. KakaoTalk(Messenger that almost every Korean uses) OAuth.
3. Payment integration with a payment gateway.
   - Supports subscription payments, allowing users to pay monthly and continue using their purchased assets.
4. Business logic for bookables(seats, meeting rooms, lockers, rent boxes) with tickets. Users can activate and start using, switch seats if needed, take breaks, and check out.
5. A Bookable dashboard where users can see what is occupied or available.
6. Ticket purchase.
7. Vouchers that offer discounts on tickets.

## Tech Stack

- Next.js
- NextAuth.js
- GraphQL(apollo client)
- TypeScript
- TailwindCSS
- Form validation(zod & zod-form-data)
- eslint-config-airbnb
- Vercel (for deployment)
- NICEPay (payment gateway)

## Architecture

[Download PDF with flowcharts and wireframes explaining the architecture](https://drive.google.com/file/d/1QHHlLaWSYSW2CigSqnBbUD6mLeh-m7GS/view?usp=sharing)

### What I Learned from the Project

Working with the payment module and implementing payment feature was significant experience for me, as it is known to be rare for developers with 2 to 3 years of experience to work on payment systems, since they are directly tied to the company’s revenue.

In this project, I was in charge of implementing features and UI for the payment flow, including data modeling, business logic implementation, and third-party payment module integration, gaining a deeper understanding of how payment technology works and the payment flow with a payment gateway.

[NICE payment gateway docs](https://start.nicepay.co.kr/manual/quickguide/start.do)