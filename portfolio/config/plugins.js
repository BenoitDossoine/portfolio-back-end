module.exports = {
    upload: {
      config: {
        provider: '@strapi-community/strapi-provider-upload-google-cloud-storage',
        providerOptions: {
            bucketName: 'strapi-storage-benoit',
            publicFiles: false,
            uniform: false,
            basePath: '',
        },
      },
    },
}