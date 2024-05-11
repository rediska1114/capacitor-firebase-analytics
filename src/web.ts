import { WebPlugin } from '@capacitor/core';

import type { FirebaseAnalyticsPlugin } from './definitions';

export class FirebaseAnalyticsWeb
  extends WebPlugin
  implements FirebaseAnalyticsPlugin
{
  async logEvent() {}
  async setEnabled() {}
  async setScreen() {}
  async setUserProperty() {}
  async setUserId() {}
  async appInstanceId() {
    return { appInstanceId: '' };
  }
  async resetAnalyticsData() {}
  async setDefaultEventParameters() {}
}
