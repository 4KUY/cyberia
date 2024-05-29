export type Geo = {
    lat: null
    lng: null
}
export type MyData = {
    id: number
    title: string
    slug?: string
    image?: string
    image_dark?: string
    description?: string
    categories?: Categories[]
    geo?: Geo
}
export type Categories = {
    id: number
    name: string
}
export type Items = {
    items: MyData[] | null
}
export type Params = {
    phone: string
    email: string
    message: string
    name: string
}
export type TextfieldStyles = {
    placeholder?: string,
    label?: string,
    containerTextfields: string,
    styleclass?: string,
    value?: string,
    changeHandler?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export type InputProps = {
    option: Options,
    placeholder?: string,
    reg: any,
    nameReg: string,
    label?: string,
    type?: string,
    styleclass?: string,
    containerTextfields?: string,
    value?: string,
    changeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export type Options = {
    required: boolean
    minLength?: number
    maxLength?: number
    pattern?: any
}

export type TitleButton = {
    title: string
    stylesClass: string
    type?: 'string' // React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
}
