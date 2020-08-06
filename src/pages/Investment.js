import React from "react";
import { Grid, Typography } from "@material-ui/core";

const investmentParameters = {
    "minimumAmountPerOption": 100.00
};

const investmentOptions = [
    {
        "id": 1,
        "category": "Cash",
        "name": "ETH",
        "price": 400,
        "balance": 2.79,
        "return": 0,
        "risk": 0,
        "loss": 0,
        "score": 2,
        "amounttoinvest": 0
    },
    {
        "id": 2,
        "category": "Cash",
        "name": "DAI",
        "price": 1.02,
        "balance": 20,
        "return": 0.005,
        "risk": 0,
        "loss": 0,
        "score": 2,
        "amounttoinvest": 0
    },
    {
        "id": 3,
        "category": "Saving",
        "name": "Compund(DAI)",
        "price": 0,
        "balance": 1,
        "return": 0.015,
        "risk": 1,
        "loss": 0.005,
        "score": 6,
        "amounttoinvest": 0
    },
    {
        "id": 4,
        "category": "Saving",
        "name": "Aave(DAI)",
        "price": 0,
        "balance": 2,
        "return": 0.025,
        "risk": 1,
        "loss": 0.005,
        "score": 7,
        "amounttoinvest": 0
    },
    {
        "id": 5,
        "category": "Saving",
        "name": "dYdX(DAI)",
        "price": 0,
        "balance": 3,
        "return": 0.018,
        "risk": 2,
        "loss": 0.005,
        "score": 8,
        "amounttoinvest": 0
    },
    {
        "id": 6,
        "category": "Investment",
        "name": "USDC/ETH",
        "price": 0,
        "balance": 1,
        "return": 0.012,
        "risk": 2,
        "loss": 0.02,
        "score": 8,
        "amounttoinvest": 0
    },
    {
        "id": 7,
        "category": "Investment",
        "name": "DAI/ETH",
        "price": 0,
        "balance": 1,
        "return": 0.013,
        "risk": 3,
        "loss": 0.02,
        "score": 8,
        "amounttoinvest": 0
    },
    {
        "id": 8,
        "category": "Investment",
        "name": "WBTC/ETH",
        "price": 0,
        "balance": 1,
        "return": 0.014,
        "risk": 3,
        "loss": 0.04,
        "score": 8,
        "amounttoinvest": 0
    },
    {
        "id": 9,
        "category": "Investment",
        "name": "ETH/ZRX",
        "price": 0,
        "balance": 1,
        "return": 0.015,
        "risk": 4,
        "loss": 0.05,
        "score": 8,
        "amounttoinvest": 0
    },
    {
        "id": 10,
        "category": "Real Estate",
        "name": "15048 Freeland",
        "price": 49.2,
        "balance": 1,
        "return": 0.1166,
        "risk": 4,
        "loss": 0.01,
        "score": 8.5,
        "amounttoinvest": 0
    },
    {
        "id": 11,
        "category": "Real Estate",
        "name": "15049 Hornsby",
        "price": 105,
        "balance": 2,
        "return": 0.1005,
        "risk": 5,
        "loss": 0.01,
        "score": 8.5,
        "amounttoinvest": 0
    },
    {
        "id": 12,
        "category": "Gold",
        "name": "PMGT",
        "price": 1981.77,
        "balance": 0.004,
        "return": 0.05,
        "risk": 5,
        "loss": 0.5,
        "score": 7,
        "amounttoinvest": 0
    },
    {
        "id": 13,
        "category": "Gold",
        "name": "DGX",
        "price": 63.78,
        "balance": 0.001,
        "return": 0.03,
        "risk": 6,
        "loss": 0.5,
        "score": 7,
        "amounttoinvest": 0
    },
    {
        "id": 14,
        "category": "Gold",
        "name": "PAXG",
        "price": 1622.5,
        "balance": 0.002,
        "return": 0.045,
        "risk": 6,
        "loss": 0.5,
        "score": 7,
        "amounttoinvest": 0
    }
];

class InvestmentTool {
  
  sortByRisk(investmentOptions) {
    return investmentOptions.slice(0).sort((option1, option2) => {
        if (option1.risk < option2.risk) return -1;
        if (option1.risk > option2.risk) return 1;
        if (option1.return > option2.return) return -1;
        if (option1.return < option2.return) return 1;
    });
  }

  getInvestmentOptionsBelowRisk(investmentOptions, risk) {
    return investmentOptions.filter((option) => {
        return (option.risk <= risk)
    })
  }

  distribute(amountToInvest, investmentOptions, investmentParameters, risk) {
    let investmentOptionsBelowRisk = this.getInvestmentOptionsBelowRisk(investmentOptions, risk);
    let distributedInvestmentOptions = investmentOptionsBelowRisk;
    let minimumAmountPerOption = investmentParameters.minimumAmountPerOption;

    let numberOfCandidateOptions = investmentOptionsBelowRisk.length;
    if (numberOfCandidateOptions.length <= 0) return [];

    if (amountToInvest <= minimumAmountPerOption) {
        distributedInvestmentOptions[0].amounttoinvest = amountToInvest;
        return distributedInvestmentOptions;
    }

    let numberOfSlices = Math.ceil(amountToInvest / minimumAmountPerOption);
    let amountLetfover = amountToInvest;
    let numberOfOptions = distributedInvestmentOptions.length;

    for (let i=0; i<numberOfSlices; i++) {
        let amount = 0.0;
        if (amountLetfover >= minimumAmountPerOption) {
            amount = minimumAmountPerOption;
        } else {
            amount = amountLetfover;
        }
        distributedInvestmentOptions[i % numberOfOptions].amounttoinvest += amount;
        amountLetfover -= amount;
    }

    return distributedInvestmentOptions;
  }

  adjustDistribution(optionId, amountToInvest, investmentParameters) {
    // find the option by optionId
    // change the amount to invest
    // the other amounts also change
    // return a new list
  }

};

const Investment = () => {
    let amountToInvest = 1000.5;
    let distributedInvestementOptions = new InvestmentTool().distribute(
        amountToInvest,
        investmentOptions,
        investmentParameters,
        1
    );

    return (
        <Grid container>
        <Typography variant="h1" component="h2">
        Investment
        </Typography>
        <br/>
        Amount: {amountToInvest}
        <br/>
        <ol>
            {distributedInvestementOptions.map(
                (item) => <li> {item.id} - {item.name} - {item.risk}, {item.return} - {item.amounttoinvest} </li>
            )}
        </ol>
      </Grid>
    );
  };
  
export { 
    Investment, 
    investmentParameters,
    investmentOptions,
    InvestmentTool 
}
