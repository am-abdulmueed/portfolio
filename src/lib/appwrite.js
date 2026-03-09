// Appwrite imports removed because functionality is mocked below


// Appwrite functionality is disabled
export const DATABASE_ID = 'dummy-database';
export const COLLECTION_ID = 'dummy-collection';

// Dummy implementation to avoid network requests that cause build errors
export const databases = {
    listDocuments: async () => ({ documents: [] }),
    getDocument: async () => null,
};

export const Query = {
    orderDesc: () => '',
    equal: () => '',
};
