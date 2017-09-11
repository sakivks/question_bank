# DC to Essence Integration
This guide is an attempt to document the designs and concept of integration between 
DC the internet banking application and Essence the core backend application

## Integrated Functionalities 
- **Functional**
  - Payments (Internal, Intrabank, Swift, SEPA)
  - Standing Orders (**Create** and **Cancel** of Internal, Intrabank, Swift, SEPA)
  - Term Deposit (Create and Breakage)
  - Cheque Book Order
  - Cheque (Stop, Unstop, Cancel)
  - Statements (Download monthly statements PDF)
  - Customer onboarding and Account Opening (Including dedup check)
- **Enquiries**
  - Account Overview 
    - GetAccountList 
    - GetAccountBallance 
    - GetAccountRelation
    - GetTermDepositList
    - GetLoanList
  - Transaction History
  - Standing Order List
- **Data Push**
  - Customer Push to DC
  - Account Push
  - Transaction Push
  - Exchange Rate Push
  - EOD Transaction Extract Push
  
