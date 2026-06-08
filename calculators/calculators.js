/* =========================================================================
   THE CALCULATOR REGISTRY  ← this is the only file you edit to add a calc.
   -------------------------------------------------------------------------
   Each calculator is one entry in the list below. The homepage reads this
   list and automatically creates a card for every entry.

   To add a new calculator later:
     1. Make a new folder under "calculators/"  (e.g. calculators/bmi/)
     2. Put an index.html inside it (copy an existing one as a template)
     3. Add ONE new block to the list below, copying the pattern.
   You never have to touch the homepage or any existing calculator.

   Fields:
     icon  – any emoji, shown on the card
     title – the name shown on the card
     desc  – one short line describing it
     url   – path to the calculator's index.html file
             (point straight at index.html so links work both on a web
              server AND when opening the files locally in a browser)
   ========================================================================= */

window.CALCULATORS = [
  {
    icon:  "🔢",
    title: "Basic Calculator",
    desc:  "Add, subtract, multiply and divide. Works with your keyboard too.",
    url:   "calculators/basic/index.html"
  },
  {
    icon:  "🏦",
    title: "Loan / EMI Calculator",
    desc:  "Find your monthly payment and total interest on a loan.",
    url:   "calculators/loan-emi/index.html"
  }
  // ,{
  //   icon:  "⚖️",
  //   title: "BMI Calculator",
  //   desc:  "Work out your Body Mass Index.",
  //   url:   "calculators/bmi/index.html"
  // }   ← example of how a future entry would look (remove the // to enable)
];
