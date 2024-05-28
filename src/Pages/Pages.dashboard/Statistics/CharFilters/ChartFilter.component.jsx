import styled from "styled-components";

const FilterContainer = styled.div`
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  align-items: center;
  justify-content: center;
  background: #202123;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileFilterContainer = styled.div`
  display: none;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileFilterInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Select = styled.select`
  padding: 8px;
  font-size: 14px;
  border: 2px solid #202123;
  border-radius: 8px;
  outline: none;
  width: 100%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s;

  &:hover,
  &:focus {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  }
`;

const Input = styled.input`
  padding: 8px;
  font-size: 14px;
  border: 2px solid #202123;
  border-radius: 8px;
  outline: none;
  width: 100%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s;

  &:hover,
  &:focus {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  }
`;

const ChartFilters = ({
  chartType,
  selectedFilter,
  handleChartTypeChange,
  handleFilterChange,
  startDate,
  endDate,
  minPrice,
  maxPrice,
  minTickets,
  maxTickets,
  handleStartDateChange,
  handleEndDateChange,
  handleMinPriceChange,
  handleMaxPriceChange,
  handleMinTicketsChange,
  handleMaxTicketsChange,
}) => {
  const renderFilterInputs = () => {
    switch (selectedFilter) {
      case "date":
        return (
          <>
            <Input
              type="date"
              value={startDate}
              onChange={handleStartDateChange}
              placeholder="Start Date"
            />
            <Input
              type="date"
              value={endDate}
              onChange={handleEndDateChange}
              placeholder="End Date"
            />
          </>
        );
      case "price":
        return (
          <>
            <Input
              type="number"
              value={minPrice}
              onChange={handleMinPriceChange}
              placeholder="Min Price"
            />
            <Input
              type="number"
              value={maxPrice}
              onChange={handleMaxPriceChange}
              placeholder="Max Price"
            />
          </>
        );
      case "tickets":
        return (
          <>
            <Input
              type="number"
              value={minTickets}
              onChange={handleMinTicketsChange}
              placeholder="Min Tickets Sold"
            />
            <Input
              type="number"
              value={maxTickets}
              onChange={handleMaxTicketsChange}
              placeholder="Max Tickets Sold"
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <FilterContainer>
        <Select value={chartType} onChange={handleChartTypeChange}>
          <option value="Line">Line Chart</option>
          <option value="Bar">Bar Chart</option>
          <option value="Pie">Pie Chart</option>
          <option value="Doughnut">Doughnut Chart</option>
          <option value="Radar">Radar Chart</option>
          <option value="PolarArea">Polar Area Chart</option>
        </Select>
        {renderFilterInputs()}
      </FilterContainer>

      <MobileFilterContainer>
        <Select value={chartType} onChange={handleChartTypeChange}>
          <option value="Line">Line Chart</option>
          <option value="Bar">Bar Chart</option>
          <option value="Pie">Pie Chart</option>
          <option value="Doughnut">Doughnut Chart</option>
          <option value="Radar">Radar Chart</option>
          <option value="PolarArea">Polar Area Chart</option>
        </Select>
        <Select value={selectedFilter} onChange={handleFilterChange}>
          <option value="">Select Filter</option>
          <option value="date">Date Range</option>
          <option value="price">Price Range</option>
          <option value="tickets">Tickets Sold Range</option>
        </Select>
        {selectedFilter && (
          <MobileFilterInputs>{renderFilterInputs()}</MobileFilterInputs>
        )}
      </MobileFilterContainer>
    </>
  );
};

export default ChartFilters;
