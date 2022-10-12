import styled from 'styled-components';

export const Item = styled.li`
padding: 5px;
max-width: 350px;
`;

export const Name = styled.span`
font-size: 16px;
`;

export const Link = styled.a`
position: relative;
margin-right: 15px;
padding: 0 10px 0;
text-decoration: none;
color: inherit;

/* &::after {
      content: '';
      position: absolute;
      bottom: -1px;
      right: 0;
      width: 100%;
      height: 4px;
      z-index: 1;
      background-color: green;
      border-radius: 2px;
    } */


&:hover{
  /* color: white;  */
  /* background-color: green; */
}
`;

// export const Icon = styled.svg`
// position: absolute;
// top: 4px;
// right: -10px;
// width: 20px;
// height: 20px;
// fill: green;
// `

// export const Button = styled.button`
// display: inline-block;

// padding: 4px 8px;
// font-size: 14px;
// color: #000080;

// border: 1px solid #c0c0c0;
// border-radius: 4px;
// box-shadow: 0px 2px 4px #808080;
// cursor: pointer;
// outline: none;

// &:hover {
// color: #ffffff;
// background-color: #ff0080;
// }
// `;
