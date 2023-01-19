# sell_pass_web_api

SellPassWebApi - JavaScript client for sell_pass_web_api
No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: v1
- Package version: v1
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install sell_pass_web_api --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your sell_pass_web_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var SellPassWebApi = require('sell_pass_web_api');

var defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix['Authorization'] = "Token"

var api = new SellPassWebApi.AnnouncementsApi()
var shopId = 56; // {Number} 
var announcementId = 789; // {Number} 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.selfShopIdAnnouncementsAnnouncementIdDelete(shopId, announcementId, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://dev.sellpass.io*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*SellPassWebApi.AnnouncementsApi* | [**selfShopIdAnnouncementsAnnouncementIdDelete**](docs/AnnouncementsApi.md#selfShopIdAnnouncementsAnnouncementIdDelete) | **DELETE** /self/{shopId}/announcements/{announcementId} | Delete Announcement
*SellPassWebApi.AnnouncementsApi* | [**selfShopIdAnnouncementsAnnouncementIdPut**](docs/AnnouncementsApi.md#selfShopIdAnnouncementsAnnouncementIdPut) | **PUT** /self/{shopId}/announcements/{announcementId} | Edit Announcement
*SellPassWebApi.AnnouncementsApi* | [**selfShopIdAnnouncementsGet**](docs/AnnouncementsApi.md#selfShopIdAnnouncementsGet) | **GET** /self/{shopId}/announcements | Get all
*SellPassWebApi.AnnouncementsApi* | [**selfShopIdAnnouncementsPost**](docs/AnnouncementsApi.md#selfShopIdAnnouncementsPost) | **POST** /self/{shopId}/announcements | Create Announcement
*SellPassWebApi.BlacklistApi* | [**selfShopIdBlacklistBlockedItemIdDelete**](docs/BlacklistApi.md#selfShopIdBlacklistBlockedItemIdDelete) | **DELETE** /self/{shopId}/blacklist/{blockedItemId} | Delete Blocked Item
*SellPassWebApi.BlacklistApi* | [**selfShopIdBlacklistBlockedItemIdGet**](docs/BlacklistApi.md#selfShopIdBlacklistBlockedItemIdGet) | **GET** /self/{shopId}/blacklist/{blockedItemId} | Get Blocked Item
*SellPassWebApi.BlacklistApi* | [**selfShopIdBlacklistBlockedItemIdPut**](docs/BlacklistApi.md#selfShopIdBlacklistBlockedItemIdPut) | **PUT** /self/{shopId}/blacklist/{blockedItemId} | Edit Blocked Item
*SellPassWebApi.BlacklistApi* | [**selfShopIdBlacklistGet**](docs/BlacklistApi.md#selfShopIdBlacklistGet) | **GET** /self/{shopId}/blacklist | Get All
*SellPassWebApi.BlacklistApi* | [**selfShopIdBlacklistPost**](docs/BlacklistApi.md#selfShopIdBlacklistPost) | **POST** /self/{shopId}/blacklist | Create Blocked Item
*SellPassWebApi.CategoriesApi* | [**selfShopIdCategoriesCategoryIdDelete**](docs/CategoriesApi.md#selfShopIdCategoriesCategoryIdDelete) | **DELETE** /self/{shopId}/categories/{categoryId} | Delete Category
*SellPassWebApi.CategoriesApi* | [**selfShopIdCategoriesCategoryIdGet**](docs/CategoriesApi.md#selfShopIdCategoriesCategoryIdGet) | **GET** /self/{shopId}/categories/{categoryId} | Get Category
*SellPassWebApi.CategoriesApi* | [**selfShopIdCategoriesCategoryIdPut**](docs/CategoriesApi.md#selfShopIdCategoriesCategoryIdPut) | **PUT** /self/{shopId}/categories/{categoryId} | Edit Category
*SellPassWebApi.CategoriesApi* | [**selfShopIdCategoriesGet**](docs/CategoriesApi.md#selfShopIdCategoriesGet) | **GET** /self/{shopId}/categories | Get All
*SellPassWebApi.CategoriesApi* | [**selfShopIdCategoriesPost**](docs/CategoriesApi.md#selfShopIdCategoriesPost) | **POST** /self/{shopId}/categories | Create Category
*SellPassWebApi.CouponsApi* | [**selfShopIdCouponsCouponIdDelete**](docs/CouponsApi.md#selfShopIdCouponsCouponIdDelete) | **DELETE** /self/{shopId}/coupons/{couponId} | Delete Coupon
*SellPassWebApi.CouponsApi* | [**selfShopIdCouponsCouponIdGet**](docs/CouponsApi.md#selfShopIdCouponsCouponIdGet) | **GET** /self/{shopId}/coupons/{couponId} | Get Coupon
*SellPassWebApi.CouponsApi* | [**selfShopIdCouponsCouponIdPut**](docs/CouponsApi.md#selfShopIdCouponsCouponIdPut) | **PUT** /self/{shopId}/coupons/{couponId} | Edit Coupon
*SellPassWebApi.CouponsApi* | [**selfShopIdCouponsGet**](docs/CouponsApi.md#selfShopIdCouponsGet) | **GET** /self/{shopId}/coupons | Get All
*SellPassWebApi.CouponsApi* | [**selfShopIdCouponsPost**](docs/CouponsApi.md#selfShopIdCouponsPost) | **POST** /self/{shopId}/coupons | Create Coupon
*SellPassWebApi.CustomersApi* | [**selfShopIdCustomersCustomerIdGet**](docs/CustomersApi.md#selfShopIdCustomersCustomerIdGet) | **GET** /self/{shopId}/customers/{customerId} | 
*SellPassWebApi.CustomersApi* | [**selfShopIdCustomersCustomerIdIpsGet**](docs/CustomersApi.md#selfShopIdCustomersCustomerIdIpsGet) | **GET** /self/{shopId}/customers/{customerId}/ips | 
*SellPassWebApi.CustomersApi* | [**selfShopIdCustomersGet**](docs/CustomersApi.md#selfShopIdCustomersGet) | **GET** /self/{shopId}/customers | 
*SellPassWebApi.CustomersApi* | [**selfShopIdCustomersStatsGet**](docs/CustomersApi.md#selfShopIdCustomersStatsGet) | **GET** /self/{shopId}/customers/stats | 
*SellPassWebApi.CustomizationApi* | [**selfShopIdCustomizationDesignPut**](docs/CustomizationApi.md#selfShopIdCustomizationDesignPut) | **PUT** /self/{shopId}/customization/design | 
*SellPassWebApi.CustomizationApi* | [**selfShopIdCustomizationGet**](docs/CustomizationApi.md#selfShopIdCustomizationGet) | **GET** /self/{shopId}/customization | 
*SellPassWebApi.CustomizationApi* | [**selfShopIdCustomizationLinksPut**](docs/CustomizationApi.md#selfShopIdCustomizationLinksPut) | **PUT** /self/{shopId}/customization/links | 
*SellPassWebApi.CustomizationApi* | [**selfShopIdCustomizationLogoPost**](docs/CustomizationApi.md#selfShopIdCustomizationLogoPost) | **POST** /self/{shopId}/customization/logo | 
*SellPassWebApi.CustomizationApi* | [**selfShopIdCustomizationSeoFaviconPost**](docs/CustomizationApi.md#selfShopIdCustomizationSeoFaviconPost) | **POST** /self/{shopId}/customization/seo/favicon | 
*SellPassWebApi.CustomizationApi* | [**selfShopIdCustomizationSeoImagePost**](docs/CustomizationApi.md#selfShopIdCustomizationSeoImagePost) | **POST** /self/{shopId}/customization/seo/image | 
*SellPassWebApi.CustomizationApi* | [**selfShopIdCustomizationSeoPut**](docs/CustomizationApi.md#selfShopIdCustomizationSeoPut) | **PUT** /self/{shopId}/customization/seo | 
*SellPassWebApi.CustomizationApi* | [**selfShopIdCustomizationStorefrontBackgroundPost**](docs/CustomizationApi.md#selfShopIdCustomizationStorefrontBackgroundPost) | **POST** /self/{shopId}/customization/storefront/background | 
*SellPassWebApi.CustomizationApi* | [**selfShopIdCustomizationStorefrontPut**](docs/CustomizationApi.md#selfShopIdCustomizationStorefrontPut) | **PUT** /self/{shopId}/customization/storefront | 
*SellPassWebApi.CustomizationApi* | [**selfShopIdCustomizationWidgetsPut**](docs/CustomizationApi.md#selfShopIdCustomizationWidgetsPut) | **PUT** /self/{shopId}/customization/widgets | 
*SellPassWebApi.DashboardApi* | [**selfShopIdDashboardGeneralGet**](docs/DashboardApi.md#selfShopIdDashboardGeneralGet) | **GET** /self/{shopId}/dashboard/general | 
*SellPassWebApi.DesignShopSettingsApi* | [**selfShopIdSettingsDesignLinksPut**](docs/DesignShopSettingsApi.md#selfShopIdSettingsDesignLinksPut) | **PUT** /self/{shopId}/settings/design/links | 
*SellPassWebApi.DesignShopSettingsApi* | [**selfShopIdSettingsDesignLogoPost**](docs/DesignShopSettingsApi.md#selfShopIdSettingsDesignLogoPost) | **POST** /self/{shopId}/settings/design/logo | 
*SellPassWebApi.DesignShopSettingsApi* | [**selfShopIdSettingsDesignPut**](docs/DesignShopSettingsApi.md#selfShopIdSettingsDesignPut) | **PUT** /self/{shopId}/settings/design | 
*SellPassWebApi.DesignShopSettingsApi* | [**selfShopIdSettingsDesignStorefrontLogoPost**](docs/DesignShopSettingsApi.md#selfShopIdSettingsDesignStorefrontLogoPost) | **POST** /self/{shopId}/settings/design/storefront/logo | 
*SellPassWebApi.DesignShopSettingsApi* | [**selfShopIdSettingsDesignStorefrontPut**](docs/DesignShopSettingsApi.md#selfShopIdSettingsDesignStorefrontPut) | **PUT** /self/{shopId}/settings/design/storefront | 
*SellPassWebApi.FaqsApi* | [**selfShopIdFaqsFaqIdDelete**](docs/FaqsApi.md#selfShopIdFaqsFaqIdDelete) | **DELETE** /self/{shopId}/faqs/{faqId} | 
*SellPassWebApi.FaqsApi* | [**selfShopIdFaqsFaqIdPut**](docs/FaqsApi.md#selfShopIdFaqsFaqIdPut) | **PUT** /self/{shopId}/faqs/{faqId} | 
*SellPassWebApi.FaqsApi* | [**selfShopIdFaqsGet**](docs/FaqsApi.md#selfShopIdFaqsGet) | **GET** /self/{shopId}/faqs | 
*SellPassWebApi.FaqsApi* | [**selfShopIdFaqsPost**](docs/FaqsApi.md#selfShopIdFaqsPost) | **POST** /self/{shopId}/faqs | 
*SellPassWebApi.FeedbacksApi* | [**selfShopIdFeedbacksAppealsGet**](docs/FeedbacksApi.md#selfShopIdFeedbacksAppealsGet) | **GET** /self/{shopId}/feedbacks/appeals | 
*SellPassWebApi.FeedbacksApi* | [**selfShopIdFeedbacksFeedbackIdAnswerPost**](docs/FeedbacksApi.md#selfShopIdFeedbacksFeedbackIdAnswerPost) | **POST** /self/{shopId}/feedbacks/{feedbackId}/answer | 
*SellPassWebApi.FeedbacksApi* | [**selfShopIdFeedbacksFeedbackIdAppealPost**](docs/FeedbacksApi.md#selfShopIdFeedbacksFeedbackIdAppealPost) | **POST** /self/{shopId}/feedbacks/{feedbackId}/appeal | 
*SellPassWebApi.FeedbacksApi* | [**selfShopIdFeedbacksFeedbackIdGet**](docs/FeedbacksApi.md#selfShopIdFeedbacksFeedbackIdGet) | **GET** /self/{shopId}/feedbacks/{feedbackId} | 
*SellPassWebApi.FeedbacksApi* | [**selfShopIdFeedbacksGet**](docs/FeedbacksApi.md#selfShopIdFeedbacksGet) | **GET** /self/{shopId}/feedbacks | 
*SellPassWebApi.GeneralShopSettingsApi* | [**selfShopIdSettingsCurrencyPut**](docs/GeneralShopSettingsApi.md#selfShopIdSettingsCurrencyPut) | **PUT** /self/{shopId}/settings/currency | 
*SellPassWebApi.GeneralShopSettingsApi* | [**selfShopIdSettingsGet**](docs/GeneralShopSettingsApi.md#selfShopIdSettingsGet) | **GET** /self/{shopId}/settings | 
*SellPassWebApi.GeneralShopSettingsApi* | [**selfShopIdSettingsNamePut**](docs/GeneralShopSettingsApi.md#selfShopIdSettingsNamePut) | **PUT** /self/{shopId}/settings/name | 
*SellPassWebApi.GeneralShopSettingsApi* | [**selfShopIdSettingsPopupPut**](docs/GeneralShopSettingsApi.md#selfShopIdSettingsPopupPut) | **PUT** /self/{shopId}/settings/popup | 
*SellPassWebApi.GeneralShopSettingsApi* | [**selfShopIdSettingsStatusPut**](docs/GeneralShopSettingsApi.md#selfShopIdSettingsStatusPut) | **PUT** /self/{shopId}/settings/status | 
*SellPassWebApi.GeneralShopSettingsApi* | [**selfShopIdSettingsSubdomainPut**](docs/GeneralShopSettingsApi.md#selfShopIdSettingsSubdomainPut) | **PUT** /self/{shopId}/settings/subdomain | 
*SellPassWebApi.GeneralShopSettingsApi* | [**selfShopIdSettingsTermsPut**](docs/GeneralShopSettingsApi.md#selfShopIdSettingsTermsPut) | **PUT** /self/{shopId}/settings/terms | 
*SellPassWebApi.GeneralShopSettingsApi* | [**selfShopIdSettingsTimezonePut**](docs/GeneralShopSettingsApi.md#selfShopIdSettingsTimezonePut) | **PUT** /self/{shopId}/settings/timezone | 
*SellPassWebApi.GroupsApi* | [**selfShopIdGroupsGet**](docs/GroupsApi.md#selfShopIdGroupsGet) | **GET** /self/{shopId}/groups | 
*SellPassWebApi.GroupsApi* | [**selfShopIdGroupsGroupIdDelete**](docs/GroupsApi.md#selfShopIdGroupsGroupIdDelete) | **DELETE** /self/{shopId}/groups/{groupId} | 
*SellPassWebApi.GroupsApi* | [**selfShopIdGroupsGroupIdGet**](docs/GroupsApi.md#selfShopIdGroupsGroupIdGet) | **GET** /self/{shopId}/groups/{groupId} | 
*SellPassWebApi.GroupsApi* | [**selfShopIdGroupsGroupIdPut**](docs/GroupsApi.md#selfShopIdGroupsGroupIdPut) | **PUT** /self/{shopId}/groups/{groupId} | 
*SellPassWebApi.GroupsApi* | [**selfShopIdGroupsGroupIdThumbnailPost**](docs/GroupsApi.md#selfShopIdGroupsGroupIdThumbnailPost) | **POST** /self/{shopId}/groups/{groupId}/thumbnail | 
*SellPassWebApi.GroupsApi* | [**selfShopIdGroupsPost**](docs/GroupsApi.md#selfShopIdGroupsPost) | **POST** /self/{shopId}/groups | 
*SellPassWebApi.ListingsApi* | [**selfShopIdListingsGet**](docs/ListingsApi.md#selfShopIdListingsGet) | **GET** /self/{shopId}/listings | 
*SellPassWebApi.ListingsApi* | [**selfShopIdListingsPositionPut**](docs/ListingsApi.md#selfShopIdListingsPositionPut) | **PUT** /self/{shopId}/listings/position | 
*SellPassWebApi.OrdersApi* | [**selfShopIdInvoicesGet**](docs/OrdersApi.md#selfShopIdInvoicesGet) | **GET** /self/{shopId}/invoices | Get all invoices
*SellPassWebApi.OrdersApi* | [**selfShopIdInvoicesInvoiceIdGet**](docs/OrdersApi.md#selfShopIdInvoicesInvoiceIdGet) | **GET** /self/{shopId}/invoices/{invoiceId} | Get invoice
*SellPassWebApi.OrdersApi* | [**selfShopIdInvoicesInvoiceIdProcessPost**](docs/OrdersApi.md#selfShopIdInvoicesInvoiceIdProcessPost) | **POST** /self/{shopId}/invoices/{invoiceId}/process | Process invoice
*SellPassWebApi.OrdersApi* | [**selfShopIdInvoicesInvoiceIdReplacementPost**](docs/OrdersApi.md#selfShopIdInvoicesInvoiceIdReplacementPost) | **POST** /self/{shopId}/invoices/{invoiceId}/replacement | Replace invoice
*SellPassWebApi.OrdersApi* | [**selfShopIdInvoicesInvoiceIdResendPost**](docs/OrdersApi.md#selfShopIdInvoicesInvoiceIdResendPost) | **POST** /self/{shopId}/invoices/{invoiceId}/resend | Resend email to customer
*SellPassWebApi.PaymentsShopSettingsApi* | [**selfShopIdSettingsPaymentsCashappPut**](docs/PaymentsShopSettingsApi.md#selfShopIdSettingsPaymentsCashappPut) | **PUT** /self/{shopId}/settings/payments/cashapp | 
*SellPassWebApi.PaymentsShopSettingsApi* | [**selfShopIdSettingsPaymentsCoinbasecommercePut**](docs/PaymentsShopSettingsApi.md#selfShopIdSettingsPaymentsCoinbasecommercePut) | **PUT** /self/{shopId}/settings/payments/coinbasecommerce | 
*SellPassWebApi.PaymentsShopSettingsApi* | [**selfShopIdSettingsPaymentsPaypalFfPut**](docs/PaymentsShopSettingsApi.md#selfShopIdSettingsPaymentsPaypalFfPut) | **PUT** /self/{shopId}/settings/payments/paypal-ff | 
*SellPassWebApi.PaymentsShopSettingsApi* | [**selfShopIdSettingsPaymentsPaypalemailPut**](docs/PaymentsShopSettingsApi.md#selfShopIdSettingsPaymentsPaypalemailPut) | **PUT** /self/{shopId}/settings/payments/paypalemail | 
*SellPassWebApi.PaymentsShopSettingsApi* | [**selfShopIdSettingsPaymentsStripeconnectPut**](docs/PaymentsShopSettingsApi.md#selfShopIdSettingsPaymentsStripeconnectPut) | **PUT** /self/{shopId}/settings/payments/stripeconnect | 
*SellPassWebApi.PaymentsShopSettingsApi* | [**selfShopIdSettingsPaymentsVirtualPaymentsPut**](docs/PaymentsShopSettingsApi.md#selfShopIdSettingsPaymentsVirtualPaymentsPut) | **PUT** /self/{shopId}/settings/payments/virtual-payments | 
*SellPassWebApi.ProductsApi* | [**selfShopIdProductsBulkDeletePost**](docs/ProductsApi.md#selfShopIdProductsBulkDeletePost) | **POST** /self/{shopId}/products/bulk/delete | 
*SellPassWebApi.ProductsApi* | [**selfShopIdProductsBulkUpdateCustomFieldsPut**](docs/ProductsApi.md#selfShopIdProductsBulkUpdateCustomFieldsPut) | **PUT** /self/{shopId}/products/bulk/update/custom-fields | 
*SellPassWebApi.ProductsApi* | [**selfShopIdProductsBulkUpdateCustomerNotePut**](docs/ProductsApi.md#selfShopIdProductsBulkUpdateCustomerNotePut) | **PUT** /self/{shopId}/products/bulk/update/customer-note | 
*SellPassWebApi.ProductsApi* | [**selfShopIdProductsBulkUpdateDiscordIntegrationPut**](docs/ProductsApi.md#selfShopIdProductsBulkUpdateDiscordIntegrationPut) | **PUT** /self/{shopId}/products/bulk/update/discord-integration | 
*SellPassWebApi.ProductsApi* | [**selfShopIdProductsBulkUpdateVisibilityPut**](docs/ProductsApi.md#selfShopIdProductsBulkUpdateVisibilityPut) | **PUT** /self/{shopId}/products/bulk/update/visibility | 
*SellPassWebApi.ProductsApi* | [**selfShopIdProductsGet**](docs/ProductsApi.md#selfShopIdProductsGet) | **GET** /self/{shopId}/products | 
*SellPassWebApi.ProductsApi* | [**selfShopIdProductsProductIdDelete**](docs/ProductsApi.md#selfShopIdProductsProductIdDelete) | **DELETE** /self/{shopId}/products/{productId} | 
*SellPassWebApi.ProductsV2Api* | [**selfShopIdV2ProductsBulkUpdatePaymentMethodsPut**](docs/ProductsV2Api.md#selfShopIdV2ProductsBulkUpdatePaymentMethodsPut) | **PUT** /self/{shopId}/v2/products/bulk/update/payment-methods | Bulk payment-methods update
*SellPassWebApi.ProductsV2Api* | [**selfShopIdV2ProductsGet**](docs/ProductsV2Api.md#selfShopIdV2ProductsGet) | **GET** /self/{shopId}/v2/products | Get products
*SellPassWebApi.ProductsV2Api* | [**selfShopIdV2ProductsPost**](docs/ProductsV2Api.md#selfShopIdV2ProductsPost) | **POST** /self/{shopId}/v2/products | Create a new product
*SellPassWebApi.ProductsV2Api* | [**selfShopIdV2ProductsProductIdGet**](docs/ProductsV2Api.md#selfShopIdV2ProductsProductIdGet) | **GET** /self/{shopId}/v2/products/{productId} | Get product
*SellPassWebApi.ProductsV2Api* | [**selfShopIdV2ProductsProductIdPut**](docs/ProductsV2Api.md#selfShopIdV2ProductsProductIdPut) | **PUT** /self/{shopId}/v2/products/{productId} | Update product
*SellPassWebApi.ProductsV2Api* | [**selfShopIdV2ProductsProductIdSeoImagePost**](docs/ProductsV2Api.md#selfShopIdV2ProductsProductIdSeoImagePost) | **POST** /self/{shopId}/v2/products/{productId}/seo/image | Update seo image
*SellPassWebApi.ProductsV2Api* | [**selfShopIdV2ProductsProductIdThumbnailPost**](docs/ProductsV2Api.md#selfShopIdV2ProductsProductIdThumbnailPost) | **POST** /self/{shopId}/v2/products/{productId}/thumbnail | Update product thumbnail
*SellPassWebApi.PublicPageInfoApi* | [**v2PublicShopsShopIdAnnouncementsAnnouncementPathGet**](docs/PublicPageInfoApi.md#v2PublicShopsShopIdAnnouncementsAnnouncementPathGet) | **GET** /v2/public/shops/{shopId}/announcements/{announcementPath} | Get all the needed information for announcement page of the shop
*SellPassWebApi.PublicPageInfoApi* | [**v2PublicShopsShopIdFaqsGet**](docs/PublicPageInfoApi.md#v2PublicShopsShopIdFaqsGet) | **GET** /v2/public/shops/{shopId}/faqs | Get all the needed information for faqs page of the shop
*SellPassWebApi.PublicPageInfoApi* | [**v2PublicShopsShopIdFeedbacksGet**](docs/PublicPageInfoApi.md#v2PublicShopsShopIdFeedbacksGet) | **GET** /v2/public/shops/{shopId}/feedbacks | Get all the needed information for feedbacks page of the shop
*SellPassWebApi.PublicPageInfoApi* | [**v2PublicShopsShopIdListingsGet**](docs/PublicPageInfoApi.md#v2PublicShopsShopIdListingsGet) | **GET** /v2/public/shops/{shopId}/listings | Get all the needed information for products page of the shop
*SellPassWebApi.PublicPageInfoApi* | [**v2PublicShopsShopIdListingsListingPathGet**](docs/PublicPageInfoApi.md#v2PublicShopsShopIdListingsListingPathGet) | **GET** /v2/public/shops/{shopId}/listings/{listingPath} | Get all the needed information for product page of the shop
*SellPassWebApi.PublicPageInfoApi* | [**v2PublicShopsShopIdMainGet**](docs/PublicPageInfoApi.md#v2PublicShopsShopIdMainGet) | **GET** /v2/public/shops/{shopId}/main | Get all the needed information for main page of the shop
*SellPassWebApi.ShopApi* | [**selfShopsGet**](docs/ShopApi.md#selfShopsGet) | **GET** /self/shops | 
*SellPassWebApi.ShopApi* | [**selfShopsPost**](docs/ShopApi.md#selfShopsPost) | **POST** /self/shops | 
*SellPassWebApi.TicketsApi* | [**selfShopIdTicketsGet**](docs/TicketsApi.md#selfShopIdTicketsGet) | **GET** /self/{shopId}/tickets | 
*SellPassWebApi.TicketsApi* | [**selfShopIdTicketsTicketIdClosePost**](docs/TicketsApi.md#selfShopIdTicketsTicketIdClosePost) | **POST** /self/{shopId}/tickets/{ticketId}/close | 
*SellPassWebApi.TicketsApi* | [**selfShopIdTicketsTicketIdGet**](docs/TicketsApi.md#selfShopIdTicketsTicketIdGet) | **GET** /self/{shopId}/tickets/{ticketId} | 
*SellPassWebApi.TicketsApi* | [**selfShopIdTicketsTicketIdMessagePost**](docs/TicketsApi.md#selfShopIdTicketsTicketIdMessagePost) | **POST** /self/{shopId}/tickets/{ticketId}/message | 


## Documentation for Models

 - [SellPassWebApi.AddCustomDomain](docs/AddCustomDomain.md)
 - [SellPassWebApi.AnnouncementData](docs/AnnouncementData.md)
 - [SellPassWebApi.AnswerFeedbackRequest](docs/AnswerFeedbackRequest.md)
 - [SellPassWebApi.AppealFeedbackReasons](docs/AppealFeedbackReasons.md)
 - [SellPassWebApi.AppealFeedbackRequest](docs/AppealFeedbackRequest.md)
 - [SellPassWebApi.BlockedItemTypes](docs/BlockedItemTypes.md)
 - [SellPassWebApi.BulkBaseUpdateRequest](docs/BulkBaseUpdateRequest.md)
 - [SellPassWebApi.BulkCustomFieldsUpdate](docs/BulkCustomFieldsUpdate.md)
 - [SellPassWebApi.BulkCustomerNoteUpdate](docs/BulkCustomerNoteUpdate.md)
 - [SellPassWebApi.BulkDiscordIntegrationUpdate](docs/BulkDiscordIntegrationUpdate.md)
 - [SellPassWebApi.BulkPaymentMethodsUpdate](docs/BulkPaymentMethodsUpdate.md)
 - [SellPassWebApi.BulkVisibilityUpdate](docs/BulkVisibilityUpdate.md)
 - [SellPassWebApi.CategoryForListingsResponse](docs/CategoryForListingsResponse.md)
 - [SellPassWebApi.ChangeCashappRequest](docs/ChangeCashappRequest.md)
 - [SellPassWebApi.ChangeCoinbaseCommerceRequest](docs/ChangeCoinbaseCommerceRequest.md)
 - [SellPassWebApi.ChangeEmailRequest](docs/ChangeEmailRequest.md)
 - [SellPassWebApi.ChangePasswordRequest](docs/ChangePasswordRequest.md)
 - [SellPassWebApi.ChangePayPalEmailRequest](docs/ChangePayPalEmailRequest.md)
 - [SellPassWebApi.ChangePayPalFFRequest](docs/ChangePayPalFFRequest.md)
 - [SellPassWebApi.ChangeSeoRequest](docs/ChangeSeoRequest.md)
 - [SellPassWebApi.ChangeShopCurrencyRequest](docs/ChangeShopCurrencyRequest.md)
 - [SellPassWebApi.ChangeShopDesignRequest](docs/ChangeShopDesignRequest.md)
 - [SellPassWebApi.ChangeShopNameRequest](docs/ChangeShopNameRequest.md)
 - [SellPassWebApi.ChangeShopNotificationsSettings](docs/ChangeShopNotificationsSettings.md)
 - [SellPassWebApi.ChangeShopPopupRequest](docs/ChangeShopPopupRequest.md)
 - [SellPassWebApi.ChangeShopStatusRequest](docs/ChangeShopStatusRequest.md)
 - [SellPassWebApi.ChangeShopTimezoneRequest](docs/ChangeShopTimezoneRequest.md)
 - [SellPassWebApi.ChangeSocialLinksRequest](docs/ChangeSocialLinksRequest.md)
 - [SellPassWebApi.ChangeStorefrontText](docs/ChangeStorefrontText.md)
 - [SellPassWebApi.ChangeStripeConnectRequest](docs/ChangeStripeConnectRequest.md)
 - [SellPassWebApi.ChangeSubDomainRequest](docs/ChangeSubDomainRequest.md)
 - [SellPassWebApi.ChangeTermsRequest](docs/ChangeTermsRequest.md)
 - [SellPassWebApi.ChangeVirtualPaymentsRequest](docs/ChangeVirtualPaymentsRequest.md)
 - [SellPassWebApi.ChangeWidgetsRequest](docs/ChangeWidgetsRequest.md)
 - [SellPassWebApi.CheckCouponRequest](docs/CheckCouponRequest.md)
 - [SellPassWebApi.CompleteResetPasswordRequest](docs/CompleteResetPasswordRequest.md)
 - [SellPassWebApi.CreateAnnouncementRequest](docs/CreateAnnouncementRequest.md)
 - [SellPassWebApi.CreateBlockedItemRequest](docs/CreateBlockedItemRequest.md)
 - [SellPassWebApi.CreateCategoryRequest](docs/CreateCategoryRequest.md)
 - [SellPassWebApi.CreateCouponRequest](docs/CreateCouponRequest.md)
 - [SellPassWebApi.CreateDiscordSocialConnect](docs/CreateDiscordSocialConnect.md)
 - [SellPassWebApi.CreateFaqRequest](docs/CreateFaqRequest.md)
 - [SellPassWebApi.CreateGroupRequest](docs/CreateGroupRequest.md)
 - [SellPassWebApi.CreateInvoiceRequest](docs/CreateInvoiceRequest.md)
 - [SellPassWebApi.CreateProductV2Request](docs/CreateProductV2Request.md)
 - [SellPassWebApi.CreateProductV2Variant](docs/CreateProductV2Variant.md)
 - [SellPassWebApi.CreateShopRequest](docs/CreateShopRequest.md)
 - [SellPassWebApi.CreateTicketRequest](docs/CreateTicketRequest.md)
 - [SellPassWebApi.CustomField](docs/CustomField.md)
 - [SellPassWebApi.CustomFieldTypes](docs/CustomFieldTypes.md)
 - [SellPassWebApi.DiscordOauthRequest](docs/DiscordOauthRequest.md)
 - [SellPassWebApi.DiscordSocialConnectSettingsForGetShopResponse](docs/DiscordSocialConnectSettingsForGetShopResponse.md)
 - [SellPassWebApi.DiscordSocialConnectSettingsForProductRequest](docs/DiscordSocialConnectSettingsForProductRequest.md)
 - [SellPassWebApi.DiscordSocialConnectSettingsForVariantProductRequest](docs/DiscordSocialConnectSettingsForVariantProductRequest.md)
 - [SellPassWebApi.DynamicSubscriptionCallbackRequest](docs/DynamicSubscriptionCallbackRequest.md)
 - [SellPassWebApi.DynamicType](docs/DynamicType.md)
 - [SellPassWebApi.DynamicTypeForGetShopResponse](docs/DynamicTypeForGetShopResponse.md)
 - [SellPassWebApi.EditPermissionsRequest](docs/EditPermissionsRequest.md)
 - [SellPassWebApi.FaqDetails](docs/FaqDetails.md)
 - [SellPassWebApi.FeedbackForGetInvoiceResponse](docs/FeedbackForGetInvoiceResponse.md)
 - [SellPassWebApi.GatewayForCreateProductV2Variant](docs/GatewayForCreateProductV2Variant.md)
 - [SellPassWebApi.GatewayForProductResponse](docs/GatewayForProductResponse.md)
 - [SellPassWebApi.GatewayRules](docs/GatewayRules.md)
 - [SellPassWebApi.Gateways](docs/Gateways.md)
 - [SellPassWebApi.GetAnnouncementDetailsResponse](docs/GetAnnouncementDetailsResponse.md)
 - [SellPassWebApi.GetAnnouncementDetailsResponseBaseResponse](docs/GetAnnouncementDetailsResponseBaseResponse.md)
 - [SellPassWebApi.GetAnnouncementPageResponse](docs/GetAnnouncementPageResponse.md)
 - [SellPassWebApi.GetAnnouncementPageResponseBaseResponse](docs/GetAnnouncementPageResponseBaseResponse.md)
 - [SellPassWebApi.GetFaqsDetailsResponse](docs/GetFaqsDetailsResponse.md)
 - [SellPassWebApi.GetFaqsDetailsResponseBaseResponse](docs/GetFaqsDetailsResponseBaseResponse.md)
 - [SellPassWebApi.GetFaqsPageResponse](docs/GetFaqsPageResponse.md)
 - [SellPassWebApi.GetFaqsPageResponseBaseResponse](docs/GetFaqsPageResponseBaseResponse.md)
 - [SellPassWebApi.GetFeedbacksDetailsResponse](docs/GetFeedbacksDetailsResponse.md)
 - [SellPassWebApi.GetFeedbacksDetailsResponseBaseResponse](docs/GetFeedbacksDetailsResponseBaseResponse.md)
 - [SellPassWebApi.GetFeedbacksPageResponse](docs/GetFeedbacksPageResponse.md)
 - [SellPassWebApi.GetFeedbacksPageResponseBaseResponse](docs/GetFeedbacksPageResponseBaseResponse.md)
 - [SellPassWebApi.GetMainDetailsResponse](docs/GetMainDetailsResponse.md)
 - [SellPassWebApi.GetMainDetailsResponseBaseResponse](docs/GetMainDetailsResponseBaseResponse.md)
 - [SellPassWebApi.GetMainPageShopData](docs/GetMainPageShopData.md)
 - [SellPassWebApi.GetProductPageResponse](docs/GetProductPageResponse.md)
 - [SellPassWebApi.GetProductPageResponseBaseResponse](docs/GetProductPageResponseBaseResponse.md)
 - [SellPassWebApi.GetProductsPageResponse](docs/GetProductsPageResponse.md)
 - [SellPassWebApi.GetProductsPageResponseBaseResponse](docs/GetProductsPageResponseBaseResponse.md)
 - [SellPassWebApi.GoogleOauthRequest](docs/GoogleOauthRequest.md)
 - [SellPassWebApi.GroupForListingForGetShopResponse](docs/GroupForListingForGetShopResponse.md)
 - [SellPassWebApi.GroupTypes](docs/GroupTypes.md)
 - [SellPassWebApi.GuildForDiscordSocialConnectSettingsForVariantProducRequest](docs/GuildForDiscordSocialConnectSettingsForVariantProducRequest.md)
 - [SellPassWebApi.Int64BaseResponse](docs/Int64BaseResponse.md)
 - [SellPassWebApi.ItemInListingsData](docs/ItemInListingsData.md)
 - [SellPassWebApi.ListingData](docs/ListingData.md)
 - [SellPassWebApi.ListingSeo](docs/ListingSeo.md)
 - [SellPassWebApi.ListingTypes](docs/ListingTypes.md)
 - [SellPassWebApi.ListingVisibilities](docs/ListingVisibilities.md)
 - [SellPassWebApi.LoginUserBasicRequest](docs/LoginUserBasicRequest.md)
 - [SellPassWebApi.LogoutFromSessionRequest](docs/LogoutFromSessionRequest.md)
 - [SellPassWebApi.MainDetailsInternal](docs/MainDetailsInternal.md)
 - [SellPassWebApi.MainDetailsInternalBaseResponse](docs/MainDetailsInternalBaseResponse.md)
 - [SellPassWebApi.MessageContentTicketRequest](docs/MessageContentTicketRequest.md)
 - [SellPassWebApi.ModifyListingPosition](docs/ModifyListingPosition.md)
 - [SellPassWebApi.ModifyListingsPositionRequest](docs/ModifyListingsPositionRequest.md)
 - [SellPassWebApi.ObjectBaseResponse](docs/ObjectBaseResponse.md)
 - [SellPassWebApi.PartInvoiceForInvoiceRequest](docs/PartInvoiceForInvoiceRequest.md)
 - [SellPassWebApi.Permissions](docs/Permissions.md)
 - [SellPassWebApi.Platforms](docs/Platforms.md)
 - [SellPassWebApi.PostFeedbackRequest](docs/PostFeedbackRequest.md)
 - [SellPassWebApi.Price](docs/Price.md)
 - [SellPassWebApi.PriceData](docs/PriceData.md)
 - [SellPassWebApi.ProductForListingData](docs/ProductForListingData.md)
 - [SellPassWebApi.ProductForListingsData](docs/ProductForListingsData.md)
 - [SellPassWebApi.ProductTypes](docs/ProductTypes.md)
 - [SellPassWebApi.ProductVariantForDynamicSubscriptionCallbackRequest](docs/ProductVariantForDynamicSubscriptionCallbackRequest.md)
 - [SellPassWebApi.ProductVariantForListingData](docs/ProductVariantForListingData.md)
 - [SellPassWebApi.PurchaseSubscriptionRequest](docs/PurchaseSubscriptionRequest.md)
 - [SellPassWebApi.RecheckCashappInvoice](docs/RecheckCashappInvoice.md)
 - [SellPassWebApi.RegiserUserGoogleRequest](docs/RegiserUserGoogleRequest.md)
 - [SellPassWebApi.RegisterUserBasicRequest](docs/RegisterUserBasicRequest.md)
 - [SellPassWebApi.RegisterUserDiscordRequest](docs/RegisterUserDiscordRequest.md)
 - [SellPassWebApi.ReplacementRequest](docs/ReplacementRequest.md)
 - [SellPassWebApi.RequestOtpRequest](docs/RequestOtpRequest.md)
 - [SellPassWebApi.ResendInvoiceRequest](docs/ResendInvoiceRequest.md)
 - [SellPassWebApi.ResetPasswordRequest](docs/ResetPasswordRequest.md)
 - [SellPassWebApi.SellixMigrationRequest](docs/SellixMigrationRequest.md)
 - [SellPassWebApi.SendManagerInviteRequest](docs/SendManagerInviteRequest.md)
 - [SellPassWebApi.SeoRequest](docs/SeoRequest.md)
 - [SellPassWebApi.SerialsTypeForGetShopResponse](docs/SerialsTypeForGetShopResponse.md)
 - [SellPassWebApi.SerialsTypeRequest](docs/SerialsTypeRequest.md)
 - [SellPassWebApi.ServiceTypeForGetShopResponse](docs/ServiceTypeForGetShopResponse.md)
 - [SellPassWebApi.ServicesType](docs/ServicesType.md)
 - [SellPassWebApi.ShopDesignForGetShopResponse](docs/ShopDesignForGetShopResponse.md)
 - [SellPassWebApi.ShopSeo](docs/ShopSeo.md)
 - [SellPassWebApi.ShoppyMigrationRequest](docs/ShoppyMigrationRequest.md)
 - [SellPassWebApi.SocialLinkForGetShopResponse](docs/SocialLinkForGetShopResponse.md)
 - [SellPassWebApi.SocialLinkForRequest](docs/SocialLinkForRequest.md)
 - [SellPassWebApi.StatsForGetShopResponse](docs/StatsForGetShopResponse.md)
 - [SellPassWebApi.TfaCompleteRequest](docs/TfaCompleteRequest.md)
 - [SellPassWebApi.TfaDisableRequest](docs/TfaDisableRequest.md)
 - [SellPassWebApi.VerifyEmailRequest](docs/VerifyEmailRequest.md)
 - [SellPassWebApi.VerifyOtpRequest](docs/VerifyOtpRequest.md)
 - [SellPassWebApi.Warranty](docs/Warranty.md)
 - [SellPassWebApi.WarrantyRequest](docs/WarrantyRequest.md)


## Documentation for Authorization



### Bearer


- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

