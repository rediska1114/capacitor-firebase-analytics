import { registerPlugin } from '@capacitor/core';

import type { FirebaseAnalyticsPlugin } from './definitions';

const CapacitorFirebaseAnalytics = registerPlugin<FirebaseAnalyticsPlugin>(
  'FirebaseAnalytics',
  {
    web: () => import('./web').then(m => new m.FirebaseAnalyticsWeb()),
  },
);

export class FirebaseAnalytics {
  private analytics = CapacitorFirebaseAnalytics;

  logEvent(name: string, parameters?: object) {
    return this.analytics.logEvent({ name, parameters });
  }
  setEnabled(enabled: boolean) {
    return this.analytics.setEnabled({ enabled });
  }
  setScreen(screenName: string, screenClass?: string) {
    return this.analytics.setScreen({ screenName, screenClass });
  }
  setUserProperty(name: string, value: string) {
    return this.analytics.setUserProperty({ name, value });
  }
  setUserId(userId: string) {
    return this.analytics.setUserId({ userId });
  }
  setDefaultEventParameters(parameters: object) {
    return this.analytics.setDefaultEventParameters({ parameters });
  }
  appInstanceId = this.analytics.appInstanceId;
  resetAnalyticsData = this.analytics.resetAnalyticsData;
}

export * from './definitions';
