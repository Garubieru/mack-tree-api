import { BmwKeys } from '@enums/BmwKeys';
import { IBmw } from '@interfaces/Bmw';
import { IData } from '@interfaces/Data';

export const parseData = (filteredData: IBmw[], key: BmwKeys) => {
  const data: IData[] = [];

  filteredData.forEach((item) => {
    const itemName = String(item[key]);
    const dataIndex = data.findIndex((val) => val.name === itemName);
    if (dataIndex === -1) {
      data.push({ name: itemName, value: 100 });
      return;
    }
    data[dataIndex].value += 100;
  });

  return data;
};
