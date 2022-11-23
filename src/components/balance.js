/* eslint-disable react-hooks/rules-of-hooks */
import { useDispatch, useSelector } from "react-redux"
import { deposit, withdraw } from "../features/BalanceSlice"

const balance = () => {
  const balance = useSelector((state) => state.balance)

  const disPatch = useDispatch()

  const handleDeposit = () => {
    disPatch(deposit(10))
  }

  const handleWithdraw = () => {
    disPatch(withdraw(10))
  }

  return (
    <div>
      <h2>Total balance</h2>
      <p>{balance.total}</p>
      <div>
        <button type="button" onClick={handleDeposit}>
          Deposit $10
        </button>
        <button type="button" onClick={handleWithdraw}>
          Withdraw $10
        </button>
      </div>
    </div>
  )
}

export default balance
