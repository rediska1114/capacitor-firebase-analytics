import Capacitor
import Foundation

import FirebaseAnalytics
import FirebaseCore

@objc(CapacitorFirebaseAnalytics)
public class CapacitorFirebaseAnalytics: CAPPlugin {
  override public func load() {
    if FirebaseApp.app() == nil {
      FirebaseApp.configure()
    }
  }

  @objc func logEvent(_ call: CAPPluginCall) {
    guard let name = call.getString("name") else {
      return call.reject("missing name option")
    }
    guard let parameters = call.getObject("parameters") else {
      return call.reject("missing parameters option")
    }

    DispatchQueue.main.async {
      Analytics.logEvent(name, parameters: parameters)
      call.resolve()
    }
  }

    @objc func setEnabled(_ call: CAPPluginCall) {
    guard let enabled = call.getBool("enabled") else {
      return call.reject("missing enabled option")
    }

    DispatchQueue.main.async {
      Analytics.setAnalyticsCollectionEnabled(enabled)
      call.resolve()
    }
  }

  @objc func setScreen(_ call: CAPPluginCall) {
    guard let screenName = call.getString("screenName") else {
      return call.reject("missing screenName option")
    }
    let screenClass = call.getString("screenClass")

    DispatchQueue.main.async {
      Analytics.logEvent(AnalyticsEventScreenView,
                   parameters: [AnalyticsParameterScreenName: screenName,
                               AnalyticsParameterScreenClass: screenClass as Any])
      call.resolve()
    }
  }

  @objc func setUserProperty(_ call: CAPPluginCall) {
    guard let name = call.getString("name") else {
      return call.reject("missing name option")
    }
    guard let value = call.getString("value") else {
      return call.reject("missing value option")
    }

    DispatchQueue.main.async {
      Analytics.setUserProperty(value, forName: name)
      call.resolve()
    }
  }

  @objc func setUserId(_ call: CAPPluginCall) {
    guard let userId = call.getString("userId") else {
      return call.reject("missing userId option")
    }

    DispatchQueue.main.async {
      Analytics.setUserID(userId)
      call.resolve()
    }
  }

  @objc func appInstanceId(_ call: CAPPluginCall) {
    DispatchQueue.main.async {
      let appInstanceId = Analytics.appInstanceID()
        call.resolve(["appInstanceId": appInstanceId as Any])
    }
  }

  @objc func resetAnalyticsData(_ call: CAPPluginCall) {
    DispatchQueue.main.async {
      Analytics.resetAnalyticsData()
      call.resolve()
    }
  }

  @objc func setDefaultEventParameters(_ call: CAPPluginCall) {
    guard let parameters = call.getObject("parameters") else {
      return call.reject("missing parameters option")
    }

    DispatchQueue.main.async {
      Analytics.setDefaultEventParameters(parameters)
      call.resolve()
    }
  }
}
