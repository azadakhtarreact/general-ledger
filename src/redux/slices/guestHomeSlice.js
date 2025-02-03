import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    programmeList: [],
    topCoachList: [],
    faqList: [],
    sportList: [],
    ratReviewList: [],
    mySession: {},
    countList: {},
    banner: ''
}

export const homeSlice = createSlice({
    name: "homeSlice",
    initialState,
    reducers: {
        setProgrammeList: (state, action) => {
            state.programmeList = action.payload
        },
        setTopCoachList: (state, action) => {
            state.topCoachList = action.payload
        },
        setFaqList: (state, action) => {
            state.faqList = action.payload
        },
        setSportList: (state, action) => {
            state.sportList = action.payload
        },
        setBanner: (state, action) => {
            state.banner = action.payload
        },
        setCount: (state, action) => {
            state.countList = action.payload
        },
        setClientList: (state, action) => {
            state.ratReviewList = action.payload
        },
        setMySession: (state, action) => {
            state.mySession = action.payload
        },
    }
})

export const { setMySession, setProgrammeList, setTopCoachList, setFaqList, setSportList, setBanner, setCount, setClientList } = homeSlice.actions

export const selectProgrammeList = (state) => state.guestHome.programmeList
export const selectTopCoachList = (state) => state.guestHome.topCoachList
export const selectFaqList = (state) => state.guestHome.faqList
export const selectBannerList = (state) => state.guestHome.banner
export const selectSportList = (state) => state.guestHome.sportList
export const selectCountList = (state) => state.guestHome.countList
export const selectRatReviewsList = (state) => state.guestHome.ratReviewList
export const selectMySession = (state) => state.guestHome.mySession

export default homeSlice.reducer