import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

import { Investment, investmentOptions, InvestmentTool } from './pages/Investment';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});

test('InvestmentTool - sort by risk', () => {
  const sortedInvestmentOptions = new InvestmentTool().sortByRisk(investmentOptions);

  /*
  console.log('sortedInvestmentOptions: ', sortedInvestmentOptions);
  console.log('investmentOptions: ', investmentOptions);
  */

  expect(sortedInvestmentOptions === investmentOptions).toBe(false);
});

test('InvestmentTool - get options below risk', () => {
  const investmentOptionsBelowRisk = new InvestmentTool().getInvestmentOptionsBelowRisk(
    investmentOptions, 1
  );

  console.log('investmentOptionsBelowRisk: ', investmentOptionsBelowRisk);

  expect(investmentOptionsBelowRisk.length == 4).toBe(true);
});