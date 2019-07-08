/* tslint:disable:no-any */
export function isNotNil(value: any): boolean {
  return (typeof (value) !== 'undefined') && value !== null;
}
