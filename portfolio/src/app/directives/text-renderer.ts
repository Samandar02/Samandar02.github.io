import { Directive, ElementRef, HostBinding, inject, input, Renderer2, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Directive({
  selector: '[textRenderer]'
})
export class TextRenderer {
  el = inject(ElementRef)
  renderer = inject(Renderer2)
  sanitizer = inject(DomSanitizer)
  constructor() { }
  textRenderer = input.required<string>()
  @HostBinding('innerHTML')
  innerHtml:SafeHtml = this.sanitizer.bypassSecurityTrustHtml('')

  ngOnChanges(changes:SimpleChanges) {
     if (changes['textRenderer']) {
      const renderedHtml = this.renderText(this.textRenderer());
      this.innerHtml = this.sanitizer.bypassSecurityTrustHtml(renderedHtml);
    }
  }
  private renderText(text: string): string {
    if (!text) return '';

    text = text
    .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
    .replace(/_(.*?)_/g, '<i>$1</i>')
    .replace(/\+(.*?)/g, '<br/>∘ $1')
    .replace('<br/>','')
    
    // Add more patterns as needed
    return text;
  }
}
