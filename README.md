# react-stylegrid
Lightweight CSS Grid implementation for React.

## Install
```sh
yarn add react-stylegrid

// or

npm install react-stylegrid
```

## Usage
### Example
```jsx
<Grid>
  <Col size={3}></Col>
  <Col size={6}>
    <h1>Example</h1>
    <h2>This is an example column in the center</h2>
  </Col>
  <Col size={3}></Col>
</Grid>
```

### Grid
The `Grid` component is the main container for the grid. It should contain all columns and rows.

| Prop | Description | Default Value |
| ---- | ----------- | ------------- |
| cols | Amount of columns in a row. | 12 |
| colSize | Size of each column. | '1fr' |
| rowSize | Size of each row. | 'auto' |
| colGap | Size of gap between each column. | 0 |
| rowGap | Size of gap between each row. | 0 |

```jsx
<Grid>
  {/* ... */}
</Grid>
```

### Col
The `Col` component is a column in the grid, the main building-block in a CSS Grid system.

| Prop | Description | Default Value |
| ---- | ----------- | ------------- |
| size | Span size (amount of grid spaces this column spans). | 'auto' |
| start | Start position within the grid. | 'auto' |
| end | End position within the grid. | 'auto' |

```jsx
<Grid>
  <Col></Col>
</Grid>
```

### Row
The `Row` component is a row in the grid, which contains columns.

| Prop | Description | Default Value |
| ---- | ----------- | ------------- |
| size | Span size (amount of grid spaces this row spans). | 'auto' |
| start | Start position within the grid. | 'auto' |
| end | End position within the grid. | 'auto' |

```jsx
<Grid>
  <Row>
    <Col></Col>
    <Col></Col>
    <Col></Col>
  </Row>
</Grid>
```
