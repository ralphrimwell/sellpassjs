# SellPassWebApi.CreateProductV2Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **String** | Title of the product | 
**shortDescription** | **String** | Short Description of the product | [optional] 
**description** | **String** | Description of the product | 
**variants** | [**[CreateProductV2Variant]**](CreateProductV2Variant.md) | At least 1 variant is required | 
**path** | **String** | Path/Slug of the product | 
**seo** | [**SeoRequest**](SeoRequest.md) |  | 
**unlisted** | **Boolean** | Is product unlisted | 
**_private** | **Boolean** | Is product private | 
**onHold** | **Boolean** | Is product on hold | 


