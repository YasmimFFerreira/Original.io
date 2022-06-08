export interface Products {
    products: Product[];
}

export interface Product {
    cacheId: string;
    productId: string;
    description: string;
    productName: string;
    productReference: string;
    linkText: string;
    brand: string;
    brandId: number;
    link: string;
    categories: string[];
    categoryId: string;
    priceRange: PriceRange;
    specificationGroups: SpecificationGroup[];
    skuSpecifications: SkuSpecification[];
    properties: Property[];
    items: Item[];
}

export interface Item {
    itemId: string;
    name: string;
    nameComplete: string;
    complementName: string;
    ean: string;
    variations: Property[];
    referenceId: ReferenceID[] | null;
    measurementUnit: string;
    unitMultiplier: number;
    images: Image[];
    __typename: string;
    videos: any[];
    sellers: Seller[];
    kitItems: any[];
    attachments: Attachment[];
    estimatedDateArrival: null;
}

export interface Attachment {
    id: string;
    name: string;
    required: boolean;
    __typename: string;
}

export interface Image {
    cacheId: string;
    imageId: string;
    imageLabel: ImageLabel;
    imageTag: string;
    imageUrl: string;
    imageText: string;
    __typename: ImageTypename;
}

export enum ImageTypename {
    Image = "Image",
}

export enum ImageLabel {
    Frente = "frente",
    Ternocostas = "ternocostas",
}

export interface ReferenceID {
    Key: string;
    Value: string;
    __typename: string;
}

export interface Seller {
    sellerId: string;
    sellerName: string;
    sellerDefault: boolean;
    __typename: string;
    addToCartLink: string;
    commertialOffer: CommertialOffer;
}

export interface CommertialOffer {
    discountHighlights: any[];
    teasers: any[];
    Price: number;
    ListPrice: number;
    Tax: number;
    taxPercentage: number;
    spotPrice: number;
    PriceWithoutDiscount: number;
    RewardValue: number;
    PriceValidUntil: Date;
    AvailableQuantity: number;
    __typename: string;
    CacheVersionUsedToCallCheckout: string;
    Installments: Installment[];
}

export interface Installment {
    Value: number;
    InterestRate: number;
    TotalValuePlusInterestRate: number;
    NumberOfInstallments: number;
    Name: string;
    PaymentSystemName: PaymentSystemName;
    __typename: InstallmentTypename;
}

export enum PaymentSystemName {
    BoletoBancário = "Boleto Bancário",
    CustomerCredit = "Customer Credit",
    PagSeguro = "PagSeguro",
    PicPay = "PicPay",
    Promissoria = "Promissoria",
    Vale = "Vale",
}

export enum InstallmentTypename {
    Installment = "Installment",
}

export interface Property {
    name: Name;
    values: string[];
    __typename: PropertyTypename;
}

export enum PropertyTypename {
    Property = "Property",
}

export enum Name {
    Cor = "Cor",
    Material = "Material",
    Tamanho = "Tamanho",
}

export interface PriceRange {
    sellingPrice: Price;
    listPrice: Price;
    __typename: string;
}

export interface Price {
    highPrice: number;
    lowPrice: number;
    __typename: string;
}

export interface SkuSpecification {
    field: SpecificationGroup;
    values: SpecificationGroup[];
    __typename: string;
}

export interface SpecificationGroup {
    name: string;
    originalName: string;
    __typename: SpecificationGroupTypename;
    specifications?: SpecificationGroup[];
    values?: Value[];
}

export enum SpecificationGroupTypename {
    SKUSpecificationField = "SKUSpecificationField",
    SKUSpecificationValue = "SKUSpecificationValue",
    SpecificationGroup = "SpecificationGroup",
    SpecificationGroupProperty = "SpecificationGroupProperty",
}

export enum Value {
    Algodao = "Algodao",
    Jeans = "Jeans",
    Poliester = "Poliester",
    Veludo = "Veludo",
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toWelcome(json: string): Products {
        return cast(JSON.parse(json), r("Welcome"));
    }

    public static welcomeToJson(value: Products): string {
        return JSON.stringify(uncast(value, r("Welcome")), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any = ''): never {
    if (key) {
        throw Error(`Invalid value for key "${key}". Expected type ${JSON.stringify(typ)} but got ${JSON.stringify(val)}`);
    }
    throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`,);
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) { }
        }
        return invalidValue(typs, val);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases, val);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue("array", val);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue("Date", val);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue("object", val);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, prop.key);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val);
    }
    if (typ === false) return invalidValue(typ, val);
    while (typeof typ === "object" && typ.ref !== undefined) {
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems") ? transformArray(typ.arrayItems, val)
                : typ.hasOwnProperty("props") ? transformObject(getProps(typ), typ.additional, val)
                    : invalidValue(typ, val);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "Welcome": o([
        { json: "products", js: "products", typ: a(r("Product")) },
    ], false),
    "Product": o([
        { json: "cacheId", js: "cacheId", typ: "" },
        { json: "productId", js: "productId", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "productName", js: "productName", typ: "" },
        { json: "productReference", js: "productReference", typ: "" },
        { json: "linkText", js: "linkText", typ: "" },
        { json: "brand", js: "brand", typ: "" },
        { json: "brandId", js: "brandId", typ: 0 },
        { json: "link", js: "link", typ: "" },
        { json: "categories", js: "categories", typ: a("") },
        { json: "categoryId", js: "categoryId", typ: "" },
        { json: "priceRange", js: "priceRange", typ: r("PriceRange") },
        { json: "specificationGroups", js: "specificationGroups", typ: a(r("SpecificationGroup")) },
        { json: "skuSpecifications", js: "skuSpecifications", typ: a(r("SkuSpecification")) },
        { json: "properties", js: "properties", typ: a(r("Property")) },
        { json: "items", js: "items", typ: a(r("Item")) },
    ], false),
    "Item": o([
        { json: "itemId", js: "itemId", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "nameComplete", js: "nameComplete", typ: "" },
        { json: "complementName", js: "complementName", typ: "" },
        { json: "ean", js: "ean", typ: "" },
        { json: "variations", js: "variations", typ: a(r("Property")) },
        { json: "referenceId", js: "referenceId", typ: u(a(r("ReferenceID")), null) },
        { json: "measurementUnit", js: "measurementUnit", typ: "" },
        { json: "unitMultiplier", js: "unitMultiplier", typ: 0 },
        { json: "images", js: "images", typ: a(r("Image")) },
        { json: "__typename", js: "__typename", typ: "" },
        { json: "videos", js: "videos", typ: a("any") },
        { json: "sellers", js: "sellers", typ: a(r("Seller")) },
        { json: "kitItems", js: "kitItems", typ: a("any") },
        { json: "attachments", js: "attachments", typ: a(r("Attachment")) },
        { json: "estimatedDateArrival", js: "estimatedDateArrival", typ: null },
    ], false),
    "Attachment": o([
        { json: "id", js: "id", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "required", js: "required", typ: true },
        { json: "__typename", js: "__typename", typ: "" },
    ], false),
    "Image": o([
        { json: "cacheId", js: "cacheId", typ: "" },
        { json: "imageId", js: "imageId", typ: "" },
        { json: "imageLabel", js: "imageLabel", typ: r("ImageLabel") },
        { json: "imageTag", js: "imageTag", typ: "" },
        { json: "imageUrl", js: "imageUrl", typ: "" },
        { json: "imageText", js: "imageText", typ: "" },
        { json: "__typename", js: "__typename", typ: r("ImageTypename") },
    ], false),
    "ReferenceID": o([
        { json: "Key", js: "Key", typ: "" },
        { json: "Value", js: "Value", typ: "" },
        { json: "__typename", js: "__typename", typ: "" },
    ], false),
    "Seller": o([
        { json: "sellerId", js: "sellerId", typ: "" },
        { json: "sellerName", js: "sellerName", typ: "" },
        { json: "sellerDefault", js: "sellerDefault", typ: true },
        { json: "__typename", js: "__typename", typ: "" },
        { json: "addToCartLink", js: "addToCartLink", typ: "" },
        { json: "commertialOffer", js: "commertialOffer", typ: r("CommertialOffer") },
    ], false),
    "CommertialOffer": o([
        { json: "discountHighlights", js: "discountHighlights", typ: a("any") },
        { json: "teasers", js: "teasers", typ: a("any") },
        { json: "Price", js: "Price", typ: 0 },
        { json: "ListPrice", js: "ListPrice", typ: 0 },
        { json: "Tax", js: "Tax", typ: 0 },
        { json: "taxPercentage", js: "taxPercentage", typ: 0 },
        { json: "spotPrice", js: "spotPrice", typ: 0 },
        { json: "PriceWithoutDiscount", js: "PriceWithoutDiscount", typ: 0 },
        { json: "RewardValue", js: "RewardValue", typ: 0 },
        { json: "PriceValidUntil", js: "PriceValidUntil", typ: Date },
        { json: "AvailableQuantity", js: "AvailableQuantity", typ: 0 },
        { json: "__typename", js: "__typename", typ: "" },
        { json: "CacheVersionUsedToCallCheckout", js: "CacheVersionUsedToCallCheckout", typ: "" },
        { json: "Installments", js: "Installments", typ: a(r("Installment")) },
    ], false),
    "Installment": o([
        { json: "Value", js: "Value", typ: 0 },
        { json: "InterestRate", js: "InterestRate", typ: 0 },
        { json: "TotalValuePlusInterestRate", js: "TotalValuePlusInterestRate", typ: 0 },
        { json: "NumberOfInstallments", js: "NumberOfInstallments", typ: 0 },
        { json: "Name", js: "Name", typ: "" },
        { json: "PaymentSystemName", js: "PaymentSystemName", typ: r("PaymentSystemName") },
        { json: "__typename", js: "__typename", typ: r("InstallmentTypename") },
    ], false),
    "Property": o([
        { json: "name", js: "name", typ: r("Name") },
        { json: "values", js: "values", typ: a("") },
        { json: "__typename", js: "__typename", typ: r("PropertyTypename") },
    ], false),
    "PriceRange": o([
        { json: "sellingPrice", js: "sellingPrice", typ: r("Price") },
        { json: "listPrice", js: "listPrice", typ: r("Price") },
        { json: "__typename", js: "__typename", typ: "" },
    ], false),
    "Price": o([
        { json: "highPrice", js: "highPrice", typ: 0 },
        { json: "lowPrice", js: "lowPrice", typ: 0 },
        { json: "__typename", js: "__typename", typ: "" },
    ], false),
    "SkuSpecification": o([
        { json: "field", js: "field", typ: r("SpecificationGroup") },
        { json: "values", js: "values", typ: a(r("SpecificationGroup")) },
        { json: "__typename", js: "__typename", typ: "" },
    ], false),
    "SpecificationGroup": o([
        { json: "name", js: "name", typ: "" },
        { json: "originalName", js: "originalName", typ: "" },
        { json: "__typename", js: "__typename", typ: r("SpecificationGroupTypename") },
        { json: "specifications", js: "specifications", typ: u(undefined, a(r("SpecificationGroup"))) },
        { json: "values", js: "values", typ: u(undefined, a(r("Value"))) },
    ], false),
    "ImageTypename": [
        "Image",
    ],
    "ImageLabel": [
        "frente",
        "ternocostas",
    ],
    "PaymentSystemName": [
        "Boleto Bancário",
        "Customer Credit",
        "PagSeguro",
        "PicPay",
        "Promissoria",
        "Vale",
    ],
    "InstallmentTypename": [
        "Installment",
    ],
    "PropertyTypename": [
        "Property",
    ],
    "Name": [
        "Cor",
        "Material",
        "Tamanho",
    ],
    "SpecificationGroupTypename": [
        "SKUSpecificationField",
        "SKUSpecificationValue",
        "SpecificationGroup",
        "SpecificationGroupProperty",
    ],
    "Value": [
        "Algodao",
        "Jeans",
        "Poliester",
        "Veludo",
    ],
};
