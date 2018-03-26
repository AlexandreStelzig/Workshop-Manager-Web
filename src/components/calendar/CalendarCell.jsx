import styled from 'styled-components';
import PropTypes from 'prop-types';

const Cell = styled.div`
  grid-row-start: ${props => (props.rowStart === -1 ? 'auto' : props.rowStart)};
  grid-column-start: ${props => (props.colStart === -1 ? 'auto' : props.colStart)};
  grid-row-end: ${props => (props.rowEnd === -1 ? 'auto' : props.rowEnd)};
  grid-column-end: ${props => (props.colEnd === -1 ? 'auto' : props.colEnd)};
`;
Cell.propTypes = {
  rowStart: PropTypes.number,
  colStart: PropTypes.number,
  rowEnd: PropTypes.number,
  colEnd: PropTypes.number,
  isLastCol: PropTypes.bool,
  isLastRow: PropTypes.bool,
};
Cell.defaultProps = {
  rowStart: -1,
  colStart: -1,
  rowEnd: -1,
  colEnd: -1,
  isLastCol: false,
  isLastRow: false,
};

export const ItemCell = Cell.extend`
  background-color: #0088CC;
  color: white;
  margin-right: 1px;
  margin-bottom: 1px;
  padding: 5px;
`;

const calcBottomWidth = (row, isLastRow) => {
  if (row === 1) return '2px';
  else if (isLastRow) return '0';
  return '1px';
};

export const BackgroundCell = Cell.extend`
  z-index: -1;
  border-style: solid;
  border-top-width: 0;
  border-right-width: ${props => (props.isLastCol ? '0' : '1px')};
  border-bottom-width: ${props => (calcBottomWidth(props.rowStart, props.isLastRow))};
  border-left-width: 0;
  border-color: #dddddd;
`;

export const HeaderCell = BackgroundCell.extend`
  text-align: center;
  font-weight: bold;
`;
