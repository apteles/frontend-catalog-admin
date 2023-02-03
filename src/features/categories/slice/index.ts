import { createSlice } from "@reduxjs/toolkit";

type Category = {
    id: string;
    name: string;
    is_active: boolean;
    created_at: string;
    updated_at: string;
    deleted_at: null|string;
    description: null|string;
}

const category: Category = {
    id: "0c7a3453-8979-415c-9f89-76d0f1be971b",
    name: "Oive",
    description: "Earum quo at dolor tempore nisi",
    is_active: true,
    deleted_at: null,
    created_at: "2022-08-15T10:59:09+0000",
    updated_at: "2022-08-15T10:59:09+0000",
}
 
const categories = [
    category,
    {...category, id: "0c7a3453-8979-415c-9f89-76d0f1be971b", name: "Peach"},
    {...category, id: "0c7a3453-8979-415c-9f89-76d0f1be971b", name: "Apple"},
    {...category, id: "0c7a3453-8979-415c-9f89-76d0f1be971b", name: "Bana"},
]

export const initialState = {
    categories
}

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        createCategory(state, action){},
        updateCategory(state, action){},
        deleteCategory(state, action){},
    }
})

export default categoriesSlice.reducer