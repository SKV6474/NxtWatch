import React from "react";
import { useTranslation } from "react-i18next";

import { Themes } from "../../../../Nxtwatch/stores";
import {
  FAILURE_VIEW_DARK,
  FAILURE_VIEW_LIGHT,
} from "../../../../Nxtwatch/constants/Images";

import {
  FailureContainer,
  FailureContent,
  FailureContentDescription,
  FailureContentTitle,
  FailureImg,
  RetryBtn,
} from "./styledComponets";

const FailureUi = () => {
  const { t } = useTranslation();
  return (
    <FailureContainer>
      {Themes.Theme === "light" ? (
        <FailureImg src={FAILURE_VIEW_LIGHT} alt="Failure View"></FailureImg>
      ) : (
        <FailureImg src={FAILURE_VIEW_DARK} alt="Failure view"></FailureImg>
      )}
      <FailureContent>
        <FailureContentTitle>
          {t("Oops! Something Went Wrong")}
        </FailureContentTitle>
        <FailureContentDescription>
          {t(
            "We are having some trouble to complete your request. Please try again"
          )}
        </FailureContentDescription>
        <div>
          <RetryBtn onClick={() => window.location.reload()}>
            {t("Retry")}
          </RetryBtn>
        </div>
      </FailureContent>
    </FailureContainer>
  );
};

export default FailureUi;
