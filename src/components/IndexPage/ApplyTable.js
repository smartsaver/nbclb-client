import React, { Component } from 'react'

/**
 * Table Component
 * @param {string[]} header - Header of the table
 * @param {object[]} body
 *
 */

 const tableStyle = {
  borderWidth: "0 0 2px",
  color: "#363636",
  boxSizing: "inherit",
  backgroundColor: "transparent",
  borderCollapse: "collapse",
  borderSpacing: "0",
  backgroundColor: "#fff",
  width: "100%",
  textAlign: "center",
 }

class Table extends Component {
  renderHeaders = () => {
    return this.props.headers.map(header => {
      return <th key={header}>{header}</th>
    })
  }

  renderContent = () => {
    return this.props.content.map(element => {
      return (
        <tr key={element.city}>
          <th dangerouslySetInnerHTML={{ __html: element.city }} />
          <td dangerouslySetInnerHTML={{ __html: element.dateAndTime }} />
          <td dangerouslySetInnerHTML={{ __html: element.location }} />
        </tr>
      )
    })
  }

  render() {
    return (
      <table style={tableStyle}>
        <thead>
          <tr>{this.renderHeaders()}</tr>
        </thead>
        <tbody>{this.renderContent()}</tbody>
      </table>
    )
  }
}

export default Table
