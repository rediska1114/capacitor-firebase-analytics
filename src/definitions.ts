declare global {
  interface PluginRegistry {
    CapacitorFirebaseAnalytics: CapacitorFirebaseAnalyticsPlugin;
  }
}

export interface ILogEventOptions {
  name: string;
  parameters?: object;
}

export interface ISetEnabledOptions {
  enabled: boolean;
}

export interface ISetScreenNameOptions {
  screenName: string;
  screenClass?: string;
}

export interface ISetUserPropertyOptions {
  name: string;
  value: string;
}

export interface ISetUserIdOptions {
  userId: string;
}

export interface ISetDefaultEventParametersOptions {
  parameters: object
}

export interface AppInstanceIdResult {
  appInstanceId: string
}

export interface CapacitorFirebaseAnalyticsPlugin {
  logEvent(options: ILogEventOptions): Promise<void>;
  setEnabled(options: ISetEnabledOptions): Promise<void>;
  setScreen(options: ISetScreenNameOptions): Promise<void>;
  setUserProperty(options: ISetUserPropertyOptions): Promise<void>;
  setUserId(options: ISetUserIdOptions): Promise<void>;
  appInstanceId(): Promise<AppInstanceIdResult>;
  resetAnalyticsData(): Promise<void>;
  setDefaultEventParameters(options: ISetDefaultEventParametersOptions): Promise<void>;
}
