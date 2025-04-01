// import React, { useMemo } from "react";
// import { Container, Row } from "react-bootstrap";
// import CircularProgressBar from "../../components/CircularProgressBar";
// import LineProgressBar from "../../components/LineProgressBar";
// import { ArrowDropUp, ArrowDropDown, CurrencyRupee } from '@mui/icons-material';

// const SHADOW_CLASS = "shadow";

// const Analytics = ({ transactions }) => {
//   const TotalTransactions = useMemo(() => transactions.length, [transactions]);

//   const totalIncomeTransactions = useMemo(() =>
//     transactions.filter((item) => item.transactionType === "credit"),
//     [transactions]
//   );

//   const totalExpenseTransactions = useMemo(() =>
//     transactions.filter((item) => item.transactionType === "expense"),
//     [transactions]
//   );

//   const totalIncomePercent = useMemo(() =>
//     (totalIncomeTransactions.length / TotalTransactions) * 100 || 0,
//     [totalIncomeTransactions, TotalTransactions]
//   );

//   const totalExpensePercent = useMemo(() =>
//     (totalExpenseTransactions.length / TotalTransactions) * 100 || 0,
//     [totalExpenseTransactions, TotalTransactions]
//   );

//   const totalTurnOver = useMemo(() =>
//     transactions.reduce((acc, transaction) => acc + transaction.amount, 0),
//     [transactions]
//   );

//   const totalTurnOverIncome = useMemo(() =>
//     totalIncomeTransactions.reduce((acc, transaction) => acc + transaction.amount, 0),
//     [totalIncomeTransactions]
//   );

//   const totalTurnOverExpense = useMemo(() =>
//     totalExpenseTransactions.reduce((acc, transaction) => acc + transaction.amount, 0),
//     [totalExpenseTransactions]
//   );

//   const TurnOverIncomePercent = useMemo(() =>
//     (totalTurnOverIncome / totalTurnOver) * 100 || 0,
//     [totalTurnOverIncome, totalTurnOver]
//   );

//   const TurnOverExpensePercent = useMemo(() =>
//     (totalTurnOverExpense / totalTurnOver) * 100 || 0,
//     [totalTurnOverExpense, totalTurnOver]
//   );

//   const averageIncome = (totalTurnOverIncome / totalIncomeTransactions.length) || 0;
//   const averageExpense = (totalTurnOverExpense / totalExpenseTransactions.length) || 0;

//   const highestIncome = Math.max(...totalIncomeTransactions.map(t => t.amount), 0);
//   const lowestIncome = Math.min(...totalIncomeTransactions.map(t => t.amount), 0);

//   const highestExpense = Math.max(...totalExpenseTransactions.map(t => t.amount), 0);
//   const lowestExpense = Math.min(...totalExpenseTransactions.map(t => t.amount), 0);

//   const categories = useMemo(() => [
//     "Office Supplies","Accomodation", "Salary", "Tips/Gratuity", "Meals", "Healthcare","Utilities & Services & Services", "Team Events", "Transportation Costs", "Miscellaneous"
//   ], []);
  
//   const colors = useMemo(() => ({
//     "Office Supplies": '#FF6384',
//     "Accomodation": '#36A2EB', 
//     "Salary": '#FFCE56',
//     "Tips/Gratuity": '#4BC0C0', 
//     "Meals": '#9966FF', 
//     "Healthcare": '#FF9F40',
//     "Utilities & Services & Services": '#8AC926', 
//     "Team Events": '#6A4C93', 
//     "Transportation Costs": '#1982C4', 
//     "Miscellaneous": '#F45B69'
//   }), []);
  
//   return (
//     <Container className="mt-5">
//       <Row>
//         {/* Total Transactions Card */}
//         <div className="col-lg-3 col-md-6 mb-4">
//           <div className={`card h-100 ${SHADOW_CLASS}`}>
//             <div className="card-heade">
//               <strong>Total Transactions:</strong> {TotalTransactions}
//             </div>
//             <div className="card-body">
//               <h5 className="card-title text-success">
//                 Income: <ArrowDropUp /> {totalIncomeTransactions.length} ({totalIncomePercent.toFixed(2)}%)
//               </h5>
//               <h5 className="card-title text-danger">
//                 Expense: <ArrowDropDown /> {totalExpenseTransactions.length} ({totalExpensePercent.toFixed(2)}%)
//               </h5>
//             </div>
//           </div>
//         </div>

//         {/* Total TurnOver Card */}
//         <div className="col-lg-3 col-md-6 mb-4">
//           <div className={`card h-100 ${SHADOW_CLASS}`}>
//             <div className="card-heade">
//               <strong>Total TurnOver:</strong> {totalTurnOver} <CurrencyRupee />
//             </div>
//             <div className="card-body">
//               <h5 className="card-title text-success">
//                 Income: <ArrowDropUp /> {totalTurnOverIncome} <CurrencyRupee /> ({TurnOverIncomePercent.toFixed(2)}%)
//               </h5>
//               <h5 className="card-title text-danger">
//                 Expense: <ArrowDropDown /> {totalTurnOverExpense} <CurrencyRupee /> ({TurnOverExpensePercent.toFixed(2)}%)
//               </h5>
//               <p>Average Income: {averageIncome.toFixed(2)} <CurrencyRupee /></p>
//               <p>Average Expense: {averageExpense.toFixed(2)} <CurrencyRupee /></p>
//               <p>Highest Income: {highestIncome} <CurrencyRupee /></p>
//               <p>Lowest Income: {lowestIncome} <CurrencyRupee /></p>
//               <p>Highest Expense: {highestExpense} <CurrencyRupee /></p>
//               <p>Lowest Expense: {lowestExpense} <CurrencyRupee /></p>
//             </div>
//           </div>
//         </div>

//         {/* Categorywise Income and Expense Cards */}
//         {categories.map(category => {
//           const income = totalIncomeTransactions
//             .filter(transaction => transaction.category === category)
//             .reduce((acc, transaction) => acc + transaction.amount, 0);

//           const expenses = totalExpenseTransactions
//             .filter(transaction => transaction.category === category)
//             .reduce((acc, transaction) => acc + transaction.amount, 0);

//           return (
//             <div key={category} className="col-lg-3 col-md-6 mb-4">
//               <div className={`card h-100 ${SHADOW_CLASS}`}>
//                 <div className="card-heade">
//                   <strong>{category} Analysis</strong>
//                 </div>
//                 <div className="card-body">
//                   <p>Income: {income} ({((income / totalTurnOver) * 100).toFixed(2)}%)</p>
//                   <p>Expenses: {expenses} ({((expenses / totalTurnOver) * 100).toFixed(2)}%)</p>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </Row>
//     </Container>
//   );
// };

// export default React.memo(Analytics);


// charlie, when i am changing the const part in this. it is changing in the dashboard. it is analytics.js



import React from "react";
// import CardBox from "./CardBox";
import { Container, Row } from "react-bootstrap";
import CircularProgressBar from "../../components/CircularProgressBar";
import LineProgressBar from "../../components/LineProgressBar";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
// import MovingIcon from '@mui/icons-material/Moving';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const Analytics = ({ transactions }) => {
  const TotalTransactions = transactions.length;
  const totalIncomeTransactions = transactions.filter(
    (item) => item.transactionType === "credit"
  );
  const totalExpenseTransactions = transactions.filter(
    (item) => item.transactionType === "expense"
  );

  let totalIncomePercent =
    (totalIncomeTransactions.length / TotalTransactions) * 100;
  let totalExpensePercent =
    (totalExpenseTransactions.length / TotalTransactions) * 100;

  // console.log(totalIncomePercent, totalExpensePercent);

  const totalTurnOver = transactions.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  );
  const totalTurnOverIncome = transactions
    .filter((item) => item.transactionType === "credit")
    .reduce((acc, transaction) => acc + transaction.amount, 0);
  const totalTurnOverExpense = transactions
    .filter((item) => item.transactionType === "expense")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const TurnOverIncomePercent = (totalTurnOverIncome / totalTurnOver) * 100;
  const TurnOverExpensePercent = (totalTurnOverExpense / totalTurnOver) * 100;

  const categories = [
    "Office Supplies",
    "Accomodation",
    "Salary",
    "Tips/Gratuity",
    "Meals",
    "Healthcare",
    "Utilities & Services",
    "Team Events",
    "Transportation Costs",
    "Miscellaneous",
  ];

  const colors = {
    "Office Supplies": '#FF6384',
    "Accomodation": '#36A2EB',
    "Salary": '#FFCE56',
    "Tips/Gratuity": '#4BC0C0',
    "Meals": '#9966FF',
    "Healthcare": '#FF9F40',
    "Utilities & Services": '#8AC926',
    "Team Events": '#6A4C93',
    "Transportation Costs": '#1982C4',
    "Miscellaneous": '#F45B69',
  };
  
  

  return (
    <>
      <Container className="mt-5 ">
        <Row>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-header">
                <span style={{ fontWeight: "bold" }}>Total Transactions:</span>{" "}
                {TotalTransactions}
              </div>
              <div className="card-body">
                <h5 className="card-title " style={{color: "blue"}}>
                  Income: <ArrowDropUpIcon/>{totalIncomeTransactions.length}
                </h5>
                <h5 className="card-title" style={{color: "crimson"}}>
                  Expense: <ArrowDropDownIcon />{totalExpenseTransactions.length}
                </h5>

                <div className="d-flex justify-content-center mt-3">
                  <CircularProgressBar
                    percentage={totalIncomePercent.toFixed(0)}
                    color="blue"
                  />
                </div>

                <div className="d-flex justify-content-center mt-4 mb-2">
                  <CircularProgressBar
                    percentage={totalExpensePercent.toFixed(0)}
                    color="crimson"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-header">
                <span style={{ fontWeight: "bold" }}>Total TurnOver:</span>{" "}
                {totalTurnOver}
              </div>
              <div className="card-body">
                <h5 className="card-title" style={{color: "blue"}}>Income: <ArrowDropUpIcon /> {totalTurnOverIncome} <CurrencyRupeeIcon /></h5>
                <h5 className="card-title" style={{color: "crimson"}}>Expense: <ArrowDropDownIcon />{totalTurnOverExpense} <CurrencyRupeeIcon /></h5>
                <div className="d-flex justify-content-center mt-3">
                  <CircularProgressBar
                    percentage={TurnOverIncomePercent.toFixed(0)}
                    color="blue"
                  />
                </div>

                <div className="d-flex justify-content-center mt-4 mb-4">
                  <CircularProgressBar
                    percentage={TurnOverExpensePercent.toFixed(0)}
                    color="crimson"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-header">
                <span style={{ fontWeight: "bold" }}>Categorywise Credit</span>{" "}
              </div>
              <div className="card-body">
                {categories.map(category => {
                  const income = transactions.filter(transaction => transaction.transactionType === "credit" && transaction.category === category).reduce((acc, transaction) => acc + transaction.amount, 0)
                  
                  const incomePercent = (income/ totalTurnOver) * 100;

 

                  return(
                    <>
                    {income > 0 &&
                      (<LineProgressBar label={category} percentage={incomePercent.toFixed(0)} lineColor={colors[category]} />)

                    }
                    </>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-header">
                <span style={{ fontWeight: "bold" }}>Categorywise Expense</span>{" "}
              </div>
              <div className="card-body">
                {categories.map(category => {
                  const expenses = transactions.filter(transaction => transaction.transactionType === "expense" && transaction.category === category).reduce((acc, transaction) => acc + transaction.amount, 0)
                  
                  const expensePercent = (expenses/ totalTurnOver) * 100;


                  return(
                    <>
                    {expenses > 0 &&
                      (<LineProgressBar label={category} percentage={expensePercent.toFixed(0)} lineColor={colors[category]}/>)

                    }
                    </>
                  )
                })}
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Analytics;
