import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import theme from '../../theme';
import options from '../../assets/dashboard/options.svg';

const Wrapper = styled.div`
  width: 100%;
  overflow: auto;
  border: 2px solid #f2f2f2;
  border-collapse: collapse;
  border-top: none;
  border-bottom: none;
  background-color: #ffffff;
  border-radius: 0.3rem;
`;

const Table = styled.table`
  table-layout: auto;
  width: 100%;
  border-collapse: collapse;

  tr {
    border: 2px solid #f2f2f2;
    border-right: none;
    border-left: none;
    border-collapse: collapse;
  }

  th {
    color: #5c5c5c;
    padding-left: 1.5rem;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    white-space: nowrap;
    font-size: 0.8rem;
    font-weight: normal;
    text-align: left;
    text-transform: capitalize;
  }

  td {
    color: #050505;
    padding-left: 1.5rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    white-space: nowrap;
    font-size: 0.8rem;
    position: relative;

    .options {
      cursor: pointer;

      &.entity {
        position: absolute;
        right: 1.5rem;
      }
    }
  }
`;

const tableHeadersEmployees = [
  'Name',
  `Tax Payer's ID`,
  'Basic Salary',
  'monthly tax'
];
// const tableHeadersEntities = ['Entity', `Tax Payer's ID`];

const modelEmployees = ['name', 'payerID', 'basicSalary', 'monthlyTax'];
// const modelEntities = ['entity', 'payerID'];

const DataTable = ({ employees, entities, handleCheckboxChange }) => {
  const tableBodyEmployees = employees && [
    {
      name: 'Jones Dermot',
      payerID: '089778900078',
      basicSalary: 'N500,000',
      monthlyTax: 'N25,000'
    },
    ...employees
  ];

  const tableBodyEntities = entities && [
    {
      entity: 'School',
      payerID: '325453246'
    },
    ...entities
  ];

  const checkAll = (e) => {
    if (e.target.checked) {
      document
        .querySelectorAll('input[type="checkbox"]')
        .forEach((checkbox) => {
          if (!checkbox.checked) {
            checkbox.click();
          }
        });
    }
  };

  return (
    <Wrapper>
      {!entities && (
        <Table>
          <thead>
            <tr>
              <th>
                <input type="checkbox" onChange={checkAll} />
              </th>
              {tableHeadersEmployees.map((header) => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableBodyEmployees.map((rowData) => (
              <tr key={rowData.payerID}>
                <td>
                  <input type="checkbox" onChange={handleCheckboxChange} />
                </td>
                {modelEmployees.map((item) => (
                  <td key={item}>{rowData[item]}</td>
                ))}
                <td>
                  <img className="options" src={options} alt="" />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      {entities && (
        <Table>
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  style={{ marginRight: '1.5rem' }}
                  onChange={checkAll}
                />
                <span>entity</span>
              </th>
              <th>Tax Payer's ID</th>
            </tr>
          </thead>
          <tbody>
            {tableBodyEntities.map((rowData) => (
              <tr key={rowData.payerID}>
                <td>
                  <input
                    type="checkbox"
                    style={{ marginRight: '1.5rem' }}
                    onChange={handleCheckboxChange}
                  />
                  <span>{rowData['entity']}</span>
                </td>
                <td>
                  <span>{rowData['payerID']}</span>
                  <img className="options entity" src={options} alt="" />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Wrapper>
  );
};

DataTable.propTypes = {
  employees: PropTypes.array,
  entities: PropTypes.array,
  handleCheckboxChange: PropTypes.func
};

export default DataTable;
