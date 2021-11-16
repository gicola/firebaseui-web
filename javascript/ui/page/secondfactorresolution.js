goog.provide('firebaseui.auth.ui.page.SecondFactorResolution');

goog.require('firebaseui.auth.soy2.page');
goog.require('firebaseui.auth.ui.element.form');
goog.require('firebaseui.auth.ui.element.newPassword');
goog.require('firebaseui.auth.ui.page.Base');
goog.requireType('goog.dom.DomHelper');




firebaseui.auth.ui.page.SecondFactorResolution =
    class extends firebaseui.auth.ui.page.Base {
  /**
   * @param {string} email The email to prefill.
   * @param {function()} onSubmitClick Callback to invoke when the submit button
   *     is clicked.
   * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
   */
  constructor(email, onSubmitClick, opt_domHelper) {
    super(
        firebaseui.auth.soy2.page.secondFactorResolution, {email: email}, opt_domHelper,
        'secondFactorResolution');
    this.onSubmitClick_ = onSubmitClick;
  }

  /** @override */
  enterDocument() {
    this.initNewPasswordElement();
    this.initFormElement(this.onSubmitClick_);
    this.submitOnEnter(this.getNewPasswordElement(), this.onSubmitClick_);
    this.getNewPasswordElement().focus();
    super.enterDocument();
  }

  /** @override */
  disposeInternal() {
    this.onSubmitClick_ = null;
    super.disposeInternal();
  }
};


goog.mixin(
    firebaseui.auth.ui.page.SecondFactorResolution.prototype,
    /** @lends {firebaseui.auth.ui.page.SecondFactorResolution.prototype} */
    {
      // For new password.
      getNewPasswordElement:
          firebaseui.auth.ui.element.newPassword.getNewPasswordElement,
      getNewPasswordErrorElement:
          firebaseui.auth.ui.element.newPassword.getNewPasswordErrorElement,
      getPasswordToggleElement:
          firebaseui.auth.ui.element.newPassword.getPasswordToggleElement,
      initNewPasswordElement:
          firebaseui.auth.ui.element.newPassword.initNewPasswordElement,
      checkAndGetNewPassword:
          firebaseui.auth.ui.element.newPassword.checkAndGetNewPassword,

      // For form.
      getSubmitElement:
          firebaseui.auth.ui.element.form.getSubmitElement,
      getSecondaryLinkElement:
          firebaseui.auth.ui.element.form.getSecondaryLinkElement,
      initFormElement:
          firebaseui.auth.ui.element.form.initFormElement
    });
