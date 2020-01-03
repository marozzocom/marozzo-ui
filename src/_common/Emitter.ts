import EventEmitter from "eventemitter3"

class Emitter {
  private static instance: Emitter
  private emitter: EventEmitter<string | symbol>

  static getInstance() {
    if (!Emitter.instance) {
      Emitter.instance = new Emitter()
    }
    return Emitter.instance
  }

  constructor() {
    this.emitter = new EventEmitter()
  }

  get get() {
    return this.emitter
  }

  public emit = (event: string | symbol, ...args: any[]) => this.emitter.emit(event, args)
  public on = (event: string | symbol, action: EventEmitter.ListenerFn<any[]>) => this.emitter.on(event, action)
  public off = (event: string | symbol, action: EventEmitter.ListenerFn<any[]>) => this.emitter.off(event, action)
}

export const emitter = Emitter.getInstance()
