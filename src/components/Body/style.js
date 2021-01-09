import Styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

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
  flex-direction: column;
  flex: 1 1 0%;
  margin: 0 auto;
  width: 100%;
`;

export const BodyContentWrapper = Styled.div`
  height: 100%;
  left: 50%;
  overflow: hidden;
  position: absolute;
  transform: translateX(-50%)
  translateY(0) translateZ(0);
  padding: 0 24px;
  box-sizing: border-box;
  width: 100%;
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
`;

export const BodyContentTitle = Styled.div`
  max-height: 100%;
  overflow: auto;
  margin-top: 24px;
  width: 25%;
  padding: 0 8px 16px 8px;
  display: flex;
  flex-wrap: wrap;
  
`;

export const BodyContentMain = Styled.div`
  margin-top: 24px;
  box-sizing: border-box;
  float: left;
  padding: 0 8px 16px 8px;
  width: 75%;
`;

export const SideHeadingWrapper = Styled.div`
  background: #fff;
  border-radius: 2px;
  border-top: 1px solid #e0e0e0;
  box-shadow: 0 1px 1px 0 rgba(0,0,0,0.14),
  0 2px 1px -1px rgba(0,0,0,0.12),
  0 1px 3px 0 rgba(0,0,0,0.2);
  padding: 15px;
  height: 92px;
  width: 100%;
  box-sizing: border-box;
`;

export const SideHeadingContainer = Styled.div`
  align-items: center;
  flex-direction: row;
  padding: 0 0 7px;
  display: flex;
`;


export const SideHeadingIcon = Styled(FontAwesomeIcon)`
  margin: 5px 10px 0 0;
  padding: 0;
  font-size: 32px;
  color: #607D8B;
`;


export const SideHeadingText = Styled.div`
  overflow: hidden;
  width: 100%;
  text-align: left;
  font-size: 24px;
  line-height: 32px;
  margin: 5px;
  margin-bottom: 15px;
  margin-top: 10px;
`;

export const SectionWrapper = Styled.div`
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 1px 1px 0 rgba(0,0,0,0.14),
  0 2px 1px -1px rgba(0,0,0,0.12),
  0 1px 3px 0 rgba(0,0,0,0.2);
  // color: rgba(0,0,0,.54);
  margin-bottom: 12px;
  margin-left: auto;
  margin-right: auto;
  outline: none;
  position: relative;
  cursor: pointer;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  user-select: none;
`;

export const SectionHeader = Styled.div`
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  max-width: 1600px;
  width: 100%;
  padding: 0 16px 16px 24px;
  display: flex;
  margin-top: 8px;
  min-height: 48px;
  padding-top: initial;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
  height: initial;
`;

export const SectionHeaderTitle = Styled.h4`
  font-size: 18px;
  margin: 0;
  font-weight: 400;
`;

export const HeaderIconContainer = Styled.div`
  margin: 0;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  vertical-align: center;
  &:hover {
    background-color: rgba(0,0,0,0.1);
  }
`;

export const HeaderCarat = Styled(FontAwesomeIcon)`
  font-size: 18px;
  align-self: center;
`;

export const SectionContainer = Styled.div`
  padding: 0 24px 16px;
`;

export const SectionTagWrapper = Styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-sizing: border-box;
  float: left;
  padding: 0 8px 16px 0px;
  width: 33.33333%;
  text-align: left;
`;

export const SectionTagHeader = Styled.div`
  color: black;
  padding-bottom: 4px;
  text-overflow: elipsis;

`;

export const SectionTagContent = Styled.div`

`;

export const SectionFooterWrapper = Styled.div`
  color: rgba(0,0,0,0.38);
  font-size: 14px;
  padding: 0;
`;