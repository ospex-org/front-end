export const ContestOracleResolvedAbi = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_router",
				"type": "address"
			},
			{
				"internalType": "bytes32",
				"name": "_donId",
				"type": "bytes32"
			},
			{
				"internalType": "address",
				"name": "linkTokenAddress",
				"type": "address"
			},
			{
				"internalType": "bytes32",
				"name": "createContestSourceHashValue",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "scoreContestSourceHashValue",
				"type": "bytes32"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "contestId",
				"type": "uint256"
			}
		],
		"name": "ContestUnableToBeScoredManually",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "EmptyArgs",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "EmptySecrets",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "EmptySource",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "IncorrectHash",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "requiredAmount",
				"type": "uint256"
			}
		],
		"name": "LinkAmountTooLow",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "requiredAmount",
				"type": "uint256"
			}
		],
		"name": "LinkNotApproved",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "requiredAmount",
				"type": "uint256"
			}
		],
		"name": "LinkNotTransferred",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "NoInlineSecrets",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "OnlyRouterCanFulfill",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "ReentrancyGuardReentrantCall",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "contestId",
				"type": "uint256"
			}
		],
		"name": "ScoreContestNotInReadyStatus",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "contestId",
				"type": "uint256"
			}
		],
		"name": "TimerHasNotExpired",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "requestId",
				"type": "bytes32"
			}
		],
		"name": "UnexpectedRequestID",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "contestId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "rundownId",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "sportspageId",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "jsonoddsId",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "contestCreator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "contestCriteria",
				"type": "uint256"
			}
		],
		"name": "ContestCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "contestId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint32",
				"name": "awayScore",
				"type": "uint32"
			},
			{
				"indexed": false,
				"internalType": "uint32",
				"name": "homeScore",
				"type": "uint32"
			}
		],
		"name": "ContestScored",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			}
		],
		"name": "OwnershipTransferRequested",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "id",
				"type": "bytes32"
			}
		],
		"name": "RequestFulfilled",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "id",
				"type": "bytes32"
			}
		],
		"name": "RequestSent",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "requestId",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"internalType": "bytes",
				"name": "response",
				"type": "bytes"
			},
			{
				"indexed": false,
				"internalType": "bytes",
				"name": "err",
				"type": "bytes"
			}
		],
		"name": "Response",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "previousAdminRole",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "newAdminRole",
				"type": "bytes32"
			}
		],
		"name": "RoleAdminChanged",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}
		],
		"name": "RoleGranted",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}
		],
		"name": "RoleRevoked",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "DEFAULT_ADMIN_ROLE",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "SCOREMANAGER_ROLE",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "SOURCEMANAGER_ROLE",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "SUBSCRIPTIONMANAGER_ROLE",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "acceptOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes",
				"name": "input",
				"type": "bytes"
			}
		],
		"name": "bytesToUint32",
		"outputs": [
			{
				"internalType": "uint32",
				"name": "output",
				"type": "uint32"
			}
		],
		"stateMutability": "pure",
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
		"name": "contestCreationTime",
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
		"name": "contestId",
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
		"name": "contestTimerInterval",
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
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "contestTimers",
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
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "contests",
		"outputs": [
			{
				"internalType": "uint32",
				"name": "awayScore",
				"type": "uint32"
			},
			{
				"internalType": "uint32",
				"name": "homeScore",
				"type": "uint32"
			},
			{
				"internalType": "address",
				"name": "contestCreator",
				"type": "address"
			},
			{
				"internalType": "enum ContestStatus",
				"name": "contestStatus",
				"type": "uint8"
			},
			{
				"internalType": "string",
				"name": "rundownId",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "sportspageId",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "jsonoddsId",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "rundownId",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "sportspageId",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "jsonoddsId",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "source",
				"type": "string"
			},
			{
				"internalType": "bytes",
				"name": "encryptedSecretsUrls",
				"type": "bytes"
			},
			{
				"internalType": "uint64",
				"name": "subscriptionId",
				"type": "uint64"
			},
			{
				"internalType": "uint32",
				"name": "gasLimit",
				"type": "uint32"
			}
		],
		"name": "createContest",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "createContestSourceHash",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "donId",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_contestId",
				"type": "uint256"
			}
		],
		"name": "getContest",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint32",
						"name": "awayScore",
						"type": "uint32"
					},
					{
						"internalType": "uint32",
						"name": "homeScore",
						"type": "uint32"
					},
					{
						"internalType": "address",
						"name": "contestCreator",
						"type": "address"
					},
					{
						"internalType": "enum ContestStatus",
						"name": "contestStatus",
						"type": "uint8"
					},
					{
						"internalType": "string",
						"name": "rundownId",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "sportspageId",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "jsonoddsId",
						"type": "string"
					}
				],
				"internalType": "struct Contest",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			}
		],
		"name": "getRoleAdmin",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			},
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "grantRole",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "requestId",
				"type": "bytes32"
			},
			{
				"internalType": "bytes",
				"name": "response",
				"type": "bytes"
			},
			{
				"internalType": "bytes",
				"name": "err",
				"type": "bytes"
			}
		],
		"name": "handleOracleFulfillment",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			},
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "hasRole",
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
		"name": "linkDenominator",
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
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			},
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "renounceRole",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "requestMapping",
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
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			},
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "revokeRole",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "router",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "s_lastError",
		"outputs": [
			{
				"internalType": "bytes",
				"name": "",
				"type": "bytes"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "s_lastRequestId",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "s_lastResponse",
		"outputs": [
			{
				"internalType": "bytes",
				"name": "",
				"type": "bytes"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_contestId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "source",
				"type": "string"
			},
			{
				"internalType": "bytes",
				"name": "encryptedSecretsUrls",
				"type": "bytes"
			},
			{
				"internalType": "uint64",
				"name": "subscriptionId",
				"type": "uint64"
			},
			{
				"internalType": "uint32",
				"name": "gasLimit",
				"type": "uint32"
			}
		],
		"name": "scoreContest",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_contestId",
				"type": "uint256"
			},
			{
				"internalType": "uint32",
				"name": "awayScore",
				"type": "uint32"
			},
			{
				"internalType": "uint32",
				"name": "homeScore",
				"type": "uint32"
			}
		],
		"name": "scoreContestManually",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "scoreContestSourceHash",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "newDonId",
				"type": "bytes32"
			}
		],
		"name": "setDonId",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
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
				"internalType": "address",
				"name": "to",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "newLinkDenominator",
				"type": "uint256"
			}
		],
		"name": "updateLinkDenominator",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_router",
				"type": "address"
			}
		],
		"name": "updateRouterAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "sourceHashToUpdate",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "newSourceHash",
				"type": "bytes32"
			}
		],
		"name": "updateSourceHash",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "newContestTimerInterval",
				"type": "uint256"
			}
		],
		"name": "updateTimer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			}
		],
		"name": "withdrawAllLink",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]