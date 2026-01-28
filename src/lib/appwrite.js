import { Client, Databases, Query } from 'appwrite';

// Appwrite functionality is disabled
const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('dummy-project');

const databases = new Databases(client);

// Dummy values to prevent build errors
export const DATABASE_ID = 'dummy-database';
export const COLLECTION_ID = 'dummy-collection';

export { databases, Query }; 
