import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { Geo, MyData, Categories , Items, Params } from 'src/types/types'



const initialState: { items: MyData[], filtedItems: MyData[], message: string, error: string, categories: Categories[] } = {
  items: [{
    id: 20,
    title: ''
    
  }],
  filtedItems: [{
    id: 10,
    title: '',
    
  }],
  message: '',
  error: 'null',
  categories: [{
    id: 1,
    name: ''
  }]

}

export const fetchProjects = createAsyncThunk<Items, undefined>(
  'projects/fetchProjects',
  async function () {
    const response = await fetch('https://api.test.cyberia.studio/api/v1/projects')
    const data = await response.json()
    return data
  }
)
export const fetchProjectsCateg = createAsyncThunk(
  'projects/fetchProjectsCateg',
  async function () {
    const response = await fetch('https://api.test.cyberia.studio/api/v1/project-categories',)
    const data = await response.json()
    return data
  }
)

export const fetchSubmitForm = createAsyncThunk(
  'projects/fetchSubmitForm',
  async function (params: Params) {
    
  try {
    const response = await fetch(`https://api.test.cyberia.studio/api/v1/feedbacks?phone=${params.phone}&email=${params.email}&message=${params.message}&name=${params.name}`, {
      method: 'POST'
    })
    const data = await response.json()
    return data.message
    
} catch (error) {
  return error.message;
}
  }
)
// interface UserAttributes {
//   message: string
// }
// export interface FormData {
//   email: string
//   phone: string
//   message: string
//   attachment: string
// }
// export const formFeedback = createAsyncThunk('projects/formFeedback', async ({ email, phone, message, attachment }: FormData) => {
//   const data = { email: email, phone: phone, message: message, attachment: attachment }
//   const response = await fetch('http://httpbin.org/post', {
//     method: 'POST',
//     headers: [],
//     body: JSON.stringify(data)
//   })
//   return (await response.json()) as UserAttributes
// })

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    filterItems(state, action) {
      console.log(action.payload)
      if (action.payload.unFilt) {
        state.filtedItems = state.filtedItems.filter((item) => item.categories[0].id === action.payload.id)
      }
      else {
        state.filtedItems = state.items
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProjects.fulfilled, (state, action) => {
      state.items = action.payload.items
      state.filtedItems = action.payload.items
      
    }),
    builder.addCase(fetchProjectsCateg.fulfilled, (state, action) => {
      //action.payload.items.map((item: Categories) => state.categories.push(item))
      state.categories = action.payload.items
      console.log('fulfilled')
    })
    
  }
})

export default projectsSlice.reducer
export const { filterItems } = projectsSlice.actions