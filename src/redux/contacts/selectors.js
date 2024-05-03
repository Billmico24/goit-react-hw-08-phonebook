export const selectAllContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter;