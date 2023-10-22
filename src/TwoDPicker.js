import React from 'react';
import { useState } from 'react';

import styled from 'styled-components';
import convert from 'color-convert';
import { colors } from './constants/colors'

const TwoDPicker = (props) => {

  return (

    <StyledTwoDPicker>
      <div className='controlPanel' style={{ padding: '10px' }}>
        <div className='colorSquare'>
          <>
            {Array.from({ length: 64 }, (_, index) => index).map((i) =>
              <><div className='colorRow'>
                {
                  Array.from({ length: 64 }, (_, index) => index).map((j) => (
                    (
                      (props.shape === 'RGB' &&
                        <RgbColorElement {...props}
                          i={i} j={j}
                        />)
                        
                      ||

                      (props.shape === 'CMYK' &&
                      <CmykColorElement {...props}
                        i={i} j={j}
                      />)
                    ||

                      (
                        props.shape === 'HSV' &&
                        <HsvColorElement {...props}
                          i={i} j={j}
                        />)
                      || (
                        (
                          props.shape === 'HSL' &&
                          <HslColorElement {...props}
                            i={i} j={j}
                          />)
                      )
                    )
                  )

                  )
                }
              </div></>
            )}
          </>
        </div>
      </div>
    </StyledTwoDPicker>
  );

}

export default TwoDPicker;

const StyledTwoDPicker = styled.div`
position:relative;
 .colorSquare{
  border: 1px solid #000000;
    width:320px;
    height:320px;
    .colorRow{
      display:flex;
      flex-direction:row;
    }
    .colorElement{
      height:5px;
      width:5px;
    }
 }
`;

const RgbColorElement = (props) => {
  const getRgbElementColor = (mainElement, i, j, focusR, focusG, focusB) => {
    let isOnVerticalLine = false
    let isOnHorizontalLine = false

    switch (mainElement) {
      case 'R':
        isOnVerticalLine = (j * 4 >= focusB - 3) && (j * 4 < Math.round(focusB) + 1)
        isOnHorizontalLine = (255 - i * 4 >= focusG) && (255 - i * 4 < Math.round(focusG) + 4)
        return (
          isOnVerticalLine ?
            colors['B'] :
            isOnHorizontalLine ?
              colors['G'] :
              '#' + convert.rgb.hex([focusR, 255 - i * 4, j * 4])
        )
      case 'G':
        isOnVerticalLine = (j * 4 >= focusR - 3) && (j * 4 < Math.round(focusR) + 1)
        isOnHorizontalLine = (255 - i * 4 >= focusB) && (255 - i * 4 < Math.round(focusB) + 4)
        return (
          isOnVerticalLine ?
            colors['R'] :
            isOnHorizontalLine ?
              colors['B'] :
              '#' + convert.rgb.hex([j * 4, focusG, 255 - i * 4])
        )
      case 'B':
        isOnVerticalLine = (j * 4 >= focusG - 3) && (j * 4 < Math.round(focusG) + 1)
        isOnHorizontalLine = (255 - i * 4 >= focusR) && (255 - i * 4 < Math.round(focusR) + 4)
        return (
          isOnVerticalLine ?
            colors['G'] :
            isOnHorizontalLine ?
              colors['R'] :
              '#' + convert.rgb.hex([255 - i * 4, j * 4, focusB])
        )
      default:
    }
  }

  const handleClick = (i, j) => {
    let r = props.focusR
    let g = props.focusG
    let b = props.focusB
    switch (props.rgbMainElement) {
      case 'R':
        g = 255 - i * 4
        b = j * 4
        break;
      case 'G':
        b = 255 - i * 4
        r = j * 4
        break;
      case 'B':
        r = 255 - i * 4
        g = j * 4
        break;
      default:
    }
    props.handleClick(r, g, b)
  }

  return (
    <ColorElement
      {...props}
      getElementColor={getRgbElementColor(props.rgbMainElement, props.i, props.j, props.focusR, props.focusG, props.focusB)}
      onClick={() => { handleClick(props.i, props.j) }}
    />
  )
}

const CmykColorElement = (props) => {
  const getCmykElementColor = (mainElement, i, j, focusR, focusG, focusB) => {
    let isOnVerticalLine = false
    let isOnHorizontalLine = false

    switch (mainElement) {
      case 'C':
        isOnVerticalLine = (j * 4 >= focusB - 3) && (j * 4 < Math.round(focusB) + 1)
        isOnHorizontalLine = (255 - i * 4 >= focusG) && (255 - i * 4 < Math.round(focusG) + 4)
        return (
          isOnVerticalLine ?
            colors['Y'] :
            isOnHorizontalLine ?
              colors['M'] :
              '#' + convert.rgb.hex([focusR, 255 - i * 4, j * 4])
        )
      case 'M':
        isOnVerticalLine = (j * 4 >= focusR - 3) && (j * 4 < Math.round(focusR) + 1)
        isOnHorizontalLine = (255 - i * 4 >= focusB) && (255 - i * 4 < Math.round(focusB) + 4)
        return (
          isOnVerticalLine ?
            colors['C'] :
            isOnHorizontalLine ?
              colors['Y'] :
              '#' + convert.rgb.hex([j * 4, focusG, 255 - i * 4])
        )
      case 'Y':
        isOnVerticalLine = (j * 4 >= focusG - 3) && (j * 4 < Math.round(focusG) + 1)
        isOnHorizontalLine = (255 - i * 4 >= focusR) && (255 - i * 4 < Math.round(focusR) + 4)
        return (
          isOnVerticalLine ?
            colors['M'] :
            isOnHorizontalLine ?
              colors['C'] :
              '#' + convert.rgb.hex([255 - i * 4, j * 4, focusB])
        )
      default:
    }
  }

  const handleClick = (i, j) => {
    let r = props.focusR
    let g = props.focusG
    let b = props.focusB
    switch (props.cmykMainElement) {
      case 'C':
        g = 255 - i * 4
        b = j * 4
        break;
      case 'M':
        b = 255 - i * 4
        r = j * 4
        break;
      case 'Y':
        r = 255 - i * 4
        g = j * 4
        break;
      default:
    }
    props.handleClick(r, g, b)
  }

  return (
    <ColorElement
      {...props}
      getElementColor={getCmykElementColor(props.cmykMainElement, props.i, props.j, props.focusR, props.focusG, props.focusB)}
      onClick={() => { handleClick(props.i, props.j) }}
    />
  )
}

const HsvColorElement = (props) => {

  const getHsvElementColor = (mainElement, i, j, focusH, focusHsvS, focusV) => {
    let isOnVerticalLine = false
    let isOnHorizontalLine = false
    switch (mainElement) {
      case 'H':
        isOnVerticalLine = (j * 100 / 64 >= focusHsvS - 1.57) && (j * 100 / 64 < Math.round(focusHsvS) + 0.01)
        isOnHorizontalLine = (100 - i * 100 / 64 >= focusV) && (100 - i * 100 / 64 < Math.round(focusV) + 1.6)
        return (
          isOnVerticalLine ?
            colors['K'] :
            isOnHorizontalLine ?
              colors['K'] :
              '#' + convert.hsv.hex([focusH, j * 100 / 64, 100 - i * 100 / 64])
        )
      case 'S':
        isOnVerticalLine = (j * 360 / 64 >= focusH - 5.7) && (j * 360 / 64 < Math.round(focusH) + 0.1)
        isOnHorizontalLine = (100 - i * 100 / 64 >= focusV) && (100 - i * 100 / 64 < Math.round(focusV) + 1.6)
        return (
          isOnVerticalLine ?
            colors['K'] :
            isOnHorizontalLine ?
              colors['W'] :
              '#' + convert.hsv.hex([j * 360 / 64, focusHsvS, 100 - i * 100 / 64])
        )
      case 'V':
        let [x, y] = [j - 32 + 0.5, 32 - i - 0.5]
        let [radius, angle] = getPolarPosition(x, y)
        let isOnRadialLine =
          angle * 360 / (2 * Math.PI) > (focusH - 29 / radius) &&
          angle * 360 / (2 * Math.PI) < ((Math.round(focusH))) + 29 / radius
        let isOnCircleLine =
          radius * 100 / 32 >= focusHsvS - 1.8 &&
          radius * 100 / 32 < Math.round(focusHsvS) + 1.1
        return (
          radius > 32.05 ?
            colors['W'] :
            isOnRadialLine && !(x === 0 && y === 0) ?
              colors['K'] :
              isOnCircleLine ?
                colors['W'] :
                '#' + convert.hsv.hex([angle * 360 / (2 * Math.PI), radius * 100 / 32, focusV])
        )
      default:
    }
  }

  const handleClick = (i, j) => {
    let h = props.focusH
    let hsvS = props.focusHsvS
    let v = props.focusV
    switch (props.hsvMainElement) {
      case 'H':
        hsvS = Math.round(j * 100 / 64)
        v = Math.round((64 - i) * 100 / 64)
        break;
      case 'S':
        h = j * 360 / 64
        v = (64 - i) * 100 / 64
        break;
      case 'V':
        let [x, y] = [j - 32, 32 - i]
        let [radius, angle] = getPolarPosition(x, y)
        h = angle * 360 / (2 * Math.PI)
        hsvS = radius * 100 / 32
        break;
      default:
    }
    let [r, g, b] = convert.hsv.rgb([h, hsvS, v])
    props.handleClick(r, g, b)
  }

  return (
    <ColorElement
      {...props}
      getElementColor={getHsvElementColor(props.hsvMainElement, props.i, props.j, props.focusH, props.focusHsvS, props.focusV)}
      onClick={() => { handleClick(props.i, props.j) }}
    />
  )
}

const HslColorElement = (props) => {
  const getHslElementColor = (mainElement, i, j, focusH, focusS, focusL) => {
    let isOnVerticalLine = false
    let isOnHorizontalLine = false

    switch (mainElement) {
      case 'H':
        isOnVerticalLine = (j * 100 / 64 >= focusS - 1.57) && (j * 100 / 64 < Math.round(focusS) + 0.01)
        isOnHorizontalLine = (100 - i * 100 / 64 >= focusL) && (100 - i * 100 / 64 < Math.round(focusL) + 1.6)
        return (
          isOnVerticalLine ?
            colors['K'] :
            isOnHorizontalLine ?
              colors['K'] :
              '#' + convert.hsl.hex([focusH, j * 100 / 64, 100 - i * 100 / 64])
        )
      case 'S':
        isOnVerticalLine = (j * 360 / 64 >= focusH - 5.7) && (j * 360 / 64 < Math.round(focusH) + 0.1)
        isOnHorizontalLine = (100 - i * 100 / 64 >= focusL) && (100 - i * 100 / 64 < Math.round(focusL) + 1.6)
        return (
          isOnVerticalLine ?
            colors['K'] :
            isOnHorizontalLine ?
              colors['W'] :
              '#' + convert.hsl.hex([j * 360 / 64, focusS, 100 - i * 100 / 64])
        )
      case 'L':
        let [x, y] = [j - 32 + 0.5, 32 - i - 0.5]
        let [radius, angle] = getPolarPosition(x, y)
        let isOnRadialLine =
          angle * 360 / (2 * Math.PI) > (focusH - 29 / radius) &&
          angle * 360 / (2 * Math.PI) < ((Math.round(focusH))) + 29 / radius
        let isOnCircleLine =
          radius * 100 / 32 >= focusS - 1.8 &&
          radius * 100 / 32 < Math.round(focusS) + 1.4
        return (
          radius > 32.05 ?
            colors['W'] :
            isOnRadialLine && !(x === 0 && y === 0) ?
              colors['K'] :
              isOnCircleLine ?
                colors['W'] :
                '#' + convert.hsl.hex([angle * 360 / (2 * Math.PI), radius * 100 / 32, focusL])

        )
      default:
    }
  }

  const handleClick = (i, j) => {
    let h = props.focusH
    let s = props.focusS
    let l = props.focusL
    switch (props.hslMainElement) {
      case 'H':
        s = Math.round(j * 100 / 64)
        l = Math.round((64 - i) * 100 / 64)
        break;
      case 'S':
        h = j * 360 / 64
        l = (64 - i) * 100 / 64
        break;
      case 'L':
        let [x, y] = [j - 32, 32 - i]
        let [radius, angle] = getPolarPosition(x, y)
        h = angle * 360 / (2 * Math.PI)
        s = radius * 100 / 32
        break;
      default:
    }
    let [r, g, b] = convert.hsl.rgb([h, s, l])
    props.handleClick(r, g, b)
  }

  return (
    <ColorElement
      {...props}
      getElementColor={getHslElementColor(props.hslMainElement, props.i, props.j, props.focusH, props.focusS, props.focusL)}
      onClick={() => { handleClick(props.i, props.j) }}
    />
  )
}

const ColorElement = (props) => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div
      className='colorElement'
      style={{
        backgroundColor: props.getElementColor,
        opacity: isHovered ? 0.3 : 1,
        cursor: isActive(props.hsvMainElement, props.i, props.j) ? 'pointer' : 'default'
      }}
      onClick={props.onClick}
      onMouseOver={() => { setIsHovered(true) }}
      onMouseOut={() => { setIsHovered(false) }}
    />
  )
}

const getAngle = (x, y) => {
  if (x > 0) {
    return Math.PI / 2 - Math.atan(y / Math.abs(x))
  } else if (x < 0) {
    return Math.PI * 3 / 2 + Math.atan(y / Math.abs(x))
  } else if (x === 0) {
    return y >= 0 ? 0 : Math.PI
  }
}

const getRadius = (x, y) => {
  return Math.sqrt(Math.pow((y), 2) + Math.pow((x), 2));
}

const getPolarPosition = (x, y) => {
  const radius = getRadius(x, y);
  const angle = getAngle(x, y)

  return [radius, angle]
}

const isActive = (mainElement, i, j) => {
  let [x, y] = [j - 32 + 0.5, 32 - i - 0.5]
  const radius = getRadius(x, y);
  if (
    (mainElement === 'V' || mainElement === 'L')
    && radius > 32.05
  ) { return false }
  else return true
}