#import <Foundation/Foundation.h>
#import <Capacitor/Capacitor.h>

// Define the plugin using the CAP_PLUGIN Macro, and
// each method the plugin supports using the CAP_PLUGIN_METHOD macro.
CAP_PLUGIN(FirebaseAnalyticsPlugin, "FirebaseAnalytics",
        CAP_PLUGIN_METHOD(logEvent, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(setEnabled, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(setScreen, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(setUserProperty, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(setUserId, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(appInstanceId, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(resetAnalyticsData, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(setDefaultEventParameters, CAPPluginReturnPromise);
)
