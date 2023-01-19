# SellPassWebApi.CreateProductV2Variant

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Pass it only if you are editing the existing variant | [optional] 
**title** | **String** | Title of the variant | [optional] 
**description** | **String** | Description of the variant | [optional] 
**priceDetails** | [**Price**](Price.md) |  | [optional] 
**gateways** | [**[GatewayForCreateProductV2Variant]**](GatewayForCreateProductV2Variant.md) | Gateways available for this variant | [optional] 
**productType** | [**ProductTypes**](ProductTypes.md) |  | [optional] 
**asDynamic** | [**DynamicType**](DynamicType.md) |  | [optional] 
**asSerials** | [**SerialsTypeRequest**](SerialsTypeRequest.md) |  | [optional] 
**asService** | [**ServicesType**](ServicesType.md) |  | [optional] 
**customerNote** | **String** | This note will be visible to customer after purchase | [optional] 
**redirectUrl** | **String** | Customer will be redirected to this url after purchase | [optional] 
**customFields** | [**[CustomField]**](CustomField.md) | Custom fields of the variant | [optional] 
**warranty** | [**WarrantyRequest**](WarrantyRequest.md) |  | [optional] 
**discordSocialConnectSettings** | [**DiscordSocialConnectSettingsForVariantProductRequest**](DiscordSocialConnectSettingsForVariantProductRequest.md) |  | [optional] 


