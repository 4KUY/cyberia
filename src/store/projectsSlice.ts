import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
interface Categories {
  id: number
  name: string
}
export interface MyData {
  id: number
  title: string
  slug: string
  image: string
  description: string
  categories: Categories[]
}
export interface Items {
  items: MyData[]
}

const initialState: { items: Items, loading: boolean, error: string } = {
  items: {
    items: [{
      id: 30,
      title: 'Манна Маркетплейс',
      slug: 'manna-marketplace',
      image: 'https://backend.cyberia.studio/storage/2023/01/16/790ba2952f26c2b09bc46e3b4f939c7c4dd76c57.png',
      description: 'Региональная торговая онлайн-площадка для удобного и быстрого шоппинга в любое время',
      categories: [
        {
          id: 12,
          name: 'Backend'
        }
      ]
    }]
  },
  loading: false,
  error: 'null'
}

export const fetchProjects = createAsyncThunk<Items, undefined>(
  'projects/fetchProjects',
  async function () {
    const response = await fetch('https://backend.cyberia.studio/api/v1/projects')
    const data = await response.json()
    return data
  }
)

interface UserAttributes {
  message: string
}
export interface formData {
  email: string
  phone: string
  message: string
  attachment: string
}
export const formFeedback = createAsyncThunk('projects/formFeedback', async ({ email, phone, message, attachment }: formData) => {
  /*
  const formData = new FormData()
  formData.append('email', email)
  formData.append('phone', phone)
  formData.append('message', message)
  formData.append('attachment', attachment)
  https://backend.cyberia.studio/api/v1/feedback
  */
  const data = { email: email, phone: phone, message: message, attachment: attachment }
  const response = await fetch('http://httpbin.org/post', {
    method: 'POST',
    headers: [],
    body: JSON.stringify(data)
  })
  return (await response.json()) as UserAttributes
})

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProjects.pending, (state, action) => {

    }).addCase(fetchProjects.fulfilled, (state, action) => {
      state.items = action.payload
    }).addCase(formFeedback.fulfilled, (state, action) => {
      console.log(action.payload)
    })
  }
})

export default projectsSlice.reducer
/*
const formData = new FormData()
formData.append('name' , name)
formData.append('price' , `${price}`)
formData.append('img' , file)
formData.append('brandId' , product.selectedBrand.id)
formData.append('typeId' , product.selectedType.id)
formData.append('info' , JSON.stringify(info))
console.log(formData)
createProduct(formData).then(data => onHide)
email string
phone string
message string
attachment string($binary)
*/
