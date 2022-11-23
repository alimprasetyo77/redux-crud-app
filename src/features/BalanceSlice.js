import { createSlice } from '@reduxjs/toolkit'
const BalanceSlice = createSlice({
    name : 'balance',
    initialState : {total : 0} ,
    reducers : {
        deposit  (state, action)  {
            return {
                total : state.total + action.payload
            }
        },
        withdraw (state, action) {
            return {
                total : state.total - action.payload
            }
        }
        
    }
})

export const {deposit, withdraw} = BalanceSlice.actions

export default BalanceSlice.reducer