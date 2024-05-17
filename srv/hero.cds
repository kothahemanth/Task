using { com.hemanth.satinfotech as db } from '../db/schema';

service satinfotech {
    entity Branch as projection on db.Branch;
    entity Staff as projection on db.Staff;
}

annotate satinfotech.Branch with @odata.draft.enabled;
annotate satinfotech.Staff with @odata.draft.enabled;

