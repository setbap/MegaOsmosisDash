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

// ✅
export const getTransactionsAVGInfo = () =>
  getSimpleInfo<TransactionsAVGInfo>(
    "c83e4f4b-e191-4789-9afe-ec5025a6c1f1",
    "2. Daily active wallets,5. Daily fee (in USD) spent,5. Transactions fee (in USD),1. Daily transactions,4. Transaction success rate"
  );

// ✅
export const getTransactionsTotalInfo = () =>
  getSimpleInfo<TransactionsTotalInfo>(
    "e2c01ca2-5ddb-4ab3-b31d-6d2d58a0c14b",
    "5. Total fee (in USD) spent,2. Total wallets,1. Total transactions"
  );

// ✅
export const getTransactionsTPS = () =>
  getSimpleArrayData<TransactionsTPS, TransactionsTPS>(
    "6a893388-4c70-405c-9b1c-6c4bc7ed53d9",
    "6. Number of transactions per second (TPS),6. Weekly number of transactions per second (TPS)",
    "Day"
  );


export const getTransactionsFee = () =>
  getSimpleArrayData<TransactionsFee, TransactionsFee>(
    "0850460c-38b5-4ea8-846e-64b532d0a9c7",
    "Weekly average transaction fee (in USD),5. Weekly total fee(in USD)",
    "Day"
  );

// ✅
export const getTransactionsBlockAge = () =>
  getSimpleArrayData<TransactionsBlockAge, TransactionsBlockAge>(
    "7dc7afa5-3dae-4af8-b283-2a1ec9aa5c76",
    "7. Weekly number of transactions per block,7. Block age,7. Weekly block age,7. Number of transactions per block",
    "Day"
  );

export const getTransactionsTXInfo = () =>
  getSimpleArrayData<TransactionsTXInfo, TransactionsTXInfo>(
    "8e170a1f-1b5c-4429-acd6-0917751090e0",
    " , ,2. Daily number of active wallets,1. Daily number of transactions,1. Cumulative number of transaction,4. Daily transaction success rate",
    "Day"
  );

// ✅ [2]  
export const getTransactionsNewWallet = () =>
  getSimpleArrayData<TransactionsNewWallet, TransactionsNewWallet>(
    "c653021e-20d2-4492-9e29-3c822e050db2",
    "3. Daily number of new wallets,3. Cumulative number of new wallets",
    "Day"
  );


export const getTransactionsTodayInfo = () =>
  getSimpleInfo<TransactionsTodayInfo>(
    "ef1e4b6a-f5da-46d1-bddd-c541a89caf9c",
    "Transactions Count, Active Wallets, Today TX Fee, Today Success Rate"
  );
