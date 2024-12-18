const { app } = require('@azure/functions');

app.http('GetMessage', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {

        return { body: `Hello, from api!` };
    }
});
