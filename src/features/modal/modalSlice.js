import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modaln',
  initialState: {
    isOpen: false,
  },
  reducers: {
    openModal: () => ({ isOpen: true }),
    closeModal: () => ({ isOpen: false }),
  },
});

const { openModal, closeModal } = modalSlice.actions;

export { openModal, closeModal };
export default modalSlice.reducer;
