goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.async.Throttle");
  goog.module.declareLegacyNamespace();
  const Disposable = goog.require("goog.Disposable");
  const Timer = goog.require("goog.Timer");
  class Throttle extends Disposable {
    constructor(listener, interval, handler) {
      super();
      this.listener_ = handler != null ? listener.bind(handler) : listener;
      this.interval_ = interval;
      this.args_ = null;
      this.shouldFire_ = false;
      this.pauseCount_ = 0;
      this.timer_ = null;
    }
    fire(var_args) {
      this.args_ = arguments;
      if (!this.timer_ && !this.pauseCount_) {
        this.doAction_();
      } else {
        this.shouldFire_ = true;
      }
    }
    stop() {
      if (this.timer_) {
        Timer.clear(this.timer_);
        this.timer_ = null;
        this.shouldFire_ = false;
        this.args_ = null;
      }
    }
    pause() {
      this.pauseCount_++;
    }
    resume() {
      this.pauseCount_--;
      if (!this.pauseCount_ && this.shouldFire_ && !this.timer_) {
        this.shouldFire_ = false;
        this.doAction_();
      }
    }
    disposeInternal() {
      super.disposeInternal();
      this.stop();
    }
    onTimer_() {
      this.timer_ = null;
      if (this.shouldFire_ && !this.pauseCount_) {
        this.shouldFire_ = false;
        this.doAction_();
      }
    }
    doAction_() {
      this.timer_ = Timer.callOnce(() => {
        return this.onTimer_();
      }, this.interval_);
      const args = this.args_;
      this.args_ = null;
      this.listener_.apply(null, args);
    }
  }
  exports = Throttle;
  return exports;
});

//# sourceMappingURL=goog.async.throttle.js.map
