export class SnackbarBuilder {
  private message: string
  private title: string
  private sticky: string
  private type: string
  private icon: string
  private canClose: boolean
  private duration: number

  constructor(message: string) {
    this.message = message
  }
  setTitle(title: string) {
    this.title = title
    return this
  }
  setSticky(sticky: string) {
    this.sticky = sticky
    return this
  }
  private setType(type: string) {
    this.type = type
    return this
  }
  private setIcon(icon: string) {
    this.icon = icon
    return this
  }
  private setCanClose(canClose: boolean) {
    this.canClose = canClose
    return this
  }
  private setDuration(duration: number) {
    this.duration = duration
    return this
  }

  buildSuccess() {
    this.setType("sucess")
    this.setDuration(3000)
    this.setCanClose(false)
    return this.build()
  }
  buildInfo() {
    this.setType("information")
    this.setDuration(3000)
    this.setCanClose(false)
    return this.build()
  }
  buildWarning() {
    this.setType("warning")
    this.setCanClose(true)
    return this.build()
  }
  buildError() {
    this.setIcon('danger')
    this.setType("error")
    this.setCanClose(true)
    return this.build()
  }

  private build() {
    return ({
      message: this.message,
      title: this.title,
      sticky: this.sticky,
      type: this.type,
      icon: this.icon,
      canClose: this.canClose,
      duration: this.duration
    })
  }

}
