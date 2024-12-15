import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// GetPosts Fetching
export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await fetch("http://localhost:3000/posts");
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
//GetPost Details
export const postDetails = createAsyncThunk(
  "posts/postDetails",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await fetch(`http://localhost:3000/posts/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
//Add Posts
export const insertPost = createAsyncThunk(
  "posts/insertPost",
  async (postData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await fetch(`http://localhost:3000/posts`, {
        method: "POST",
        body: JSON.stringify(postData),
        headers: {
          "Content-Type": "application/json charset=UTF-8",
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
//Edit Posts
export const editPost = createAsyncThunk(
  "posts/editPost",
  async (editedPost, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await fetch(
        `http://localhost:3000/posts/${editedPost.id}`,
        {
          method: "PATCH",
          body: JSON.stringify(editedPost),
          headers: {
            "Content-Type": "application/json charset=UTF-8",
          },
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// DeletePosts
export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await fetch(`http://localhost:3000/posts/${id}`, {
        method: "DELETE",
      });
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// PostSlice
const postSlice = createSlice({
  name: "posts",
  initialState: { records: [], loading: false, error: null, record: null },
  reducers: {
    cleanRecord: (state) => {
      state.record = null;
    },
  },
  extraReducers: (builder) => {
    //Fetch Posts Extra Reducer
    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.records = action.payload;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    //insertPost Extra Reducer
    builder.addCase(insertPost.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(insertPost.fulfilled, (state, action) => {
      state.loading = false;
      state.record = action.payload;
    });
    builder.addCase(insertPost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    //Post Details Extra Reducer
    builder.addCase(postDetails.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(postDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.record = action.payload;
    });
    builder.addCase(postDetails.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    //Edit Post ExtraReducer
    builder.addCase(editPost.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(editPost.fulfilled, (state, action) => {
      state.loading = false;
      state.record = action.payload;
    });
    builder.addCase(editPost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    //DeletePosts ExtraReducer
    builder.addCase(deletePost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deletePost.fulfilled, (state, action) => {
      state.loading = false;
      state.records = state.records.filter((post) => {
        return post.id !== action.payload;
      });
    });
    builder.addCase(deletePost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default postSlice.reducer;
export const { cleanRecord } = postSlice.actions;
