export interface SpinnerElement extends HTMLElement {
  classList: DOMTokenList;
}

export interface DocumentWithQuerySelector extends Document {
  querySelector(selector: string): SpinnerElement | null;
}

export interface BodyWithClassList extends HTMLBodyElement {
  classList: DOMTokenList;
}
