import Styled from 'styled-components';

export const PageTitle = Styled.h3`
  border-color: #899bca;
  font-size: 24px;
  font-weight: 400;
  color: ${props => props.theme.text.color.default};
  margin-bottom: 24px;
  margin-top: 20px;
`;

export const InnerPage = Styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  flex-grow: 1;
  height: 100%;
  background-color: ${props => props.theme.bg.default};
  box-shadow: inset 9px 0 10px -9px rgba(0,0,0,.08);
  padding-left: 0px;
  min-width: 100%;
  min-height: 100%;
  overflow: hidden;
  padding-top: 65px;
`;

export const Panel = Styled.div`
  background-color: ${props => props.theme.bg.panel};
  border-radius: 10px;
  margin-bottom: 24px;
  padding: 25px;
  color: ${props => props.theme.text.color.panel};
  box-shadow: 0 1px 2px rgba(0,0,0,.15), 0 -1px 0 rgba(0,0,0,.02);
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const PanelTitle = Styled.h4`
  padding: 0 0 21px;
  font-size: 24px;
  color: ${props => props.theme.text.color.panel};
  font-weight: 500;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  margin-bottom: 5px;
  margin-top: 0px;
`;

export const PanelSubtitle = Styled.h4`
  font-size: 14px;
  color: ${props => props.theme.text.color.panel};
  font-weight: 300;
  margin-top: 5px;
  margin-bottom: 0px;
`

export const BodyContent = Styled.div`
  display: flex;
  height: 100%;
`;