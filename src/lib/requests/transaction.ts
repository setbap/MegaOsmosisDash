import {
  TransactionsAVGInfo,
  TransactionsBlockAge,
  TransactionsFee,
  TransactionsNewWallet,
  TransactionsTodayInfo,
  TransactionsTotalInfo,
  TransactionsTPS,
  TransactionsTXInfo,
} from "lib/types/types/transaction";
import { getSimpleArrayData, getSimpleInfo } from "./utils";

export const getTransactionsAVGInfo = () =>
  getSimpleInfo<TransactionsAVGInfo>(
    "c83e4f4b-e191-4789-9afe-ec5025a6c1f1",
    "Daily active wallets,Daily fee (in USD) spent,Transactions fee (in USD),Daily transactions,Transaction success rate"
  );

export const getTransactionsTotalInfo = () =>
  getSimpleInfo<TransactionsTotalInfo>(
    "e2c01ca2-5ddb-4ab3-b31d-6d2d58a0c14b",
    "Total fee (in USD) spent,Total wallets,Total transactions"
  );

export const getTransactionsTPS = () =>
  getSimpleArrayData<TransactionsTPS, TransactionsTPS>(
    "6a893388-4c70-405c-9b1c-6c4bc7ed53d9",
    "Number of transactions per second (TPS),Weekly number of transactions per second (TPS)",
    "Day"
  );


export const getTransactionsFee = () =>
  getSimpleArrayData<TransactionsFee, TransactionsFee>(
    "0850460c-38b5-4ea8-846e-64b532d0a9c7",
    "Weekly average transaction fee (in USD),Weekly total fee(in USD)",
    "Day"
  );

export const getTransactionsBlockAge = () =>
  getSimpleArrayData<TransactionsBlockAge, TransactionsBlockAge>(
    "7dc7afa5-3dae-4af8-b283-2a1ec9aa5c76",
    "Weekly number of transactions per block,Block age,Weekly block age,Number of transactions per block",
    "Day"
  );

export const getTransactionsTXInfo = () =>
  getSimpleArrayData<TransactionsTXInfo, TransactionsTXInfo>(
    "8e170a1f-1b5c-4429-acd6-0917751090e0",
    " , ,Daily number of active wallets,Daily number of transactions,Cumulative number of transaction,Daily transaction success rate",
    "Day"
  );

export const getTransactionsNewWallet = () =>
  getSimpleArrayData<TransactionsNewWallet, TransactionsNewWallet>(
    "c653021e-20d2-4492-9e29-3c822e050db2",
    "Daily number of new wallets,Cumulative number of new wallets",
    "Day"
  );


export const getTransactionsTodayInfo = () =>
  getSimpleInfo<TransactionsTodayInfo>(
    "ef1e4b6a-f5da-46d1-bddd-c541a89caf9c",
    "24H Transactions Count,24H Active Wallets,24H  TX Fee,24H Success Rate"
  );
