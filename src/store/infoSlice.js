import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  data: []
};


// export const getChui = createAsyncThunk(
//   "place/getChui",
//   async () => {
//     const res = await dashbordService.getChui();
//     return res.data;
//   }
// );

// export const getIssykKul = createAsyncThunk(
//   "place/getIssykKul",
//   async () => {
//     const res = await dashbordService.getIssykKul();
//     console.log(res);
//     return res.data;
//   }
// );
// export const getTalas = createAsyncThunk(
//   "place/getTalas",
//   async () => {
//     const res = await dashbordService.getTalas();
//     return res.data;
//   }
// );
// export const getBatken = createAsyncThunk(
//   "place/getBatken",
//   async () => {
//     const res = await dashbordService.getBatken();
//     return res.data;
//   }
// );
// export const getJalalAbad = createAsyncThunk(
//   "place/getJalalAbad",
//   async () => {
//     const res = await dashbordService.getJalalAbad();
//     return res.data;
//   }
// );

// export const getNaryn = createAsyncThunk(
//   "place/getNaryn",
//   async () => {
//     const res = await dashbordService.getJalalAbad();
//     return res.data;
//   }
// );

// export const getOsh = createAsyncThunk(
//   "place/getOsh",
//   async ()=>{
//     const res = await dashbordService.getOsh();
//     return res.data
//   }
// )

// export const getPlaces = createAsyncThunk(
//   "dashbord/getAll",
//   async () => {
//     const res = await dashbordService.getPlace();
//     console.log(res)
//     return res;
//   }
// );

// export const updateTutorial = createAsyncThunk(
//   "tutorials/update",
//   async ({ id, data }) => {
//     const res = await TutorialDataService.update(id, data);
//     return res.data;
//   }
// );

// export const deleteTutorial = createAsyncThunk(
//   "tutorials/delete",
//   async ({ id }) => {
//     await TutorialDataService.remove(id);
//     return { id };
//   }
// );

// export const deleteAllTutorials = createAsyncThunk(
//   "tutorials/deleteAll",
//   async () => {
//     const res = await TutorialDataService.removeAll();
//     return res.data;
//   }
// );

// export const findTutorialsByTitle = createAsyncThunk(
//   "tutorials/findByTitle",
//   async ({ title }) => {
//     const res = await TutorialDataService.findByTitle(title);
//     return res.data;
//   }
// );

const infoSlice = createSlice({
  name: "dasbordData",
  initialState,
  extraReducers: {
  
  },
});


export default infoSlice.reducer;