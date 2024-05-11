export interface LogEventOptions {
  name: string;
  parameters?: object;
}

export interface SetEnabledOptions {
  enabled: boolean;
}

export interface SetScreenNameOptions {
  screenName: string;
  screenClass?: string;
}

export interface SetUserPropertyOptions {
  name: string;
  value: string;
}

export interface SetUserIdOptions {
  userId: string;
}

export interface SetDefaultEventParametersOptions {
  parameters: object;
}

export interface AppInstanceIdResult {
  appInstanceId: string;
}

export interface FirebaseAnalyticsPlugin {
  logEvent(options: LogEventOptions): Promise<void>;
  setEnabled(options: SetEnabledOptions): Promise<void>;
  setScreen(options: SetScreenNameOptions): Promise<void>;
  setUserProperty(options: SetUserPropertyOptions): Promise<void>;
  setUserId(options: SetUserIdOptions): Promise<void>;
  appInstanceId(): Promise<AppInstanceIdResult>;
  resetAnalyticsData(): Promise<void>;
  setDefaultEventParameters(
    options: SetDefaultEventParametersOptions,
  ): Promise<void>;
}
