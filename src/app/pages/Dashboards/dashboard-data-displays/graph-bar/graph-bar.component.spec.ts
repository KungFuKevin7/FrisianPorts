import {GraphBarComponent} from "./graph-bar.component";
import {PeriodService} from "../../../../services/dashboard-services/period.service";
import {TransportedCargoDTO} from "../../../../models/DTO/TransportedCargoDTO";

const testCorrectData : TransportedCargoDTO[] = [
  {
    "cargo_Type_Name": "Import",
    "transported_Weight": 730000,
  },
  {
    "cargo_Type_Name": "Import",
    "transported_Weight": 70000,
  },
  {
    "cargo_Type_Name": "import",
    "transported_Weight": 1900,
  },
  {
    "cargo_Type_Name": "Export",
    "transported_Weight": 87000,
  },
  {
    "cargo_Type_Name": "export",
    "transported_Weight": 1900,
  },
  {
    "cargo_Type_Name": "eXpOrT",
    "transported_Weight": 4888,
  }
];

const testIncorrectData : TransportedCargoDTO[] = [
  {
    "cargo_Type_Name": "Export",
    "transported_Weight": 87000,
  },
  {
    "cargo_Type_Name": "export",
    "transported_Weight": 1900,
  },
  {
    "cargo_Type_Name": "eXpOrT",
    "transported_Weight": 4888,
  },
  {
    "cargo_Type_Name": "TEU Containers",
    "transported_Weight": 50000,
  }
];
const testIncorrectData2 : TransportedCargoDTO[] = [];

describe("Check whether only Import data is handled", () => {
  it('should only take import into account', function () {
    let ps! : PeriodService;
    const graphComponent = new GraphBarComponent(ps)

    const result = graphComponent.sumTonnage(testCorrectData, "Import");

    expect(result).toBe(801900)
  });
})

describe("Check whether only Export data is handled", () => {
  it('should only sum up export into account', function () {
    let ps! : PeriodService;
    const graphComponent = new GraphBarComponent(ps)

    const result = graphComponent.sumTonnage(testCorrectData, "Export");

    expect(result).toBe(93788)
  });
})

describe("Check if function returns 0", () => {
  it('should return 0, when requested data is not available without issue.', function () {
    let ps! : PeriodService;
    const graphComponent = new GraphBarComponent(ps)

    const result = graphComponent.sumTonnage(testIncorrectData, "Import");

    expect(result).toBe(0)
  });
})

describe("Check if function doesn't crash when an empty array is given", () => {
  it('should return 0, when requested data is not available. Should not return null or undefined ', function () {
    let ps! : PeriodService;
    const graphComponent = new GraphBarComponent(ps)

    let result = graphComponent.sumTonnage(testIncorrectData2, "Import");
        result += graphComponent.sumTonnage(testIncorrectData2, "Export");
    expect(result).toBe(0)
  });
})
