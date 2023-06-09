import React from "react";
import { useTranslation } from "react-i18next";

import {
  NXT_WATCH_NOT_FOUND_DARK_THEME,
  NXT_WATCH_NOT_FOUND_LIGHT_THEME,
} from "../../../Nxtwatch/constants/Images";

import WithHeader from "../../../Nxtwatch/hocs/withHeaderHoc";
import WithSideBar from "../../../Nxtwatch/hocs/withSideBarHoc";
import { Themes } from "../../../Nxtwatch/stores";

import { SideContentContainer } from "../../../Nxtwatch/styledComponent";
import {
  NotFoundContainer,
  NotFoundContent,
  NotFoundContentDescription,
  NotFoundContentTitle,
  NotFoundImg,
} from "./styledComponet";

const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <SideContentContainer>
      <NotFoundContainer>
        {Themes.Theme === "light" ? (
          <NotFoundImg
            src={NXT_WATCH_NOT_FOUND_LIGHT_THEME}
            alt="Not Found"
          ></NotFoundImg>
        ) : (
          <NotFoundImg
            src={NXT_WATCH_NOT_FOUND_DARK_THEME}
            alt="Not Found"
          ></NotFoundImg>
        )}
        <NotFoundContent>
          <NotFoundContentTitle>{t("Page Not Found")}</NotFoundContentTitle>
          <NotFoundContentDescription>
            {t("We are sorry, the page you requested could not be found")}
          </NotFoundContentDescription>
        </NotFoundContent>
      </NotFoundContainer>
    </SideContentContainer>
  );
};
export default WithHeader(WithSideBar(NotFoundPage));
