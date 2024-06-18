using { com.hemanth.satinfotech as db } from '../db/schema';
using { API_PRODUCT_SRV as productapi} from './external/API_PRODUCT_SRV';

service satinfotech {
    entity Branch as projection on db.Branch;
    entity Staff as projection on db.Staff;
    entity Products as projection on productapi.A_Product{
    Product, 
    ProductType,
    BaseUnit,
    ProductGroup
}
}

annotate satinfotech.Branch with @odata.draft.enabled;
annotate satinfotech.Staff with @odata.draft.enabled;

