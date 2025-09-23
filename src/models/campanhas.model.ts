export type campanhasDataModel = {
  id: string;
  name: string;
  adress: string;
  scheduledDate: {
    initialTime: number;
    entTime: number;
  };
  location: {
    stateAbbreviation: string;
    state: string;
    city: string;
  };
  status: string;
  locationType: string;
  bloodTypePriority: string;
};
