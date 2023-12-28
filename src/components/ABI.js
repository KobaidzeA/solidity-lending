const ABI =[
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "reason",
				"type": "string"
			}
		],
		"name": "unknownReceive",
		"type": "event"
	},
	{
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"inputs": [],
		"name": "availableAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "becomeBorrower",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "becomeLender",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "beginLending",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "lentAmount",
				"type": "uint256"
			}
		],
		"name": "borrowMoney",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "borrowerArr",
		"outputs": [
			{
				"internalType": "address",
				"name": "borrowerAddr",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "borrowScore",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "blackListed",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "borrowerArrJS",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "borrowerAddr",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "borrowScore",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "blackListed",
						"type": "bool"
					}
				],
				"internalType": "struct Lending.borrower[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "borrowerArrSpot",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "closeAccount",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "closeBorrower",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "endLending",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "fundAccount",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "whose",
				"type": "address"
			}
		],
		"name": "getSpecificLoan",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address[]",
						"name": "lenderAddresses",
						"type": "address[]"
					},
					{
						"internalType": "uint256[]",
						"name": "lenderAmounts",
						"type": "uint256[]"
					}
				],
				"internalType": "struct Lending.loan",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "isBorrower",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "isLender",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "lenderArr",
		"outputs": [
			{
				"internalType": "address",
				"name": "lenderAddr",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "contributedAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "remainder",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "earnings",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "locked",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "lenderArrJS",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "lenderAddr",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "contributedAmount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "remainder",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "earnings",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "locked",
						"type": "bool"
					}
				],
				"internalType": "struct Lending.lender[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "lenderArrSpot",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "payBack",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "borrowerNow",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "loanerNow",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "lentAmount",
				"type": "uint256"
			}
		],
		"name": "updateLoan",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withDrawEarnings",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
]
export default function getABI() {
    return ABI;
}