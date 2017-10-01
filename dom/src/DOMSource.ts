import {Stream, MemoryStream} from 'xstream';
import {PreventDefaultOpt} from './fromEvent';
import {MainDOMSource} from './MainDOMSource';
import {DocumentDOMSource} from './DocumentDOMSource';
import {BodyDOMSource} from './BodyDOMSource';
import {MockedDOMSource} from './mockDOMSource';
export interface EventsFnOptions {
  useCapture?: boolean;
  preventDefault?: PreventDefaultOpt;
}

export type DOMSource =
  | MainDOMSource
  | DocumentDOMSource
  | BodyDOMSource
  | MockedDOMSource;

export interface BaseDOMSource {
  select(selector: string): DOMSource;
  elements(): MemoryStream<Document | HTMLBodyElement | Array<Element>>;
  events<K extends keyof HTMLElementEventMap>(
    eventType: K,
    options?: EventsFnOptions,
  ): Stream<HTMLElementEventMap[K]>;
  events(eventType: string, options?: EventsFnOptions): Stream<Event>;
}
