package com.rediska1114.plugins.firebase.capacitorfirebaseanalytics

import android.os.Bundle
import com.getcapacitor.JSObject
import com.getcapacitor.Plugin
import com.getcapacitor.PluginCall
import com.getcapacitor.PluginMethod
import com.getcapacitor.annotation.CapacitorPlugin
import com.google.firebase.analytics.FirebaseAnalytics
import com.google.firebase.analytics.ktx.analytics
import com.google.firebase.ktx.Firebase

@CapacitorPlugin(name = "FirebaseAnalytics")
class FirebaseAnalyticsPlugin : Plugin() {

  private lateinit var firebaseAnalytics: FirebaseAnalytics

  override fun load() {
    firebaseAnalytics = Firebase.analytics
  }

  @PluginMethod
  fun logEvent(call: PluginCall) {
    val name = call.getString("name")
    if (name == null) {
      call.reject("missing name option")
      return
    }

    val parameters = call.getObject("parameters")

    firebaseAnalytics.logEvent(name, parameters?.toBundle())
    call.resolve()
  }

  @PluginMethod
  fun setEnabled(call: PluginCall) {
    val enabled = call.getBoolean("enabled")
    if (enabled == null) {
      call.reject("missing enabled option")
      return
    }

    firebaseAnalytics.setAnalyticsCollectionEnabled(enabled)
    call.resolve()
  }

  @PluginMethod
  fun setScreen(call: PluginCall) {
    val screenName = call.getString("screenName")
    if (screenName == null) {
      call.reject("missing screenName option")
      return
    }
    val screenClass = call.getString("screenClass")

    firebaseAnalytics.logEvent(
        FirebaseAnalytics.Event.SCREEN_VIEW,
        Bundle().apply {
          putString(FirebaseAnalytics.Param.SCREEN_NAME, screenName)
          putString(FirebaseAnalytics.Param.SCREEN_CLASS, screenClass)
        })
    call.resolve()
  }

  @PluginMethod
  fun setUserProperty(call: PluginCall) {
    val name = call.getString("name")
    val value = call.getString("value")

    if (name == null || value == null) {
      call.reject("missing name or value option")
      return
    }

    firebaseAnalytics.setUserProperty(name, value)
    call.resolve()
  }

  @PluginMethod
  fun setUserId(call: PluginCall) {
    val userId = call.getString("userId")

    if (userId == null) {
      call.reject("missing userId option")
      return
    }

    firebaseAnalytics.setUserId(userId)
    call.resolve()
  }

  @PluginMethod
  fun appInstanceId(call: PluginCall) {
    val appInstanceId = firebaseAnalytics.appInstanceId
    val data = JSObject().apply {
      put("appInstanceId",appInstanceId )
    }
    call.resolve(data)
  }

  @PluginMethod
  fun resetAnalyticsData(call: PluginCall) {
    firebaseAnalytics.resetAnalyticsData()
    call.resolve()
  }

  @PluginMethod
  fun setDefaultEventParameters(call: PluginCall) {
    val parameters = call.getObject("parameters", JSObject())

    if (parameters == null) {
      call.reject("missing parameters option")
      return
    }

    firebaseAnalytics.setDefaultEventParameters(parameters.toBundle())
    call.resolve()
  }
}

fun JSObject.toBundle(): Bundle {
  val bundle = Bundle()
  this.keys().forEach { key ->
    when (val value = this.get(key)) {
      is String -> bundle.putString(key, value)
      is Int -> bundle.putInt(key, value)
      is Boolean -> bundle.putBoolean(key, value)
      is Double -> bundle.putDouble(key, value)
      is Long -> bundle.putLong(key, value)
      else -> bundle.putString(key, value.toString())
    }
  }
  return bundle
}