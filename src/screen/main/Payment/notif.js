import PushNotification from 'react-native-push-notification';

class Notifications {
  constructor() {
    // [1] CONFIGURE
    // Must be outside of any component LifeCycle (such as `componentDidMount`).
    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function (token) {
        console.log('TOKEN:', token);
      },

      // // (required) Called when a remote is received or opened, or local notification is opened
      // onNotification: function (notification) {
      //   console.log('NOTIFICATION:', notification);

      //   // process the notification

      //   // (required) Called when a remote is received or opened, or local notification is opened
      //   notification.finish(PushNotificationIOS.FetchResult.NoData);
      // },

      // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
      onAction: function (notification) {
        console.log('ACTION:', notification.action);
        console.log('NOTIFICATION:', notification);

        // process the action
      },

      // Should the initial notification be popped automatically
      // default: true
      popInitialNotification: true,

      /**
       * (optional) default: true
       * - Specified if permissions (ios) and token (android and ios) will requested or not,
       * - if not, you must call PushNotificationsHandler.requestPermissions() later
       * - if you are not using remote notification or do not have Firebase installed, use this:
       *     requestPermissions: Platform.OS === 'ios'
       */
      requestPermissions: false,
    });

    // [2] CREATE CHANNEL
    PushNotification.createChannel(
      {
        channelId: 'reminders', // (required)
        channelName: 'Reminder Notification', // (required)
        channelDescription: 'Reminders for payment', // (optional) default: undefined.
      },
      created => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
    );
  }

  // [3] CREATE LOCAL NOTIF
  reminderNotification() {
    PushNotification.localNotification({
      channelId: 'reminders',
      title: 'Payment',
      message: 'booking transaction in progress',
    });
  }
}

export default new Notifications();
