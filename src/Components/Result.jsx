import { calculateInvestmentResults, formatter } from "../util/investment";
export default function Result({ input }) {
  const Result_Data = calculateInvestmentResults(input);
  const initialInvestment =
    Result_Data[0].valueEndOfYear -
    Result_Data[0].interest -
    Result_Data[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
        <td>Year</td>
        <td>Investment Value</td>
        <td>Interest(Year)</td>
        <td>Total Interest</td>
        <td>Invested Capital</td>
        </tr>
      </thead>
      <tbody>
        {Result_Data.map((yearData) => {
          const totalInterestvalue =
            yearData.valueEndOfYear - yearData.annualInvestment * yearData.year;
          const totalamountInvested = yearData.valueEndOfYear - initialInvestment;
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterestvalue)}</td>
              <td>{formatter.format(totalamountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
