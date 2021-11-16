goog.provide('firebaseui.auth.widget.handler.completeSecondFactorResolution_');
goog.provide('firebaseui.auth.ui.page.SecondFactorResolution');


firebaseui.auth.widget.handler.completeSecondFactorResolution_ = function(
    app, container, email, link) {
  console.log('completeSecondFactorResolution_')
  firebaseui.auth.widget.handler.handleSecondFactorResolutionCallback(
      app, container, link, email, true);
};

firebaseui.auth.widget.handler.handleSecondFactorResolutionCallback = function(
    app, container, link, opt_email, opt_skipCodeCheck) {
  console.log('handleSecondFactorResolutionCallback');        
  var component = new firebaseui.auth.ui.page.Blank();
  component.render(container);
  // Set current UI component.
  app.setCurrentComponent(component);
}

// Register handler.
firebaseui.auth.widget.handler.register(
    firebaseui.auth.widget.HandlerName.SECOND_FACTOR_RESOLUTION,
    /** @type {!firebaseui.auth.widget.Handler} */
    (firebaseui.auth.widget.handler.completeSecondFactorResolution_));

// Register handler.
firebaseui.auth.widget.handler.register(
    firebaseui.auth.widget.HandlerName.SECOND_FACTOR_RESOLUTION_CALLBACK,
    /** @type {!firebaseui.auth.widget.Handler} */
    (firebaseui.auth.widget.handler.handleSecondFactorResolutionCallback));