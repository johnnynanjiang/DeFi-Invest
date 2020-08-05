import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

import { Investment, investmentOptions, InvestmentTool } from './pages/Investment';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});

test('InvestmentTool', () => {
  console.log('Investment: ', Investment);
  console.log('investmentOptions: ', investmentOptions);
  console.log('InvestmentTool: ', InvestmentTool);

  const investmentTool = new InvestmentTool();
  const sortedInvestmentOptions = investmentTool.sortByRisk(investmentOptions);

  console.log('sortedInvestmentOptions: ', sortedInvestmentOptions);
});