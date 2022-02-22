import { useRef } from 'react';
import styled from 'styled-components';

import Button from '../ui/Button';

export default function PlacesSearch(props) {
  const yearRef = useRef();
  const monthRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const year = yearRef.current.value;
    const month = monthRef.current.value;

    props.onSearch(year, month);
  };

  return (
    <PlacesSearchWrapper onSubmit={submitHandler}>
      <div className="selects">
        <div>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthRef}>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <Button>Find Places</Button>
    </PlacesSearchWrapper>
  );
}

const PlacesSearchWrapper = styled.form`
  padding: 10px 3vw;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div.selects {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  label {
    padding: 5px;
  }
`;
