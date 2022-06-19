import React, { useEffect, useState } from "react";
import { DEFAULT_FILTERS } from "../utils";
import { isEmpty } from "lodash";

export default function useProductFilteredData(products) {
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  useEffect(() => {
    getProductData(filters);
  }, [filters.search, filters.filter]);

  const getSearchedData = (searchText, prevData) => {
    const data =
      prevData?.length &&
      prevData.filter((item) => {
        return ["name", "color", "type"].some((newItem) => {
          return (
            item.item[newItem]
              .toString()
              .toLowerCase()
              .indexOf(searchText.toLowerCase()) > -1
          );
        });
      });
    return data;
  };

  const getFilterTagData = (filter, prevData) => {
    const isPrice_250 = filter.includes("250");
    const isPrice_450 = filter.includes("450");
    const isPrice_500 = filter.includes("500");
    const data = prevData.filter((filti) => {
      if (isPrice_250 && filti?.item?.price <= 250) return filti;
      else if (
        isPrice_450 &&
        filti?.item?.price > 250 &&
        filti?.item?.price <= 450
      )
        return filti;
      else if (isPrice_500 && filti?.item?.price > 450) return filti;
    });
    const data1 = prevData.filter((product) => {
      let result = [
        product.item?.gender,
        product.item?.color,
        product.item?.type,
      ].some((i) => filter.includes(i));
      if (result) return product;
    });
    const result = [...data, ...data1];
    return result;
  };

  const getProductData = (filters) => {
    const { search, filter, filterType } = filters;
    if (search === "" && isEmpty(filter)) {
      setFilteredData(products);
    } else if (search !== "" && isEmpty(filter)) {
      setFilteredData([...getSearchedData(search, products)]);
    } else if (search === "" && !isEmpty(filter)) {
      setFilteredData(getFilterTagData(filter, products));
    } else if (search !== "" && !isEmpty(filter)) {
      if (filterType === "filter") {
        const data = getSearchedData(search, products);
        setFilteredData(getFilterTagData(filter, data));
      } else if (filterType === "search") {
        const data = getFilterTagData(filter, products);
        setFilteredData(getSearchedData(search, data));
      }
    }
  };

  return {
    filteredData,
    filters,
    setFilters,
    setFilteredData,
  };
}
