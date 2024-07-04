import Client from 'shopify-buy';

const client = Client.buildClient({
  domain: 'playdeadteststore.myshopify.com',
  storefrontAccessToken: 'bd58c296ded588f117f8d600b1774454'
});



export { client }