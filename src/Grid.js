import React from 'react';
// import Trailer from './Trailer';

const Grid = ({ config, data }) => (
  <table>
    <thead>
      <tr>
      {
        config.map((item, index) => <th key={index}>{item.title}</th>)
      }
      </tr>
    </thead>
    <tbody>
    {
      data.map(row =>
        <tr key={row.imdbID}>
          <td>{row.imdbID}</td>
          <td>{row.Title}</td>
          <td>{row.imdbRating}</td>
          <td>{config.filter(item => item.component).map(comp => <comp.component data={row.Trailer} />)}</td>
        </tr>
      )
    }
    </tbody>
  </table>
);

export default Grid;