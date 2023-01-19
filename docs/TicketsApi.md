# SellPassWebApi.TicketsApi

All URIs are relative to *https://dev.sellpass.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**selfShopIdTicketsGet**](TicketsApi.md#selfShopIdTicketsGet) | **GET** /self/{shopId}/tickets | 
[**selfShopIdTicketsTicketIdClosePost**](TicketsApi.md#selfShopIdTicketsTicketIdClosePost) | **POST** /self/{shopId}/tickets/{ticketId}/close | 
[**selfShopIdTicketsTicketIdGet**](TicketsApi.md#selfShopIdTicketsTicketIdGet) | **GET** /self/{shopId}/tickets/{ticketId} | 
[**selfShopIdTicketsTicketIdMessagePost**](TicketsApi.md#selfShopIdTicketsTicketIdMessagePost) | **POST** /self/{shopId}/tickets/{ticketId}/message | 



## selfShopIdTicketsGet

> selfShopIdTicketsGet(shopId, opts)



### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.TicketsApi();
let shopId = 56; // Number | 
let opts = {
  'pageNumber': 56, // Number | 
  'pageSize': 56, // Number | 
  'searchString': "searchString_example" // String | 
};
apiInstance.selfShopIdTicketsGet(shopId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shopId** | **Number**|  | 
 **pageNumber** | **Number**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **searchString** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## selfShopIdTicketsTicketIdClosePost

> selfShopIdTicketsTicketIdClosePost(shopId, ticketId)



### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.TicketsApi();
let shopId = 56; // Number | 
let ticketId = 789; // Number | 
apiInstance.selfShopIdTicketsTicketIdClosePost(shopId, ticketId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shopId** | **Number**|  | 
 **ticketId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## selfShopIdTicketsTicketIdGet

> selfShopIdTicketsTicketIdGet(shopId, ticketId)



### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.TicketsApi();
let shopId = 56; // Number | 
let ticketId = 789; // Number | 
apiInstance.selfShopIdTicketsTicketIdGet(shopId, ticketId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shopId** | **Number**|  | 
 **ticketId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## selfShopIdTicketsTicketIdMessagePost

> selfShopIdTicketsTicketIdMessagePost(shopId, ticketId, opts)



### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.TicketsApi();
let shopId = 56; // Number | 
let ticketId = 789; // Number | 
let opts = {
  'messageContentTicketRequest': new SellPassWebApi.MessageContentTicketRequest() // MessageContentTicketRequest | 
};
apiInstance.selfShopIdTicketsTicketIdMessagePost(shopId, ticketId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shopId** | **Number**|  | 
 **ticketId** | **Number**|  | 
 **messageContentTicketRequest** | [**MessageContentTicketRequest**](MessageContentTicketRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: Not defined

