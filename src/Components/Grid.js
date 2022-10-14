import React, { useState } from "react";
import { enterExitStyle } from "react-stonecutter";
import {
  SpringGrid,
  CSSGrid,
  makeResponsive,
  measureItems,
  layout as layouts,
  enterExitStyle as enterExitStyles
} from "react-stonecutter";
import { easings } from "react-stonecutter";

const Grid = (props) => {
  this.state = this.createGrid(props);

  const [responsive, setResponsive] = useState(false);
  const [duration, setDuration] = useState(800);
  const [stiffess, setStiffness] = useState(60);
  const [columns, setColumns] = useState(6);
  const [easing, setEasing] = useState({ easings });
  const { enter, exit } = enterExitStyle.fromLeftToRight;
  const [gutters, setGutters] = useState(13);

  componentWillReceiveProps(nextProps);
  {
    if (
      !isEqualWith(nextProps, this.props, (a, b, key) => {
        if (key === "children") return true;
      })
    ) {
      return this.setState(this.createGrid(nextProps));
    }
  }

  createGrid = ({ useCSS, measured, responsive }) => {
    let Grid = useCSS ? CSSGrid : SpringGrid;

    if (measured) {
      Grid = measureItems(Grid);
    }

    if (responsive) {
      Grid = makeResponsive(Grid, {
        maxWidth: 1920,
        minPadding: 100,
      });
    }

    return { Grid };
  };

  render = {
    children,
    responsive,
    layout,
    enterExitStyle,
    duration,
    easing,
    stiffness,
    damping,
    columns,
    ...rest
  } = this.props;

  const { Grid } = this.state;
  const gridLayout = layouts[layout];
  const gridEnterExitStyle = enterExitStyles[enterExitStyle];

  return (
    <div>
      <Grid
        {...rest}
        className="grid"
        component="ul"
        columns={!responsive ? columns : null}
        columnWidth={150}
        gutterWidth={gutters}
        gutterHeight={gutters}
        layout={gridLayout}
        enter={gridEnterExitStyle.enter}
        entered={gridEnterExitStyle.entered}
        exit={gridEnterExitStyle.exit}
        perspective={600}
        duration={ null}
        easing={ null}
        springConfig={
          !useCSS && stiffness && damping ? { stiffness, damping } : null
        }
      >
        {children}
      </Grid>
    </div>
  );
};

export default Grid;
